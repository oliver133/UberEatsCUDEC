// Inicializacion comun de componentes de Materialize (menu lateral, etc.)
// Usado por paginas que no tienen su propio index.js/pedidos.js (about.html, contact.html)
document.addEventListener('DOMContentLoaded', function() {
  const menus = document.querySelectorAll('.side-menu');
  M.Sidenav.init(menus, {edge: 'right'});

  const forms = document.querySelectorAll('.side-form');
  M.Sidenav.init(forms, {edge: 'left'});
});
