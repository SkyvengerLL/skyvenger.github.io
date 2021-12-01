let pedro=false;
let juca=false;
let edna=false;
let voltas=0;
let corredores=[];
let primeiro;
let segundo;
let terceiro;

document.querySelector('#padraoPedro').addEventListener('click', function (){
   document.querySelector('#carroPedro').classList = "ativo";
   document.querySelector('#aleatorio1').classList = "";
   pedro=false;
});

document.querySelector('#aleatorioPedro').addEventListener('click', function (){
   document.querySelector('#carroPedro').classList = "";
   document.querySelector('#aleatorio1').classList = "ativo";
   document.querySelector('#pedroMin').value = Math.floor(Math.random() * 50) + 100;
   document.querySelector('#pedroMax').value = Math.floor(Math.random() * 80) + 200;
   document.querySelector('#pedroDerrapagem').value = Math.floor(Math.random() * 7) + 1;
   pedro=true;
});

document.querySelector('#padraoJuca').addEventListener('click', function (){
   document.querySelector('#carroJuca').classList = "ativo";
   document.querySelector('#aleatorio2').classList = "";
   juca=false;
});

document.querySelector('#aleatorioJuca').addEventListener('click', function (){
   document.querySelector('#carroJuca').classList = "";
   document.querySelector('#aleatorio2').classList = "ativo";
   document.querySelector('#jucaMin').value = Math.floor(Math.random() * 50) + 100;
   document.querySelector('#jucaoMax').value = Math.floor(Math.random() * 80) + 200;
   document.querySelector('#jucaDerrapagem').value = Math.floor(Math.random() * 7) + 1;
   juca=true;
});

document.querySelector('#padraoEdna').addEventListener('click', function (){
   document.querySelector('#carroJuca').classList = "ativo";
   document.querySelector('#aleatorio3').classList = "";
   edna=false;
});

document.querySelector('#aleatorioEdna').addEventListener('click', function (){
   document.querySelector('#carroJuca').classList = "";
   document.querySelector('#aleatorio3').classList = "ativo";
   document.querySelector('#ednaMin').value = Math.floor(Math.random() * 50) + 100;
   document.querySelector('#ednaMax').value = Math.floor(Math.random() * 80) + 200;
   document.querySelector('#ednaDerrapagem').value = Math.floor(Math.random() * 7) + 1;
   edna=true;
});

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


function carros (){
   if (pedro){
      corredores.push({
         corredor         : 'Pedro',
         velocidadeMinima : document.querySelector('#pedroMin').value,
         velocidadeMaxima : document.querySelector('#pedroMax').value,
         derrapagem       : document.querySelector('#pedroDerrapagem').value,
         velocidade       : 0,
         vitorias         : 0
      });
   }else{
      corredores.push({
         corredor         : 'Pedro',
         velocidadeMinima : 150,
         velocidadeMaxima : 230,
         derrapagem       : 3,
         velocidade       : 0,
         vitorias         : 0
      });
   }
   if (juca){
      corredores.push({
         corredor         : 'Juca',
         velocidadeMinima : document.querySelector('#jucaMin').value,
         velocidadeMaxima : document.querySelector('#jucaMax').value,
         derrapagem       : document.querySelector('#jucaDerrapagem').value,
         velocidade       : 0,
         vitorias         : 0
      });
   }else{
      corredores.push({
         corredor         : 'Juca',
         velocidadeMinima : 120,
         velocidadeMaxima : 260,
         derrapagem       : 5,
         velocidade       : 0,
         vitorias         : 0
      });
   }
   if (edna){
      corredores.push({
         corredor         : 'Edna',
         velocidadeMinima : document.querySelector('#ednaMin').value,
         velocidadeMaxima : document.querySelector('#ednaMax').value,
         derrapagem       : document.querySelector('#ednaDerrapagem').value,
         velocidade       : 0,
         vitorias         : 0
      });
   }else{
      corredores.push({
         corredor         : 'Edna',
         velocidadeMinima : 180,
         velocidadeMaxima : 220,
         derrapagem       : 1,
         velocidade       : 0,
         vitorias         : 0
      });
   }
}

