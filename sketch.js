// teclas do jogo:
// A, S, D, F, G, H


function setup() {
  createCanvas(400, 400);
}

let xJogador1 = 0;
let xJogador2 = 0;
let xJogador3 = 0;
let xJogador4 = 0;
let xJogador5 = 0;
let xJogador6 = 0;

function draw() {
  ativaJogo();
  desenhaJogadores();
  desenhaLinhaDeChegada();
  verificaVencedor();
}

function ativaJogo() {
  if (focused == true) {
    background("#03A9F4");
  } else {
    background("#F44336");
  }
}

function desenhaJogadores() {
  textSize(40);
  text("😺", xJogador1, 75);
  text("😹", xJogador2, 130);
  text("😻", xJogador3, 190);
  text("😾", xJogador4, 250);
  text("🙀", xJogador5, 315);
  text("😽", xJogador6, 375);
}

function desenhaLinhaDeChegada() {
  rect(350, 0, 10, 400);
}

function verificaVencedor() {
  if (xJogador1 > 350) {
    text("Jogador 1 venceu!", 50, 200);
    noLoop();
  }
  if (xJogador2 > 350) {
    text("Jogador 2 venceu!", 50, 200);
    noLoop();
  }
  if (xJogador3 > 350) {
    text("Jogador 3 venceu!", 50, 200);
    noLoop();
  }
  if (xJogador4 > 350) {
    text("Jogador 4 venceu!", 50, 200);
    noLoop();
  }
  if (xJogador5 > 350) {
    text("Jogador 5 venceu!", 50, 200);
    noLoop();
  }
  if (xJogador6 > 350) {
    text("Jogador 6 venceu!", 50, 200);
    noLoop();
  }
}

function keyReleased() {
  if (key == "a") {
    xJogador1 += random(20);
  }
  if (key == "s") {
    xJogador2 += random(20);
  } 
  if (key == "d") {
    xJogador3 += random(20);
  }
   if (key == "f") {
    xJogador4 += random(20);
  }
   if (key == "g") {
    xJogador5 += random(20);
  }
   if (key == "h") {
    xJogador6 += random(20);
  }
}
