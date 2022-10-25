<template>
  <div id="nos">
    <div class="container-fluid nosotros">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 contenImagenes1024">
          <figure class="contenedor-figure">
            <div class="img-a">
              <ImageLazy
                class="photo img-responsive"
                :src="require('static/img/nos2.jpeg')"
                baseClass="image-lazy"
                deferredClass="image-lazy-deferred"
                loadingClass="image-lazy-loading"
                loadedClass="image-lazy-loaded"
                :delay="0"
                @loading="loading = false"
                @load="loaded = false"
                alt=""
              />
            </div>
            <div class="img-b">
              <ImageLazy
                class="photo img-responsive"
                :src="require('static/img/nos1.jpeg')"
                baseClass="image-lazy"
                deferredClass="image-lazy-deferred"
                loadingClass="image-lazy-loading"
                loadedClass="image-lazy-loaded"
                :delay="0"
                @loading="loading = false"
                @load="loaded = false"
                alt=""
              />
            </div>
            <div class="img-c">
              <ImageLazy
                class="photo img-responsive"
                :src="require('static/img/nos3.jpeg')"
                baseClass="image-lazy"
                deferredClass="image-lazy-deferred"
                loadingClass="image-lazy-loading"
                loadedClass="image-lazy-loaded"
                :delay="0"
                @loading="loading = false"
                @load="loaded = false"
                alt=""
              />
            </div>
          </figure>
        </div>

        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <figcaption v-for="item in items" class="texto-articulo">
            <titulos id="nos" class="tituloNos" :titulo="titulo"></titulos>
            <p class="parrafo margin-b-medium">
              {{ limpiar(post.content.rendered) }}
            </p>

            <div class="items-parrafo">
              <div class="contenItems">
                <i class="fas fa-star"></i><strong>Espacio</strong>
              </div>
              <p>
                En un espacio Natural de Bioconstrucción y Reciclado. De paredes
                vivas y de múltiples colores que hacen a la diversidad.
              </p>
            </div>
            <div class="items-parrafo">
              <div class="contenItems">
                <i class="fas fa-star"></i><strong>Ludico</strong>
              </div>
              <p>
                Porque todos sus aprendizajes suceden a través del juego, con
                todo lo que ello implica!! Disfrute, placer, paz interior de
                estar siendo, contenid@s, escuchad@s y valorad@s. Para así poder
                jugar con toda seguridad, llevando adelante sus procesos de
                imitación, repetición y despertar de inteligencias múltiples.
              </p>
            </div>
            <div class="items-parrafo">
              <div class="contenItems">
                <i class="fas fa-star"></i><strong>Multidisciplinario</strong>
              </div>
              <p>
                Donde todo puede crearse y reinventarse, guiándonos a través de
                diferentes disciplinas artísticas como el teatro, yoga, arcilla,
                circo, telar, pintura muralista, música y cocina y otras que
                hacen a nuestra autonomía, para ser esta un vehículo hacia
                nuestras libertades.
              </p>
            </div>
            <div class="boton">
              <btnPry
                :icono="false"
                :clase="claseBtn"
                :texto="txtBtn"
                @clicks="pageNosotros()"
              />
            </div>
          </figcaption>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import btnPry from "~/components/btnPry.vue";
import titulos from "~/components/titulos.vue";
import ImageLazy from "cube-vue-image-lazy";
import { mapState } from "vuex";

export default {
  data() {
    return {
      titulo: "Sobre Nosotr@s",
      txtBtn: "Saber mas",
      claseBtn: "btnPrimario"
    };
  },
  name: "sectionPresentacion",
  components: {
    titulos,
    btnPry,
    ImageLazy
  },
  computed: {
    ...mapState(["posts"])
  },

  methods: {
    pageNosotros() {
      this.$router.push({
        path: "SobreNosotros"
      });
    },
    limpiar(value) {
      return value.replace(/<\/?[^>]+(>|$)/g, "");
    }
  }
};
</script>
<style>
.contenedor-figure {
  position: relative;
  overflow: hidden;
  height: 450px;
  width: 100%;
  margin-top: 15%;
}
.img-a {
  position: absolute;
  width: 140px;
  height: 140px;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  transform: translate(-35%, 1%);
  z-index: 1;
  padding: 5px;
  background: #f8f8f8;
  border: #f9b001 dashed 2px;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.img-a img {
  width: 140px;
  height: 140px;
}
.img-a img,
.img-b img,
.img-c img {
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
  -webkit-transition: all 1.4s ease-in-out;
  -moz-transition: all 1.4s ease-in-out;
  -o-transition: all 1.4s ease-in-out;
  -ms-transition: all 1.4s ease-in-out;
  background-color: rgb(128, 128, 128);
}

