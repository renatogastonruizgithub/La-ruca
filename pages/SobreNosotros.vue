<template>
  <section>
    <div class="tituloSobre container-fluid">
      <titulo :titulo="tituloCon" />
      <p v-for="post of posts">
      {{post.title}}
        Somos un grupo Pedagógico-Artístico comprometidos con la educación de
        l@s niñ@s. Ocupados por la crisis del sistema educativo es justamente
        que nos dedicamos a estudiar diferentes corrientes pedagógicas y poner
        en práctica métodos que nos ayuden y nos den soporte para llevar a cabo
        un desarrollo holístico (integral) del ser humano. En cuanto al saber,
        conocimientos, al saber hacer, poniendo en práctica desde lo físico, al
        saber ser, desde nuestra espiritualidad y emociones, en cuanto al saber
        convivir, desde el no autoritarismo, la autorregulación, decisiones en
        asambleas relacionándonos sinceramente desde la verdad, el amor, y el
        respeto, que plantea la corriente libertaria. Tomamos en cuenta el
        método Montessori que se caracteriza por proveer un ambiente preparado,
        ordenado, estético, simple, real, donde cada elemento tiene su razón de
        ser en el desarrollo de los niñ@s, estos trabajan con materiales
        concretos, que brindan las llaves para explorar el mundo y para
        desarrollar habilidades cognitivas básicas, están diseñados para que
        puedan reconocer el error por sí mismo y hacerse responsable del propio
        aprendizaje. También de la pedagogía Waldorf nos sostenemos para el
        desarrollo de los septenios: ciclos de siete años, con sus cambios
        hormonales por ende emocionales que todos pasamos hincapié en los
        elementos que rigen a cada etapa, agua, fuego, tierra, aire y por
        supuesto acompañando a nuestra querida pachamama en toda su amplitud.
        Desarrollamos este proyecto tomando diferentes corrientes pedagógicas
        como bien hemos nombrado, sin fanatizarse con ninguna, teniendo en
        cuenta que somos seres humanos, físicos, emocionales, espirituales y
        mentales que estamos en constantes cambios, recorriendo una "Pedagogía
        Viva".
      </p>
    </div>

    <div :style="fondoSobr" class="sobreNosotros">
      <div class="nubeSobre" :style="fondosobre"></div>
      <section class="container-fluid">
        <div id="sobrenosotros" class="TitulosAndParrafos">
          <div class="row esapacioSobre">
            <div
              class="col-xs-12 col-sm-12 col-md-6 col-lg-6 contenImagenesNos"
            >
              <figure class="contenCirculo">
                <div class="circulo">
                  <ImageLazy
                    class="photo img-responsive"
                    :src="require('static/img/mision.jpeg')"
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
                <h1>Nuestra mision</h1>
              </figcaption>
              <p>
                La misión de Irradiando es el acompañamiento respetuoso y en
                comunidad de la niñez y juventud, ¡Ser guardianes del fueguito
                interno! sobre la base de un conocimiento integral del ser
                humano, según los principios de diferentes corrientes
                pedagógicas tales como la Waldorf, Holística, método Montessori
                e Inteligencias múltiples. Autodenominandonos en una PEDAGOGÍA
                VIVA, sujeta a las necesidades de cada ser. Estas corrientes
                pedagógicas tienen su eje en el arte, desde diferentes ramas
                como pintura, cerámica, circo, yoga, reciclado y otras. Siempre
                a favor del medio ambiente. Según estos principios, la educación
                debe respetar al educando como individuo, contribuir al
                desarrollo de todo su potencial, de su talento, habilidades,
                capacidad de pensar y aprender, debe hacer florecer sus
                posibilidades escondidas. Es importante enriquecer sus
                sentimientos, hacerles vivir situaciones de las cuales el@s
                puedan luego sacar conclusiones para dirigir sus actos. Y más
                aún, es primordial forjar su voluntad para que cuando lleguen a
                la adultez sean capaz de ejecutar los actos que su pensar
                concibió y su sentir apreció como buenos para una determinada
                situación. Con el tiempo ese niñ@, integrará una sociedad en la
                cual ser despierto, hábil, realista y práctico será bueno para
                ell@s y l@s demás.
              </p>
            </div>
          </div>
          <div class="row esapacioSobre">
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <figcaption class="texto-articulo">
                <h1>Nuestra vision</h1>
              </figcaption>
              <p class="line">
                Es procurar que esa llama crezca fuerte para que ilumine todo a
                su paso. Cultivando una humanidad íntegra en lo espiritual,
                físico y anímico que lleve al ser humano hacia una evolución.
                Brindando a l@s niñ@s un acercamiento a las artes, oficios y la
                posibilidad de desarrollarse como seres humanos, respetando su
                naturaleza individual dentro de un grupo humano cálido. A l@s
                adult@s ofrecer un ámbito para el encuentro, la expresión, la
                reflexión y el intercambio de experiencias e información como
                así también la posibilidad de participar activamente en la
                educación de sus hij@s. Trabajar en favor de la preservación de
                la naturaleza y el respeto por toda forma de vida. Para el logro
                de estos propósitos, nos dedicamos al fomento de la cultura,
                organizando charlas, grupos de estudio y en general toda
                actividad educativa para el logro de estos fines. Las
                actividades detalladas no son limitativas, pudiendo realizar
                otras no previstas pero que tengan relación directa con sus
                fines y objetivos, aquí consensuados.
              </p>
            </div>
            <div
              class="col-xs-12 col-sm-12 col-md-6 col-lg-6 contenImagenesNos"
            >
              <figure class="contenCirculo">
                <div class="circulo">
                  <ImageLazy
                    class="photo img-responsive"
                    :src="require('static/img/vision.jpeg')"
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
export default {
 

  head: {
    title: "Sobre Irradiando",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "La misión de Irradiando es el acompañamiento respetuoso y en comunidad de la niñez y juventud, ¡somos guardianes del fueguito interno!",
      },
      {
        name: "keywords",
        content:
          "talleres para niños cordoba,taller de arte para niños cordoba,talleres de manualidades para niños en cordoba,taller de cocina para niños cordoba,taller de musica para niños cordoba,taller de arte para niños cordoba",
      },
      {
        name: "google-site-verification",
        content: "Lp56zDS6CfCh7oOcxXF2InDlnOLH5F0RjVM1Xiej7h8",
      },
      {
        name: "robots",
        content: "INDEX,FOLLOW",
      },
      {
        name: "author",
        content: "Renato ruiz",
      },
    ],
  },
  transition: "fade",
  name: "SobreNosotros",
  components: {
    titulo,
    ImageLazy,
  },
  data() {
    return {
      loading: true,
      loaded: true,
      posts:[],
      imgSobreNos: [{ url: require("static/img/muralista.jpeg") }],

      tituloCon: " Conocé más de nosotr@s",
      fondoSobr: {
        backgroundImage: `url(${require("@/static/img/contacto.jpeg")})`,
      },
      fondosobre: {
        backgroundImage: `url(${require("@/static/img/nubeAlreves.png")})`,
      },
    };
  },
    created()  {
        
    fetch('~/content/about.json')
    .then((response) => response.json())
    .then((json) => console.log(json));
  
  
    
  }
 
}
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