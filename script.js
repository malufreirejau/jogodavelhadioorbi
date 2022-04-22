var jogador = null;
var jogadorSelecionado = document.getElementById("jogadorselecionado");

mudarJogador("X");

function escolherQuadrado(id){
    var quadrado = document.getElementById(id);

    quadrado.innerHTML = jogador;
    quadrado.style.color = '#F908F2';
}

function mudarJogador(valor) {
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}