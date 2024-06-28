const caixaPricipal = document.queryselector (".caixa-principal"); 
const caixaPerguntas = document.queryselector (".caixa-perguntas"); 
const caixaAlternativas = document.queryselector (".caixa-alternativas"); 
const caixaResultada = document.queryselector (".caixa-resultado"); 
const textoResultado = document.queryselector (".texto-resultado"); 

const perguntas =[
    {
        enunciado: "Pergunta 1", 
        alternativas:["Alternativa 1", "Alternativa 2"],
    },
    {
        enunciado: "Pergunta 2",
        alternativas:["Alternativa 1", "Alternativa 2"],
    },
    {
        enunciado: "Pergunta 3",
        alternativas:["Alternativa 1", "Alternativa 2"],
    },
];

let atual = 0;
let perguntaAtual;

function mostraPerguntas(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado; 
    mostraAlternativa();
}

function mostraAlternativa(){
    for  (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa; 
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPerguntas();
