import { useState } from "react";
import { Tecnologia } from "@/tipos/pergunta";
import ContainerPrincipal from "@/componentes/ContainerPrincipal";
import TelaInicial from "@/componentes/TelaInicial";
import Quiz from "@/componentes/Quiz";

const App = () => {
   const [tecnologiaSelecionada, setTecnologiaSelecionada] = useState<Tecnologia | null>(null);

   return (
      <ContainerPrincipal>
         {tecnologiaSelecionada ? (
            <Quiz
               tecnologia={tecnologiaSelecionada}
               aoVoltar={() => setTecnologiaSelecionada(null)}
            />
         ) : (
            <TelaInicial aoEscolher={setTecnologiaSelecionada} />
         )}
      </ContainerPrincipal>
   );
};

export default App;
