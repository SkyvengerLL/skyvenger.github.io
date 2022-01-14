const fatorial = (numero) => {
   if (!isNaN(numero)){
      if (numero<0){
         return undefined;
      }
      if(numero === 0){
         return 1;
      }
      if(numero === 1){
         return 1;
      }
      return numero*fatorial(numero-1);
   }
}

console.log(fatorial(-5));

console.log(fatorial(0));

console.log(fatorial(6));