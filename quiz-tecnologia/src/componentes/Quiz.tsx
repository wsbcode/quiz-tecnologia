// Componente principal do quiz: gerencia estado das perguntas e respostas
import { useState, useEffect, useCallback } from "react";
import { Pergunta as PerguntaTipo, ResultadoQuiz, Tecnologia } from "@/tipos/pergunta";
import { perguntasPorTecnologia } from "@/dados/perguntas";
import { embaralharPerguntas } from "@/utils/quiz";
import BarraProgresso from "./BarraProgresso";
import PerguntaComponente from "./Pergunta";
import Resultado from "./Resultado";
import Botao from "./Botao";

interface QuizProps {
  tecnologia: Tecnologia;
  aoVoltar: () => void;
}

const Quiz = ({ tecnologia, aoVoltar }: QuizProps) => {
  const [perguntas, setPerguntas] = useState<PerguntaTipo[]>([]);
  const [indiceAtual, setIndiceAtual] = useState(0);
  const [selecionado, setSelecionado] = useState<number | null>(null);
  const [respostas, setRespostas] = useState<number[]>([]);
  const [finalizado, setFinalizado] = useState(false);

  const iniciarQuiz = useCallback(() => {
    const base = perguntasPorTecnologia[tecnologia.id] ?? [];
    setPerguntas(embaralharPerguntas(base));
    setIndiceAtual(0);
    setSelecionado(null);
    setRespostas([]);
    setFinalizado(false);
  }, [tecnologia.id]);

  useEffect(() => {
    iniciarQuiz();
  }, [iniciarQuiz]);

  const avancar = () => {
    if (selecionado === null) return;
    const novasRespostas = [...respostas, selecionado];
    setRespostas(novasRespostas);

    if (indiceAtual + 1 >= perguntas.length) {
      setFinalizado(true);
    } else {
      setIndiceAtual((prev) => prev + 1);
      setSelecionado(null);
    }
  };

  if (perguntas.length === 0) return null;

  if (finalizado) {
    const acertos = respostas.filter((r, i) => r === perguntas[i].respostaCorreta).length;
    const resultado: ResultadoQuiz = {
      acertos,
      erros: perguntas.length - acertos,
      total: perguntas.length,
      percentual: Math.round((acertos / perguntas.length) * 100),
    };
    return <Resultado resultado={resultado} nomeTecnologia={tecnologia.nome} aoRefazer={iniciarQuiz} aoVoltar={aoVoltar} />;
  }

  return (
    <div>
      <div className="mb-4 flex items-center gap-3">
        <span className="text-2xl">{tecnologia.icone}</span>
        <h1 className="text-xl font-bold text-foreground">{tecnologia.nome}</h1>
      </div>

      <BarraProgresso atual={indiceAtual} total={perguntas.length} />

      <div className="rounded-2xl bg-gradient-card p-6 glow-border shadow-card sm:p-8">
        <PerguntaComponente
          pergunta={perguntas[indiceAtual]}
          indiceSelecionado={selecionado}
          aoSelecionar={setSelecionado}
          numeroPergunta={indiceAtual}
        />

        <div className="mt-6 flex justify-end">
          <Botao
            variante="primario"
            onClick={avancar}
            desabilitado={selecionado === null}
          >
            {indiceAtual + 1 >= perguntas.length ? "Finalizar" : "Próxima →"}
          </Botao>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
