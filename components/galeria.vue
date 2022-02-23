<template>
  <div id="galeria" class="galeriaContent">
    <div class="nube">
      <ImageLazy
        class="photo img-responsive"
        :src="require('static/img/nubeAlreves.png')"
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
    <section class="geleria container-fluid">
      <div>
        <titulo :titulo="tituloss" />
      </div>

      <div class="conteImagenes">
        <div class="columna espacio">
          <div
            v-for="(imagens, i) in slides"
            :key="i"
            :id="`cardimg` + (i + 1)"
            class="cardImg"
          >
            <div class="overlay"><span @click="ver(i)">Ver</span></div>
            <ImageLazy
              class="photo img-responsive"
              :src="imagens.thum"
              baseClass="image-lazy"
              deferredClass="image-lazy-deferred"
              loadingClass="image-lazy-loading"
              loadedClass="image-lazy-loaded"
              :delay="500"
              @loading="loading = true"
              @load="loaded = true"
              alt=""
              @click="ver(i)"
            />
          </div>
        </div>
      </div>

      <transition name="fade">
        <div v-if="abrir" class="modalGaleria">
          <div class="modal-content-Galeria">
            <div
              class="slides"
              :style="`background-image:url(${slides[selecionada].url})`"
            >
              <div v-if="loagImg" class="loagImg">Cargando</div>
            </div>
            <div class="botonesGaleria">
              <span
                :class="{ invisible: !hasPrev() }"
                @click="prevImage"
                class="prev"
                >&#10094;</span
              >

              <span
                :class="{ invisible: !hasNext() }"
                @click="nextImage"
                class="next"
                >&#10095;</span
              >
            </div>
            <span @click="cerrar" class="close-galeria">&times;</span>
          </div>
        </div>
      </transition>
    </section>
  </div>
