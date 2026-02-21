import { Pergunta, Tecnologia } from "@/tipos/pergunta";

export const tecnologias: Tecnologia[] = [
  { id: "javascript", nome: "JavaScript", icone: "⚡", cor: "from-yellow-400 to-amber-500" },
  { id: "react", nome: "React", icone: "⚛️", cor: "from-cyan-400 to-blue-500" },
  { id: "html", nome: "HTML", icone: "🌐", cor: "from-orange-400 to-red-500" },
  { id: "css", nome: "CSS", icone: "🎨", cor: "from-blue-400 to-indigo-500" },
  { id: "typescript", nome: "TypeScript", icone: "🔷", cor: "from-blue-500 to-blue-700" },
];

const perguntasJavaScript: Pergunta[] = [
  { enunciado: "Qual palavra-chave é usada para declarar uma variável com escopo de bloco?", alternativas: ["var", "let", "const", "define"], respostaCorreta: 1 },
  { enunciado: "Qual método converte um JSON em objeto JavaScript?", alternativas: ["JSON.stringify()", "JSON.parse()", "JSON.convert()", "JSON.toObject()"], respostaCorreta: 1 },
  { enunciado: "O que o operador '===' verifica?", alternativas: ["Apenas valor", "Apenas tipo", "Valor e tipo", "Referência"], respostaCorreta: 2 },
  { enunciado: "Qual método adiciona um elemento ao final de um array?", alternativas: ["unshift()", "push()", "pop()", "shift()"], respostaCorreta: 1 },
  { enunciado: "O que é uma closure em JavaScript?", alternativas: ["Um tipo de loop", "Uma função que acessa variáveis do escopo externo", "Um método de array", "Um operador lógico"], respostaCorreta: 1 },
  { enunciado: "Qual o resultado de typeof null?", alternativas: ["'null'", "'undefined'", "'object'", "'boolean'"], respostaCorreta: 2 },
  { enunciado: "Qual método é usado para iterar sobre cada elemento de um array?", alternativas: ["map()", "forEach()", "filter()", "Todos os anteriores"], respostaCorreta: 3 },
  { enunciado: "O que é hoisting em JavaScript?", alternativas: ["Elevar variáveis e funções ao topo do escopo", "Um tipo de erro", "Um padrão de design", "Uma forma de herança"], respostaCorreta: 0 },
  { enunciado: "Qual é a saída de: console.log(1 + '2')?", alternativas: ["3", "'12'", "NaN", "undefined"], respostaCorreta: 1 },
  { enunciado: "Qual palavra-chave cria uma função assíncrona?", alternativas: ["await", "async", "promise", "defer"], respostaCorreta: 1 },
];

const perguntasReact: Pergunta[] = [
  { enunciado: "Qual hook é usado para gerenciar estado em componentes funcionais?", alternativas: ["useEffect", "useState", "useRef", "useMemo"], respostaCorreta: 1 },
  { enunciado: "O que é JSX?", alternativas: ["Uma linguagem de programação", "Uma extensão de sintaxe para JavaScript", "Um framework CSS", "Um banco de dados"], respostaCorreta: 1 },
  { enunciado: "Qual hook executa efeitos colaterais?", alternativas: ["useState", "useCallback", "useEffect", "useContext"], respostaCorreta: 2 },
  { enunciado: "O que são props no React?", alternativas: ["Variáveis globais", "Propriedades passadas entre componentes", "Estilos CSS", "Métodos do DOM"], respostaCorreta: 1 },
  { enunciado: "Como criar um componente funcional?", alternativas: ["class Comp extends React.Component", "function Comp() { return <div/> }", "new Component()", "React.create()"], respostaCorreta: 1 },
  { enunciado: "Qual é o propósito do useRef?", alternativas: ["Gerenciar estado", "Referenciar elementos DOM ou valores mutáveis", "Fazer requisições HTTP", "Criar rotas"], respostaCorreta: 1 },
  { enunciado: "O que é o Virtual DOM?", alternativas: ["O DOM real do navegador", "Uma cópia leve do DOM real", "Um banco de dados", "Um servidor"], respostaCorreta: 1 },
  { enunciado: "Qual hook otimiza funções evitando recriações?", alternativas: ["useMemo", "useCallback", "useEffect", "useReducer"], respostaCorreta: 1 },
  { enunciado: "Como passar dados de pai para filho no React?", alternativas: ["Context API", "Props", "Redux", "localStorage"], respostaCorreta: 1 },
  { enunciado: "O que o React.Fragment faz?", alternativas: ["Cria um componente", "Agrupa elementos sem nó extra no DOM", "Gerencia estado", "Faz roteamento"], respostaCorreta: 1 },
];