function corrida (){
   let i;
   let j;
   let maior = {
      corredor : '',
      velocidade: 0
   };
   for (i=0; i<voltas;i++){
      corredores.forEach(element => {
         element.velocidade = Math.floor(Math.random() * element.velocidadeMaxima - element.velocidadeMinima) + element.velocidadeMinima;
         element.velocidade = element.velocidade - (element.velocidade/100)*element.derrapagem;
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
   if ((corredores[0].vitorias > corredores[1].vitorias) && (corredores[0].vitorias > corredores[2].vitorias)){
      primeiro = corredores[0];
      if (corredores[1].vitorias > corredores[2].vitorias){
         segundo = corredores[1];
         terceiro = corredores[2];
      }
      if (corredores[1].vitorias < corredores[2].vitorias){
         segundo = corredores[2];
         terceiro = corredores[1];
      }
      else{
         corredores[1].velocidade = Math.floor(Math.random() * corredores[1].velocidadeMaxima - corredores[1].velocidadeMinima) + corredores[1].velocidadeMinima;
         corredores[1].velocidade = corredores[1].velocidade - (corredores[1].velocidade/100)*corredores[1].derrapagem;
         corredores[2].velocidade = Math.floor(Math.random() * corredores[2].velocidadeMaxima - corredores[2].velocidadeMinima) + corredores[2].velocidadeMinima;
         corredores[2].velocidade = corredores[2].velocidade - (corredores[2].velocidade/100)*corredores[2].derrapagem;
         while (corredores[1].velocidade==corredores[2].velocidade){
            corredores[1].velocidade = Math.floor(Math.random() * corredores[1].velocidadeMaxima - corredores[1].velocidadeMinima) + corredores[1].velocidadeMinima;
            corredores[1].velocidade = corredores[1].velocidade - (corredores[1].velocidade/100)*corredores[1].derrapagem;
            corredores[2].velocidade = Math.floor(Math.random() * corredores[2].velocidadeMaxima - corredores[2].velocidadeMinima) + corredores[2].velocidadeMinima;
            corredores[2].velocidade = corredores[2].velocidade - (corredores[2].velocidade/100)*corredores[2].derrapagem;
         }
         if (corredores[1].velocidade < corredores[2].velocidade){
            segundo = corredores[2];
            terceiro = corredores[1];
         }else{
            segundo = corredores[1];
            terceiro = corredores[2];
         }
      }
   }
   else if ((corredores[1].vitorias > corredores[0].vitorias) && (corredores[1].vitorias > corredores[2].vitorias)){
      primeiro = corredores[1];
      if (corredores[0].vitorias > corredores[2].vitorias){
         segundo = corredores[0];
         terceiro = corredores[2];
      }
      if (corredores[0].vitorias < corredores[2].vitorias){
         segundo = corredores[2];
         terceiro = corredores[0];
      }
      else{
         corredores[0].velocidade = Math.floor(Math.random() * corredores[0].velocidadeMaxima - corredores[0].velocidadeMinima) + corredores[0].velocidadeMinima;
         corredores[0].velocidade = corredores[0].velocidade - (corredores[0].velocidade/100)*corredores[0].derrapagem;
         corredores[2].velocidade = Math.floor(Math.random() * corredores[2].velocidadeMaxima - corredores[2].velocidadeMinima) + corredores[2].velocidadeMinima;
         corredores[2].velocidade = corredores[2].velocidade - (corredores[2].velocidade/100)*corredores[2].derrapagem;
         while (corredores[0].velocidade==corredores[2].velocidade){
            corredores[0].velocidade = Math.floor(Math.random() * corredores[0].velocidadeMaxima - corredores[0].velocidadeMinima) + corredores[0].velocidadeMinima;
            corredores[0].velocidade = corredores[0].velocidade - (corredores[0].velocidade/100)*corredores[0].derrapagem;
            corredores[2].velocidade = Math.floor(Math.random() * corredores[2].velocidadeMaxima - corredores[2].velocidadeMinima) + corredores[2].velocidadeMinima;
            corredores[2].velocidade = corredores[2].velocidade - (corredores[2].velocidade/100)*corredores[2].derrapagem;
         }
         if (corredores[0].velocidade < corredores[2].velocidade){
            segundo = corredores[2];
            terceiro = corredores[0];
         }else{
            segundo = corredores[0];
            terceiro = corredores[2];
         }
      }
   }
   else if ((corredores[2].vitorias > corredores[1].vitorias) && (corredores[0].vitorias < corredores[2].vitorias)){
      primeiro = corredores[2];
      if (corredores[0].vitorias > corredores[1].vitorias){
         segundo = corredores[0];
         terceiro = corredores[1];
      }
      if (corredores[0].vitorias < corredores[1].vitorias){
         segundo = corredores[1];
         terceiro = corredores[0];
      }
      else{
         corredores[0].velocidade = Math.floor(Math.random() * corredores[0].velocidadeMaxima - corredores[0].velocidadeMinima) + corredores[0].velocidadeMinima;
         corredores[0].velocidade = corredores[0].velocidade - (corredores[0].velocidade/100)*corredores[0].derrapagem;
         corredores[1].velocidade = Math.floor(Math.random() * corredores[1].velocidadeMaxima - corredores[1].velocidadeMinima) + corredores[1].velocidadeMinima;
         corredores[1].velocidade = corredores[1].velocidade - (corredores[1].velocidade/100)*corredores[1].derrapagem;
         while (corredores[0].velocidade==corredores[2].velocidade){
            corredores[0].velocidade = Math.floor(Math.random() * corredores[0].velocidadeMaxima - corredores[0].velocidadeMinima) + corredores[0].velocidadeMinima;
            corredores[0].velocidade = corredores[0].velocidade - (corredores[0].velocidade/100)*corredores[0].derrapagem;
            corredores[1].velocidade = Math.floor(Math.random() * corredores[1].velocidadeMaxima - corredores[1].velocidadeMinima) + corredores[1].velocidadeMinima;
            corredores[1].velocidade = corredores[1].velocidade - (corredores[1].velocidade/100)*corredores[1].derrapagem;
         }
         if (corredores[0].velocidade < corredores[1].velocidade){
            segundo = corredores[1];
            terceiro = corredores[0];
         }else{
            segundo = corredores[0];
            terceiro = corredores[1];
         }
      }
   }
   else{
      let second = {
         corredor : '',
         velocidade : 0
      };
      corredores.forEach(element => {
         element.velocidade = Math.floor(Math.random() * element.velocidadeMaxima - element.velocidadeMinima) + element.velocidadeMinima;
         element.velocidade = element.velocidade - (element.velocidade/100)*element.derrapagem;
      });
      for (j=0; j<3; j++){
         if (maior.velocidade < corredores[j].velocidade){
            maior.corredor = corredores[j].corredor;
            maior.velocidade = corredores[j].velocidade;
         }
      }
      for (j=0; j<3; j++){
         if ((maior.corredor != corredores[j].corredor) && (second.velocidade < corredores[j].velocidade)){
            second.corredor = corredores[j].corredor;
            second.velocidade = corredores[j].velocidade;
         }
      }
      corredores.forEach(element =>{
         if (element.corredor == maior.corredor){
            primeiro=element;
         }
         if (element.corredor == second.corredor){
            segundo=element;
         }
         else{
            terceiro=element;
         }
      });
   }
}

function premio (){
   document.querySelector('#primeiro').innerHTML = primeiro.corredor;
   document.querySelector('#segundo').innerHTML = segundo.corredor;
   document.querySelector('#terceiro').innerHTML = terceiro.corredor;
}