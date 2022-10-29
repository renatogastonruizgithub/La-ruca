<template>
  <section>
    <div v-for="post in posts" class="tituloSobre container-fluid">
      <titulo :titulo="post.title" />
      <p>
        {{ post.intro }}
      </p>
    </div>

    <div :style="fondoSobr" class="sobreNosotros">
      <div class="nubeSobre" :style="fondosobre"></div>
      <section class="container-fluid">
        <div id="sobrenosotros" class="TitulosAndParrafos">
          <div v-for="post in mision" class="row esapacioSobre">
            <div
              class="col-xs-12 col-sm-12 col-md-6 col-lg-6 contenImagenesNos"
            >
              <figure class="contenCirculo">
                <div class="circulo">
                  <ImageLazy
                    class="photo img-responsive"
                    :src="post.photo"
                    baseClass="image-lazy"
                    deferredClass="image-lazy-deferred"
                    loadingClass="image-lazy-loading"
                    loadedClass="image-lazy-loaded"
                    :delay="500"
                    @loading="loading = true"
                    @load="loaded = true"
                    alt=""
                  />
                </div>
              </figure>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <figcaption class="texto-articulo">
                <h1>{{ post.title }}</h1>
              </figcaption>
              <p>
                {{ post.paragraph }}
              </p>
            </div>
          </div>

          <div v-for="vision in vision" class="row esapacioSobre">
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <figcaption class="texto-articulo">
                <h1>{{ vision.title }}</h1>
              </figcaption>
              <p class="line">{{ vision.paragraph }}</p>
            </div>
            <div
              class="col-xs-12 col-sm-12 col-md-6 col-lg-6 contenImagenesNos"
            >
              <figure class="contenCirculo">
                <div class="circulo">
                  <ImageLazy
                    class="photo img-responsive"
                    :src="vision.photo"
                    baseClass="image-lazy"
                    deferredClass="image-lazy-deferred"
                    loadingClass="image-lazy-loading"
                    loadedClass="image-lazy-loaded"
                    :delay="500"
                    @loading="loading = true"
                    @load="loaded = true"
                    alt=""
                  />
                </div>
              </figure>
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>
<script>
import titulo from "../components/titulos.vue";
import ImageLazy from "cube-vue-image-lazy";
import axios from "axios";
import data from "../content/about.json";
export default {
  head: {
    title: "Sobre la ruca",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "La misión de la ruca es el acompañamiento respetuoso y en comunidad de la niñez y juventud, ¡somos guardianes del fueguito interno!"
      },
      {
        name: "keywords",
        content:
          "talleres para niños cordoba,taller de arte para niños cordoba,talleres de manualidades para niños en cordoba,taller de cocina para niños cordoba,taller de musica para niños cordoba,taller de arte para niños cordoba"
      },
      {
        name: "google-site-verification",
        content: "Lp56zDS6CfCh7oOcxXF2InDlnOLH5F0RjVM1Xiej7h8"
      },
      {
        name: "robots",
        content: "INDEX,FOLLOW"
      },
      {
        name: "author",
        content: "Renato ruiz"
      }
    ]
  },
  transition: "fade",
  name: "SobreNosotros",
  components: {
    titulo,
    ImageLazy
  },
  data() {
    return {
      loading: true,
      loaded: true,
      posts: [],
      mision: [],
      vision: [],
      imgSobreNos: [{ url: require("static/img/muralista.jpeg") }],

      /* tituloCon: " Conocé más de nosotr@s", */
      fondoSobr: {
        backgroundImage: `url(${require("@/static/img/contacto.jpeg")})`
      },
      fondosobre: {
        backgroundImage: `url(${require("@/static/img/nubeAlreves.png")})`
      }
    };
  },
  mounted() {
    let array = [{ ...data }];
    let aux = JSON.stringify(array);
    let parse = JSON.parse(aux);
    this.posts = parse;
    this.mision = data.mision;
    console.log(data.vision);
    this.vision = data.vision;
  }
};
</script>
<style>
#sobrenosotros {
  margin-bottom: 20%;
  padding-top: 20%;
}
.sobreNosotros {
  background-color: #d9f2fb;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  padding-bottom: 5%;
  margin-top: 70px;
}
.contenImagenesNos {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.contenCirculo {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.circulo {
  position: relative;
  width: 200px;
  height: 200px;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  padding: 7px;
  background: #f8f8f8;
  border: var(--azul) dashed 2px;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  cursor: pointer;
}
.circulo img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
  -webkit-transition: all 1.4s ease-in-out;
  -moz-transition: all 1.4s ease-in-out;
  -o-transition: all 1.4s ease-in-out;
  -ms-transition: all 1.4s ease-in-out;
}
.circulo:hover img {
  transition: 1.4s all;
  -webkit-transform: scale(1.2);
  -moz-transform: scale(1.2);
  -ms-transform: scale(1.2);
  -o-transform: scale(1.2);
  transform: scale(1.2);
}
.texto-articulo {
  color: var(--titulo);
}
.esapacioSobre {
  margin-bottom: 5%;
}
.tituloSobre {
  margin-bottom: 5%;
  margin-top: 90px;
}
.nubeSobre {
  width: 100%;
  height: 100px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
}
@media only screen and (min-width: 320px) and (max-width: 546px) and (orientation: landscape) {
}
@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  #sobrenosotros {
    margin-bottom: 10%;
    padding-top: 10%;
  }
  .tituloSobre {
    margin-bottom: 8%;
  }
  .circulo {
    width: 250px;
    height: 250px;
  }
  .circulo img {
    width: 250px;
    height: 250px;
  }
  .esapacioSobre {
    margin-bottom: 7%;
  }
}
@media only screen and (min-width: 1024px) and (max-width: 1140px) {
  #sobrenosotros {
    margin-bottom: 8%;
    padding-top: 5%;
  }
  .tituloSobre {
    margin-bottom: 6%;
    margin-top: 110px;
  }
  .circulo {
    width: 380px;
    height: 380px;
  }
  .circulo img {
    width: 380px;
    height: 380px;
  }
  .esapacioSobre {
    margin-bottom: 7%;
  }
}
@media only screen and (min-width: 1140px) and (max-width: 2560px) {
  #sobrenosotros {
    margin-bottom: 8%;
    padding-top: 5%;
  }
  .circulo {
    width: 380px;
    height: 380px;
  }
  .circulo img {
    width: 380px;
    height: 380px;
  }
  .esapacioSobre {
    margin-bottom: 7%;
  }
  .tituloSobre {
    margin-bottom: 6%;
    margin-top: 110px;
  }
}
</style>
