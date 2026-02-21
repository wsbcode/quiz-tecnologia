// Tipos principais do sistema de quiz

export interface Pergunta {
  enunciado: string;
  alternativas: string[];
  respostaCorreta: number;
}

export interface Tecnologia {
  id: string;
  nome: string;
  icone: string;
  cor: string;
}

export interface ResultadoQuiz {
  acertos: number;
  erros: number;
  total: number;
  percentual: number;
}
