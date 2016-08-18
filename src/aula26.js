/**/
window.onload = function(){
  /*trabalhando com ajax*/

  //instancia um objeti AJAX
  var ajax = new XMLHttpRequest();

//quando mudar o estado do objeto ajax
  ajax.onreadystatechange = function(){
    // state 4 - HTML requisição finalizada
    // state 200 - HTML requisicão bem feita
    if(ajax.readyState === 4 && ajax.status === 200){
      // insere o text do arquivo no elemento de ID retorno
      document.getElementById("retorno").innerHTML = ajax.responseText;
    }
  };

//acessar por GET o arquivo de forma assincrona
  ajax.open("GET", "src/aula26_informacoes.txt", true);
  ajax.send();//executa a conexao

};
