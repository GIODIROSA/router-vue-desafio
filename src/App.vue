<template>
  <div id="app">
    <div id="nav">
      <router-link class="menu" to="/">Portada</router-link> 
      <router-link class="menu" :to="{name: 'Sobremi'}">Sobre mi</router-link> 
      <router-link class="menu" :to="{name: 'Contacto'}">Contacto</router-link> 
      <router-link class="menu" to="/post/1">Último post</router-link>
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
  text-align: right;
  // color: #407088;
}

#nav {
  padding: 30px;
  background: #ffbb91;
  color: #407088;
  .menu{
    font-weight: 700;
    font-size: 16px;
    color: #515070;
    padding: 20px;
  }

  &.router-link-exact-active {
      color: #e97171;
  }
}
</style>
