<template>
  <div id="acti" class="actividades" :style="fondo">
    <section v-for="(data,di) in Data" :key="di" class="container-fluid">
      <div  class="TitulosAndParrafos">
        <titulos :titulo="data.title"></titulos>
        <p>
        {{data.parrafo}}
        </p>
      </div>
      <div  class="row contenedorImg">
        <div class="imgCirculo">
          <ImageLazy
            class="photo img-responsive"
            :src="data.imagen"
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
        <div
          v-for="(acti, j) in actividades"
          :key="j"
          class="col-xs-12 col-sm-6 col-md-6 col-lg-6"
        >
          <div :id="`color` + (j + 1)" class="nosotrosContenido">
            <div :id="`nosotroText` + (j + 1)" class="nosotroText">
              <h1>{{ acti.title }}</h1>
              <p>{{ acti.intro }}</p>
              <btnPry
                :NameIcono="nameIcon"
                :icono="true"
                :clase="claseBtn"
                :texto="txtBtn"
                @clicks="saberMas(acti)"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <modal v-if="open" @closes="saberMas">
      <template slot="contenido">
        <div class="contenedor-descripcion">
          <h1>{{ selecion.title }}</h1>
          <p>{{ selecion.parrafo }}</p>
        </div>
      </template>
    </modal>
  </div>
</template>
<script>
import btnPry from "~/components/btnPry.vue";
import titulos from "~/components/titulos.vue";
import modal from "~/components/modal.vue";
import ImageLazy from "cube-vue-image-lazy";
import data from "../content/espacios.json";
export default {
  data() {
    return {
      loading: false,
      loaded: false,
      open: false,
      titulo: "Nuestros espacios",
      txtBtn: "Saber mas",
      claseBtn: "btnSecundario",
      nameIcon: "fas fa-arrow-right",
      actividades: [],
      Data: [],
      selecion: "",
      index: 0,
      fondo: {
        backgroundImage: `url(${require("@/static/img/nubeazul.jpeg")})`
      }
     
    };
  },
  name: "actividades",
  components: {
    ImageLazy,
    titulos,
    btnPry,
    modal
  },
  mounted() {
    let array = [{ ...data }];
    this.Data = array;
    this.actividades = data.space;
  },
  methods: {
    saberMas: function(acti) {
      this.selecion = acti;
      this.open = !this.open;
      document.getElementsByTagName("html")[0].classList.add("scrollHtml");
    }
  }
};
</script>
<style>
.nosotrosContenido {
  width: 100%;
  border-radius: 10px;
  box-shadow: 3px 9px 30px -6px rgba(0, 0, 0, 0.55);
  -webkit-box-shadow: 3px 9px 30px -6px rgba(0, 0, 0, 0.55);
  -moz-box-shadow: 3px 9px 30px -6px rgba(0, 0, 0, 0.55);
  margin: 6% 0;
  overflow: hidden;
  transition: all 0.7s;
  position: relative;
}
.actividades section {
  margin-bottom: 10%;
}
.actividades {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding-bottom: 30%;
  padding-top: 2%;
  margin-bottom: 0;
  position: relative;
}

.nosotroText {
  font-size: 12px;
  color: #ffffff;
  padding: 20px;
}

.nosotroText p {
  padding-top: 0;
  font-size: 1rem;
  text-align: left;
}

.contenedorImg {
  position: relative;
}

.imgCirculo,
.sombraicono {
  display: none;
}

#color1 {
  background-color: #2aaae2;
}

#color4 {
  background-color: #75da8f;
}

#color2 {
  background-color: #f9b001;
}

#color3 {
  background-color: #f86a9a;
}

