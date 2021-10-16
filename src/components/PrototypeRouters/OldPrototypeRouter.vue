<template>
  <MicAccessPriming
    @handleClick="handleClick('micAccessAlert')"
    v-if="currentPage == 'micAccessPriming'"
  />
  <MicAccessAlert
    @handleClick="handleClick('oldNoiseMeter')"
    v-if="currentPage == 'micAccessAlert'"
  />
  <OldNoiseMeter
    @handleClick="handleClick('setVolume')"
    v-if="currentPage == 'oldNoiseMeter'"
  />
  <SetVolume
    @handleClick="handleClick('micAccessPriming')"
    v-if="currentPage == 'setVolume'"
  />
</template>
<script>
import MicAccessPriming from "/src/pages/NoiseMeter/Prototype/micAccess.vue";
import MicAccessAlert from "/src/pages/NoiseMeter/Prototype/micAccessAlert.vue";
import OldNoiseMeter from "/src/pages/NoiseMeter/Prototype/oldNoiseMeter.vue";
import SetVolume from "/src/pages/NoiseMeter/Prototype/setVolume.vue";

export default {
  name: "prototype-router",
  components: { MicAccessPriming, MicAccessAlert, OldNoiseMeter, SetVolume },
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
