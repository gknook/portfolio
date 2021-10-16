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
    @handleClick="handleClick('setVolume')"
    v-if="currentPage == 'newNoiseMeter'"
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

export default {
  name: "prototype-router",
  components: { MicAccessPriming, MicAccessAlert, NewNoiseMeter, SetVolume },
  data() {
    return {
      currentPage: "micAccessPriming"
    };
  },
  methods: {
    handleClick(nextPage) {
      return (this.currentPage = nextPage);
    }
  }
};
</script>
