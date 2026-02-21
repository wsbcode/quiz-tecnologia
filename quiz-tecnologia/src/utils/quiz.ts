// Utilitários para o quiz: embaralhamento de arrays
import { Pergunta } from "@/tipos/pergunta";

/** Embaralha um array usando Fisher-Yates */
export function embaralhar<T>(array: T[]): T[] {
  const copia = [...array];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

/** Embaralha perguntas e suas alternativas, ajustando o índice correto */
export function embaralharPerguntas(perguntas: Pergunta[]): Pergunta[] {
  return embaralhar(perguntas).map((p) => {
    const respostaTexto = p.alternativas[p.respostaCorreta];
    const novasAlternativas = embaralhar(p.alternativas);
    return {
      ...p,
      alternativas: novasAlternativas,
      respostaCorreta: novasAlternativas.indexOf(respostaTexto),
    };
  });
}
