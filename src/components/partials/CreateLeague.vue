<template lang="html">
  <div class="create-league">
    <input type="text" name="" value="" v-on:keyup="getName">
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
export default {
  name: "CreateLeague",
  data() {
    return {
      leagueName : null,
      players : null,
      participants : [],
    }
  },
  mounted() {
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
    // test(e) {
    //   console.log(e)
    // },
    selectPlayers(event, player) {
      if (event.target.checked) {
        this.participants.push(player)
      } else if (!event.target.checked) {
        this.participants = this.participants.filter(participants => participants !== player)
      }
    },
    createLeague() {
      if (this.participants.length > 0 && this.leagueName !== null) {
        const database = firebase.database();
        const leagues = database.ref('leagues');
        const league = {
          name: this.leagueName,
          participants: this.participants,
          matches: [],
        }
        leagues.push(league);
      } else {
        alert("You gotta invite some people and give the league a name dawg!")
      }
    },
    getName(e) {
      this.leagueName = e.target.value;
    }
  }
}
</script>
