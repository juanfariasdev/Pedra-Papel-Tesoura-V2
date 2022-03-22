const alertar = document.getElementById('alert');

//Opções
const pedra = document.getElementById('pedra');
const papel = document.getElementById('papel');
const tesoura = document.getElementById('tesoura');

const letsPlay = document.getElementById('letsPlay');
const resultDisplay = document.getElementById('resultDisplay');
//Resultado
const computadorSelecao = document.getElementById('computadorSelecao');
const userSelecao = document.getElementById('userSelecao');

const resultado = document.getElementById('resultado');

const pontuacaoUser = document.getElementById('pontuacaoUser');
const pontuacaoPC = document.getElementById('pontuacaoPC');

const textAdverssario = document.getElementById('textAdverssario');
//const computadorPlayer = document.getElementById('computadorPlayer')
let userPoint = 0
let pcPoint = 0

let selecao = ["rock", "paper", "scissors"];


function userSelection(event) {
    let userSelectionKey = 0;
    selecao.map((value, key) => {
        if (event == value) {
            userSelectionKey = key;
        }
    })
    return userSelectionKey;
}

function setImage(value, result) {
    switch (result) {
        case 0:
            value.setAttribute('src', './img/opcoes/pedra.png');
            break
        case 1:
            value.setAttribute('src', './img/opcoes/papel.webp');
            break
        case 2:
            value.setAttribute('src', './img/opcoes/tesoura.webp');
            break
    }
}

function SortearArray(value) {
    let randomComputer = Math.floor(Math.random() * value.length);
    return value[randomComputer];
}

function opponentTalk(value) {
    let defeatTalk = ["Você está ganhando por enquanto", "Já vou virar esse jogo", "Você está com sorte", "Aposto que você acha que tem chance", "você é muito bom"]
    let StallingTalk = ["Empatamos", "Vou te derrotar", "Metade da minha vitória", "Ainda consigo ganhar"]
    let victoryTalk = ["Este jogo está bem facil", "Já ganhei", "não tem nem como você vencer", "Já pode desistir", "To com sorte", "Seus movimentos são previsíveis"]

    let falar = ""
    if (value === "defeat") {
        falar = SortearArray(defeatTalk);
    }
    if (value === "Stalling") {
        falar = SortearArray(StallingTalk);
    }
    if (value === "victory") {
        falar = SortearArray(victoryTalk);
    }

    textAdverssario.innerHTML = falar
}


function play(event) {
    let userSelector = userSelection(event);
    setImage(userSelecao, userSelector);
    let randomComputer = Math.floor(Math.random() * 3);

    setImage(computadorSelecao, randomComputer);
    resultDisplay.style.display = 'block';
    letsPlay.style.display = 'none';
    resultado.style.display = 'block';
    //declaração de empate ou verificar qual jogador venceu (jogador x computador)
    if (randomComputer == userSelector) {
        resultado.innerText = 'empatou';
    } else if ((userSelector === 0 && randomComputer === 2) || (userSelector === 1 && randomComputer === 0) || (userSelector === 2 && randomComputer === 1)) {
        resultado.innerText = 'Você ganhou essa';
        userPoint++
        pontuacaoUser.innerHTML = userPoint
    } else {
        resultado.innerText = 'computador venceu essa';
        pcPoint++
        pontuacaoPC.innerHTML = pcPoint
    }

    let randomFala = Math.floor(Math.random() * 3);

    if (userPoint > pcPoint) {
        opponentTalk("defeat");
    }
    if (userPoint < pcPoint) {
        opponentTalk("victory");
    }
    if (userPoint == pcPoint) {
        opponentTalk("Stalling");
    }
}


function resetar() {
    userPoint = 0
    pcPoint = 0
    pontuacaoUser.innerHTML = userPoint
    pontuacaoPC.innerHTML = pcPoint

    resultDisplay.style.display = 'none';
    letsPlay.style.display = 'block';
    resultado.style.display = 'none';
    textAdverssario.innerHTML = "Vamos começar hehe!"
}