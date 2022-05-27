<template>
  <div>
    <h1>Acceso directo al estado : {{ $store.state.counter.count }}</h1>
    <h2>Acceso por computed: {{ countComputed }}</h2>
    <h2>Acceso por mapState: {{ count }}</h2>
    <h3>lastMutation: {{ lastMutation }}</h3>

    <button @click="incremento">incrementar +1</button>
    <button @click="incrementoCinco">incrementar +5</button>
    <button @click="incrementoRandom" :disabled="loading">incremento random</button>

    <h2>Contandor al cuadrado: {{ contadorCuadrado }}</h2>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "Counter",
  computed: {
    countComputed() {
      return this.$store.state.counter.count;
    },

    ...mapState('counter',["count", "lastMutation", "loading"]),
    ...mapGetters('counter',["contadorCuadrado"]),

  },

  methods: {
    incremento() {
      this.$store.commit("counter/incrementar");
    },

    incrementoCinco (){
        this.$store.commit("counter/incrementarValor", 5)
    },

    ...mapActions('counter',['incrementoRandom'])

  },
};
</script>

<style></style>
