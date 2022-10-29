<template>
  <div>
    <main>
      <banner />
      <nosotros />
      <actividades />
      <talleres />
      <galeria />
      <section class="tituloContactos">
        <div class="TitulosAndParrafos">
          <titulo :titulo="tituloContacto" />
        </div>
        <div class="BtnIrContacto">
          <btnPry
            :NameIcono="nameIcon"
            :icono="true"
            :clase="claseBtn"
            :texto="txtBtn"
            @clicks="ruta()"
          />
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import banner from "../components/banner.vue";
import nosotros from "../components/nosotros.vue";
import titulo from "../components/titulos.vue";
import BtnPry from "../components/btnPry.vue";
import Navbar from "../components/navbar.vue";
import talleres from "../components/talleres.vue";
import actividades from "../components/actividades.vue";
import galeria from "../components/galeria.vue";
export default {
  head: {
    title: "La ruca",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Actividades holísticas,teatro,cocina, yoga,teniendo como referencia el método Montessori y pedagogía Waldorf "
      },
      {
        name: "keywords",
        content:
          "actividad niños 3 años,juegos de motricidad para niños,talleres para niños,taller de arte para niños en cordoba,talleres de manualidades para niños en cordoba,taller cocina infantil,cocina para niños,taller de dibujo y pintura para niños,taller de musica para niños cordoba,taller de arte para niños,talleres, taller de artes plasticas,taller de arte y expresion, taller de pintura cordoba"
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
  components: {
    banner,
    nosotros,
    actividades,
    galeria,
    titulo,
    talleres,
    BtnPry,
    Navbar
  },

  data() {
    return {
      tituloContacto: "¿Te gustó nuestra propuesta?",
      nameIcon: "fas fa-arrow-right",
      txtBtn: "Contactanos",
      claseBtn: "btnPrimario"
    };
  },

  methods: {
    ruta() {
      this.$router.push({
        name: "contacto"
      });
    }
  }
};
</script>

<style>
.tituloContactos {
  margin-bottom: 25%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.BtnIrContacto {
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 25%;
}
.tituloContactos,
.TitulosAndParrafos {
  margin-bottom: 0;
}
@media only screen and (min-width: 320px) and (max-width: 546px) and (orientation: landscape) {
}
@media only screen and (min-width: 768px) and (max-width: 1024px) {
  .tituloContactos {
    margin-bottom: 12%;
  }
  .BtnIrContacto {
    padding-bottom: 1%;
  }
}
@media only screen and (min-width: 1024px) and (max-width: 1140px) {
  .tituloContactos {
    margin-bottom: 10%;
  }
  .BtnIrContacto {
    padding-bottom: 0;
  }
}
@media only screen and (min-width: 1140px) and (max-width: 2560px) {
  .tituloContactos {
    margin-bottom: 10%;
  }
  .BtnIrContacto {
    padding-bottom: 0;
  }
}
</style>
