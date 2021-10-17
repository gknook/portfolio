<template>
  <MicAccessPriming
    @handleClick="handleClick('micAccessAlert')"
    v-if="currentPage == 'micAccessPriming'"
  />
  <MicAccessAlert
    @handleClick="handleClick('newNoiseMeter')"
    v-if="currentPage == 'micAccessAlert'"
  />
  <NewNoiseMeter
    @handleClick="handleClick('accuracyAlert')"
    v-if="currentPage == 'newNoiseMeter'"
  />
  <AccuracyAlert
    @handleClick="handleClick('setVolume')"
    v-if="currentPage == 'accuracyAlert'"
  />
  <SetVolume
    @handleClick="handleClick('micAccessPriming')"
    v-if="currentPage == 'setVolume'"
  />
</template>
<script>
import MicAccessPriming from "/src/pages/NoiseMeter/Prototype/micAccess.vue";
import MicAccessAlert from "/src/pages/NoiseMeter/Prototype/micAccessAlert.vue";
import NewNoiseMeter from "/src/pages/NoiseMeter/Prototype/newNoiseMeter.vue";
import SetVolume from "/src/pages/NoiseMeter/Prototype/setVolume.vue";
import AccuracyAlert from "/src/pages/NoiseMeter/Prototype/accuracyAlert.vue";

export default {
  name: "prototype-router",
  components: {
    MicAccessPriming,
    MicAccessAlert,
    NewNoiseMeter,
    SetVolume,
    AccuracyAlert
  },
  emits: ["clicked-prototype"],
  data() {
    return {
      currentPage: "micAccessPriming"
    };
  },
  methods: {
    handleClick(nextPage) {
      this.$emit("clicked-prototype", nextPage);
      return (this.currentPage = nextPage);
    }
  }
};
</script>
