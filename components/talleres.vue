<template>
  <div id="talleres" class="container-fluid">
    <div class="conten-inscripciones">
      <div class="sombra-inscripciones"></div>
      <div class="conten-inscripciones-titulo">
        <h1 class="titulo">Inscripciones abiertas</h1>
        <btnPry
          :NameIcono="nameIcon"
          :icono="true"
          :clase="claseBtn"
          :texto="txtIns"
          @clicks="rutai()"
        />
      </div>
      <ImageLazy
        class="photo img-responsive"
        :src="require('static/img/inscripciones.jpeg')"
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

    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div class="TitulosAndParrafos">
          <titulo :titulo="titulos" />
          <p>
            Las mismas se desarrollan en espacios donde pueden desplazarse con
            total libertad, desplegando poco a poco su autonomía y
            autorregulación. Aprendiendo a tomar decisiones, afianzando su
            seguridad y autoestima. Trabajamos a través de marcados Ritmos de
            concentración y expansión. Los mismos nos remiten a nuestra propia
            respiración. Es por esto que nuestras jornadas son orgánicas ! La
            concentración remite a la inhalación y a toda actividad que requiera
            nuestra atención bien activa! cómo puede ser pintar, hacer telar,
            circo, etc.. Al contrario, la expansión hace referencia a la
            exhalación y toda actividad de juego libre. Nuestro eje de trabajo
            es el ARTE y la ECOLOGÍA. Entendiendo la misma como el equilibrio
            necesario en un ambiente de armonía entre todos sus integrantes y
            componentes en el espacio/tiempo. Desde la satisfacción y el
            disfrute de diferentes experiencias artísticas como: Musicales,
            teatrales, circenses, plásticas y otros eventos esporádicos que
            complementan el desarrollo integral de cada ser.
          </p>
        </div>
      </div>
    </div>

    <article>
      <div class="row">
        <div
          v-for="(img, i) in imagenes"
          :key="i"
          class="col-xs-12 col-sm-6 col-md-4 col-lg-4"
        >
          <div class="card" :id="`cardColor` + (i + 1)">
            <div class="imgCard">
              <div class="border-top"></div>
              <ImageLazy
                class="photo img-responsive"
                :src="img.url"
                baseClass="image-lazy"
                deferredClass="image-lazy-deferred"
                loadingClass="image-lazy-loading"
                loadedClass="image-lazy-loaded"
                :delay="0"
                @loading="loading = false"
                @load="loaded = false"
                :alt="img.title"
              />
            </div>
            <div class="textCard">
              <h1>{{ img.title }}</h1>
              <p>
                {{ img.descripcion }}
              </p>
              <btnPry
                :NameIcono="nameIcon"
                :icono="true"
                :clase="claseBtn"
                :texto="txtBtn"
                @clicks="leerMas(img)"
              />
            </div>
          </div>
        </div>
      </div>
    </article>
    <modal v-if="open" @closes="leerMas">
      <template slot="contenido">
        <div class="contenedor-descripcion">
          <h1>{{ selecion.title }}</h1>
          <p>{{ selecion.descripcion }}</p>
        </div>
      </template>
    </modal>
  </div>
