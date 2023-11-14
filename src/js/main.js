let contagem = 0;

let numero = document.getElementById('numero');
let botoes = document.querySelectorAll('button');

function botaoClicado(evento) {

    if (evento.target.className == 'diminuir') {
        --contagem;
    } else if (evento.target.className == 'aumentar') {
        contagem++;
    } else {
        contagem = 0;
    }

    numero.innerHTML = contagem;

    verificaValor();
}

function verificaValor () {
    if (contagem > 0) {
        numero.style.color = '#109c18';
    } else if (contagem < 0) {
        numero.style.color = '#ca1614';
    } else {
        numero.style.color = '#1f1f1f';
    }
}

for (botao of botoes) {
    botao.addEventListener('click', botaoClicado)
}