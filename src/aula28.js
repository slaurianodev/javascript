/**/
window.onload = function(){
  /*realizando uma busca de CEP*/

  //http://api.postmon.com.br/v1/cep/

  //instancia um objeto AJAX
  var ajax = new XMLHttpRequest();
  var frmBuscaCep = document.getElementById("frmBuscaCep");
  var inputCep = document.getElementById("inputCep");
  var divRetorno = document.getElementById("retorno");

 //quando mudar o estado do objeto ajax
  ajax.onreadystatechange = function(){
    // state 4 - HTML requisição finalizada
    // state 200 - HTML requisicão bem feita
    if(ajax.readyState === 4 && ajax.status === 200){

      var data = JSON.parse(ajax.responseText);
      console.log(ajax.responseText);
      console.log(data);

      divRetorno.innerHTML = "Logradouro: " + data.logradouro + " - " + data.bairro;
    }
  };


  frmBuscaCep.onsubmit = function(){
    //Verifica se foi inputado um CEP valido
    if(inputCep === "" || inputCep.value.length !== 8){
      alert("Informe o CEP corretamente!");
      return false;
    }

    divRetorno.innerHTML = "Processando...";
    //faz o get na API para a busca do CEP
    ajax.open("GET", "http://api.postmon.com.br/v1/cep/"+inputCep.value, true);
    ajax.send();//executa a conexao

    return false;
  };




};
