<!DOCTYPE html>
<html lang="pt-BR">
<head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <title>Jogo da Velha</title>
 <link rel="stylesheet" href="style.css">
</head>
<body>
 <h1>Jogo da Velha</h1>
 <div class="tabuleiro">
 <div class="linha">
 <div class="celula" onclick="jogar(0)"></div>
 <div class="celula" onclick="jogar(1)"></div>
 <div class="celula" onclick="jogar(2)"></div>
 </div>
 <div class="linha">
 <div class="celula" onclick="jogar(3)"></div>
 <div class="celula" onclick="jogar(4)"></div>
 <div class="celula" onclick="jogar(5)"></div>
 </div>
 <div class="linha">
 <div class="celula" onclick="jogar(6)"></div>
 <div class="celula" onclick="jogar(7)"></div>
 <div class="celula" onclick="jogar(8)"></div>
 </div>
 </div>
 <button onclick="reiniciar()">Reiniciar</button>
 <script src="script.js"></script>
</body>
</html>


style.css


body {
 font-family: Arial, sans-serif;
 background-color: #f0f0f0;
}

.tabuleiro {
 display: flex;
 flex-direction: column;
 align-items: center;
}

.linha {
 display: flex;
}

.celula {
 width: 50px;
 height: 50px;
 border: 1px solid #ddd;
 font-size: 24px;
 text-align: center;
 cursor: pointer;
}

.celula:hover {
 background-color: #ccc;
}
  

