document.addEventListener('DOMContentLoaded', function() {
  // nav menu
  const menus = document.querySelectorAll('.side-menu');
  M.Sidenav.init(menus, {edge: 'right'});
    const forms = document.querySelectorAll('.side-form');
  M.Sidenav.init(forms, {edge: 'left'});
});

let contenidoLista ='';

db.collection("platillos").onSnapshot((datos) => {
  datos.docChanges().forEach((registro) => {
    if (registro.type === "added"){
      agregarALista(registro.doc.data(),registro.doc.id);
    } 
  });
  var elems = document.querySelectorAll('select');
  M.FormSelect.init(elems);

})

function agregarALista(platillo, id){
contenidoLista += `<option value='${id}'>

${platillo.nombre} </option>`;
document.getElementById('listaPlatillos').innerHTML=contenidoLista;
}
M.AutoInit();




btnGuardarPedido = document.getElementById('btnGuardarPedido');
let contenido ="";

btnGuardarPedido.addEventListener('click', function() {
  alert('pedido agregado');
});

function actualizarPlatillo(pedido, id){
  let tarjeta =document.getElementById(`${id}`);
  tarjeta.querySelector(".recipe-title").innerHTML = pedido.platillo;
  tarjeta.querySelector(".recipe-ingredients").innerHTML = pedido.dirrecion;
}