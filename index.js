  console.log('JQuery loaded');


  var Parrafo = require('./template');
  console.log('-> Parrafo -> ', Parrafo);

  faco = document.getElementById('placeholder');
  faco.innerHTML = Parrafo;
