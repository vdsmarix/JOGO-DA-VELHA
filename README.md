<!DOCTYPE html>
<html>
<head>
  <title>Jogo da Velha</title>
  <style>
    body {
      font-family: Arial, sans-serif;
    }
    .tabuleiro {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
    }
    .celula {
      width: 50px;
      height: 50px;
      border: 1px solid #ddd;
      font-size: 24px;
      text-align: center;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <h1>Jogo da Velha</h1>
  <div class="tabuleiro">
    <div class="celula" onclick="jogar(0)"></div>
    <div class="celula" onclick="jogar(1)"></div>
    <div class="celula" onclick="jogar(2)"></div>
    <div class="celula" onclick="jogar(3)"></div>
    <div class="celula" onclick="jogar(4)"></div>
    <div class="celula" onclick="jogar(5)"></div>
    <div class="celula" onclick="jogar(6)"></div>
    <div class="celula" onclick="jogar(7)"></div>
    <div class="celula" onclick="jogar(8)"></div>
  </div>
  <button onclick="reiniciar()">Reiniciar</button>

  <script>
    let tabuleiro = Array(9).fill("");
    let jogadorAtual = "X";

    function jogar(posicao) {
      if (tabuleiro[posicao] === "") {
        tabuleiro[posicao] = jogadorAtual;
        document.querySelectorAll(".celula")[posicao].textContent = jogadorAtual;
        verificarVencedor();
        trocarJogador();
      }
    }

    function verificarVencedor() {
      let vencedor = null;
      // Linhas
      for (let i = 0; i < 3; i++) {
        if (tabuleiro[i * 3] === tabuleiro[i * 3 + 1] && tabuleiro[i * 3] === tabuleiro[i * 3 + 2] && tabuleiro[i * 3] !== "") {
          vencedor = tabuleiro[i * 3];
        }
      }
      // Colunas
      for (let i = 0; i < 3; i++) {
        if (tabuleiro[i] === tabuleiro[i + 3] && tabuleiro[i] === tabuleiro[i + 6] && tabuleiro[i] !== "") {
          vencedor = tabuleiro[i];
        }
      }
      // Diagonais
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
      tabuleiro = Array(9).fill("");
      jogadorAtual = "X";
      document.querySelectorAll(".celula").forEach(celula => celula.textContent = "");
    }
  </script>
</body>
</html>
