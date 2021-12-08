let corredores=[];
let primeiro;
let segundo;
let terceiro;
let todosCarros = [];
let i;
let geradorDeCarros = {
   "popular": {
     "velocidade_maxima": {"min": 180, "max": 200}, 
     "velocidade_minima": {"min": 110, "max": 130}, 
     "derrapagem"       : {"min": 300, "max": 400},
     "level"            : 1,
     "experiencia"      : 0
   },
   "sport": {
     "velocidade_maxima": {"min": 195, "max": 215}, 
     "velocidade_minima": {"min": 125, "max": 145}, 
     "derrapagem": {"min": 200, "max": 300},
     "level"            : 1,
     "experiencia"      : 0
   },
   "supersport": {
     "velocidade_maxima": {"min": 210, "max": 230}, 
     "velocidade_minima": {"min": 140, "max": 160}, 
     "derrapagem": {"min": 100, "max": 175},
     "level"            : 1,
     "experiencia"      : 0
   },
};

function gerarCarro(pessoa, opcao){
   let tipoDeCarro = Math.random() * 100;
   let carro;
   let tooltip = document.getElementById("carro"+pessoa+"Detalhes"+opcao);

   if (tipoDeCarro <= 60){
      carro = {
         "piloto"           : pessoa,
         "tipoDoCarro"      : "Popular",
         "carro"            : {
            "velocidade"    : {
               "max"        :  Math.floor(Math.random() * (geradorDeCarros["popular"]["velocidade_maxima"]["max"] - geradorDeCarros["popular"]["velocidade_maxima"]["min"])) + geradorDeCarros["popular"]["velocidade_maxima"]["min"],
               "min"        :  Math.floor(Math.random() * (geradorDeCarros["popular"]["velocidade_minima"]["max"] - geradorDeCarros["popular"]["velocidade_minima"]["min"])) + geradorDeCarros["popular"]["velocidade_minima"]["min"]
            },
            "derrapagem"    : Math.floor(Math.random() * geradorDeCarros["popular"]["derrapagem"])
         },
         "velocidade"       : 0,
         "contador"         : 0,
         "level"            : 1,
         "experiencia"      : 0
      };
   }else{
      if (tipoDeCarro >= 95){
         carro = {
            "piloto"         : pessoa,
            "tipoDoCarro"    : "Super Sport",
            "carro"          : {
               "velocidade"  : {
                  "max"      :  Math.floor(Math.random() * (geradorDeCarros["supersport"]["velocidade_maxima"]["max"] - geradorDeCarros["supersport"]["velocidade_maxima"]["min"])) + geradorDeCarros["sport"]["velocidade_maxima"]["min"],
                  "min"      :  Math.floor(Math.random() * (geradorDeCarros["supersport"]["velocidade_minima"]["max"] - geradorDeCarros["supersport"]["velocidade_minima"]["min"])) + geradorDeCarros["sport"]["velocidade_minima"]["min"]
                },
               "derrapagem"  : Math.floor(Math.random() * geradorDeCarros["supersport"]["derrapagem"])
            },
            "velocidade"       : 0,
            "contador"         : 0,
            "level"            : 1,
            "experiencia"      : 0 
         };
      }else{
         carro = {
            "piloto"           : pessoa,
            "tipoDoCarro"      : "Sport",
            "carro"            : {
               "velocidade"    : {
                  "max"        :  Math.floor(Math.random() * (geradorDeCarros["sport"]["velocidade_maxima"]["max"] - geradorDeCarros["sport"]["velocidade_maxima"]["min"])) + geradorDeCarros["sport"]["velocidade_maxima"]["min"],
                  "min"        :  Math.floor(Math.random() * (geradorDeCarros["sport"]["velocidade_minima"]["max"] - geradorDeCarros["sport"]["velocidade_minima"]["min"])) + geradorDeCarros["sport"]["velocidade_minima"]["min"]
                },
               "derrapagem"    : (Math.floor(Math.random() * (geradorDeCarros["sport"]["derrapagem"]["max"] - geradorDeCarros["sport"]["derrapagem"]["min"])) + geradorDeCarros["sport"]["derrapagem"]["min"])/100
            },
            "velocidade"       : 0,
            "contador"         : 0,
            "level"            : 1,
            "experiencia"      : 0 
         };
      }
   }
   todosCarros.push(carro);
   tooltip.innerHTML = "<strong>" + carro["tipoDoCarro"] + "</strong>\nVelocidade Minima:" + carro["carro"]["velocidade"]["min"] + "\nVelocidade Maxima:" + carro["carro"]["velocidade"]["max"] + "\nDerrapagem:" + carro["carro"]["derrapagem"];
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
   let l;
   let aux;

   corredores.forEach(carro => {
      carro["experiencia"] = 0;
      carro["contador"] = 0;
      carro["level"] = 1;
   });

   for (i=0; i<voltas;i++){
      corredores.forEach(carro => {
         carro["velocidade"] = (Math.floor(Math.random() * carro["carro"]["velocidade"]["max"] - carro["carro"]["velocidade"]["min"]) + carro["carro"]["velocidade"]["min"])*((100-carro["carro"]["derrapagem"])/100);
      });
      for (j=0; j<3; j++){
         for (l=j; l<3;l++){
            if (corredores[j]["velocidade"] < corredores[l]["velocidade"]){
               aux = corredores[j];
               corredores[j] = corredores[l];
               corredores[l] = aux;
            }
         }
      }

      corredores[0]["experiencia"] += 200;
      corredores[0]["contador"]++;
      corredores[1]["experiencia"] += 120;
      corredores[2]["experiencia"] += 50;

      corredores.forEach(carro => {
         if (carro["level"] < 10){
            if (carro["experiencia"] >= 450){
               carro["experiencia"] -= 450;
               carro["level"]++;
               carro["carro"]["velocidade"]["max"] += carro["carro"]["velocidade"]["max"]*0.01;
               carro["carro"]["velocidade"]["min"] += carro["carro"]["velocidade"]["min"]*0.01;
            }
         }
      });
   }

   for (i=0; i<3;i++){
      for (j=i; j<3;j++){
         if (corredores[i]["contador"] < corredores[j]["contador"]){
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
   document.querySelector('#primeiro').innerHTML = "1° " + primeiro["piloto"] + " Level: " + primeiro["level"] + " Experiência " + primeiro["experiencia"];
   document.querySelector('#segundo').innerHTML = "2° " + segundo["piloto"] + " Level: " + segundo["level"] + " Experiência " + segundo["experiencia"];
   document.querySelector('#terceiro').innerHTML = "3° " + terceiro["piloto"] + " Level: " + terceiro["level"] + " Experiência " + terceiro["experiencia"];
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