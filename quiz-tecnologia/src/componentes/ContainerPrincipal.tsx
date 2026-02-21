// Container principal que centraliza e limita o conteúdo na tela
import { ReactNode } from "react";

interface ContainerPrincipalProps {
  children: ReactNode;
}

const ContainerPrincipal = ({ children }: ContainerPrincipalProps) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="w-full max-w-2xl">{children}</div>
    </div>
  );
};

export default ContainerPrincipal;
