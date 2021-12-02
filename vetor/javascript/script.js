let vetor = [];
document.querySelector('#gerar').addEventListener('click', function (){
   if (vetor.length > 0){
      let i;
      let tamanho = vetor.length;
      for (i=0; i<tamanho;i++){
         vetor.pop();
      }
   }
   document.querySelector('#res__um').value = document.querySelector('#num__um').value;
   vetor.push(document.querySelector('#num__um').value);
   document.querySelector('#res__dois').value = document.querySelector('#num__dois').value;
   vetor.push(document.querySelector('#num__dois').value);
   document.querySelector('#res__tres').value = document.querySelector('#num__tres').value;
   vetor.push(document.querySelector('#num__tres').value);
   document.querySelector('#res__quadro').value = document.querySelector('#num__quadro').value;
   vetor.push(document.querySelector('#num__quadro').value);
   document.querySelector('#inverter').disabled = false;
   document.querySelector('#organizar').disabled = false;
});

document.querySelector('#inverter').addEventListener('click', function () {
   let invertido = [];
   let i;
   let tamanho = vetor.length;
   for (i=0; i<vetor.length;i++){
      invertido.push(vetor[vetor.length-i-1]);
   }
   for (i=0; i<tamanho;i++){
      vetor.pop();
   }
   vetor = invertido;
   document.querySelector('#res__um').value = vetor[0];
   document.querySelector('#res__dois').value = vetor[1];
   document.querySelector('#res__tres').value = vetor[2];
   document.querySelector('#res__quadro').value = vetor[3];
});

document.querySelector('#organizar').addEventListener('click', function () {
   let i;
   let j;
   let aux;
   for (i=0;i<vetor.length;i++){
      for (j=i+1; j<vetor.length; j++){
         if (vetor[j] < vetor[i]){
            aux = vetor[i];
            vetor[i] = vetor[j];
            vetor[j] = aux;
         }
      }
   }
   document.querySelector('#res__um').value = vetor[0];
   document.querySelector('#res__dois').value = vetor[1];
   document.querySelector('#res__tres').value = vetor[2];
   document.querySelector('#res__quadro').value = vetor[3];
});