let numerosSorteados = [];
let numMax = 10;
let numSecreto = gerarNumAleatorio();
let numTentativas = 1;

function alteraCampoHTML(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female', {rate:1.1});
}   

function gerarNumAleatorio() {
    let num = parseInt(Math.random() * numMax + 1);
    let qntNumLista = numerosSorteados.length;

    if(qntNumLista == numMax) {
        numerosSorteados = []; // limpa a lista
        return gerarNumAleatorio();
    } 
    
    if(numerosSorteados.includes(num)) {
        return gerarNumAleatorio();
    } else {
        numerosSorteados.push(num);
        return num;
    }
}

function limparCampo() {
    chuteUsuario = document.querySelector('input');
    chuteUsuario.value = '';
}

function habilitarBotaoNovoJogo() {
    let botao = document.getElementById('reiniciar');
    botao.removeAttribute('disabled');
}

function reiniciarJogo() {
    numSecreto = gerarNumAleatorio();
    limparCampo();
    numTentativas = 1;
    msgInicial();
    let botao = document.getElementById('reiniciar');
    botao.setAttribute('disabled', true);
}

function msgInicial() {
    alteraCampoHTML('h1', 'Jogo do Número Secreto');
    alteraCampoHTML('p', `Escolha um número entre 1 e ${numMax}:`);
}

msgInicial();

function verificarChute() {
    let chuteUsuario = document.querySelector('input').value;

    if(chuteUsuario != 0) {
        if (chuteUsuario == numSecreto) {
            let pluralTentativas = numTentativas > 1 ? 'tentativas' : 'tentativa'
            alteraCampoHTML('h1', 'ACERTOU!');
            alteraCampoHTML('p', `Você descobriu o número secreto com ${numTentativas} ${pluralTentativas}!`);
            habilitarBotaoNovoJogo();
        } else {
            if (chuteUsuario > numSecreto){
                alteraCampoHTML('h1', 'VOCÊ ERROU!');
                alteraCampoHTML('p', `O número secreto é menor que ${chuteUsuario}!`);
            } else {
                alteraCampoHTML('h1', 'VOCÊ ERROU!');
                alteraCampoHTML('p', `O número secreto é maior que ${chuteUsuario}!`);
            }
            limparCampo();
            numTentativas++;
        }
    } else {
        window.alert("Digite um número válido!");
    }
}