const perguntasHTML: Pergunta[] = [
  { enunciado: "Qual tag é usada para criar um link?", alternativas: ["<link>", "<a>", "<href>", "<url>"], respostaCorreta: 1 },
  { enunciado: "Qual atributo define texto alternativo em imagens?", alternativas: ["title", "src", "alt", "desc"], respostaCorreta: 2 },
  { enunciado: "Qual tag cria uma lista não ordenada?", alternativas: ["<ol>", "<ul>", "<li>", "<list>"], respostaCorreta: 1 },
  { enunciado: "Qual é a tag semântica para o conteúdo principal?", alternativas: ["<div>", "<section>", "<main>", "<content>"], respostaCorreta: 2 },
  { enunciado: "Qual tag é usada para tabelas?", alternativas: ["<table>", "<tab>", "<grid>", "<data>"], respostaCorreta: 0 },
  { enunciado: "O que o atributo 'target=_blank' faz em um link?", alternativas: ["Abre na mesma aba", "Abre em nova aba", "Fecha a aba", "Recarrega a página"], respostaCorreta: 1 },
  { enunciado: "Qual é o doctype correto para HTML5?", alternativas: ["<!DOCTYPE html5>", "<!DOCTYPE HTML>", "<!DOCTYPE html>", "<doctype html>"], respostaCorreta: 2 },
  { enunciado: "Qual tag cria um campo de formulário?", alternativas: ["<form>", "<field>", "<input>", "<entry>"], respostaCorreta: 2 },
  { enunciado: "Qual tag é usada para cabeçalhos de maior importância?", alternativas: ["<h6>", "<h1>", "<header>", "<heading>"], respostaCorreta: 1 },
  { enunciado: "O que a tag <meta charset='UTF-8'> define?", alternativas: ["O idioma", "A codificação de caracteres", "O título", "O estilo"], respostaCorreta: 1 },
];

const perguntasCSS: Pergunta[] = [
  { enunciado: "Qual propriedade altera a cor do texto?", alternativas: ["background-color", "font-color", "color", "text-color"], respostaCorreta: 2 },
  { enunciado: "Qual valor de display cria um layout flexível?", alternativas: ["block", "inline", "flex", "grid"], respostaCorreta: 2 },
  { enunciado: "Como centralizar horizontalmente com margin?", alternativas: ["margin: center", "margin: 0 auto", "margin: auto 0", "margin: middle"], respostaCorreta: 1 },
  { enunciado: "Qual unidade é relativa ao tamanho da fonte do elemento pai?", alternativas: ["px", "rem", "em", "vh"], respostaCorreta: 2 },
  { enunciado: "Qual propriedade adiciona sombra a um elemento?", alternativas: ["shadow", "box-shadow", "text-shadow", "element-shadow"], respostaCorreta: 1 },
  { enunciado: "O que position: fixed faz?", alternativas: ["Posiciona relativo ao pai", "Posiciona relativo à viewport", "Remove do fluxo", "Posiciona relativo ao body"], respostaCorreta: 1 },
  { enunciado: "Qual propriedade controla o espaçamento entre linhas?", alternativas: ["letter-spacing", "line-height", "word-spacing", "text-indent"], respostaCorreta: 1 },
  { enunciado: "Como selecionar elementos com classe 'ativo'?", alternativas: ["#ativo", ".ativo", "ativo", "*ativo"], respostaCorreta: 1 },
  { enunciado: "Qual propriedade cria transições suaves?", alternativas: ["animation", "transition", "transform", "smooth"], respostaCorreta: 1 },
  { enunciado: "O que z-index controla?", alternativas: ["Tamanho", "Opacidade", "Ordem de empilhamento", "Posição"], respostaCorreta: 2 },
];

const perguntasTypeScript: Pergunta[] = [
  { enunciado: "Qual é a principal vantagem do TypeScript sobre JavaScript?", alternativas: ["É mais rápido", "Tipagem estática", "Menor tamanho", "Mais bibliotecas"], respostaCorreta: 1 },
  { enunciado: "Como definir o tipo de uma variável como número?", alternativas: ["let x: Number", "let x: number", "let x = Number", "number let x"], respostaCorreta: 1 },
  { enunciado: "O que é uma interface no TypeScript?", alternativas: ["Um tipo de classe", "Um contrato que define a estrutura de um objeto", "Uma função", "Um módulo"], respostaCorreta: 1 },
  { enunciado: "Qual tipo representa qualquer valor?", alternativas: ["unknown", "any", "void", "never"], respostaCorreta: 1 },
  { enunciado: "Como definir um parâmetro opcional em uma função?", alternativas: ["param!", "param?", "param*", "?param"], respostaCorreta: 1 },
  { enunciado: "O que são Generics?", alternativas: ["Tipos fixos", "Tipos que funcionam com vários tipos", "Classes abstratas", "Módulos"], respostaCorreta: 1 },
  { enunciado: "Qual é a extensão de arquivo TypeScript?", alternativas: [".js", ".jsx", ".ts", ".type"], respostaCorreta: 2 },
  { enunciado: "O que 'enum' define?", alternativas: ["Uma classe", "Um conjunto de constantes nomeadas", "Uma função", "Um tipo genérico"], respostaCorreta: 1 },
  { enunciado: "Como tipar um array de strings?", alternativas: ["string[]", "Array(string)", "[string]", "string()"], respostaCorreta: 0 },
  { enunciado: "O que o tipo 'void' representa?", alternativas: ["Null", "Undefined", "Ausência de retorno", "Um erro"], respostaCorreta: 2 },
];

export const perguntasPorTecnologia: Record<string, Pergunta[]> = {
  javascript: perguntasJavaScript,
  react: perguntasReact,
  html: perguntasHTML,
  css: perguntasCSS,
  typescript: perguntasTypeScript,
};
