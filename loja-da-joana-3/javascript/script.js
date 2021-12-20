const clientes = [];
let filtro = {
   filtro     : false, 
   dataInicio : undefined,
   dataFim    : undefined,
   precoInicio: undefined,
   precoFim   : undefined
};
let mostrar = [];
const formatter = new Intl.NumberFormat('pt-BR', {
   minimumFractionDigits: 2,      
   maximumFractionDigits: 2,
});
const datas = (listaAntiga, novoValor) => {
   let i;
   for (i=0; i<listaAntiga.length; i++){
      if (listaAntiga[i].data == novoValor.data){
         listaAntiga[i].clientes.push(novoValor);
         return listaAntiga;
      }
   }
   listaAntiga.push({
      data     : novoValor.data,
      clientes : [novoValor]
   });
   return listaAntiga;
};
const nomes = (listaAntiga, novoValor) => {
   let i;
   for (i=0; i<listaAntiga.length; i++){
      if (listaAntiga[i].cliente == novoValor.cliente){
         listaAntiga[i].clientes.push(novoValor);
         return listaAntiga;
      }
   }
   listaAntiga.push({
      cliente     : novoValor.cliente,
      clientes    : [novoValor]
   });
   return listaAntiga;
};
const divida = (precoAtual, novoPreco) => {
   console.log(novoPreco.precoTotal)
   precoAtual += Number(novoPreco.precoTotal);
   return precoAtual;
}

function filtrar(cliente){
   let vencimento = new Date(cliente.data);
   if (filtro.dataInicio != undefined){
      let inicio = new Date(filtro.dataInicio);
      if (vencimento.getTime() < inicio.getTime()){
         return false;
      }
   }
   if (filtro.dataFim != undefined){
      let fim = new Date(filtro.dataFim);
      if (vencimento.getTime() > fim.getTime()){
         return false;
      }
   }
   if ((filtro.precoInicio != undefined) && (cliente.preco < Number(filtro.precoInicio))){
      return false;
   }
   if ((filtro.precoFim != undefined) && (cliente.preco > Number(filtro.precoFim))){
      return false;
   }
   return true;
}

function desenhar (){
   let tabela =  document.getElementById("tabela");
   let tamanhoDaTabela = tabela.rows.length;
   let i;
 
   for (i=1; i<tamanhoDaTabela; i++){
      tabela.deleteRow(1);
   }
   for (i=1; i<=mostrar.length; i++){
      let linha = tabela.insertRow(i);

      celula = linha.insertCell(0);
      celula.innerHTML = mostrar[i-1].cliente;
      celula = linha.insertCell(1);
      celula.innerHTML = mostrar[i-1].data;
      celula = linha.insertCell(2);
      celula.innerHTML = formatter.format(mostrar[i-1].preco);
      celula = linha.insertCell(3);
      celula.innerHTML = formatter.format(mostrar[i-1].juros);
      celula = linha.insertCell(4);
      celula.innerHTML = formatter.format(mostrar[i-1].precoTotal);
   }
}

document.getElementById("botaoDeSubmicao").addEventListener('click', function (){
   let nome = document.getElementById("nomeComprador");
   let preco = document.getElementById("preco");
   let data = document.getElementById("data");
   let cliente = {
      cliente   : nome.value,
      preco     : preco.value,
      data      : data.value,
      juros     : 0,
      precoTotal: preco.value
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
   if (filtro.filtro) {
      mostrar = clientes.filter(filtrar);
   }else{
      mostrar.push(cliente);
   }

   desenhar();

   document.getElementById('recibos').reset();
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
      clientes[i].juros = juros[i].juros;
      let precoTotal = (Number(clientes[i].preco) + juros[i].juros);
      clientes[i].precoTotal = precoTotal;
      tabela.rows[1+i].cells[4].innerHTML = formatter.format(precoTotal);
   }
});

