<template lang="html">
  <div class="league">
    <h1>{{this.$route.params.leaguename}}</h1>
    <div v-if="league">
      <p v-for="player in league[1].participants">{{player[1].name}}</p>
    </div>
    <RegisterMatch v-bind:league="league"></RegisterMatch>
  </div>
</template>

<script>
import firebase from 'firebase';
import RegisterMatch from '../partials/RegisterMatch.vue';
export default {
  name: "OneLeague",
  components: {
    RegisterMatch
  },
  data() {
    return {
      league: false,
    }
  },
  mounted() {
    let currentLeague = firebase.database()
      .ref('leagues')
      .orderByChild("name")
      .equalTo(this.$route.params.leaguename)
      .on('value', (data) => {
          if (data.val()) {
            this.league = Object.entries(data.val())[0];
          }
      })
  },
}
</script>
