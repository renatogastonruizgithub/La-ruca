<template>
  <div>
    <button :class="clase" @click="handleClick">
      {{ texto }} <i v-if="icono" :class="NameIcono"></i>
    </button>
  </div>
</template>
<script>
export default {
  name: "btnPry",
  props: {
    texto: {
      type: String,
      default: null,
    },
    clase: {
      type: String,
      default: "btnPrimario",
    },
    icono: {
      type: Boolean,
      default: false,
    },
    NameIcono: {
      type: String,
      default: null,
    },
  },
  methods: {
    handleClick() {
      this.$emit("clicks");
    },
  },
};
</script>
<style>
.btnPrimario,
.btnBanner {
  position: relative;
  white-space: nowrap;
  font-size: 1.2rem;
  line-height: 40px;
  font-weight: 400;
  color: rgb(255, 255, 255);
  letter-spacing: 0px;
  background-color: var(--naranja);
  border-radius: 25px;
  text-decoration: none;
  visibility: inherit;
  text-align: center;
  margin: 0;
  padding: 0px 10px;
  transform-origin: 50% 50% 0px;
  border-width: 0px;
  /* margin-right: 5%; */
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-transition: 0.6s -webkit-transform ease-in-out;
  transition: 0.6s -webkit-transform ease-in-out;
  transition: 0.6s transform ease-in-out;
  transition: 0.6s transform ease-in-out, 0.6s -webkit-transform ease-in-out;
  will-change: transform;
  z-index: 0;
  overflow: hidden;
}
.btnBanner::after {
  background-color: rgb(255, 255, 255);
  border-radius: 3rem;
  content: "";
  display: block;
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  -webkit-transform: translate(-100%, 0) rotate(10deg);
  transform: translate(-100%, 0) rotate(10deg);
  -webkit-transform-origin: top left;
  transform-origin: top left;
  -webkit-transition: 0.5s -webkit-transform ease-out;
  transition: 0.5s -webkit-transform ease-out;
  transition: 0.5s transform ease-out;
  transition: 0.5s transform ease-out, 0.5s -webkit-transform ease-out;
  will-change: transform;
  z-index: -1;
}
.btnPrimario::after {
  background-color: rgb(255, 255, 255);
  border-radius: 3rem;
  content: "";
  display: block;
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  -webkit-transform: translate(-100%, 0) rotate(10deg);
  transform: translate(-100%, 0) rotate(10deg);
  -webkit-transform-origin: top left;
  transform-origin: top left;
  -webkit-transition: 0.5s -webkit-transform ease-out;
  transition: 0.5s -webkit-transform ease-out;
  transition: 0.5s transform ease-out;
  transition: 0.5s transform ease-out, 0.5s -webkit-transform ease-out;
  will-change: transform;
  z-index: -1;
}
.btnPrimario:hover::after {
  -webkit-transform: translate(0, 0);
  transform: translate(0, 0);
}
.btnBanner:hover::after {
  -webkit-transform: translate(0, 0);
  transform: translate(0, 0);
}
.btnBanner:hover {
  color: var(--naranja);
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
  will-change: transform;
  overflow: hidden;
}
.btnPrimario:hover {
  color: var(--naranja);
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
  will-change: transform;
  overflow: hidden;
}

.btnSecundario {
  white-space: nowrap;
  font-size: 1.2rem;
  line-height: 40px;
  font-weight: 400;
  color: #ffffff;
  letter-spacing: 0px;
  background-color: transparent;
  border-radius: 25px;
  text-decoration: none;
  visibility: inherit;
  text-align: center;
  margin: 0;
  padding: 0;
  transform-origin: 50% 50% 0px;
  transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  border-width: 0px;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-transition: 0.6s -webkit-transform ease-in-out;
  transition: 0.6s -webkit-transform ease-in-out;
  transition: 0.6s transform ease-in-out;
  transition: 0.6s transform ease-in-out, 0.6s -webkit-transform ease-in-out;
  will-change: transform;
  z-index: 0;
  overflow: hidden;
}
.btnSecundario::after {
  border-radius: 3rem;
  content: "";
  display: block;
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  -webkit-transform: translate(-100%, 0) rotate(10deg);
  transform: translate(-100%, 0) rotate(10deg);
  -webkit-transform-origin: top left;
  transform-origin: top left;
  -webkit-transition: 0.5s -webkit-transform ease-out;
  transition: 0.5s -webkit-transform ease-out;
  transition: 0.5s transform ease-out;
  transition: 0.5s transform ease-out, 0.5s -webkit-transform ease-out;
  will-change: transform;
  z-index: -1;
  overflow: hidden;
}
.btnSecundario:hover::after {
  -webkit-transform: translate(0, 0);
  transform: translate(0, 0);
}
.btnSecundario:hover {
  color: rgb(255, 255, 255);
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
  will-change: transform;
  overflow: hidden;
  border: initial;
  border: 2px solid #ffffff;
  padding: 0 5px;
}
.btnPrimario,
.btnBanner,
.btnSecundario:focus {
  outline: none !important;
  box-shadow: none !important;
}

@media only screen and (min-width: 320px) and (max-width: 546px) and (orientation: landscape) {
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .btnPrimario,
  .btnSecundario {
    line-height: 30px;
  }
}

@media only screen and (min-width: 1024px) and (max-width: 1140px) {
  .btnPrimario,
  .btnSecundario {
    line-height: 40px;
    font-size: 18px;
  }
}

@media only screen and (min-width: 1140px) and (max-width: 2560px) {
  .btnPrimario,
  .btnSecundario {
    line-height: 42px;
    font-size: 19px;
  }
  .btnBanner {
    line-height: 50px;
    padding: 0 30px;
    font-size: 1.5rem;
  }
}
</style>