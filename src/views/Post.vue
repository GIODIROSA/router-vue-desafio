<template>
  <div>
    <div>
      <h1 v-text="tituloEntrada"></h1>
      <router-link :to="paginar(false)">Anterior</router-link> |
      <router-link :to="paginar(true)">Siguiente</router-link>

      <p></p>
      <router-link :to="{ name: 'Comentarios' }">Ver Comentarios</router-link>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  methods: {
    paginar(siguiente) {
      let entrada = parseInt(this.$route.params.entrada);
      if (siguiente) {
        return entrada < 10 ? `/post/${entrada + 1}` : `/post/${entrada}`;
      } else {
        return entrada > 1 ? `/post/${entrada - 1}` : `/post/${entrada}`;
      }
    },
  }, //final de methods
  computed: {
    tituloEntrada() {
      return `Entrada ${this.$route.params.entrada} del post `;
    },
  },
};
</script>

<style></style>
