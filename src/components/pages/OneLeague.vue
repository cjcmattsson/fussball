<template lang="html">
  <div class="league">
    <h1>{{this.$route.params.leaguename}}</h1>
    <div v-if="league">
      <p v-for="player in league.participants">{{player[1].name}}</p>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';
export default {
  name: "OneLeague",
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
            this.league = Object.values(data.val())[0];
          }
      })
  },
}
</script>
