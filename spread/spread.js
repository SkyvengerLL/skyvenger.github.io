function multiplicar(a,b,c,d){
   return a*b*c*d;
}

function concatenar(vetorA, vetorB){
   return [...vetorA, ...vetorB];
}

function maiorSorteio(){
   const vetor = [];
   for(let i=0;i<10;i++){
      vetor.push(Math.floor(Math.random()*100)+1);
   }
   return Math.max(...vetor);
}

const vetor=[1,2,3,4];

console.log(multiplicar(...vetor));

console.log(concatenar(vetor, [5,6,7]));

console.log(maiorSorteio());