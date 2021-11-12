

const Carousel = () =>{
    return (
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://magios-team.com.ar/img/banner/slide-1.webp" class="d-block w-100" alt="Te asistimos para el armado de tu PC" />
          </div>
          <div class="carousel-item">
            <img src="https://magios-team.com.ar/img/banner/slide-2.webp" class="d-block w-100" alt="Encontra los mejores precios en monitores" />
          </div>
          <div class="carousel-item">
            <img src="https://magios-team.com.ar/img/banner/slide-3.webp" class="d-block w-100" alt="Placas de Video, Deja que tu PC Brille" />
          </div>
          <div class="carousel-item">
            <img src="https://magios-team.com.ar/img/banner/slide-4.webp" class="d-block w-100" alt="Proveedor Oficial de Productos Aorus" />
          </div>
          <div class="carousel-item">
            <img src="https://magios-team.com.ar/img/banner/slide-5.webp" class="d-block w-100  img-fluid" alt="Proveedor Oficial de Productos Logitech" />
          </div>
          <div class="carousel-item">
            <img src="https://magios-team.com.ar/img/banner/slide-6.webp" class="d-block w-100  img-fluid" alt="Proveedor Oficial de Productos Thermaltake" />
          </div>
          <div class="carousel-item">
            <img src="https://magios-team.com.ar/img/banner/slide-7.webp" class="d-block w-100  img-fluid" alt="Proveedor Oficial de Productos Corsair" />
          </div>
        </div>
        <a class="carousel-control-prev btn-left" href="#carouselExampleControls" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only"></span>
        </a>
        <a class="carousel-control-next btn-right" href="#carouselExampleControls" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only"></span>
        </a>
      </div>
    )
}

export default Carousel