</template>
<script>
import titulo from "../components/titulos.vue";
import ImageLazy from "cube-vue-image-lazy";
import axios from "../node_modules/axios";
export default {
  name: "galeria",
  components: {
    titulo,
    ImageLazy,
  },
  data() {
    return {
      loagImg: true,
      loading: false,
      loaded: false,
      index: 0,
      abrir: false,
      selecionada: "",
      tituloss: "Nuestras fotos ",
      slides: [
        {
          url: require("static/galeria/galeria1.jpeg"),
          thum: require("static/img/thumbail/galeria1.jpeg"),
        },
        {
          url: require("static/galeria/galeria2.jpeg"),
          thum: require("static/img/thumbail/galeria2.jpeg"),
        },
        {
          url: require("static/galeria/galeria3.jpeg"),
          thum: require("static/img/thumbail/galeria3.jpeg"),
        },
        {
          url: require("static/galeria/galeria4.jpeg"),
          thum: require("static/img/thumbail/galeria4.jpeg"),
        },
        {
          url: require("static/galeria/galeria5.jpeg"),
          thum: require("static/img/thumbail/galeria5.jpeg"),
        },
        {
          url: require("static/galeria/galeria6.jpeg"),
          thum: require("static/img/thumbail/galeria6.jpeg"),
        },
        {
          url: require("static/galeria/galeria7.jpeg"),
          thum: require("static/img/thumbail/galeria7.jpeg"),
        },
        {
          url: require("static/galeria/galeria8.jpeg"),
          thum: require("static/img/thumbail/galeria8.jpeg"),
        },
        {
          url: require("static/galeria/galeria9.jpeg"),
          thum: require("static/img/thumbail/galeria9.jpeg"),
        },
        {
          url: require("static/galeria/galeria10.jpeg"),
          thum: require("static/img/thumbail/galeria10.jpeg"),
        },
        {
          url: require("static/galeria/galeria11.jpeg"),
          thum: require("static/img/thumbail/galeria11.jpeg"),
        },
        {
          url: require("static/galeria/galeria12.jpeg"),
          thum: require("static/img/thumbail/galeria12.jpeg"),
        },
      ],
    };
  },

  mounted() {},
  destroy() {
    document.getElementsByTagName("html")[0].classList.remove("scrollHtml");
  },
  methods: {
    ver(i) {
      document.getElementsByTagName("html")[0].classList.add("scrollHtml");
      this.abrir = !this.abrir;
      this.selecionada = i;
      this.loagImg = false;
    },
    cerrar() {
      document.getElementsByTagName("html")[0].classList.remove("scrollHtml");
      this.abrir = !this.abrir;
    },
    hasNext() {
      return this.selecionada + 1 < this.slides.length;
    },
    hasPrev() {
      return this.selecionada - 1 >= 0;
    },
    nextImage() {
      if (this.selecionada === this.slides.length - 1) {
        if (this.loop) {
          this.selecionada = 0;
        }
      } else {
        this.selecionada += 1;
      }
    },
    prevImage() {
      if (this.selecionada === 0) {
        if (this.loop) {
          this.selecionada = this.slides.length - 1;
        }
      } else {
        this.selecionada -= 1;
      }
    },
  },
};
</script>
<style>
.loagImg {
  background-color: chocolate;
  position: absolute;
  width: 100%;
}
.galeriaContent {
  background-color: #d9f2fb;
  padding-bottom: 9%;
}
.nube {
  overflow: hidden;
}
.nube img {
  object-fit: cover;
  height: 50px;
  width: 100%;
}
.conteImagenes {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.columna {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.cardImg {
  width: 40%;
  height: 90px;
  background-color: rgb(255, 255, 255);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  padding: 4px;
  border: #f9b001 dashed 2px;
  margin: 1% 2%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  border-radius: 10px;
}
.cardImg img {
  border-radius: 10px;
  height: 100%;
  width: 100%;
  overflow: hidden;
  object-fit: cover;
  -webkit-transition: all 1.4s ease-in-out;
  -moz-transition: all 1.4s ease-in-out;
  -o-transition: all 1.4s ease-in-out;
  -ms-transition: all 1.4s ease-in-out;
  background-color: rgb(128, 128, 128);
}
#cardimg1 {
  transform: translateY(20px);
}
#cardimg3 {
  transform: translateY(20px);
}
#cardimg5 {
  transform: translateY(20px);
}
#cardimg6 {
}
#cardimg7 {
  transform: translateY(20px);
}
#cardimg9 {
  transform: translateY(20px);
}
#cardimg11 {
  transform: translateY(20px);
}
.espacio {
  margin-bottom: 2%;
}
.invisible {
  opacity: 0;
}
.modalGaleria {
  display: flex;
  position: fixed;
  z-index: 6000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh !important;
  overflow-y: hidden !important;
  background-color: rgba(0, 0, 0, 0.363);
  backdrop-filter: blur(3px);
}

.modal-content-Galeria {
  position: relative;
  width: 91%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: auto;
  margin-top: auto;
  height: 55vh;
  border-radius: 12px;
  z-index: 6002;
}
.botonesGaleria {
  position: fixed;
  z-index: 6003;
  background: rgba(165, 42, 42, 0);
  display: flex;
  justify-content: space-between;
  align-items: center;
  left: 0;
  right: 0;
  bottom: 48%;
  margin: auto;
  width: 95%;
  height: 50px;
}

.close-galeria {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  color: rgba(255, 255, 255, 0.507);
  font-size: 39px;
  font-weight: bold;
  width: 39px;
  height: 39px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--azul);
  border-radius: 50%;
  left: 0;
  right: 0;
  top: -60px;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
}

