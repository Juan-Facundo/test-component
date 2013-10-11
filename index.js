
  var Nombre = require('./nametemplate');
  console.log('-> Nombre -> ', Nombre);

  faco = document.getElementById('placeholder');
  faco.innerHTML = Nombre;

  function apellido() {
    var Apellido = require('./lastnametemplate');
    faco = document.getElementById('placeholder');
    faco.innerHTML = Apellido;
  }

  document.getElementById('name').onclick = apellido;

