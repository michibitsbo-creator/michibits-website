
const productos = [
  { nombre: "Cuellera", img: "images/product-cuellera.jpg" },
  { nombre: "Cervical", img: "images/product-cervical.jpg" },
  { nombre: "Lumbar", img: "images/product-lumbar.jpg" },
  { nombre: "Anticólico", img: "images/product-anticolico.jpg" },
  { nombre: "Estándar", img: "images/product-estandar.jpg" },
  { nombre: "Antimigraña", img: "images/product-antimigrana.jpg" },
  { nombre: "Set Mamá y Bebé", img: "images/product-set-mama-bebe.jpg" },
  { nombre: "Rodillera", img: "images/product-rodillera.jpg" },
];

const contenedor = document.getElementById("productos");

productos.forEach(p => {
  const div = document.createElement("div");
  div.className = "producto";
  div.innerHTML = `
    <img src="${p.img}">
    <h3>${p.nombre}</h3>
    <a class="whatsapp" href="https://wa.me/59172060611" target="_blank">Pedir</a>
  `;
  contenedor.appendChild(div);
});
