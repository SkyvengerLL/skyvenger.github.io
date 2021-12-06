let corredores=[];
let primeiro;
let segundo;
let terceiro;
let todosCarros = [];
let i;

function gerarCarro(pessoa, opcao){
   let tipoDeCarro = Math.floor(Math.random() * 100);
   let carro;
   let tooltip = document.getElementById("carro"+pessoa+"Detalhes"+opcao);

   if (tipoDeCarro <= 60){
      carro = {
         piloto           : pessoa,
         velocidadeMinima : Math.floor(Math.random() * 20) + 110,
         velocidadeMaxima : Math.floor(Math.random() * 20) + 180,
         derrapagem       : (Math.floor(Math.random() * 100) + 3)/100,
         velocidade       : 0,
         contador         : 0
      };
   }else{
      if (tipoDeCarro <= 95){
         carro = {
            piloto           : pessoa,
            velocidadeMinima : Math.floor(Math.random() * 20) + 140,
            velocidadeMaxima : Math.floor(Math.random() * 20) + 210,
            derrapagem       : (Math.floor(Math.random() * 100) + 2)/100,
            velocidade       : 0,
            contador         : 0
         };
      }else{
         carro = {
            piloto           : pessoa,
            velocidadeMinima : Math.floor(Math.random() * 20) + 125,
            velocidadeMaxima : Math.floor(Math.random() * 20) + 195,
            derrapagem       : (Math.floor(Math.random() * 75) + 1)/100,
            velocidade       : 0,
            contador         : 0
         };
      }
   }
   todosCarros.push(carro);
   tooltip.innerHTML = "Velocidade Minima:" + carro.velocidadeMinima + "\nVelocidade Maxima:" + carro.velocidadeMaxima + "\nDerrapagem:" + carro.derrapagem;
}

function carros (){
   let pedro = todosCarros[Number(document.querySelector('input[name=carro__pedro]:checked').value)];
   let juca = todosCarros[Number(document.querySelector('input[name=carro__juca]:checked').value)];
   let edna = todosCarros[Number(document.querySelector('input[name=carro__edna]:checked').value)];
   corredores.push(pedro);
   corredores.push(juca);
   corredores.push(edna);
}

function corrida (){
   let i;
   let j;
   let aux;
   let maior = {
      corredor : '',
      velocidade: 0
   };
   for (i=0; i<voltas;i++){
      corredores.forEach(element => {
         element.velocidade = (Math.floor(Math.random() * element.velocidadeMaxima - element.velocidadeMinima) + element.velocidadeMinima)*((100-element.derrapagem)/100);
      });
      for (j=0; j<3; j++){
         if (maior.velocidade < corredores[j].velocidade){
            maior.corredor = corredores[j].corredor;
            maior.velocidade = corredores[j].velocidade;
         }
      }
      corredores.forEach(element =>{
         if (element.corredor == maior.corredor){
            element.vitorias++;
         }
      });
      maior.velocidade=0;
   }

   for (i=0; i<3;i++){
      for (j=i; j<3;j++){
         if (corredores[i].contador < corredores[j].contador){
            aux = corredores[i];
            corredores[i] = corredores[j];
            corredores[j] = aux;
         }
      }
   }
   primeiro = corredores[0];
   segundo = corredores[1];
   terceiro = corredores[2];
}

function premio (){
   document.querySelector('#primeiro').innerHTML = "1°" + primeiro.piloto;
   document.querySelector('#segundo').innerHTML = "2°" + segundo.piloto;
   document.querySelector('#terceiro').innerHTML = "3°" + terceiro.piloto;
}

document.querySelector('#rapida').addEventListener('click', function (){
   voltas = 10;
   carros ();
   corrida ();
   premio ();
});

document.querySelector('#premio').addEventListener('click', function (){
   voltas = 70;
   carros ();
   corrida ();
   premio ();
});

document.querySelector('#enduro').addEventListener('click', function (){
   voltas = 160;
   carros ();
   corrida ();
   premio ();
});

document.querySelector('#personalizado').addEventListener('click', function (){
   voltas = document.querySelector('#voltas').value;
   carros ();
   corrida ();
   premio ();
});

for (i=1; i <= 5; i++){
   gerarCarro ("Pedro", i);
}

for (i=1; i <= 5; i++){
   gerarCarro ("Juca", i);
}

for (i=1; i <= 5; i++){
   gerarCarro ("Edna", i);
}