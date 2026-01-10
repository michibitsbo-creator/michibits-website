const products=[
 {id:"estandar",name:"Estándar multiuso",price:"Bs. 60",img:"images/product-1.jpg",desc:"Compacta y versátil."},
 {id:"larga",name:"Larga envolvente",price:"Bs. 85",img:"images/product-2.jpg",desc:"Ideal para espalda y abdomen."},
 {id:"cuellera",name:"Cuellera",price:"Bs. 70",img:"images/product-3.jpg",desc:"Diseñada para el cuello."},
 {id:"anticolico",name:"Anticólico (bebé)",price:"Bs. 50",img:"images/product-4.jpg",desc:"Perfecta para cólicos."}
];

function renderProducts(){
 const grid=document.getElementById('products-grid');
 grid.innerHTML='';
 products.forEach(p=>{
   const card=document.createElement('div');
   card.className='card';
   card.innerHTML=`
     <img src="${p.img}" alt="${p.name}">
     <h4>${p.name}</h4>
     <p class="muted">${p.desc}</p>
     <div class="actions">
       <div class="price">${p.price}</div>
       <a class="btn btn-wa" href="https://wa.me/59172060611?text=Quiero%20el%20producto:%20${encodeURIComponent(p.name)}">Pedir</a>
     </div>`;
   grid.appendChild(card);
 });
}
document.addEventListener('DOMContentLoaded',renderProducts);
