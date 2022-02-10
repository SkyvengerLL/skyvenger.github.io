const resetar = () => {
   $("#resposta").empty();
   $("#resposta").append(`<h2>Nenhuma Moeda Selecionada</h2>`);
}

const redutor = (confirmados, novo)=>{
   const nDia = new Date(novo.timestamp*1000).getDate();
   const nMes = new Date(novo.timestamp*1000).getMonth() +1;
   const nAno = new Date(novo.timestamp*1000).getFullYear();
   const mesmo = confirmados.filter((dado)=>{
      const dia = new Date(dado.timestamp*1000).getDate();
      const mes = new Date(dado.timestamp*1000).getMonth() +1;
      const ano = new Date(dado.timestamp*1000).getFullYear();
      return (nAno===ano) && (nMes===mes) && (nDia===dia)
   });
   if (mesmo != []){
      confirmados.push(novo);
   }
   return confirmados;
}

$(document).ready(function (){
   const url = "https://economia.awesomeapi.com.br/json/"
   $.ajax({url: url+"all"}).done((data)=>{
      Object.entries(data).forEach( (moeda) => {
         $("#moedas").append(`<option value="${moeda[0]}">${moeda[0]}</option>`);
     });
   });

   $("#moedas").on("change", ()=>{
      const moeda = $("#moedas").val();
      if (moeda === "nenhum"){
         resetar();
         return false;
      }
      $.ajax({url:url+`${moeda}-BRL`}).done((data)=>{
         $("#resposta").empty();
         $("#resposta").append("<div id='moeda' class='mod'></div>")
         $("#moeda").append(`<h2>${data[0].name}</h2>`);
         $("#moeda").append(`<p>Última Cotação:${data[0].bid}</p>`);
         $("#moeda").append(`<p>Valor Mínimo:${data[0].low}</p>`);
         $("#moeda").append(`<p>Valor Máximo:${data[0].high}</p>`);
         $("#moeda").append(`<p>Valor de Fechamento:${data[0].ask}</p>`);
      });
      return true;
   });

   $("#busca").on("click", ()=>{
      const moeda = $("#moedas").val();
      let inicio = $("#inicio").val().replaceAll("-","");
      let fim = $("#fim").val().replaceAll("-","");
      if (moeda === "nenhum"){
         resetar();
         return false;
      }
      $("#resposta").append("<table id='tabelaDeVariacao'></table>");
      const linha = "<tr><th><strong>DATA</strong></th><th><strong>VALOR MIN</strong></th><th><strong>VALOR MAX</strong></th><th><strong>VALOR FECHADO</strong></th></tr>";
      $("#tabelaDeVariacao").append(linha);
      if (inicio !== ''){
         inicio = `start_date=${inicio}`;
      }
      if (fim !== ''){
         fim = `end_date=${fim}`;
      }
      $.ajax({url:url+`${moeda}-BRL/${10**10}?${inicio}&${fim}`}).done((data)=>{
         const variacoes = data.reduce(redutor, []);
         variacoes.forEach(valor=>{
            const dia = new Date(valor.timestamp*1000).getDate();
            const mes = new Date(valor.timestamp*1000).getMonth() +1;
            const ano = new Date(valor.timestamp*1000).getFullYear();
            $("#tabelaDeVariacao").append(`<tr><td>${dia}/${mes}/${ano}</td><td>${valor.low}</td><td>${valor.high}</td><td>${valor.bid}</td></tr>`);
         });
      });
   });
   resetar();
});

