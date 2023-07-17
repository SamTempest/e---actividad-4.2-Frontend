//Se obtienen los elementos HTML
const inputNombre = document.getElementById("inputNombre")
const inputEdad = document.getElementById("inputEdad");
const inputGenero = document.getElementById("selectGenero");
const guardar = document.getElementById("Guardar");

const eliminar = document.getElementById("eliminar");
const inputDelete = document.getElementById("inputDelet");

const busqueda = document.getElementById("busqueda");
const mostrarNombre = document.getElementById("mostrarNombre");
const edadModificar = document.getElementById("EdadModificar");
const modificarGenero = document.getElementById("modificarGenero");


const modificar = document.getElementById("modificar");



//Se inicia el detector de eventos del CRUD
 guardar.addEventListener("click", capturar);
 eliminar.addEventListener("click", eliminado);
 buscar.addEventListener("click", buscando);
 modificar.addEventListener("click", modificado);

 //Esta fución guarda los elementos en un array
function capturar(){
    let Participante = [inputNombre.value, inputEdad.value, inputGenero.value];
   
    //se valida que los campos hayan sido rellenados
    if (Participante[0] == "" || Participante[1] == "" || Participante[2] == "") {
        alert("Todos los datos son obligatorios");
    }//De ser correcto los datos se conbiernte a JSON y se guardan 
    else{
        var  idUsuario = Math.random()
        localStorage.setItem(Participante[0], JSON.stringify(Participante));
        

    }
}

function eliminado(){
    let delet = inputDelete.value
    localStorage.removeItem(delet)
}


function buscando(){
    let busc = busqueda.value
    if (busc == "") {
        alert("Es necesario definir el participante a modificar");
    }
    else{
    let participantesBuscados = JSON.parse(localStorage.getItem(busc));
    mostrarNombre.value = participantesBuscados[0];
    edadModificar.value = participantesBuscados[1];
    modificarGenero.value = participantesBuscados[2];
    }
}



function modificado(){
    let Participante = [mostrarNombre.value, edadModificar.value, modificarGenero.value];
   
    //se valida que los campos hayan sido rellenados
    if (Participante[0] == "" || Participante[1] == "" || Participante[2] == "") {
        alert("Es necesario definir el participante a modificar")
    }//De ser correcto los datos se conbiernte a JSON y se guardan 
    else{
        var  idUsuario = Math.random()
        localStorage.setItem(Participante[0], JSON.stringify(Participante));
        

    }
}




