<template lang="html">
  <div class="leagues">
    <CreateLeague></CreateLeague>
    <div class="league" v-for="league in leagues">
      <router-link :to="{path: `/leagues/${league[1].name}`}">
        <h2>{{league[1].name}}</h2>
      </router-link>
      <p v-for="player in league[1].participants">
        {{player[1].name}}
      </p>
    </div>

  </div>
</template>

<script>
import firebase from 'firebase';
import { EventBus } from '../../assets/utils/event-bus.js';
import CreateLeague from './../partials/CreateLeague.vue';
export default {
  name: "Leagues",
  components: {
    CreateLeague,
  },
  data() {
    return {
      leagues : null,
    }
  },
  mounted() {
    var ref = firebase.database().ref();
    ref.on("value", (snapshot) => {
      if (snapshot.val() != null) {
        this.leagues = Object.entries(snapshot.val().leagues);
        EventBus.$emit('leagues', this.leagues);
      }
    }, (error) => {
      console.log("Error: " + error.code);
    })
  }
}
</script>
