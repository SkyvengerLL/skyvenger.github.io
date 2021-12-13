const clientes = [];

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

   nomeLinha.innerHTML = nome.value;
   precoLinha.innerHTML = preco.value;
   dataLinha.innerHTML = data.value;
   document.getElementById('formulario').reset();
});

function listar (){
   let listaDeClientes = [];
   for (let i = 0; i < clientes.length; i++) {
      if (!listaDeClientes.includes(clientes[i].cliente)) {
         listaDeClientes.push(clientes[i].cliente);
      }
   }
   return listaDeClientes;
}

function calculo(cliente, clientes){
   let i;
   let valor=0;
   let hoje = new Date("12/13/2021");
   let cont = 0;
   for (i=0; i < clientes.length; i++){
      if (cliente == clientes[i].cliente){
         let vencimento = new Date(clientes[i].data);
         let dias = (hoje.getTime() - vencimento.getTime())/(1000 * 3600 * 24);
         valor += Number(clientes[i].preco) + clientes[i].preco*(dias*0.001);
         cont++;
      }
   }
   valor += valor*(cont-1)*0.02;
   return {
      cliente: cliente,
      preco  : valor
   };
}

document.getElementById("juros").addEventListener('click', function (){
   let listaDeClientes = listar ();

   let juros = listaDeClientes.map(function(x) { 
      return calculo(x, clientes); 
   });

   let secao = document.getElementById("secaoJuros");
   let tabela;
   if (secao == undefined){
      secao = document.createElement("SECTION");
      secao.setAttribute("id", "juros");
      tabela = document.createElement("TABLE");
      tabela.setAttribute("id", "jurosTabela");
      let main = document.getElementById("main");
      secao.appendChild(tabela);
      main.appendChild(secao);
   }else{
      tabela = document.getElementById("jurosTabela");
      tabela.innerHTML = "";
   }
   let linha = tabela.insertRow(0);
   let nomeCliente = linha.insertCell(0);
   let precoTotal = linha.insertCell(1);

   nomeCliente.innerHTML = "<strong>Nome do Cliente</strong>";
   precoTotal.innerHTML = "<strong>Preço total a pagar (R$)</strong>";

   let i;
   for (i = 0; i < juros.length; i++){
      let linha = tabela.insertRow(1+i);
      let nomeCliente = linha.insertCell(0);
      let precoTotal = linha.insertCell(1);
      nomeCliente.innerHTML = juros[i].cliente;
      precoTotal.innerHTML = juros[i].preco;
   }


});