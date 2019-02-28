<template lang="html">
  <div class="register-new-player">
    <input type="text" name="" value="" v-on:keyup="getName">
    <button type="button" name="button" v-on:click="appPlayer">Lägg till spelare</button>
  </div>
</template>

<script>
import firebase from 'firebase';
export default {
  name: "RegisterNewPlayer",
  data() {
    return {
      player : null,
    }
  },
  methods: {
    appPlayer() {
      const database = firebase.database();
      const players = database.ref('players');
      const player = {
        name: this.player,
        matches: 0,
        wins: 0,
        losses: 0,
      }
      players.push(player);
    },
    getName(e) {
      this.player = e.target.value;
    }
  }
}
</script>
