<template lang="html">
  <div class="create-league">
    <input type="text" name="" v-bind:value="leagueName" v-on:keyup="getName">
    <div class="player" v-for="player in players">
      <label :for="player[1].name">{{player[1].name}}</label>
      <input type="checkbox" :name="player[1].name" :id="player[1].name" v-bind:value="player[1].name" v-on:click="selectPlayers($event, player)">
      <br>
    </div>
    <button type="button" v-on:click="createLeague">Skapa Liga</button>
  </div>
</template>

<script>
import firebase from 'firebase';
import { EventBus } from '../../assets/utils/event-bus.js';
export default {
  name: "CreateLeague",
  data() {
    return {
      existingLeagues: null,
      leagueName : "",
      players : null,
      participants : [],
    }
  },
  mounted() {
    EventBus.$on('leagues', leagues => {
      this.existingLeagues = leagues;
    });
    var ref = firebase.database().ref();
    ref.on("value", (snapshot) => {
      if (snapshot.val() != null) {
        this.players = Object.entries(snapshot.val().players);
      }
    }, (error) => {
      console.log("Error: " + error.code);
    })
  },
  methods: {
    selectPlayers(event, player) {
      if (event.target.checked) {
        this.participants.push(player)
      } else if (!event.target.checked) {
        this.participants = this.participants.filter(participants => participants !== player)
      }
    },
    createLeague() {
      const database = firebase.database();
      const leagues = database.ref('leagues');
      // if(existingLeagues != undefined && this.existingLeagues.some(league => league.name != undefined && league.name.toLowerCase() === this.leagueName.toLowerCase())) {
      //   alert("That name is taken bro");
      // } else if (this.participants.length > 0 && this.leagueName !== null) {
        const league = {
          name: this.leagueName,
          participants: this.participants,
          matches: [],
        }
        leagues.push(league);
      // } else {
      //   alert("You gotta invite some people and give the league a name dawg!")
      // }
    },
    getName(e) {
      this.leagueName = e.target.value;
    }
  }
}
</script>
