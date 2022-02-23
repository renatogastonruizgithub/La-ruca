<template>
  <div class="load" v-if="!cargado">
    <div class="cubo"></div>
    <div class="cubo"></div>
    <div class="cubo"></div>
    <div class="cubo"></div>
  </div>
</template>

<script>
export default {
  name: "loading",
  data() {
    return {
      cargado: false,
    };
  },
  mounted() {
    document.onreadystatechange = () => {
      if (document.readyState == "complete") {
        this.cargado = true;
      } else this.cargado = false;
    };
  },
};
</script>

<style>
.load {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: rgb(241, 241, 241);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999 !important;
}
.cubo {
  width: 30px;
  height: 30px;
  margin-right: 10px;
  border-radius: 2px;
}
.cubo:nth-child(1) {
  background-color: var(--verde);
  animation: izq 1s infinite;
}
.cubo:nth-child(2) {
  background-color: var(--naranja);
}
.cubo:nth-child(3) {
  background-color: var(--azul);
}
.cubo:nth-child(4) {
  background-color: var(--rosa);
  animation: der 1s infinite 0.5s;
}
@keyframes izq {
  40% {
    transform: translate(-40px);
  }
  50% {
    transform: translate(0);
  }
}
@keyframes der {
  40% {
    transform: translate(40px);
  }
  50% {
    transform: translate(0);
  }
}
</style>
