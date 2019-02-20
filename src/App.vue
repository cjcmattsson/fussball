<template>
  <div id="app">
    <h1>Dear Fussball</h1>
    <div class="players">
      <RegisterNewPlayer />
      <Players />
    </div>
    <div class="leagues">
      <CreateLeague />
      <Leagues />
    </div>
  </div>
</template>

<script>
import RegisterNewPlayer from './components/partials/RegisterNewPlayer.vue';
import Players from './components/partials/Players.vue';
import CreateLeague from './components/partials/CreateLeague.vue';
import Leagues from './components/partials/Leagues.vue';

export default {
  name: 'app',
  components: {
    RegisterNewPlayer,
    Players,
    CreateLeague,
    Leagues,
  },
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
