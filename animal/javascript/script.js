function fillTitle (){
   document.querySelector("#animal_name").innerHTML="Raposa Vermelha";
}

function fillText (){
   document.querySelector("#animal_description").innerHTML="A raposa-vermelha é um mamífero onívoro e oportunista de médio porte. Sua pelugem possui uma cor castanha-avermelhada. Sua dieta consiste, geralmente, de animais de pequeno porte, como coelhos, roedores e algumas aves, eles também podem comer ovos e frutos. Normalmente possui habitos noturnos.";
   document.querySelector("#animal_habitat").innerHTML="Seu Habitat natural é no hemisfério Norte, principalmente América do Norte, Ásia e Europa. No entanto, ela pode ser encontrada na Austrália também, devido a interferência humana. Ela é considerada uma espécie invasiva lá.";
   document.querySelector("#animal_font").innerHTML="Fontes Usadas:";
}

function fonts (){
   document.querySelector("#wikipedia").innerHTML = "Wikipedia";
   document.querySelector("#wikipedia").href = "https://pt.wikipedia.org/wiki/Raposa-vermelha";
   document.querySelector("#wikipedia").target = "_blank";
   document.querySelector("#a_z_animals").innerHTML = "A-Z-Animals";
   document.querySelector("#a_z_animals").href = "https://a-z-animals.com/animals/red-fox/";
   document.querySelector("#a_z_animals").target = "_blank";
   document.querySelector("#info_escola").innerHTML = "Info Escola";
   document.querySelector("#info_escola").href = "https://www.infoescola.com/mamiferos/raposa-vermelha/";
   document.querySelector("#info_escola").target = "_blank";
}

function fillImages(){
   document.querySelector("#image_1").setAttribute("src","assets/red-fox.jpg");
   document.querySelector("#image_2").setAttribute("src","assets/red-fox-3.jpg");
   document.querySelector("#image_3").setAttribute("src","assets/red-fox-2.jpg");
   document.querySelector("#image_4").setAttribute("src","assets/red-fox-pup.jpg");
}

function animalSection(){
   fillTitle ();
   fillText ();
   fonts ();
}

animalSection();
fillImages();