</template>
<script>
import titulo from "../components/titulos.vue";
import btnPry from "~/components/btnPry.vue";
import Modal from "~/components/modal.vue";
import ImageLazy from "cube-vue-image-lazy";
export default {
  components: {
    ImageLazy,
    titulo,
    btnPry,
    Modal,
  },
  name: "talleres",
  data() {
    return {
      loading: false,
      loaded: false,
      txtIns: "Consultános",
      selecion: "",
      nameIcon: "fas fa-arrow-right",
      titulos: "Nuestras Actividades",
      txtBtn: "Leer mas",
      claseBtn: "btnPrimario",
      index: 0,
      open: false,
      imagenes: [
        {
          url: require("static/img/yoga.jpeg"),
          title: "Yoga y Acroyoga",
          descripcion:
            "Al hacer yoga, los niñ@s adquieren conciencia de su propio cuerpo, aprenden a reconocer cada una de sus partes y a adoptar buenas posturas, además, fortalecen los músculos y adquieren flexibilidad, logran concentrarse mejor y eliminar el estrés. Fomenta el compañerismo, la amistad y el respeto hacia el medio ambiente. Gracias a pintar mandalas y los ejercicios de respiración consiguen relajar la mente y volver a la calma.",
        },
        {
          url: require("static/galeria/galeria6.jpeg"),
          title: "Circo y Tela",
          descripcion:
            "Las diferentes prácticas circenses propician el desarrollo de las capacidades psicomotrices, la creatividad y la expresión. Los personajes, la escenografía, la emoción de las acrobacias y los juegos de malabares resultan claros incentivos para el desarrollo del juego el cual será la clave para aprender y estimular el desarrollo físico, intelectual y sensorial de los niñ@s. Para el desarrollo holístico de cada ser , creemos fundamental trabajar la mente, el corazón y lo físico. La disciplina circense es una disciplina que trabaja todas las partes del cuerpo y a su vez es un ejercicio de neuroplasticidad ya que trabaja ambos hemisferios cerebrales, de una forma divertida, lúdica, llena de colores, para ser tomada con alegría y así crecer jugando.",
        },
        {
          url: require("static/img/muralista.jpeg"),
          title: "Pintura muralista",
          descripcion:
            "El arte muralista favorece la apreciación, expresión y representación de sentires y pensares. A través de la expresión de emociones, recuerdos, percepciones y sensaciones. Así, las expresiones visuales y plásticas se convierten en un lenguaje del sentir de las niñ@s. En IRRADIANDO el muralismo hace a la libertad de expresión, propiciando que tengan la experiencia de pasar con un pincel sobre un muro o pared, es una experiencia de completa libertad, apertura, amplitud y diversión de llenar de colores y trazos. Para esto ellos cuentan con una pared especifica en el espacio, donde pueden explayarse.",
        },
        {
          url: require("static/img/arcilla.jpeg"),
          title: "Arcilla",
          descripcion:
            "El juego con arcilla aporta diferentes beneficios para el sistema sensorial de nuestros niñ@s y mejora la motricidad fina en las manos. El hecho de sentir texturas ya sean frías, pesadas, resbalosas, con diferentes olores y colores que se forman de diferentes maneras en sus manos y que responden a su manipulación. Es muy importante darles a los niñ@s la libertad de trabajar con los materiales, dejarles ensuciarse, mojarse y explorarlos.",
        },
        {
          url: require("static/img/cocina.jpeg"),
          title: "Cocina",
          descripcion:
            "Los talleres de cocina proponen actividades de experimentación, divertidas y seguras. Este taller es uno de los más completos, ya que a través del mismo, podemos compartir ritmo al batir, experimentar con nuestros sentidos, los aromas, las texturas, la observación de cambios en la materia, el gusto.. acercarnos a las ciencias naturales mediante la recolección de alimentos de la huerta, a las ciencias  sociales mediante las comidas típicas, la lecto escritura en el procedimiento de preparación y matemática en las cantidades ¡Todo en una sola receta! Sin importar el conocimiento previo que tengan de cocina, los niñ@s disfrutan de una alimentación sana, variada y equilibrada. Además, hacen recetas tan fáciles que luego pueden repetirlas en casa. En conjunto con el Almacén Saludable que es un espacio de aprendizaje que involucra la colaboración de todas las familias del espacio, que proporciona una dosis segura de muchos nutrientes importantes en los primeros años de vida de los niñ@s.",
        },
        {
          url: require("static/img/arte.jpeg"),
          title: "Arte",
          descripcion:
            "El arte constituye una posibilidad tangible que permite dar forma a lo intangible, a lo que se siente, se piensa, se imagina e incluso a lo que se teme, ya que al pintar, modelar o dibujar emergen ideas, sentimientos e imágenes, las cuales contribuyen a la creación de mundos posibles y personajes salidos de la fantasía y de la imaginación de las niñ@s. ",
        },
        {
          url: require("static/img/telar.jpeg"),
          title: "Telar",
          descripcion:
            "La práctica de las manualidades y labores como el telar no tiene la intención de ofrecer sólo un pasatiempo agradable,  contribuye al pensamiento ágil y favorece la atención plena. Es una forma ancestral de meditación, de volcar allí nuestros sentires y pensares. De intencionar un deseo, de transmutar nuestra energía.",
        },
        {
          url: require("static/img/nos3.jpeg"),
          title: "Música",
          descripcion:
            "El ritmo es el elemento que nos brinda seguridad para nuestro desarrollo. A su vez,  la música incide con muchísima fuerza en la sensibilidad infantil y es a través del movimiento cómo el niñ@ lo percibe. Las canciones motrices y rimas con dedos, constituyen el medio a través del cual se sintetizan las dos áreas de conocimiento, la educación física y musical.",
        },
        {
          url: require("static/img/teatro.jpeg"),
          title: "Teatro",
          descripcion:
            "El teatro es una las mejores formas de expresión, diversión y desarrollo.  A los niñ@s les gusta, la pasan bien y además favorece a la evolución de cada parte de su cuerpo y mente. Ayuda a los niñ@s en la mejora del lenguaje, de la comprensión y especialmente de la expresión. Amplían su vocabulario; mejora la pronunciación, entonación y vocalización; permite conocer su voz aguda, grave, fuerte y débil. El  teatro impulsa a los niñ@s más tímidos a ir perdiendo poco a poco ese miedo a  relacionarse con los demás o a hablar en público y a aceptarse a sí mismo, por lo  tanto se está propiciando a una buena socialización, autoestima y autonomía personal. Y no solo eso sino que también enfatiza la cooperación y el trabajo en equipo y les hace sentir que forman parte de un grupo de iguales.",
        },
      ],
    };
  },
  methods: {
    leerMas: function (img) {
      this.selecion = img;
      this.open = !this.open;
      document.getElementsByTagName("html")[0].classList.add("scrollHtml");
    },
    rutai() {
      this.$router.push({
        name: "contacto",
      });
    },
  },
};
</script>
<style>
.conten-inscripciones {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 60px;
  width: 100%;
  height: 180px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  z-index: 3;
  box-shadow: 3px 9px 30px -6px rgb(0 0 0 / 55%);
  -webkit-box-shadow: 3px 9px 30px -6px rgb(0 0 0 / 55%);
  -moz-box-shadow: 3px 9px 30px -6px rgba(0, 0, 0, 0.55);
  overflow: hidden;
  line-height: 0;
}
.sombra-inscripciones {
  border-radius: 10px;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(227,221,14);
background: linear-gradient(150deg, rgba(227,221,14,1) 0%, rgba(231,139,33,0.5886729691876751) 49%, rgba(227,59,136,0.7175245098039216) 100%);
}
.conten-inscripciones-titulo {
  position: absolute;
  z-index: 6;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.conten-inscripciones-titulo h1 {
  font-size: 1.6rem;
  color: #ffffff !important;
  margin-bottom: 40px;
}
.conten-inscripciones img {
  border-radius: 10px;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.talleresTitulo p {
  text-align: center;
  margin-bottom: 5%;
}
.card {
  width: 100%;
  height: auto;
  box-shadow: 3px 9px 30px -6px rgba(66, 66, 66, 0.55);
  -webkit-box-shadow: 3px 9px 30px -6px rgba(66, 66, 66, 0.55);
  -moz-box-shadow: 3px 9px 30px -6px rgba(66, 66, 66, 0.55);
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.938);
  margin-bottom: 10%;
  overflow: hidden;
  position: relative;
  -webkit-transition: all 1s ease-in-out;
  -moz-transition: all 1s ease-in-out;
  -o-transition: all 1s ease-in-out;
  -ms-transition: all 1s ease-in-out;
  margin-left: auto;
  margin-right: auto;
}
#cardColor1:hover {
  background-color: var(--rosa);
  color: #ffffff;
}
#cardColor1:hover .border-top::before {
  color: var(--rosa);
}
#cardColor2:hover {
  background-color: var(--azul);
  color: #ffffff;
}
#cardColor2:hover .border-top::before {
  color: var(--azul);
}
#cardColor3:hover {
  background-color: var(--naranja);
  color: #ffffff;
}
#cardColor3:hover .border-top::before {
  color: var(--naranja);
}
#cardColor4:hover {
  background-color: var(--verde);
  color: #ffffff;
}
#cardColor4:hover .border-top::before {
  color: var(--verde);
}
#cardColor5:hover {
  background-color: var(--rosa);
  color: #ffffff;
}
#cardColor5:hover .border-top::before {
  color: var(--rosa);
}
#cardColor6:hover {
  background-color: var(--azul);
  color: #ffffff;
}
#cardColor6:hover .border-top::before {
  color: var(--azul);
}
#cardColor7:hover {
  background-color: var(--naranja);
  color: #ffffff;
}
#cardColor7:hover .border-top::before {
  color: var(--naranja);
}
#cardColor8:hover {
  background-color: var(--verde);
  color: #ffffff;
}
#cardColor8:hover .border-top::before {
  color: var(--verde);
}
#cardColor9:hover {
  background-color: var(--naranja);
  color: #ffffff;
}
#cardColor9:hover .border-top::before {
  color: var(--naranja);
}
.imgCard {
  height: 200px;
  overflow: hidden;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  position: relative;
  display: inline-block;
  vertical-align: top;
  width: 100%;
  background-color: rgb(187, 187, 187);
}
.imgCard img {
  height: 200px;
  width: 100%;
  overflow: hidden;
  object-fit: cover;
  -webkit-transition: all 1.4s ease-in-out;
  -moz-transition: all 1.4s ease-in-out;
  -o-transition: all 1.4s ease-in-out;
  -ms-transition: all 1.4s ease-in-out;
  display: inline-block;
  vertical-align: top;
}
.card:hover img {
  transition: 1.4s all;
  -webkit-transform: scale(1.2);
  -moz-transform: scale(1.2);
  -ms-transform: scale(1.2);
  -o-transform: scale(1.2);
  transform: scale(1.2);
}

