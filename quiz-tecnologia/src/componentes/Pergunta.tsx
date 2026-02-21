// Exibe uma única pergunta com suas alternativas selecionáveis
import { motion, AnimatePresence } from "framer-motion";
import { Pergunta as PerguntaTipo } from "@/tipos/pergunta";
import Botao from "./Botao";

interface PerguntaProps {
  pergunta: PerguntaTipo;
  indiceSelecionado: number | null;
  aoSelecionar: (indice: number) => void;
  numeroPergunta: number;
}

const Pergunta = ({ pergunta, indiceSelecionado, aoSelecionar, numeroPergunta }: PerguntaProps) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={numeroPergunta}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -40 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="mb-6 text-lg font-semibold leading-relaxed text-foreground sm:text-xl">
          {pergunta.enunciado}
        </h2>
        <div className="flex flex-col gap-3">
          {pergunta.alternativas.map((alt, i) => (
            <Botao
              key={i}
              variante="alternativa"
              selecionado={indiceSelecionado === i}
              onClick={() => aoSelecionar(i)}
              className="w-full text-left"
            >
              <span className="mr-3 inline-block rounded bg-muted px-2 py-0.5 text-xs font-mono text-muted-foreground">
                {String.fromCharCode(65 + i)}
              </span>
              {alt}
            </Botao>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Pergunta;
