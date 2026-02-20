let equilibrio = 0;
let etapa = 0;

const storyElement = document.getElementById("story");
const choicesElement = document.getElementById("choices");

const historia = [

{
    texto: "Linha Temporal 0. Evan encontra a gosma negra conhecida como Nexum.",
    escolhas: [
        { texto: "Confiar imediatamente em Nexum", efeito: -1, proxima: 1 },
        { texto: "Observar antes de confiar", efeito: 1, proxima: 1 }
    ]
},

{
    texto: "Nexum propõe união completa, tornando-se um só ser.",
    escolhas: [
        { texto: "Aceitar a fusão", efeito: -1, proxima: 2 },
        { texto: "Recusar e questionar suas intenções", efeito: 1, proxima: 2 }
    ]
},

{
    texto: "A verdade é revelada: Nexum quer quebrar todas as dimensões.",
    escolhas: [
        { texto: "Lutar para salvar Evan e o universo", efeito: 1, proxima: 3 },
        { texto: "Desistir e aceitar o fim", efeito: -1, proxima: 3 }
    ]
}

];

function iniciar() {
    mostrarEtapa();
}

function mostrarEtapa() {
    if (etapa >= historia.length) {
        mostrarFinal();
        return;
    }

    storyElement.innerText = historia[etapa].texto;
    choicesElement.innerHTML = "";

    historia[etapa].escolhas.forEach(escolha => {
        const button = document.createElement("button");
        button.innerText = escolha.texto;
        button.onclick = () => {
            equilibrio += escolha.efeito;
            etapa = escolha.proxima;
            mostrarEtapa();
        };
        choicesElement.appendChild(button);
    });
}

function mostrarFinal() {
    choicesElement.innerHTML = "";

    if (equilibrio >= 2) {
        storyElement.innerText = "FINAL BOM: O equilíbrio foi restaurado. Nexum é selado e Evan é libertado.";
    } else if (equilibrio <= -2) {
        storyElement.innerText = "FINAL RUIM: Nexum domina todas as linhas temporais. Tudo deixa de existir.";
    } else {
        storyElement.innerText = "FINAL MÉDIO: Nexum é contido parcialmente. O universo permanece instável.";
    }
}

iniciar();
