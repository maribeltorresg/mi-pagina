window.addEventListener('scroll', function() {
  var mainNav = document.getElementById('main-nav');
  // console.log(mainNav);
  mainNav.classList.add('background');
  // console.log(e);
});

window.addEventListener('load', function() {
  var boton = document.getElementById('boton');
  console.log(boton);
  boton.addEventListener('click', function() {
    var menu = document.getElementById('menu');
    console.log(menu)
    // verificamos si tiene el contenido 
    if (menu.classList.contains('disabled-menu')) {
      // console.log('mostrar');
      // remover
      menu.classList.remove('disabled-menu');
      // agregar
      menu.classList.add('enabled-menu');
    } else {
      // console.log('ocultar');
      menu.classList.remove('enebled-menu');
      menu.classList.add('disabled-menu');
    }
  });
});