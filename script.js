var jogador = null;
var jogadorSelecionado = document.getElementById("jogadorselecionado");

mudarJogador("X");

function escolherQuadrado(id){
    var quadrado = document.getElementById(id);

    if (quadrado.innerHTML !== "-") {
        return;
    }

    quadrado.innerHTML = jogador;
    quadrado.style.color = '#F908F2';

    if (jogador === "X") {
        jogador = "O";
    } else {
        jogador = "X";
    }
    mudarJogador(jogador);
}

function mudarJogador(valor) {
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}
