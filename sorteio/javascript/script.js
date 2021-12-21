const numeros = [];
let vid = document.createElement('video');
let idIntervalo;

function sorteio(){
   let num;
   let div = document.createElement('div');
   do{
      num = Math.floor(Math.random()*60)+1;
      if (!numeros.includes(num)){
         numeros.push(num);
      }
   }while(!numeros.includes(num));
   if(numeros.length > 6){
      clearInterval(idIntervalo);
      vid.removeAttribute("autoplay");
      vid.removeAttribute("loop");
   }else{
      div.innerHTML = num;
      div.classList = "bolas";
      document.getElementById("sorteados").appendChild(div);
   }
}

function video(){
   let fonte = document.createElement("source");
   fonte.type = "video/mp4";
   fonte.src = "assets/spin-lottery.mp4";
   vid.appendChild(fonte);
   vid.setAttribute("autoplay", "");
   vid.setAttribute("loop", "");
   document.getElementById("roda").appendChild(vid);
}

document.getElementById("sorteio").addEventListener('click', function (){
   let i;
   video();
   idIntervalo = setInterval(sorteio, 1000);
});