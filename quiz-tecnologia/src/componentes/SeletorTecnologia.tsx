// Grade de seleção de tecnologias disponíveis para o quiz
import { motion } from "framer-motion";
import { Tecnologia } from "@/tipos/pergunta";
import { tecnologias } from "@/dados/perguntas";

interface SeletorTecnologiaProps {
  aoSelecionar: (tech: Tecnologia) => void;
}

const SeletorTecnologia = ({ aoSelecionar }: SeletorTecnologiaProps) => {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
      {tecnologias.map((tech, i) => (
        <motion.button
          key={tech.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.08 }}
          whileHover={{ scale: 1.05, y: -4 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => aoSelecionar(tech)}
          className={`
            flex flex-col items-center gap-3 rounded-xl bg-gradient-card p-6 
            glow-border shadow-card transition-all duration-300 cursor-pointer
            hover:shadow-neon hover:border-primary/50
          `}
        >
          <span className="text-4xl">{tech.icone}</span>
          <span className="font-semibold text-foreground">{tech.nome}</span>
        </motion.button>
      ))}
    </div>
  );
};

export default SeletorTecnologia;
