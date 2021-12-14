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