.img-b {
  position: absolute;
  width: 250px;
  height: 250px;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  transform: translate(0%, 40%);
  z-index: 2;
  padding: 5px;
  background: #f8f8f8;
  border: #43cd66 dashed 2px;
  border-radius: 50%;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.img-b img {
  width: 250px;
  height: 250px;
}
.img-c {
  position: absolute;
  width: 110px;
  height: 110px;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  transform: translate(30%, 260%);
  z-index: 3;
  padding: 5px;
  background: #f8f8f8;
  border: #2aaae2 dashed 2px;
  border-radius: 50%;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.img-c img {
  width: 110px;
  height: 110px;
}
.img-a:hover img {
  transition: 1.4s all;
  -webkit-transform: scale(1.2);
  -moz-transform: scale(1.2);
  -ms-transform: scale(1.2);
  -o-transform: scale(1.2);
  transform: scale(1.2);
}
.img-b:hover img {
  transition: 1.4s all;
  -webkit-transform: scale(1.2);
  -moz-transform: scale(1.2);
  -ms-transform: scale(1.2);
  -o-transform: scale(1.2);
  transform: scale(1.2);
}
.img-c:hover img {
  transition: 1.4s all;
  -webkit-transform: scale(1.2);
  -moz-transform: scale(1.2);
  -ms-transform: scale(1.2);
  -o-transform: scale(1.2);
  transform: scale(1.2);
}
.texto-articulo .parrafo {
  color: #000;
  padding: 0;
}
.items-parrafo {
  margin-bottom: 9%;
  display: flex;
  flex-direction: column;
  color: #033b62;
  font-weight: 400;
  font-size: 16px;
  position: relative;
}
.items-parrafo p {
  margin: 0;
  color: initial;
}
.contenItems {
  position: relative;
  display: inline-block;
  left: 0;
}
.contenItems i {
  color: #fda2bb;
  margin-right: 10px;
  font-size: 1.4rem;
}
.contenItems strong {
  font-size: 1.4rem;
}

@media only screen and (min-width: 320px) and (max-width: 546px) and (orientation: landscape) {
  .img-a {
    transform: translate(-90%, 1%);
  }
  .img-a img {
  }
  .img-b {
    width: 290px;
    height: 290px;
    transform: translate(0%, 20%);
  }
  .img-b img {
    width: 290px;
    height: 290px;
  }
  .img-c {
    width: 180px;
    height: 180px;
    transform: translate(70%, 120%);
  }
  .img-c img {
    width: 180px;
    height: 180px;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) {
  .items-parrafo {
    margin-bottom: 3%;
  }

  .contenedor-figure {
    margin-top: 1%;
  }
  .img-a {
    width: 180px;
    height: 180px;
    padding: 6px;
    transform: translate(-100%, 110%);
  }
  .img-a img {
    width: 180px;
    height: 180px;
  }
  .img-b {
    width: 290px;
    height: 290px;
    padding: 6px;
    transform: translate(0%, 20%);
  }
  .img-b img {
    width: 290px;
    height: 290px;
  }
  .img-c {
    width: 200px;
    height: 200px;
    padding: 6px;
    transform: translate(90%, 95%);
  }
  .img-c img {
    width: 200px;
    height: 200px;
  }
}

@media only screen and (min-width: 1024px) and (max-width: 1140px) {
  .items-parrafo {
    margin-bottom: 3%;
  }

  .tituloNos {
    margin-left: 0;
    align-items: flex-start;
  }
  .contenedor-figure {
    margin-top: auto;
    margin-bottom: auto;
  }
  .contenImagenes1024 {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .nosotros {
    margin-top: 8%;
    margin-bottom: 8%;
  }

  .img-a {
    width: 180px;
    height: 180px;
    padding: 6px;
    transform: translate(-65%, 110%);
  }
  .img-a img {
    width: 180px;
    height: 180px;
  }
  .img-b {
    width: 290px;
    height: 290px;
    padding: 6px;
    transform: translate(0%, 20%);
  }
  .img-b img {
    width: 290px;
    height: 290px;
  }
  .img-c {
    width: 190px;
    height: 190px;
    padding: 6px;
    transform: translate(60%, 100%);
  }
  .img-c img {
    width: 190px;
    height: 190px;
  }
}
@media only screen and (min-width: 1140px) and (max-width: 2560px) {
  .items-parrafo {
    margin-bottom: 4%;
  }

  .tituloNos {
    margin-left: 0;
    align-items: flex-start;
  }
  .contenedor-figure {
    margin-top: auto;
    margin-bottom: auto;
  }
  .contenImagenes1024 {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .nosotros {
    margin-top: 8%;
    margin-bottom: 8%;
  }

  .img-a {
    width: 180px;
    height: 180px;
    padding: 6px;
    transform: translate(-95%, 110%);
  }
  .img-a img {
    width: 180px;
    height: 180px;
  }
  .img-b {
    width: 320px;
    height: 320px;
    transform: translate(0%, 20%);
    padding: 6px;
    border: #43cd66 dashed 3px;
  }
  .img-b img {
    width: 320px;
    height: 320px;
  }
  .img-c {
    width: 190px;
    height: 190px;
    padding: 6px;
    transform: translate(90%, 100%);
  }
  .img-c img {
    width: 190px;
    height: 190px;
  }
}
</style>