.textCard {
  padding: 20px;
}
.textCard h1 {
  color: var(--titulo);
}
.textCard p {
  height: 30%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
}
.border-top {
  position: absolute;
  top: 180px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  overflow-x: hidden !important;
  overflow-y: hidden;
  z-index: 10;
}
.border-top::before {
  content: "\f111\f111\f111\f111\f111\f111\f111\f111\f111\f111\f111\f111\f111\f111\f111";
  font-family: "FontAwesome", sans-serif;
  font-size: 56px;
  line-height: 1;
  color: #fff;
  display: inline-block;
  -webkit-transition: all 1s ease-in-out;
  -moz-transition: all 1s ease-in-out;
  -o-transition: all 1s ease-in-out;
  -ms-transition: all 1s ease-in-out;
  padding: 0;
  margin: 0;
  overflow-x: auto;
  overflow-y: hidden;
}
.textBotones {
  padding-bottom: 8%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 15px;
}
.TitulosAndParrafos p {
  margin-bottom: 10%;
}
@media only screen and (min-width: 320px) and (max-width: 546px) and (orientation: landscape) {
  .border-top::before {
    content: "\f111\f111\f111\f111\f111\f111\f111\f111\f111";
  }
  .contenedor-descripcion {
    padding: 2%;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) {
  .card {
    margin-bottom: 15%;
  }
  .contenedor-descripcion {
    padding: 2%;
  }
  .border-top::before {
    content: "\f111\f111\f111\f111\f111\f111\f111\f111\f111";
  }
  .textCard {
    height: 214px;
  }
  .TitulosAndParrafos p {
    margin-bottom: 5%;
  }
}
@media only screen and (min-width: 1024px) and (max-width: 1140px) {
  .TitulosAndParrafos p {
    margin-bottom: 7%;
  }

  .conten-inscripciones-titulo h1 {
    font-size: 2rem;
  }
  .conten-inscripciones {
    width: 80%;
  }
  .card {
    width: 90%;
    margin-bottom: 20%;
  }
  .contenedor-descripcion {
    padding: 0 3%;
    line-height: 1.4rem;
    overflow-y: auto;
  }
  .textCard {
    align-items: stretch;
    height: 234px;
  }
}
@media only screen and (min-width: 1140px) and (max-width: 2560px) {
  .TitulosAndParrafos p {
    margin-bottom: 7%;
  }
  .conten-inscripciones-titulo h1 {
    font-size: 2.4rem;
  }
  .conten-inscripciones {
    width: 80%;
  }
  .card {
    width: 90%;
    margin-bottom: 20%;
  }
  .imgCard {
    height: 200px;
  }
  .imgCard img {
    height: 200px;
  }
  .textCard {
    width: 80%;
    height: 230px;
    align-items: stretch;
  }
  .textCard p {
    height: 30%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
  }
  .contenedor-descripcion {
    padding: 0 3%;
    line-height: 1.4rem;
    overflow-y: auto;
  }
}
</style>