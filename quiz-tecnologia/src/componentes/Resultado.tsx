// Tela de resultado final do quiz com acertos, erros e percentual
import { motion } from "framer-motion";
import { ResultadoQuiz } from "@/tipos/pergunta";
import Botao from "./Botao";

interface ResultadoProps {
  resultado: ResultadoQuiz;
  nomeTecnologia: string;
  aoRefazer: () => void;
  aoVoltar: () => void;
}

const Resultado = ({ resultado, nomeTecnologia, aoRefazer, aoVoltar }: ResultadoProps) => {
  const { acertos, erros, total, percentual } = resultado;
  const bomDesempenho = percentual >= 70;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="mb-6 text-6xl">{bomDesempenho ? "🎉" : "💪"}</div>

      <h2 className="mb-2 text-2xl font-bold text-foreground sm:text-3xl">
        {bomDesempenho ? "Parabéns!" : "Continue praticando!"}
      </h2>
      <p className="mb-8 text-muted-foreground">
        Seu resultado em <span className="font-semibold text-primary">{nomeTecnologia}</span>
      </p>

      {/* Percentual circular */}
      <div className="mx-auto mb-8 flex items-center justify-center">
        <div className="relative flex h-36 w-36 items-center justify-center rounded-full bg-gradient-card glow-border shadow-neon">
          <span className={`text-4xl font-bold ${bomDesempenho ? "text-gradient-success" : "text-gradient-primary"}`}>
            {percentual}%
          </span>
        </div>
      </div>

      {/* Estatísticas */}
      <div className="mb-8 grid grid-cols-3 gap-4">
        {[
          { label: "Acertos", valor: acertos, cor: "text-accent" },
          { label: "Erros", valor: erros, cor: "text-destructive" },
          { label: "Total", valor: total, cor: "text-secondary" },
        ].map((item) => (
          <div key={item.label} className="rounded-xl bg-gradient-card p-4 glow-border">
            <div className={`text-2xl font-bold ${item.cor}`}>{item.valor}</div>
            <div className="text-sm text-muted-foreground">{item.label}</div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
        <Botao variante="primario" onClick={aoRefazer}>🔄 Refazer Quiz</Botao>
        <Botao variante="fantasma" onClick={aoVoltar}>← Escolher Tecnologia</Botao>
      </div>
    </motion.div>
  );
};

export default Resultado;
