<template>
  <div id="nos">
    <div class="container-fluid nosotros">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 contenImagenes1024">
          <figure
            v-for="(item, index) in imagenes"
            :key="index"
            class="contenedor-figure"
          >
            <div class="img-a" :id="'_' + index">
              <ImageLazy
                class="photo img-responsive"
                :src="item.img1"
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
          <figcaption class="texto-articulo">
            <div v-for="item,a in data" :key="a">
              <titulos
                id="nos"
                class="tituloNos"
                :titulo="item.title"
              ></titulos>
              <p class="parrafo margin-b-medium">
                {{ item.intro }}
              </p>
            </div>

            <div v-for="(items,i ) in features"  :key="i" class="items-parrafo">
              <div class="contenItems">
                <i class="fas fa-star"></i><strong>{{ items.title }} </strong>
              </div>
              <p>
                {{ items.intro }}
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
import json from "../content/homeNosotros.json";
export default {
  data() {
    return {
      titulo: "Sobre Nosotr@s",
      txtBtn: "Saber mas",
      claseBtn: "btnPrimario",
      imagenes: [],
      features: [],
      data: []
    };
  },
  name: "sectionPresentacion",
  components: {
    titulos,
    btnPry,
    ImageLazy
  },
  mounted() {
    let array = [{ ...json }];
    this.data = array;
    this.imagenes = json.images;
    this.features = json.Features;
    console.log(this.features);
  },

  methods: {
    pageNosotros() {
      this.$router.push({
        name: "SobreNosotros"
      });
    }
  }
};
</script>
<style>
.contenedor-figure {
  position: relative;
  /* overflow: hidden; */
  height: 200px;
  width: 100%;
  /* margin-top: 15%; */
}
#_0 {
  position: absolute;
  width: 140px;
  height: 140px;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  transform: translate(-35%, 1%);
  z-index: 1;
  padding: 5px;
  background: #f8f8f8;
  border: var(--naranja) dashed 2px;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.img-a ,#_0 img {
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

#_1 {
  position: absolute;
  width: 250px;
  height: 250px;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  transform: translate(0%, -40%);
  z-index: 2;
  padding: 5px;
  background: #f8f8f8;
  border: var(--verde) dashed 2px;
  border-radius: 50%;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.img-b ,
#_1 img {
  width: 250px;
  height: 250px;
}
#_2 {
  position: absolute;
  width: 110px;
  height: 110px;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  transform: translate(30%, -60%);
  z-index: 3;
  padding: 5px;
  background: #f8f8f8;
  border: var(--azul) dashed 2px;
  border-radius: 50%;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.img-c ,
#_2 img {
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
  color: var(--titulo);
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
 /*  #_0 {
    transform: translate(-90%, 1%);
  }
  .img-a,#_0 img {
  } */
  #_0 {
    width: 290px;
    height: 290px;
    transform: translate(0%, 20%);
  }
  .img-b,#_0 img {
    width: 290px;
    height: 290px;
  }
  #_1 {
    width: 180px;
    height: 180px;
    transform: translate(70%, 120%);
  }
  .img-c,#_1 img {
    width: 180px;
    height: 180px;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) {
  .items-parrafo {
    margin-bottom: 3%;
  }

  .contenedor-figure {
    padding-top: 10%;
    height: 80px;
  }
  #_0 {
    width: 180px;
    height: 180px;
    padding: 6px;
    transform: translate(-100%, 10%);
  }
  .img-a,#_0 img {
    width: 180px;
    height: 180px;
  }
  #_1 {
    width: 290px;
    height: 290px;
    padding: 6px;
    transform: translate(0%, -50%);
  }
  .img-b,#_1 img {
    width: 290px;
    height: 290px;
  }
  #_2 {
    width: 200px;
    height: 200px;
    padding: 6px;
    transform: translate(90%, -95%);
  }
  .img-c,#_2 img {
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

  #_0 {
    width: 120px;
    height: 120px;
    padding: 6px;
    transform: translate(25%, 110%);
  }
  .img-a ,#_0 img {
    width: 120px;
    height: 120px;
  }
  #_1 {
    width: 190px;
    height: 190px;
    padding: 6px;
    transform: translate(0%, 20%);
  }
  .img-b,#_1 img {
    width: 190px;
    height: 190px;
  }
  #_2 {
    width: 140px;
    height: 140px;
    padding: 6px;
    transform: translate(-20%, 100%);
  }
  .img-c,#_2 img {
    width: 140px;
      height: 140px;
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

  #_0  {
    width: 180px;
    height: 180px;
    padding: 6px;
    transform: translate(35%, 90%);
  }
  .img-a ,#_0 img {
    width: 180px;
    height: 180px;
  }
  #_1 {
    width: 250px;
      height: 250px;
    transform: translate(0%, 20%);
    padding: 6px;
    border: #43cd66 dashed 3px;
  }
  .img-b,#_1 img {
    width: 250px;
    height: 250px;
  }
  #_2 {
    width: 190px;
    height: 190px;
    padding: 6px;
    transform: translate(-5%, 20%);
    
  }
  .img-c, #_2 img {
    width: 190px;
    height: 190px;
  }
}
</style>
