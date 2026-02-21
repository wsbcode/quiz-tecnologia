// Botão reutilizável com variantes temáticas para o quiz
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface BotaoProps {
  children: ReactNode;
  onClick?: () => void;
  variante?: "primario" | "secundario" | "fantasma" | "alternativa";
  desabilitado?: boolean;
  selecionado?: boolean;
  className?: string;
}

const estilos: Record<string, string> = {
  primario: "bg-gradient-primary text-primary-foreground shadow-neon hover:scale-105",
  secundario: "bg-gradient-success text-accent-foreground shadow-neon-blue hover:scale-105",
  fantasma: "bg-muted text-foreground hover:bg-muted/80",
  alternativa: "bg-card glow-border text-foreground hover:border-primary/60 hover:shadow-neon",
};

const Botao = ({ children, onClick, variante = "primario", desabilitado = false, selecionado = false, className = "" }: BotaoProps) => {
  return (
    <motion.button
      whileHover={!desabilitado ? { scale: 1.03 } : {}}
      whileTap={!desabilitado ? { scale: 0.97 } : {}}
      onClick={desabilitado ? undefined : onClick}
      className={`
        rounded-lg px-6 py-3 font-semibold transition-all duration-300 cursor-pointer
        ${estilos[variante]}
        ${selecionado ? "ring-2 ring-primary shadow-neon border-primary" : ""}
        ${desabilitado ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
      `}
    >
      {children}
    </motion.button>
  );
};

export default Botao;
