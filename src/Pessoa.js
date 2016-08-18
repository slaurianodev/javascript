function Pessoa(nome, sobrenome){
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.nomeCompleto = function(){
    return this.nome + " " + this.sobrenome;
  };

  this.setNome = function(pnome){
    this.nome = pnome;
  };

  this.setSobrenome = function(psobrenome){
    this.sobrenome = psobrenome;
  };

  this.getNome = function(){
    return this.nome;
  };

  this.getSobrenome = function(){
    return this.sobrenome;
  };

};
