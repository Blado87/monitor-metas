const metas = [
  {
    area: "certificacion de competencias laborales",
    lider: "Juan Pérez",
    foto: "./img/juan.jpg",
    icono:'<i class="bi bi-mortarboard-fill"></i>',
    color: "#2b7fff",
    meta: 1000,
    avanceMensual: [30, 20, 0, 0, 0, 0],
  },
  {
    area: "agencia publica de empleo",
    lider: "María",
    foto: "./img/maria.jpg",
    color: "#ff6900",
    icono: '<i class="bi bi-briefcase-fill"></i>',
    meta: 800,
    avanceTotal: 500,
    avanceMensual: [80, 100, 120, 70, 60, 70]
  },
  {
    area: "Población",
    lider: "Carlos",
    foto: "./img/carlos.jpg",
    color: "#615FFF",
    icono: '<i class="bi bi-people-fill"></i>',
    meta: 1500,
    avanceTotal: 900,
    avanceMensual: [200, 180, 170, 150, 100, 100]
  }
];


function crearCards(metas) {
  const container = document.getElementById("container-card");

  metas.forEach((meta) => {
    // Calcular avance total y porcentaje
    const avanceTotal = meta.avanceMensual.reduce((a, b) => a + b, 0);
    const porcentajeAvance = Math.round((avanceTotal / meta.meta) * 100);

    // Crear estructura de la card
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <div class="card-title">
        ${meta.icono}
        ${meta.area}
      </div>
      <div class="card-data">
        <div class="card-data-items">
          <div>
            <i class="bi bi-flag"></i>
            Meta: ${meta.meta}
          </div>
          <div>
            <i class="bi bi-check-circle"></i>
            Avance: ${avanceTotal}
          </div>
          <div>
            <i class="bi bi-person"></i>
            ${meta.lider}
          </div>
        </div>
        <div>
          <div class="doughnut-chart">
            <div 
              class="circle" 
              style="background: conic-gradient(${meta.color} 0% ${porcentajeAvance}%, #E9ECEF ${porcentajeAvance}% 100%)">
            </div>
            <div class="inner-circle" style="color: ${meta.color}">${porcentajeAvance}%</div>
          </div>
        </div>
      </div>
      <a href="#" class="boton-card" style="background-color: ${meta.color}">Ver detalles</a>
    `;

    container.appendChild(card);
  });
}

// Llamar a la función para crear las cards
crearCards(metas);