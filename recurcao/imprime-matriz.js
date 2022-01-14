function imprimirMatriz(matriz){
   if (Array.isArray(matriz)){
      for (let i=0; i< matriz.length;i++){
          imprimirMatriz(matriz[i]);
      }
   }
   else{
      console.log(matriz);
   }
}

const matriz = [];

const dimensoes = Math.floor(Math.random()*5)+1;

for (let i=0; i<dimensoes;i++){
   let tamanho = Math.floor(Math.random()*99)+1;
   matriz.push([]);
   for (let j=0; j<tamanho; j++){
      matriz[i].push(Math.random()*120)
   }
}

imprimirMatriz(matriz);