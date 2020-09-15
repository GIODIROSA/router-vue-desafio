<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Portada</router-link> |
      <router-link :to="{name: 'Sobremi'}">Sobre mi</router-link> |
      <router-link :to="{name: 'Contacto'}">Contacto</router-link> |
      <router-link to="/post/1">Último post</router-link>
    </div>
    <router-view/>
  </div>
</template>


<style lang="scss">
#app {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  &.router-link-exact-active {
      color: #42b983;
  }
}
</style>
