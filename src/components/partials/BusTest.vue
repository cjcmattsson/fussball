<template>
  <div class="pleeease-click-me" @click="emitGlobalClickEvent()">
  foiebaoufbeaouf</div>
</template>

<script>
// Import the EventBus we just created.
import firebase from 'firebase';
import { EventBus } from '../../assets/utils/event-bus.js';

export default {
  name : "BusTest",
  data() {
    return {
      clickCount: 0
    }
  },

  methods: {
    emitGlobalClickEvent() {
      this.clickCount++;
      // Send the event on a channel (i-got-clicked) with a payload (the click count.)
      EventBus.$emit('i-got-clicked', this.clickCount);
    }
  }
}
</script>