document.getElementById("agruparData").addEventListener('click', function (){
   let tabela = document.getElementById("tabela");
   let conteudo = mostrar.reduce(datas, []);
   let i;
   let j;
   let k = 0;
   let tamanhoDaTabela = tabela.rows.length;
   let linha;
   let celula;
   for (i=1; i<tamanhoDaTabela; i++){
      tabela.deleteRow(1);
   }
   for (i=0; i<conteudo.length; i++){
      linha = tabela.insertRow(1+k);
      linha.classList.add("tabela__divisor");
      celula.setAttribute("colspan",5);
      k++;
      celula = linha.insertCell(0);
      celula.innerHTML = conteudo[i].data;
      for (j=0; j<conteudo[i].clientes.length; j++){
         linha = tabela.insertRow(1+k);
         k++;
         celula = linha.insertCell(0);
         celula.innerHTML = conteudo[i].clientes[j].cliente;
         celula = linha.insertCell(1);
         celula.innerHTML = conteudo[i].clientes[j].data;
         celula = linha.insertCell(2);
         celula.innerHTML = conteudo[i].clientes[j].preco;
         celula = linha.insertCell(3);
         celula.innerHTML = conteudo[i].clientes[j].juros;
         celula = linha.insertCell(4);
         celula.innerHTML = conteudo[i].clientes[j].precoTotal;
      }
   }
   linha = tabela.insertRow(1+k);
   linha.classList.add("tabela__divisor");
   celula = linha.insertCell(0);
   celula.innerHTML = "Novos Clientes";
   celula.setAttribute("colspan",5);
});

document.getElementById("agruparCliente").addEventListener('click', function (){
   let tabela = document.getElementById("tabela");
   let conteudo = mostrar.reduce(nomes, []);
   let i;
   let j;
   let k = 0;
   let tamanhoDaTabela = tabela.rows.length;
   let linha;
   let celula;
   for (i=1; i<tamanhoDaTabela; i++){
      tabela.deleteRow(1);
   }
   for (i=0; i<conteudo.length; i++){
      linha = tabela.insertRow(1+k);
      k++;
      celula = linha.insertCell(0);
      celula.innerHTML = conteudo[i].cliente;
      linha.classList.add("tabela__divisor");
      celula.setAttribute("colspan",4);
      celula = linha.insertCell(1);
      celula.innerHTML = conteudo[i].clientes.reduce(divida, 0);
      for (j=0; j<conteudo[i].clientes.length; j++){
         linha = tabela.insertRow(1+k);
         k++;
         celula = linha.insertCell(0);
         celula.innerHTML = conteudo[i].clientes[j].cliente;
         celula.class = "";
         celula = linha.insertCell(1);
         celula.innerHTML = conteudo[i].clientes[j].data;
         celula.class = "";
         celula = linha.insertCell(2);
         celula.innerHTML = conteudo[i].clientes[j].preco;
         celula.class = "";
         celula = linha.insertCell(3);
         celula.innerHTML = conteudo[i].clientes[j].juros;
         celula.class = "";
         celula = linha.insertCell(4);
         celula.innerHTML = conteudo[i].clientes[j].precoTotal;
         celula.class = "";
      }
   }
   linha = tabela.insertRow(1+k);
   linha.classList.add("tabela__divisor");
   celula = linha.insertCell(0);
   celula.innerHTML = "Novos Clientes";
   celula.setAttribute("colspan",5);
});


document.getElementById("botaoDeFiltro").addEventListener('click', function (){
   let precoInicio = document.getElementById("precoInicio");
   let precoFim = document.getElementById("precoFim");
   let dataInicio = document.getElementById("dataInicio");
   let dataFim = document.getElementById("dataFim");
   filtro.filtro = false;
   if (precoInicio.value != ""){
      filtro.filtro = true;
      filtro.precoInicio = Number(precoInicio.value);
   }else{
      filtro.precoInicio = undefined;
   }
   if (precoFim.value != ""){
      filtro.filtro = true;
      filtro.precoFim = Number(precoFim.value);
   }else{
      filtro.precoFim = undefined;
   }
   if (dataInicio.value != ""){
      filtro.filtro = true;
      filtro.dataInicio = dataInicio.value;
   }else{
      filtro.dataInicio = undefined;
   }
   if (dataFim.value != ""){
      filtro.filtro = true;
      filtro.dataFim = dataFim.value;
   }else{
      filtro.dataFim = undefined;
   }
   mostrar = clientes.filter(filtrar);
   desenhar();
});