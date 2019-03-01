<template lang="html">
  <div class="home">
    <h1>Whatup peeps!</h1>
    <BusTest></BusTest>
  </div>
</template>

<script>
import BusTest from '../partials/BusTest.vue';
import { EventBus } from '../../assets/utils/event-bus.js';

EventBus.$on('i-got-clicked', clickCount => {
  console.log(`Oh, that's nice. It's gotten ${clickCount} clicks! :)`)
});

export default {
  components: {
    BusTest,
  },
  name: "Home",
  clicks: 0,
}
</script>

<style lang="css" scoped>
</style>
