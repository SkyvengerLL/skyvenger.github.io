const clientes = [];
const formatter = new Intl.NumberFormat('pt-BR', {
   minimumFractionDigits: 2,      
   maximumFractionDigits: 2,
});
const datas = (listaAntiga, novoValor) => {
   let i;
   for (i=0; i<listaAntiga.length; i++){
      if (listaAntiga[i].data == novoValor.data){
         listaAntiga[i].cliente.push(novoValor);
         return listaAntiga;
      }
   }
   listaAntiga.push({
      data    : novoValor.data,
      cliente : [novoValor]
   });
   return listaAntiga;
};

document.getElementById("botaoDeSubmicao").addEventListener('click', function (){
   let nome = document.getElementById("nomeComprador");
   let preco = document.getElementById("preco");
   let data = document.getElementById("data");
   let tabela =  document.getElementById("tabela");
   let cliente = {
      cliente: nome.value,
      preco  : preco.value,
      data   : data.value
   };
   if (nome.value == ""){
      nome.style="border: 1px solid #be4527;";
      if (preco.value == ""){
         preco.style="border: 1px solid #be4527;";
      }
      if (data.value == ""){
         data.style="border: 1px solid #be4527;";
      }
      return;
   }
   if (preco.value == ""){
      preco.style="border: 1px solid #be4527;";
      if (data.value == ""){
         data.style="border: 1px solid #be4527;";
      }
      return;
   }
   if (data.value == ""){
      data.style="border: 1px solid #be4527;";
      return;
   }
   
   nome.style="border: 1px solid #0f1014;";
   preco.style="border: 1px solid #0f1014;";
   data.style="border: 1px solid #0f1014;";

   clientes.push(cliente);

   let linha = tabela.insertRow(cliente.length);
   let nomeLinha = linha.insertCell(0);
   let precoLinha = linha.insertCell(1);
   let dataLinha = linha.insertCell(2);
   let jurosLinha = linha.insertCell(3);
   let precoTotal = linha.insertCell(4);

   nomeLinha.innerHTML = nome.value;
   precoLinha.innerHTML = formatter.format(preco.value);
   dataLinha.innerHTML = data.value;
   jurosLinha.innerHTML = "";
   precoTotal.innerHTML = formatter.format(preco.value);
   document.getElementById('formulario').reset();
});

function calculo(cliente){
   let hoje = new Date();
   let vencimento = new Date(cliente.data);
   let dias = Math.floor(hoje.getTime() - vencimento.getTime())/(1000 * 3600 * 24);
   if (dias < 0){
      return {
         cliente: cliente,
         juros  : 0
      };
   }
   let valor = (Math.floor(cliente.preco*(dias*0.001))*100)/100;
   valor += cliente.preco*0.02;
   return {
      cliente: cliente,
      juros  : valor
   };
}

document.getElementById("juros").addEventListener('click', function (){
   let juros = clientes.map(calculo);
   let tabela =  document.getElementById("tabela");
   let i;
   for (i=0; i< juros.length;i++){
      tabela.rows[1+i].cells[3].innerHTML = formatter.format(juros[i].juros);
      let precoTotal = (Number(clientes[i].preco) + juros[i].juros)
      tabela.rows[1+i].cells[4].innerHTML = formatter.format(precoTotal);
   }
});

document.getElementById("agruparData").addEventListener('click', function (){
   
   console.log(clientes.reduce(datas, []));
});