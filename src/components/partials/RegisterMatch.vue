<template>
  <div class="register-match">
    <h2>Registrera match:</h2>
    <div class="match" v-if="this.league">

      <select id="player-one" class="" name="" @change="selectPlayer($event, 1)">
        <option value="">Välj en kombatant:</option>
        <option v-for="participant in this.league[1].participants" v-bind:value="participant">
          {{participant[1].name}}
        </option>
      </select>
      <input class="score-player-one" type="number" value="0" @change="setScore($event, 1)" placeholder="Lag 1 - poäng">

      <span> - </span>

      <input class="score-player-two" type="number" value="0" @change="setScore($event, 2)" placeholder="Lag 2 - poäng">
      <select id="player-two" class="" name="" @change="selectPlayer($event, 2)">
        <option value="">Välj en kombatant:</option>
        <option v-for="participant in this.league[1].participants" v-bind:value="participant">
          {{participant[1].name}}
        </option>
      </select>

    </div>
    <h1 @click="registerMatch">REGGA MATCH</h1>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name : "RegisterMatch",
  props: ['league'],
  data() {
    return {
      team1 : {
        combatants: [],
        score: null,
      },
      team2 : {
        combatants: [],
        score: null,
      },
    }
  },
  methods: {
    setScore($event, team) {
      if (team === 1) {
        this.team1.score = parseInt($event.target.value);
      } else if (team === 2) {
        console.log($event);
        this.team2.score = parseInt($event.target.value);
      }
    },
    selectPlayer($event, team) {
      if (team === 1) {
        this.team1.combatants = $event.target['selectedOptions'][0]['_value'];
      } else if (team === 2) {
        this.team2.combatants = $event.target['selectedOptions'][0]['_value'];
      }
    },
    registerMatch() {
      let currentLeague = firebase.database()
        .ref(`leagues/${this.league[0]}/matches`)
        const match = {team1: this.team1, team2: this.team2};
        currentLeague.push(match);
    }
  }
}
</script>

<style media="screen">
  .match {
    display: flex;
  }
</style>
