
  var o = require('jquery');

  o(document).ready(nombre);

  function apellido() {
    var Apellido = require('./lastnametemplate');
    faco = document.getElementById('placeholder');
    faco.innerHTML = Apellido;
    document.getElementById('apellido').onclick = nombre;
  }

  function nombre() {
    var Nombre = require('./nametemplate');
    faco = document.getElementById('placeholder');
    faco.innerHTML = Nombre;
    document.getElementById('name').onclick = apellido;
    var vive = '<p>Vive en Neuquen</p>';
    var ansvive = o('p.ask');
    ansvive.click(function() {
      ansvive.replaceWith(vive);
    });

  }

