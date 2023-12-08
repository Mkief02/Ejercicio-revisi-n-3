// Tenemos un arreglo de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]
// Se cambiaron los nombre de las variables declaradas y algunos métodos para acceder a las referencias del html
const listProdRef = document.getElementById("lista-de-productos")
const input = document.getElementById('input');

for (let i = 0; i < productos.length; i++) {
  let div  = document.createElement("div")
  div.classList.add("producto")

  let title = document.createElement("p")
  title.classList.add("titulo")
  title.textContent = productos[i].nombre
  
  let imagen = document.createElement("img");
  imagen.setAttribute('src', productos[i].img);

  div.appendChild(title);
  div.appendChild(imagen);

  listProdRef.appendChild(div);
}


const buttonRef = document.getElementById("click");

buttonRef.onclick = () => {
  while (listProdRef.firstChild) {
    listProdRef.removeChild(listProdRef.firstChild);
  }

  // Se agregó una validación para que cualquier cadena de texto se convierta en minúsculas
  const texto = input.value.toLowerCase();
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto );

  for (let i = 0; i < productosFiltrados.length; i++) {
    let div = document.createElement("div")
    div.classList.add("producto")
  
    let title = document.createElement("p")
    title.classList.add("titulo")
    title.textContent = productosFiltrados[i].nombre
    
    var imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    div.appendChild(title);
    div.appendChild(imagen);
  
    listProdRef.appendChild(div);
  }
}

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  