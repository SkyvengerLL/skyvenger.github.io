document.querySelector('#divisao').addEventListener('click', function (){
   let selecionado = document.querySelector('.selecionado');
   if (selecionado == null){
      document.querySelector('#divisao').classList = "selecionado";
   }else{
      selecionado.classList = '';
      document.querySelector('#divisao').classList = "selecionado";
   }
});

document.querySelector('#multiplicacao').addEventListener('click', function (){
   let selecionado = document.querySelector('.selecionado');
   if (selecionado == null){
      document.querySelector('#multiplicacao').classList = "selecionado";
   }else{
      selecionado.classList = '';
      document.querySelector('#multiplicacao').classList = "selecionado";
   }
});

document.querySelector('#subtracao').addEventListener('click', function (){
   let selecionado = document.querySelector('.selecionado');
   if (selecionado == null){
      document.querySelector('#subtracao').classList = "selecionado";
   }else{
      selecionado.classList = '';
      document.querySelector('#subtracao').classList = "selecionado";
   }
});

document.querySelector('#adicao').addEventListener('click', function (){
   let selecionado = document.querySelector('.selecionado');
   if (selecionado == null){
      document.querySelector('#adicao').classList = "selecionado";
   }else{
      selecionado.classList = '';
      document.querySelector('#adicao').classList = "selecionado";
   }
});

document.querySelector('#igual').addEventListener('click', function (){
   let selecionado = document.querySelector('.selecionado');
   let campo_1 = document.querySelector('#campo_um');
   let campo_2 = document.querySelector('#campo_dois');
   let resultado = document.querySelector('#resultado');
   if(selecionado == null){
      resultado.value = "Não foi selecionado um operador";
   }
   if(selecionado.id == 'divisao'){
      if (Number(campo_2.value) == 0){
         resultado.innerHTML = "Infinito";
         return;
      }else{
         resultado.innerHTML = Number(campo_1.value) / Number(campo_2.value);
         return;
      }
   }
   if(selecionado.id == 'multiplicacao'){
      resultado.innerHTML = Number(campo_1.value) * Number(campo_2.value);
      return;
   }
   if(selecionado.id == 'subtracao'){
      resultado.innerHTML = Number(campo_1.value) - Number(campo_2.value);
      return;
   }
   if(selecionado.id == 'adicao'){
      resultado.innerHTML = Number(campo_1.value) + Number(campo_2.value);
      return;
   }
});

document.querySelector('#resetar').addEventListener('click', function (){
   let selecionado = document.querySelector('.selecionado');
   let campo_1 = document.querySelector('#campo_um');
   let campo_2 = document.querySelector('#campo_dois');
   let resultado = document.querySelector('#resultado');
   selecionado.classList = '';
   resultado.value = '';
   campo_1.value = '0';
   campo_2.value = '0';
});