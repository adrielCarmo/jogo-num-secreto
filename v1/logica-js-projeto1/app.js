let numMax = 1000;
let numSecreto = parseInt(Math.random() * numMax) + 1;
let chute;
let tentativas = 1;

alert("Hello World! Bem vindo ao jogo do número secreto!");
console.log(numSecreto);
while (chute != numSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numMax}:`);
    if (numSecreto == chute) {
        break;
    } else if (numSecreto > chute) {
        alert(`Você errou! :( \nO número secreto é MAIOR que ${chute}!`);
    } else {
        alert(`Você errou! :( \nO número secreto é MENOR que ${chute}!`)
    }
    tentativas++;
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Isso aí! Você descobriu o número secreto ${numSecreto} em ${tentativas} ${palavraTentativa}.`);
/*
Desafios
Mostre um alerta com a mensagem "Boas vindas ao nosso site!".
alert("Boas vindas ao nosso site!");
Declare uma variável chamada nome e atribua a ela o valor "Lua".
let nome = "Lua";
Crie uma variável chamada idade e atribua a ela o valor 25.
let idade = 25;
Defina uma variável numeroDeVendas e atribua a ela o valor 50.
let numeroDeVendas = 50;
Defina uma variável saldoDisponivel e atribua a ela o valor 1000.
let saldoDisponivel = 1000;
Exiba um alerta com o texto "Erro! Preencha todos os campos"
alert("Erro! Preencha todos os campos.");
Declare uma variável chamada mensagemDeErro e atribua a ela o valor "Erro! Preencha todos os campos" Agora exiba um alerta com o valor da variável mensagemDeErro.
let mensagemDeErro = "Erro! Preencha todos os campos."
alert(mensagemDeErro);
Use um prompt para perguntar o nome do usuário e armazená-lo na variável nome.
let nome = prompt("Qual o seu nome?");
Peça ao usuário para digitar sua idade usando um prompt e armazene-a na variável idade.
let idade = prompt("Qual a sua idade?")
Agora, caso a idade seja maior ou igual que 18, exiba um alerta com a mensagem "Pode tirar a habilitação!".
if(idade >= 18) {
    alert("Pode tirar a habilitação!");
}
*/