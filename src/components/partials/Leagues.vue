<template lang="html">
  <div class="leagues">
    <div class="league" v-for="league in leagues">
      <router-link :to="`/leagues/${league.name}`">
        <h2>{{league.name}}</h2>
      </router-link>
      <p v-for="player in league.participants">
        {{player[1].name}}
      </p>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';
export default {
  name: "Leagues",
  data() {
    return {
      leagues : null,
    }
  },
  mounted() {
    var ref = firebase.database().ref();
    ref.on("value", (snapshot) => {
      if (snapshot.val() != null) {
        this.leagues = Object.values(snapshot.val().leagues);
        console.log(this.leagues);
      }
    }, (error) => {
      console.log("Error: " + error.code);
    })
  }
}
</script>
