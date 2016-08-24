/**/
window.onload = function(){
  /*trabalhando com ajax*/

  //instancia um objeto AJAX
  var ajax = new XMLHttpRequest();

 //quando mudar o estado do objeto ajax
  ajax.onreadystatechange = function(){
    // console.log(ajax.status);// imprimi o status html
    // console.log(ajax.readyState);// imprime a requisicao html

    // state 4 - HTML requisição finalizada
    // state 200 - HTML requisicão bem feita
    if(ajax.readyState === 4 && ajax.status === 200){
      // insere o conteudo da pagina selecionada no elemento id=retorno
      document.getElementById("retorno").innerHTML = ajax.responseText;
    }
  };

// atribui os elementos com a classe informada a uma variavel
  var links = document.getElementsByClassName('abrePagina');

// percorre os elementos e da variavel e executa a função
// para realizar a troca entre as paginas atraves do evento onclick
  for (var i=0; i < links.length; i++){
    links[i].onclick = function(evento){
        evento.preventDefault();//previne o comportamento padrao do objeto
        ajax.open("GET", this.getAttribute('href'), true);
        ajax.send();//executa a conexao

    };
  }


};
