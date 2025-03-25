// manejando el item de peras
let nodo1 = document.createElement("li");
let peras = document.createTextNode("peras");
nodo1.appendChild(peras);

// manejando el item de manzanas
let nodo2 = document.createElement("li");
let manzanas = document.createTextNode("manzanas");
nodo2.appendChild(manzanas);

//obteniendo listas y agregando nodos
let lista = document.getElementById("lista");
lista.appendChild(nodo1);
lista.appendChild(nodo2);