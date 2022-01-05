function tamanhoDaFonte(){
   let tamanho = 10;
   function aumentarFonte(){
      tamanho++;
      document.body.style.fontSize = tamanho + "px";
      console.log(tamanho);
   }
   function diminuirFonte(){
      tamanho--;
      document.body.style.fontSize = tamanho + "px";
      console.log(tamanho);
   }

   return {
      aumentarFonte : aumentarFonte,
      diminuirFonte : diminuirFonte
   }
}

let fonte = tamanhoDaFonte();

document.getElementById("aumentar").addEventListener('click', function (){
   fonte.aumentarFonte();
});
document.getElementById("diminuir").addEventListener('click', function (){
   fonte.diminuirFonte();
});