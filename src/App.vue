<template>
  <div id="app">
    <h1>Dear Fussbal League</h1>
    <nav>
      <router-link to="/">Hem</router-link>
      <router-link to="/leagues">Ligor</router-link>
      <router-link to="/create-league">Skapa liga</router-link>
      <router-link to="/register-player">Ny spelare</router-link>
      <router-link to="/players">Alla spelare</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
