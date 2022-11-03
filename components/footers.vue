<template>
  <div class="fondoFooter">
    <div :style="fondoFooter" class="imgFooter"></div>
    <section class="container-fluid dividerfooer">
      <div class="row">
        <div
          v-for="footers,a in footer" :key="a"
          class="col-xs-12 col-sm-6 col-md-4 col-lg-4"
        >
          <div class="logoFooter">
            <div class="logof">
              <ImageLazy
                class="photo img-responsive"
                :src="footers.image"
                baseClass="image-lazy"
                deferredClass="image-lazy-deferred"
                loadingClass="image-lazy-loading"
                loadedClass="image-lazy-loaded"
                :delay="500"
                @loading="loading = true"
                @load="loaded = true"
                alt="taller de arte Irradiando"
              />
              <h1>{{ footers.title }}</h1>
            </div>
            <p>
              {{ footers.cita }}
            </p>

            <p class="separador_social">Comparte nuestra pagina</p>
            <div class="logoSocialf">
              <div class="socialfooter" id="instagram">
                <a
                  target="_blank"
                  href="https://www.instagram.com/larucapewen/"
                >
                  <i class="fab fa-instagram" aria-hidden="true"></i>
                </a>
              </div>
             <!--  <facebook></facebook> -->
              <div id="whatsapp" class="socialfooter">
                <a
                  target="_blank"
                  href="https://api.whatsapp.com/send?text=https://www.laruca.com.ar"
                >
                  <i class="fab fa-whatsapp" aria-hidden="true"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
          <div v-for="dire,t in direcciones" :key="t" class="contactoFooter">
            <ul>
              <li>
                <i class="fas fa-map-marker-alt"></i>{{ dire.direccion }}
                <strong @click="toggleModal()">Ver en el mapa</strong>
              </li>
              <li>
                <i class="fas fa-envelope-open-text"> </i>{{ dire.email }}
              </li>
              <li @click="enviarL()">
                <i class="fab fa-whatsapp-square"></i>{{ dire.phone }}
              </li>
              <li>
                <i class="fab fa-whatsapp-square"></i>Horarios: {{ dire.days }}
              </li>
            </ul>
          </div>
        </div>
        <div
          v-for="dires,q in direcciones" :key="q"
          class="col-xs-12 col-sm-12 col-md-4 col-md-offset-0 col-lg-4 centrar"
        >
          <div v-if="dires.activado" class="links">
            <ImageLazy
              class="photo img-responsive"
              :src="require('static/img/cultura.jpeg')"
              baseClass="image-lazy"
              deferredClass="image-lazy-deferred"
              loadingClass="image-lazy-loading"
              loadedClass="image-lazy-loaded"
              :delay="500"
              @loading="loading = true"
              @load="loaded = true"
              alt=""
            />
            <p>
              Este espacion cuenta con el apoyo del fondo desarrollar -
              <a
                target="_blank"
                class="cultura"
                href="https://www.cultura.gob.ar/"
                >Ministerio de Cultura de la Nacion</a
              >-
            </p>
          </div>
        </div>
      </div>
      <div class="pie">
        <hr />
        <p>
          &copy; Copyright
          <span id="copyright"> {{ año }}</span>
          Irradiando. Todos los derechos reservados
        </p>
      </div>
    </section>

    <modal v-if="mapa" @closes="toggleModal">
      <template slot="contenido">
        <iframe
          id="mapaModal"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.1522928524582!2d-64.2086350853065!3d-31.40992990308165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94329884ce2d7f73%3A0xe36b69c61b443c49!2sDr.%20%C3%81ngel%20Roque%20Su%C3%A1rez%2048%2C%20X5000%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1610567222136!5m2!1ses-419!2sar"
          width="100%"
          height="300"
          frameborder="0"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </template>
    </modal>
  </div>
