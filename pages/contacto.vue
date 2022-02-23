<template>
  <div :style="fondoCon" class="contacto">
    <section class="container-fluid">
      <div class="TitulosAndParrafos tituloContacto">
        <titulo :titulo="tituloCon" />
        <p>
          Si querés saber más de nosotr@s, completá todos los datos del
          formulario, te responderemos de lunes a viernes de 9 a 18hs y
          coordinaremos una entrevista.
        </p>
      </div>
      <section class="dividerFooter">
        <div class="row">
          <div
            class="col-xs-12 col-sm-offset-4 col-sm-4 col-md-offset-4 col-md-4 col-lg-4 col-lg-offset-4"
          >
            <section id="form" class="formulario">
              <form
                v-on:submit.prevent="sendWhatsapp()"
                class="contenFormulario"
              >
                <div class="form__group field">
                  <input
                    v-model="nombre"
                    type="input"
                    class="form__field"
                    placeholder="Nombre del padre o madre"
                    :class="{ error: isError, error: error.nombre }"
                  />
                  <label for="name" class="form__label"
                    >Nombre del padre o madre</label
                  >
                  <span v-if="error.nombre" class="lableError">{{
                    error.nombre
                  }}</span>
                </div>
                <div class="form__group field">
                  <input
                    v-model="edad"
                    type="input"
                    class="form__field"
                    placeholder="Edad del niño o niña"
                    name="edad"
                    :class="{ error: isError, error: error.edad }"
                  />
                  <label for="edad" class="form__label">Edad del niño/a</label>
                  <span v-if="error.edad" class="lableError">{{
                    error.edad
                  }}</span>
                </div>
                <div class="form__group field">
                  <textarea
                    v-model="mensaje"
                    type="textarea"
                    class="form__field"
                    rows="4"
                    cols="50"
                    placeholder="Ingrese su consulta"
                    :class="{ error: isError, error: error.mensaje }"
                  />
                  <label for="edad" class="form__label">Consulta</label>
                  <span v-if="error.mensaje" class="lableError">{{
                    error.mensaje
                  }}</span>
                </div>

                <div class="botonesEnvio">
                  <btnPry
                    :NameIcono="Icon"
                    :icono="true"
                    :clase="claseBtn"
                    :texto="txtBtn"
                  />
                </div>
              </form>
            </section>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <iframe
              class="mapa"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.1522928524582!2d-64.2086350853065!3d-31.40992990308165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94329884ce2d7f73%3A0xe36b69c61b443c49!2sDr.%20%C3%81ngel%20Roque%20Su%C3%A1rez%2048%2C%20X5000%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1610567222136!5m2!1ses-419!2sar"
              width="100%"
              frameborder="0"
              style="border: 0"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
        </div>
      </section>
    </section>
  </div>
</template>
<script>
import titulo from "../components/titulos.vue";
import btnPry from "../components/btnPry.vue";