.close-galeria:hover,
.close-galeria:focus {
  color: #ffffff;
  text-decoration: none;
  cursor: pointer;
}
.prev,
.next {
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 39px;
  height: 39px;
  color: rgba(255, 255, 255, 0.835);
  font-size: 39px;
  transition: 0.6s ease;
  user-select: none;
  -webkit-user-select: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.prev {
  left: 0 !important;
}
.next {
  right: 0 !important;
  border-radius: 50%;
}

.prev:hover,
.next:hover {
  color: #fdfdfd;
}
.slides {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background-size: 100% 100%;
  margin-bottom: 10px;
}
.overlay {
  display: none;
}

@media only screen and (min-width: 320px) and (max-width: 767px) and (orientation: landscape) {
  .modal-content-Galeria {
    height: 68vh;
  }
  .botonesGaleria {
    margin: auto;
    width: 90%;
  }
  .close-galeria {
    top: -50px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 1024px) {
  .botonesGaleria {
    margin: auto;
    width: 90%;
  }
  .espacio {
    margin-bottom: 4%;
  }
  .galeriaContent {
    padding-bottom: 6%;
  }
  .modal-content-Galeria {
    height: 70vh;
  }
  .cardImg {
    width: 20%;
    margin: 10px;
    height: 100px;
  }
  #cardimg1 {
    transform: translateY(20px);
  }
  #cardimg3 {
    transform: translateY(20px);
  }
  #cardimg5 {
    transform: translateY(20px);
  }
  #cardimg6 {
  }
  #cardimg7 {
    transform: translateY(20px);
  }
  #cardimg8 {
  }
}
@media only screen and (min-width: 1024px) and (max-width: 1140px) {
  .cardImg {
    width: 20%;
    height: 120px;
    margin: 10px;
  }
  .nube img {
    height: 60px;
  }
  .modal-content-Galeria {
    height: 80%;
    width: 70%;
  }
  .galeriaContent {
    padding-bottom: 5%;
  }
  .overlay {
    content: "";
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.233);
    color: var(--azul);
    font-family: "Roboto", sans-serif;
    transform: scale(0);
    transition: all 0.9s;
    z-index: 1;
    border-radius: 15px;
  }
  .overlay span {
    font-size: 15px;
    cursor: pointer;
    padding: 10px;
    transition: all 0.4s;
    color: var(--azul);
    border-radius: 25px;
    font-weight: 500;
    background: rgba(255, 255, 255, 0.931);
  }
  .overlay span:hover {
    background: rgba(255, 255, 255, 0.831);
  }

  .cardImg:hover .overlay {
    transform: scale(1.1);
    transition: all 2s;
    border-radius: 15px;
  }
  .modal-content {
    overflow: hidden;
  }
  .botonesGaleria {
    margin: auto;
    width: 90%;
    height: 50px;
  }
  .close-galeria {
    color: rgba(255, 255, 255, 0.507);
    font-size: 39px;
    font-weight: bold;
    width: 39px;
    height: 39px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--azul);
    border-radius: 50%;
  }

  .close-galeria:hover,
  .close-galeria:focus {
    color: #ffffff;
    text-decoration: none;
    cursor: pointer;
  }
  .espacio {
    margin-bottom: 3%;
  }
}
@media only screen and (min-width: 1140px) and (max-width: 2560px) {
  .cardImg {
    width: 20%;
    height: 140px;
    margin: 10px;
  }
  .nube img {
    height: 80px;
  }
  .modal-content-Galeria {
    height: 80%;
    width: 70%;
  }
  .galeriaContent {
    padding-bottom: 5%;
  }
  .overlay {
    content: "";
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.603);
    font-family: "Roboto", sans-serif;
    transform: scale(0);
    transition: all 0.9s;
  }
  .overlay span {
    font-size: 19px;
    cursor: pointer;
    padding: 10px;
    transition: all 0.4s;
    color: var(--azul);
    font-weight: 500;
    background: rgba(255, 255, 255, 0);
  }

  .cardImg:hover .overlay {
    transform: scale(1.1);
    border-radius: 15px;
  }

  .botonesGaleria {
    margin: auto;
    width: 90%;
    height: 50px;
  }
  .close-galeria {
    color: rgba(255, 255, 255, 0.507);
    font-size: 39px;
    font-weight: bold;
    width: 39px;
    height: 39px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--azul);
    border-radius: 50%;
  }

  .close-galeria:hover,
  .close-galeria:focus {
    color: #ffffff;
    text-decoration: none;
    cursor: pointer;
  }

  .prev,
  .next {
    cursor: pointer;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 39px;
    height: 39px;
    color: rgba(255, 255, 255, 0.404);
    font-size: 39px;
    transition: 0.6s ease;
    user-select: none;
    -webkit-user-select: none;
  }

  .prev {
    left: 0 !important;
  }

  .next {
    right: 0 !important;
    border-radius: 50%;
  }

  .prev:hover,
  .next:hover {
    color: #fdfdfd;
  }
  .espacio {
    margin-bottom: 3%;
  }
}
</style>