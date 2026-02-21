// Tela inicial: título, subtítulo e seletor de tecnologia
import { motion } from "framer-motion";
import { Tecnologia } from "@/tipos/pergunta";
import SeletorTecnologia from "./SeletorTecnologia";

interface TelaInicialProps {
  aoEscolher: (tech: Tecnologia) => void;
}

const TelaInicial = ({ aoEscolher }: TelaInicialProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-10 text-center">
        <motion.div
          className="mb-4 text-5xl"
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          🧠
        </motion.div>
        <h1 className="mb-3 text-3xl font-bold sm:text-4xl">
          <span className="text-gradient-primary">Tech Quiz</span>
        </h1>
        <p className="text-muted-foreground">
          Teste seus conhecimentos em tecnologia. Escolha um tema e comece!
        </p>
      </div>

      <SeletorTecnologia aoSelecionar={aoEscolher} />
    </motion.div>
  );
};

export default TelaInicial;
