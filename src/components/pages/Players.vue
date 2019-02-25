<template lang="html">
  <div class="players">
    <RegisterNewPlayer></RegisterNewPlayer>
    <p v-for="player in players">{{player.name}}</p>
  </div>
</template>

<script>
import firebase from 'firebase';
import RegisterNewPlayer from './../partials/RegisterNewPlayer.vue';
export default {
  name: "Players",
  components: {
    RegisterNewPlayer,
  },
  data() {
    return {
      players : null,
    }
  },
  mounted() {
    var ref = firebase.database().ref();
    ref.on("value", (snapshot) => {
      if (snapshot.val() != null) {
        this.players = Object.values(snapshot.val().players);
      }
    }, (error) => {
      console.log("Error: " + error.code);
    })
  }
}
</script>
