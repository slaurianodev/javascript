/**/
window.onload = function(){
  /*Objeto windows e Navigator*/

  console.log(window.screen.width);//largua atual da tela
  console.log(window.screen.availWidth);//largura disponivel da tela
  console.log(document.body.clientWidth);//largura atual da pagina

//
  window.onresize = function(){
    console.log(document.body.clientWidth);
  };

  console.log(navigator.appName);
  console.log(navigator.appVersion);
  console.log(navigator.userAgent);//mais utilizado
  console.log(navigator.platform);

};
