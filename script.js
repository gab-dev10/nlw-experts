const perguntas = [
    {
        pergunta: "O que é JavaScript?",
        respostas: [
            "Uma linguagem de programação de alto nível.",
            "Um sistema operacional.",
            "Um tipo de café.",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
        respostas: [
            "var myVar = 10;",
            "variável myVar = 10;",
            "const myVar = 10;",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a função do operador '===' em JavaScript?",
        respostas: [
            "Comparação de valor e tipo.",
            "Atribuição de valor.",
            "Operador lógico AND.",
        ],
        correta: 0
    },
    {
        pergunta: "O que é uma função de callback em JavaScript?",
        respostas: [
            "Uma função passada como argumento para outra função, para ser chamada posteriormente.",
            "Uma função que gera callbacks aleatórios.",
            "Uma função que chama a si mesma.",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a maneira correta de comentar uma única linha em JavaScript?",
        respostas: [
            "// Este é um comentário de linha única",
            "/* Este é um comentário de linha única */",
            "<!-- Este é um comentário de linha única -->",
        ],
        correta: 0
    },
    {
        pergunta: "Qual método é usado para imprimir algo no console em JavaScript?",
        respostas: [
            "console.print()",
            "print.console()",
            "console.log()",
        ],
        correta: 2
    },
    {
        pergunta: "O que é uma array em JavaScript?",
        respostas: [
            "Um tipo de loop.",
            "Uma estrutura de dados para armazenar múltiplos valores.",
            "Um tipo de variável.",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a maneira correta de escrever um loop 'for' em JavaScript?",
        respostas: [
            "para (i = 0; i < 5; i++) {}",
            "for (i = 0; i < 5; i++) {}",
            "loop (i = 0; i < 5; i++) {}",
        ],
        correta: 1
    },
    {
        pergunta: "Qual método é usado para remover o último elemento de uma array em JavaScript?",
        respostas: [
            "pop()",
            "removeLast()",
            "shift()",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a função do operador '&&' em JavaScript?",
        respostas: [
            "Operador de adição.",
            "Operador de negação.",
            "Operador lógico AND.",
        ],
        correta: 2
    },
];


const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

//loop, laço de repetição
for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    for(let resposta of item.respostas){
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
           const estaCorreta = event.target.value == item.correta

           corretas.delete(item)
           if(estaCorreta){
            corretas.add(item)
           }
           mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }

        quizItem.querySelector('dl').appendChild(dt)
    }
    quizItem.querySelector('dl dt').remove()
    quiz.appendChild(quizItem)
}