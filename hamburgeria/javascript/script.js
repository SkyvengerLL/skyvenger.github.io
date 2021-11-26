document.querySelector('#pao').addEventListener('change', function (){
   let valor = document.querySelector('#valor_pao');
   let esse = document.querySelector('#pao');
   if (esse.value == 'frances'){
      valor.value = '3.00';
   }
   if (esse.value == 'australiano'){
      valor.value = '8.00';
   }
   if (esse.value == 'brioche'){
      valor.value = '6.00';
   }
});

document.querySelector('#carne').addEventListener('change', function (){
   let valor = document.querySelector('#valor_carne');
   let esse = document.querySelector('#carne');
   if (esse.value == 'picanha'){
      valor.value = '13.00';
   }
   if (esse.value == 'costela'){
      valor.value = '10.00';
   }
   if (esse.value == 'vegano'){
      valor.value = '12.00';
   }
});

document.querySelector('#salada').addEventListener('change', function (){
   let valor = document.querySelector('#valor_salada');
   let esse = document.querySelector('#salada');
   if ((esse.value == 'alface') || (esse.value == 'tomate')){
      valor.value = '1.50';
   }
   if (esse.value == 'sem'){
      valor.value = '0.00';
   }
});

document.querySelector('#queijo').addEventListener('change', function (){
   let valor = document.querySelector('#valor_queijo');
   let esse = document.querySelector('#queijo');
   if ((esse.value == 'mussarela') || (esse.value == 'prato')){
      valor.value = '3.00';
   }
   if (esse.value == 'cheddar'){
      valor.value = '5.00';
   }
});

document.querySelector('#calcular_preco').addEventListener('click', function (){
   let valor_pao = document.querySelector('#valor_pao');
   let valor_carne = document.querySelector('#valor_carne');
   let valor_salada = document.querySelector('#valor_salada');
   let valor_queijo = document.querySelector('#valor_queijo');
   let valor_total = document.querySelector('#valor_total');
   let total = document.querySelector('#pagar');
   valor_total.value = Number(valor_pao.value) + Number(valor_carne.value) + Number(valor_salada.value) + Number(valor_queijo.value);
   total.innerHTML = "<button id='bnt_pagamento'>Pagar</button>";
   document.querySelector('#bnt_pagamento').addEventListener('click', function () {
      let mensagem = document.querySelector('#messagem');
      mensagem.innerHTML = "<h2>Muito Obrigado Pela Compra</h2><p>Tenha um bom Lanche e volte sempre</p>"
   });
});