let novo = [];

document.querySelector('.submeter').addEventListener('click', function (){
   let atual = 0;
   let total = Number(document.querySelector('#linhas').value);
   let quadros = -1;
   console.log(novo.length);
   if (novo.length != 0){
      atual = novo.length
      while (novo.length > 0){
         document.querySelector('.quadro').removeChild(novo[atual-1]);
         novo.pop();
         atual--;
      }
   }
   while (total > 0){
      quadros++;
      while (atual > 0){
         document.querySelector('.quadro').removeChild(novo[atual-1]);
         novo.pop();
         atual--;
      }
      while (atual < 11){
         if (total <= 0){
            break;
         }
         atual++;
         novo.push(document.createElement("p"));
         novo[atual-1].innerHTML = document.querySelector('#frase').value;
         document.querySelector('.quadro').appendChild(novo[atual-1]);
         total--;
      }
   }
   let adicionar = document.createElement("p");
   let frase = 'Numero de vezes que Bart apagou o quadro quadro ' + quadros + '.';
   adicionar.innerHTML= frase;
   document.querySelector('.resultado').appendChild(adicionar);
   let adicionar2 = document.createElement("p");
   adicionar2.innerHTML="Numero de frases que Bart escreveu sem apagar: "+ atual +".";
   document.querySelector('.resultado').appendChild(adicionar2);
});