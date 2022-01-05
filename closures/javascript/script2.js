function criarMultiplicador(x){
   return function (y){
      console.log(x*y)
      return x*y;
   }
}

let multiplicapor4 = criarMultiplicador(4);
let multiplicapor6 = criarMultiplicador(6);
let multiplicapor3 = criarMultiplicador(3);

multiplicapor4(8);
multiplicapor6(10);
multiplicapor3(13);

multiplicapor4(multiplicapor6(2));
multiplicapor4(multiplicapor3(12));
multiplicapor6(multiplicapor4(5));
multiplicapor6(multiplicapor3(15));
multiplicapor3(multiplicapor6(1));
multiplicapor3(multiplicapor4(60));

multiplicapor4(multiplicapor6(multiplicapor3(197)));