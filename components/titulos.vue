<template>
  <div>
    <div class="contenedor-titulo container-fluid">
      <h1 class="titulo">{{ titulo }}</h1>
      <span class="linea">
        <ImageLazy
          class="photo img-responsive"
          :src="require('static/img/alegria.png')"
          baseClass="image-lazy"
          deferredClass="image-lazy-deferred"
          loadingClass="image-lazy-loading"
          loadedClass="image-lazy-loaded"
          :delay="0"
          @loading="loading = false"
          @load="loaded = false"
          alt=""
        />
      </span>
    </div>
  </div>
</template>
<script>
import ImageLazy from "cube-vue-image-lazy";
export default {
  components: {
    ImageLazy,
  },
  name: "titulos",
  props: {
    titulo: String,
  },
};
</script>
<style>
.contenedor-titulo {
  height: auto;
  position: relative;
  display: -webkit-flex;
  display: flex;
  justify-content: center;
  margin-bottom: 6%;
  flex-direction: column;
  align-items: center;
}
.titulo {
  width: auto;
  position: relative;
  color: var(--titulo) !important;
  font-weight: 600;
  font-size: 30px;
  line-height: 1.2;
  word-break: break-word;
  margin-bottom: 5px;
}
span.linea::after,
span.linea::before {
  content: "";
  width: 45px;
  height: 2px;
  top: 80px;
  background: var(--rosa);
}
span.linea::after {
  right: -68px;
}
span.linea::before {
  left: -68px;
}
.linea {
  display: flex;
  align-items: center;
  position: relative;
  width: 145px;
  height: auto;
  margin-top: 5px;
}
.linea img {
  width: 25px;
  height: 25px;
  vertical-align: middle;
  margin: 0 10px;
}

@media only screen and (min-width: 1024px) and (max-width: 1140px) {
  .contenedor-titulo {
    margin-bottom: 3%;
  }
}

@media only screen and (min-width: 1140px) and (max-width: 2560px) {
  .contenedor-titulo {
    margin-bottom: 3%;
  }
}
</style>