let tabuleiro = Array(9).fill("");
let jogadorAtual = "X";

function jogar(posicao) {
  if (tabuleiro[posicao] === "") {
    tabuleiro[posicao] = jogadorAtual;
    atualizarTabuleiro();
    verificarVencedor();
    trocarJogador();
  }
}

function atualizarTabuleiro() {
  for (let i = 0; i < 9; i++) {
    let celula = document.querySelectorAll(".celula")[i];
    celula.textContent = tabuleiro[i];
  }
}

function verificarVencedor() {
  let vencedor = null;
  // Verificar linhas
  for (let i = 0; i < 3; i++) {
    if (tabuleiro[i * 3] === tabuleiro[i * 3 + 1] && tabuleiro[i * 3] === tabuleiro[i * 3 + 2] && tabuleiro[i * 3] !== "") {
      vencedor = tabuleiro[i * 3];
    }
  }
  // Verificar colunas
  for (let i = 0; i < 3; i++) {
    if (tabuleiro[i] === tabuleiro[i + 3] && tabuleiro[i] === tabuleiro[i + 6] && tabuleiro[i] !== "") {
      vencedor = tabuleiro[i];
    }
  }
  // Verificar diagonais
  if (tabuleiro[0] === tabuleiro[4] && tabuleiro[0] === tabuleiro[8] && tabuleiro[0] !== "") {
    vencedor = tabuleiro[0];
  }
  if (tabuleiro[2] === tabuleiro[4] && tabuleiro[2] === tabuleiro[6] && tabuleiro[2] !== "") {
    vencedor = tabuleiro[2];
  }
  if (vencedor !== null) {
    alert(`Jogador ${vencedor} venceu!`);
    reiniciar();
  }
}

function trocarJogador() {
  jogadorAtual = jogadorAtual === "X" ? "O" : "X";
}

function reiniciar() {
  tabule
