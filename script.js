let equilibrio = 0;
let cenaAtual = 0;

const nameElement = document.getElementById("name");
const textElement = document.getElementById("text");
const choicesElement = document.getElementById("choices");
const bgElement = document.getElementById("background");
const characterElement = document.getElementById("character");

const cenas = [

{
    nome: "Narrador",
    texto: "Linha Temporal 0. Um jovem chamado Evan vivia em profundo sofrimento.",
    fundo: "assets/fundos/fundo1.jpg",
    personagem: "",
},

{
    nome: "Evan",
    texto: "Por que eu existo...?",
    fundo: "assets/fundos/fundo1.jpg",
    personagem: "assets/personagens/evan.png",
},

{
    nome: "Nexum",
    texto: "Eu posso acabar com sua dor.",
    fundo: "assets/fundos/fundo2.jpg",
    personagem: "assets/personagens/nexum.png",
    escolhas: [
        { texto: "Confiar em Nexum", efeito: -1, proxima: 3 },
        { texto: "Desconfiar", efeito: 1, proxima: 3 }
    ]
},

{
    nome: "Narrador",
    texto: "A fusão começa... algo está errado.",
    fundo: "assets/fundos/fundo3.jpg",
    personagem: "",
}

];

function mostrarCena() {

    let cena = cenas[cenaAtual];

    nameElement.innerText = cena.nome;
    textElement.innerText = cena.texto;
    bgElement.src = cena.fundo;
    characterElement.src = cena.personagem;

    choicesElement.innerHTML = "";

    if (cena.escolhas) {
        cena.escolhas.forEach(escolha => {
            let button = document.createElement("button");
            button.innerText = escolha.texto;
            button.onclick = () => {
                equilibrio += escolha.efeito;
                cenaAtual = escolha.proxima;
                mostrarCena();
            };
            choicesElement.appendChild(button);
        });
    } else {
        document.onclick = () => {
            cenaAtual++;
            if (cenaAtual < cenas.length) {
                mostrarCena();
            } else {
                mostrarFinal();
            }
        };
    }
}

function mostrarFinal() {
    if (equilibrio >= 1) {
        textElement.innerText = "FINAL BOM: Nexum é derrotado.";
    } else {
        textElement.innerText = "FINAL RUIM: Nexum consome tudo.";
    }
    nameElement.innerText = "Fim";
    characterElement.src = "";
    choicesElement.innerHTML = "";
}

mostrarCena();
