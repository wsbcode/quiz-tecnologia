// Barra de progresso visual do quiz
import { motion } from "framer-motion";

interface BarraProgressoProps {
  atual: number;
  total: number;
}

const BarraProgresso = ({ atual, total }: BarraProgressoProps) => {
  const porcentagem = ((atual + 1) / total) * 100;

  return (
    <div className="mb-6">
      <div className="mb-2 flex justify-between text-sm text-muted-foreground">
        <span>Pergunta {atual + 1} de {total}</span>
        <span>{Math.round(porcentagem)}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
        <motion.div
          className="h-full rounded-full bg-gradient-primary"
          initial={{ width: 0 }}
          animate={{ width: `${porcentagem}%` }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export default BarraProgresso;
