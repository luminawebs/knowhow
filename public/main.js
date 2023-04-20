let div = document.getElementById("cardRows");

class contents {
  constructor(nombre, cantidad, entregas) {
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.entregas = entregas;
    this.resumen = entregas;
  }
}

const contenido = [
  new contents("Vodcast", "1 a 1 minutos", "Documentación completa"),
  new contents("Podcast", "1 a 2 minutos", "Documentación completa"),
  new contents("Podcast", "1 a 3 minutos", "Documentación completa"),
  new contents("Podcast", "1 a 4 minutos", "Documentación completa"),
  new contents("Podcast", "1 a 5 minutos", "Documentación completa"),
];

var cpodcast = ` <iframe
                  src="courses/podcast/podcast - Storyline output/story.html"
                  frameborder="0"
                  width="100%"
                  height="400px"
                  ></iframe>`;

function cpodcastF(content) {
  return ` <iframe
                  src="${content}"
                  frameborder="0"
                  width="100%"
                  height="400px"
                  ></iframe>`;
}

function elementosIframe(content, caracteristicas, notas) {
  document.getElementById("phonecase").innerHTML = cpodcastF(content);

  document.getElementById("caracteristicas").innerHTML = caracteristicas;

  document.getElementById("notas").innerHTML = notas;
}

// for (let i = 0; i < contenido.length; i++) {

//     let contenidos = contenido[i].nombre + "<br>";

//     div.innerHTML +=  ` <div class="col">
//     <div class="card">
//       <img
//         class="card-img-top"
//         src="https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
//         alt="Card image cap"
//       />
//       <div class="card-body">
//         <h5 class="card-title"> ${contenidos} </h5>
//         <p class="card-text">
//           Some quick example text to build on the card title and make up
//           the bulk of the card's content.
//         </p>
//         <a href="#" class="btn btn-primary"  data-bs-toggle="modal" data-bs-target="#exampleModal">Go somewhere</a>
//       </div>
//     </div>
//   </div>`;

//   }
