var hierbas = [
    {
      id: 1,
      nombre: "Aceite Cannabis",
      tipo: "Sativa",
      imagen: "images/Producto Aceite.png",
      precio: 27,
      descripcion: "Aceite refinado obtenido de la semillas de Cannabis Sativa. Ayuda a calmar la inflamación y la irritación de la piel además de hidratarla y nutrirla. Mantiene la piel liberada de radicales libres que aceleran el proceso de envejecimiento.",
      cantidad: 1
    },
    {
      id: 2,
      nombre: "Champú Cannabis",
      tipo: "Sativa",
      imagen: "images/Producto Champu.png",
      precio: 27,
      descripcion: "Champú que nutre y protege el cabello, calma el cuero cabelludo, promueve la hidratación y aporta suavidad, proporcionándole un extra de brillo e hidratación.",
      cantidad: 1
    },
    {
      id: 3,
      nombre: "Crema Cannabis",
      tipo: "Sativa",
      imagen: "images/Producto Crema 2.png",
      precio: 27,
      descripcion: "La crema de Fisiocrem con Cannabidiol está formulado a través de un exhaustivo proceso científico, contiene Cannabidiol , un fitocannabinoide que se extrae del aceite de cáñamo, no proporcionan efecto psicoactivo o narcótico y además actúa sobre el propio sistema endocannaboinde, aportando alivio y bienestar.",
      cantidad: 1
    },
    {
      id: 4,
      nombre: "Crema Cannabis",
      tipo: "Sativa",
      imagen: "images/Producto Crema 3.png",
      precio: 27,
      descripcion: "Total Creme con extracto de Aceite de Cannabis, formulada para una hidratación profunda. Su alto contenido de Antioxidantes, Vitaminas y Omega 3 y 6, nutren y previenen la resequedad, dejándola suave y tersa.",
      cantidad: 1
    },
    {
      id: 5,
      nombre: "Crema Cannabis 100ml",
      tipo: "Sativa",
      imagen: "images/Producto Crema 100ml.png",
      precio: 27,
      descripcion: "Kernnabis CBD a base de cannabidiol (CBD), hipérico, árnica, ácido hialurónico y glucosaminoglucanos que proporciona alivio y bienestar, un efecto reconfortante e hidratación.",
      cantidad: 1
    },
    {
      id: 6,
      nombre: "Gomitas Free THC",
      tipo: "Sativa",
      imagen: "images/Producto Gomitas.png",
      precio: 27,
      descripcion: "Las gomitas de CBD son uno de los productos de CBD más buscados. En los últimos años, los productos de aceite de CBD se han vuelto cada vez más populares y no se utilizan solo para la relajación o para aliviar el dolor físico, sino que también se consideran un gran complemento para el bienestar general.",
      cantidad: 1
    },
    {
      id: 7,
      nombre: "El Gran Libro Del Cannabis",
      tipo: "Sativa",
      imagen: "images/Producto Libro.png",
      precio: 27,
      descripcion: "Propiedades terapéuticas, manual de autocultivo y las mejores recetas con marihuana El cáñamo ( Cannabis sativa ) es una planta cultivada por el ser humano desde hace más de 3.000 años.",
      cantidad: 1
    },
    {
      id: 8,
      nombre: "Miel De Cannabis",
      tipo: "Sativa",
      imagen: "images/Producto Miel.png",
      precio: 27,
      descripcion: "La unión entre bienestar y dulzura llega con esta infusión de nuestra miel multifloral de bosque húmedo con extracto puro de CBD. Logramos la mezcla perfecta entre el sabor único de la miel con uno de los componentes medicinales del Cannabis (CBD). ",
      cantidad: 1
    },
    {
      id: 9,
      nombre: "Aceite Royal Cannabis",
      tipo: "Sativa",
      imagen: "images/Producto Royal.png",
      precio: 27,
      descripcion: "Aceite Sublingual Royal CBD de 39.9% (cáñamo) ROYAL un producto 100% medicinal con propiedades curativas increíbles.",
      cantidad: 1
    },
  ];


  document.addEventListener('DOMContentLoaded', function() {
    const productList = document.getElementById('product-list');
    hierbas.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('col-md-4');
        productCard.innerHTML = `
            <div class="product-card">
                <img src="${product.imagen}" alt="${product.nombre}">
                <h3>${product.nombre}</h3>
                <p>${product.descripcion}</p>
                <a href="#" class="btn btn-primary">Ver más</a>
            </div>
        `;
        productList.appendChild(productCard);
    });
});