</template>
<script>
import ImageLazy from "cube-vue-image-lazy";
import Modal from "~/components/modal.vue";
import Instagram from "./slider.vue";
import Facebook from "./facebook.vue";
import data from "../content/footer.json";
import Dire from "../content/direcciones.json";
export default {
  components: {
    Modal,
    ImageLazy,
    Instagram,
    Facebook
  },
  name: "footers",
  data() {
    return {
      share_open: false,
      mapa: false,
      año: Number,
      direcciones: [],
      footer: [],
      fondoFooter: {
        backgroundImage: `url(${require("@/static/img/footer.png")})`
      }
    };
  },
  mounted() {
    const year = new Date().getFullYear();
    this.año = year;

    let array = [{ ...data }];
    this.footer = array;

    let arrayDire = [{ ...Dire }];
    this.direcciones = arrayDire;
  },
  methods: {
    toggleModal() {
      this.mapa = !this.mapa;
      document.getElementsByTagName("html")[0].classList.add("scrollHtml");
    },

    enviarf() {
      window.open(
        `https://api.whatsapp.com/send?phone=+543513462249&text=Hola!,%20¿como%20estan?%20deseo%20mas%20info%20sobre:`,
        "_blank"
      );
    },
    enviarL() {
      window.open(
        `https://api.whatsapp.com/send?phone=+543513462249&text=Hola!%20¿como%20estan?%20deseo%20mas%20info%20sobre:`,
        "_blank"
      );
    }
  }
};
</script>
<style>
.fondoFooter {
  background-color: rgb(224, 233, 240);
}
.footers {
  position: relative;
  height: auto;
}
.dividerfooer {
  position: relative;
  overflow: hidden;
}
.imgFooter {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  position: relative;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  height: 100px;
  overflow: hidden;
}
.logof {
  width: auto;
  height: 70px;
  background-color: none;
  display: flex;
  flex-grow: 1;
  align-items: center;
  color: #263c8d;
  cursor: pointer;
  position: relative;
}
.logof img {
  width: 60px;
  height: 60px;
  margin-right: 10px;
}
.logoFooter {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: initial;
  justify-content: center;
}
.logoFooter p {
  text-align: left;
}
.logoSocialf {
  display: flex;
  justify-content: left;
  align-items: center;
  width: 310px;
}
.separador_social {
  color: var(--titulo);
  font-weight: 900;
}
.socialfooter {
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  height: 40px;
  width: 40px;
  cursor: pointer;
  transition: all 0.3s ease-out;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  border-radius: 50%;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
}

#instagram i {
  color: transparent;
  background-image: linear-gradient(45deg, #ffdf9e, #e56969, #8a49a1);
  -webkit-background-clip: text;
  margin-left: 0;
}

.socialfooter:nth-child(2n) {
  color: #139cf7;
  margin-left: 10px;
  background-color: #ffffff;
}
#whatsapp {
  background-color: #ffffff;
  color: #00e676;
  background-image: none;
}
/* .socialfooter:nth-child(3n) {
  color: #00e676;
  margin-left: 10px;
} */

.socialfooter:focus {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.contactoFooter {
  margin-top: 8%;
}
.contactoFooter li {
  cursor: pointer;
}
.contactoFooter i {
  margin-right: 10px;
}
.contactoFooter ul {
  padding-left: 0;
}
.links {
  display: flex;
  justify-content: center;
  align-items: initial;
  flex-direction: column;
  text-align: center;
}
.links .cultura {
  text-decoration-color: var(--azul);
  text-decoration-line: underline;
  cursor: pointer;
}
.links img {
  width: 160px;
  height: 70px;
  margin-top: 20px;
}
.links,
.contactoFooter,
li {
  padding: 8px 0;

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  font-family: "Varela Round", sans-serif;
  font-size: 1rem;
}

.contactoFooter strong {
  color: var(--titulo);
  cursor: pointer;
  font-size: 1.2rem;
  text-decoration-color: var(--titulo) !important;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.contactoFooter i {
  color: rgba(0, 0, 0, 0.616);
}
.contactoFooter ul {
  list-style-type: none;
  margin-top: 0;
}
.centrar {
  justify-content: center;
  display: flex;
}
#mapaModal {
  height: 400px;
  border-radius: 8px;
}
.pie p {
  position: relative;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin: 10px 0;
  font-size: 0.7rem;
}
@media only screen and (min-width: 320px) and (max-width: 546px) and (orientation: landscape) {
}
@media only screen and (min-width: 768px) and (max-width: 1024px) {
  .contactoFooter {
    margin-top: 0;
  }
  .links {
    padding-top: 0;
  }
  .links p {
    margin-top: 0;
  }
  .links img {
    margin-top: 40px;
    margin-bottom: 25px;
  }
}
@media only screen and (min-width: 1024px) and (max-width: 1140px) {
  #whatsapp {
    display: none;
  }
  .contactoFooter,
  ul {
    margin-top: 0;
  }
  .contactoFooter {
    padding-top: 0;
  }
  .links {
    padding-top: 0;
  }
  .links img {
    margin-top: 0;
  }
  .links p {
    margin-top: 0;
  }
  .logoSocialf,
  .separador_social {
    display: none;
  }
}
@media only screen and (min-width: 1140px) and (max-width: 2560px) {
  .logoSocialf,
  .separador_social {
    display: none;
  }
  #whatsapp {
    display: none;
  }
  .contactoFooter,
  ul {
    margin-top: 0;
  }
  .contactoFooter {
    padding-top: 0;
  }
  .links {
    padding-top: 0;
  }
  .links img {
    margin-top: 0;
  }
  .links p {
    margin-top: 0;
  }
}
</style>