@media only screen and (min-width: 768px) and (max-width: 1024px) {
  .actividades {
    margin-bottom: 5%;
    padding-bottom: 2%;
  }
  .actividadesTexto h1 {
    font-size: 30px;
  }
  .imgCirculo {
    position: absolute;
    width: 290px;
    height: 290px;
    border-radius: 50%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    z-index: 6;
    background-color: rgb(255, 255, 255);
    display: block;
    overflow: hidden;
    cursor: pointer;
    padding: 0;
    border: 6px solid #ffffff;
  }
  .imgCirculo img {
    object-fit: cover;
    -webkit-transition: all 1.4s ease-in-out;
    -moz-transition: all 1.4s ease-in-out;
    -o-transition: all 1.4s ease-in-out;
    -ms-transition: all 1.4s ease-in-out;
    height: 350px;
    width: 350px;
    background-color: rgb(128, 128, 128);
  }
  .imgCirculo:hover img {
    transition: 1.4s all;
    -webkit-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -ms-transform: scale(1.2);
    -o-transform: scale(1.2);
    transform: scale(1.2);
  }

  .nosotroText {
    width: 48%;
  }
  .nosotroText p {
    font-size: 0.8rem;
  }
  #color2,
  #color4 {
    justify-content: flex-end;
  }

  .nosotrosContenido {
    height: 234px;
    display: flex;
    align-items: center;
  }
}

@media only screen and (min-width: 1024px) and (max-width: 1140px) {
  .actividades {
    margin-bottom: 5%;
    padding-bottom: 1%;
  }
  .actividadesTexto h1 {
    font-size: 30px;
  }
  .nosotrosContenido {
    height: 245px;
    display: flex;
    align-items: center;
  }

  .imgCirculo {
    width: 390px;
    height: 390px;
    padding: 0;
  }

  .nosotroText p {
    font-size: 15px;
  }
  .nosotroText h1 {
    font-size: 21px;
  }
  #nosotroText3,
  #nosotroText4,
  #nosotroText2 {
    width: 60%;
  }
  #color2,
  #color4 {
    justify-content: flex-end;
  }
  .imgCirculo {
    position: absolute;
    width: 350px;
    height: 350px;
    border-radius: 50%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    z-index: 6;
    background-color: rgb(255, 255, 255);
    display: block;
    padding: 0;
    overflow: hidden;
    cursor: pointer;
    border: 6px solid #ffffff;
  }
  .imgCirculo img {
    object-fit: cover;
    -webkit-transition: all 1.4s ease-in-out;
    -moz-transition: all 1.4s ease-in-out;
    -o-transition: all 1.4s ease-in-out;
    -ms-transition: all 1.4s ease-in-out;
  }
  .imgCirculo:hover img {
    transition: 1.4s all;
    -webkit-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -ms-transform: scale(1.2);
    -o-transform: scale(1.2);
    transform: scale(1.2);
  }
}

@media only screen and (min-width: 1140px) and (max-width: 2560px) {
  .actividades {
    margin-bottom: 5%;
    padding-bottom: 1%;
  }
  .actividadesTexto h1 {
    font-size: 30px;
  }
  .nosotrosContenido {
    height: 245px;
    display: flex;
    align-items: center;
  }
  .imgCirculo {
    position: absolute;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    z-index: 6;
    background-color: rgb(255, 255, 255);
    display: block;
    padding: 0;
    overflow: hidden;
    cursor: pointer;
    border: 5px solid #ffffff;
  }

  .imgCirculo img {
    object-fit: cover;
    -webkit-transition: all 1.4s ease-in-out;
    -moz-transition: all 1.4s ease-in-out;
    -o-transition: all 1.4s ease-in-out;
    -ms-transition: all 1.4s ease-in-out;
    height: 450px;
    width: 450px;
  }
  .imgCirculo:hover img {
    transition: 1.4s all;
    -webkit-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -ms-transform: scale(1.2);
    -o-transform: scale(1.2);
    transform: scale(1.2);
  }

  #nosotroText2,
  #nosotroText4 {
    width: 50%;
  }
  #color2,
  #color4 {
    justify-content: flex-end;
  }

  .nosotroText p {
    font-size: 15px;
  }

  .nosotroText h1 {
    font-size: 26px;
    margin-top: 0;
  }

  .nosotroText {
    padding: 10px 20px;
  }
}
</style>
