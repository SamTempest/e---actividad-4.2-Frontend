let datos = [];
for (let i = 0; i < localStorage.length; i++) {
  let key = localStorage.key(i);
  let valor = localStorage.getItem(key);
  datos.push(valor.toString());
}


let datosLimpio = datos.map(function(item) {
    return item.replace(/[\[\]'",]/g, '');
  });
  


let ListaParticipantes = document.getElementById("ListaParticipantes");

datosLimpio.forEach(function(item) {
  let parrafo = document.createElement("p");
  parrafo.textContent = item;
  ListaParticipantes.appendChild(parrafo);
});
