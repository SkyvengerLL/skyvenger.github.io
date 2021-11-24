function teste() {
   let form = document.querySelector('.main__visible');
   let gran = document.querySelector('.main__invisible');
   let produto = document.querySelector('input[name=produto]:checked');
   let tempo = document.querySelector('input[name=tempo]:checked');
   let atendimento = document.querySelector('input[name=atendimento]:checked');
   let sugestao = document.querySelector('textarea[name=sugestoes]');
   let avproduto = document.querySelector('#av__produto');
   let avtempo = document.querySelector('#av__tempo');
   let avatendimento = document.querySelector('#av__atendimento');
   let avsugestao = document.querySelector('#av__sugestao');
   form.classList = 'main__invisible';
   gran.classList = 'main__visible';
   if (produto != null){
      avproduto.innerHTML = "Para o produto: "+ produto.value + "/10";
   }else{
      avproduto.innerHTML = "Não foi avaliado";
   }

   if (tempo != null){
      avtempo.innerHTML = "Para o tempo: "+ tempo.value + "/10";
   }else{
      avtempo.innerHTML = "Não foi avaliado";
   }

   if (atendimento != null){
      avatendimento.innerHTML = "Para o atendimento: "+ atendimento.value + "/10";
   }else{
      avatendimento.innerHTML = "Não foi avaliado";
   }

   if (sugestao.value == ""){
      avsugestao.innerHTML = "Nada foi sugerido";
   }else{
      avsugestao.innerHTML = "Sua sugestão foi: " + sugestao.value + ".";
   }
}