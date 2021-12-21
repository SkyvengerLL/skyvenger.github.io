function callback(argumento){
   console.log(argumento);
   let div = document.createElement('div');
   div.innerHTML = argumento;
   document.getElementById("repeticao").appendChild(div);
}

function chamar(texto, funcao){
   let papagaio = "Gharrr..." + texto;
   funcao(papagaio);
}

document.getElementById("repita").addEventListener('click', function (){
   let texto = document.getElementById("frase").value;
   chamar(texto, callback);
});