export default {
  head: {
    title: "Contactanos",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Contactate con nosotros para mas informacions sobre los talleres para niños",
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
  name: "contacto",
  components: {
    titulo,
    btnPry,
  },
  data() {
    return {
      nombre: "",
      edad: "",
      mensaje: "",
      error: [],
      isError: false,
      patternName: /^[A-Z\s\n\r]+$/i,
      patternEdad: /^[0-9]+$/i,
      tituloCon: "Contacto rapido",
      fondoCon: {
        backgroundImage: `url(${require("static/img/contacto.jpeg")})`,
      },
      txtBtn: "Enviar por WhatsApp",
      claseBtn: "btnPrimario",
      Icon: "fab fa-whatsapp",
      btnCancelar: "btnSecundario",
      txtCancelar: "Cancelar",
    };
  },
  watch: {
    nombre(value) {
      this.nombre = value;
      this.validarNombre(value);
    },
    edad(value) {
      this.edad = value;
      this.validarEdad(value);
    },
    mensaje(value) {
      this.mensaje = value;
      this.validarMensaje(value);
    },
  },

  methods: {
    sendWhatsapp: function (event) {
      if (!this.mensaje) {
        this.isError = true;
        this.error["mensaje"] = "Ingese mensaje";
      }
      if (!this.edad) {
        this.isError = true;
        this.error["edad"] = "Ingese edad";
      }

      if (!this.nombre) {
        this.isError = true;
        this.error["nombre"] = "Ingese nombre";
      }
      if (this.nombre && this.edad && this.mensaje) {
        window.open(
          `https://api.whatsapp.com/send?phone=+543513462249,%20&text=Nombre:%20${this.nombre} 
          %20%20Edad:%20${this.edad}%20%20Consulta:%20${this.mensaje}`,
          "_blank"
        );
      }
    },
    validarNombre(value) {
      if (!this.patternName.test(this.nombre)) {
        this.error["nombre"] = "No se permiten numeros";
        this.isError = true;
      } else {
        this.error["nombre"] = "";
        this.isError = false;
      }
      if (!this.nombre) this.error["nombre"] = "Ingese nombre";
      this.isError = false;
    },

    validarEdad(value) {
      if (!this.patternEdad.test(this.edad)) {
        this.error["edad"] = "No se permiten letras";
        this.isError = true;
      } else {
        this.error["edad"] = "";
        this.isError = false;
      }
      if (!this.edad) this.error["edad"] = "Ingese edad";
      this.isError = false;
    },
    validarMensaje(value) {
      if (!this.mensaje) {
        this.error["mensaje"] = "Ingrese consulta";
        this.isError = true;
      } else {
        this.error["mensaje"] = "";
        this.isError = false;
      }
    },
  },
};
</script>
<style>
*::before,
*::after {
  box-sizing: border-box;
}
.dividerFooter {
  margin-bottom: 25%;
}
.tituloContacto {
  margin-top: 90px;
}
.contacto {
  background-color: #ceeefa;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  padding-bottom: 5%;
  padding-top: 2%;
}
.formulario {
  border-radius: 10px;
  margin-bottom: 15%;
}
.mapa {
  border-radius: 10px;
  height: 250px;
}
.contenFormulario {
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  background-color: #ffffff57;
  border-radius: 10px;
}
.botonesEnvio {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 20px 0;
}
.form__group {
  position: relative;
  padding: 25px 0 0;
  margin-top: 10px;
  width: 100%;
}

.form__field {
  font-family: inherit;
  width: 100%;
  border: 0;
  outline: 0;
  font-size: 1.3rem;
  color: rgb(0, 0, 0);
  padding: 7px 0;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.849);
  transition: border-color 0.2s;
}

.error,
input {
  background: rgba(214, 109, 109, 0.246);
  border: 1px solid red;
}

.form__field::placeholder {
  color: gray;
  padding-left: 5px;
  font-size: 1.2rem;
}
.form__field:placeholder-shown ~ .form__label {
  font-size: 1rem;
  cursor: text;
  top: 30px;
  padding-left: 2px;
}

.form__label {
  position: absolute;
  top: 0;
  display: none;
  transition: 0.2s;
  font-size: 1rem;
  color: #9b9b9b;
}
.lableError {
  color: red;
}

.form__field:focus ~ .form__label {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: var(--azul);
  font-weight: 700;
}

/* reset input */
.form__field:required {
  box-shadow: none;
}

@media only screen and (min-width: 320px) and (max-width: 546px) and (orientation: landscape) {
}
@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .mapa {
    height: 300px;
  }
  .formulario {
    margin-bottom: 4%;
  }
  .dividerFooter {
    margin-bottom: 9%;
  }
  .form__field::placeholder {
    color: gray;
    padding-left: 5px;
    font-size: 1rem;
  }
}
@media only screen and (min-width: 1024px) and (max-width: 1140px) {
  .mapa {
    height: 400px;
  }
  .formulario {
    margin-bottom: 15%;
  }
  .dividerFooter {
    margin-bottom: 7%;
  }
  .form__field::placeholder {
    color: gray;
    padding-left: 5px;
    font-size: 1rem;
  }
  .contacto {
    padding-top: 110px;
  }

  .tituloContacto {
    margin-top: 0;
    margin-bottom: 0;
  }
}
@media only screen and (min-width: 1140px) and (max-width: 2560px) {
  .mapa {
    height: 400px;
  }
  .formulario {
    margin-bottom: 15%;
  }
  .dividerFooter {
    margin-bottom: 8%;
  }
  .form__field::placeholder {
    color: gray;
    padding-left: 5px;
    font-size: 1rem;
  }
  .contacto {
    padding-top: 110px;
  }
  .tituloContacto {
    margin-top: 0;
    margin-bottom: 0;
  }
}
</style>