let canvas = document.getElementById("velha");
let contexto = canvas.getContext("2d");
let matriz;
let i;
let j;
let jogador;
let rodada;
let botao = document.getElementById('botao__de__comeco');
let vitoriasJogadorUm = document.getElementById('vitorias__jogador__um');
let vitoriasJogadorDois = document.getElementById('vitorias__jogador__dois');


function comeco (){
   //desenhando o cenario
   contexto.clearRect(0, 0, canvas.width, canvas.height);
   for (i=0; i<3;i++){
      for(j=0; j<3;j++){
         contexto.beginPath();
         contexto.rect(i*100,j*100, 100, 100);
         contexto.stroke();
      }
   }

   matriz = [["","",""],["","",""],["","",""]];

   canvas.addEventListener('click', selecionar);

   jogador = true;

   rodada=0;
   botao.disabled = true;
}

function selecionar (evento){
   let [x,y] = [Math.floor(evento.offsetX/100), Math.floor(evento.offsetY/100)];

   if (x > 3) return;
   if (y > 3) return;
   if (matriz[x][y] != '') return;

   if (jogador){
      contexto.fillStyle="black";
      contexto.font = "20px Georgia";
      contexto.textAlign = "center";
      contexto.fillText("O", (x*100)+50, (y*100)+50);
      matriz[x][y] = "O"
   }else{
      contexto.fillStyle="black";
      contexto.font = "20px Georgia";
      contexto.textAlign = "center";
      contexto.fillText("X", (x*100)+50, (y*100)+50);
      matriz[x][y] = "X"
   }

   rodada++;

   fim ();
   jogador = !jogador;
}

function fim(){
   for (i=0; i<3; i++){
      if (matriz[i][0] == ''){
         continue;
      }
      if ((matriz[i][0] == matriz[i][1]) && (matriz[i][2] == matriz[i][1])){
         contexto.clearRect(0, 0, canvas.width, canvas.height);
         contexto.font = "50px Georgia";
         contexto.textAlign = "center";
         contexto.fillStyle="black";
         if (jogador){
            contexto.strokeText("O Ganhou",100,200);
            vitoriasJogadorUm.value++;
         }else{
            contexto.strokeText("X Ganhou",100,200);
            vitoriasJogadorDois.value++;
         }
         botao.disabled = false;
         return;
      }
   }

   for (i=0; i<3; i++){
      if (matriz[0][i] == ''){
         continue;
      }
      if ((matriz[0][i] == matriz[1][i]) && (matriz[2][i] == matriz[1][i])){
         contexto.clearRect(0, 0, canvas.width, canvas.height);
         contexto.font = "50px Georgia";
         contexto.textAlign = "center";
         contexto.fillStyle="black";
         if (jogador){
            contexto.strokeText("O Ganhou",150,200);
            vitoriasJogadorUm.value++;
         }else{
            contexto.strokeText("X Ganhou",150,200);
            vitoriasJogadorDois.value++;
         }
         botao.disabled = false;
         return;
      }
   }

   if ((matriz[0][0] == matriz[1][1]) && (matriz[2][2] == matriz[1][1]) && (matriz[0][0] != '')){
      contexto.clearRect(0, 0, canvas.width, canvas.height);
      contexto.font = "50px Georgia";
      contexto.textAlign = "center";
      contexto.fillStyle="black";
      if (jogador){
         contexto.strokeText("O Ganhou",150,200);
         vitoriasJogadorUm.value++;
      }else{
         contexto.strokeText("X Ganhou",150,200);
         vitoriasJogadorDois.value++;
      }
      botao.disabled = false;
      return;
   }

   if ((matriz[0][2] == matriz[1][1]) && (matriz[2][0] == matriz[1][1]) && (matriz[0][2] != '')){
      contexto.clearRect(0, 0, canvas.width, canvas.height);
      contexto.font = "50px Georgia";
      contexto.textAlign = "center";
      contexto.fillStyle="black";
      if (jogador){
         contexto.strokeText("O Ganhou",150,200);
         vitoriasJogadorUm.value++;
      }else{
         contexto.strokeText("X Ganhou",150,200);
         vitoriasJogadorDois.value++;
      }
      botao.disabled = false;
      return;
   }

   if (rodada >= 9){
      contexto.clearRect(0, 0, canvas.width, canvas.height);
      contexto.font = "50px Georgia";
      contexto.textAlign = "center";
      contexto.fillStyle="black";
      contexto.strokeText("Deu Velha",150,200);
      botao.disabled = false;
      return;
   }

   return;
}

botao.addEventListener('click', function () {comeco();});