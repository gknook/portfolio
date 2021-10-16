<template>
  <IPhone>
    <template v-slot:heading-content>
      <Overline :overlineCopy="currentScreen.overline" />
      <Headline :headlineCopy="currentScreen.headline" />
      <Subline :sublineCopy="currentScreen.subline" />
    </template>
    <template v-slot:interactive-content> </template>
    <template v-slot:cta-button>
      <IPhoneButton
        :cta="currentScreen.cta"
        :disableButton="disableButton"
        @clicked-button="handleClick(currentScreen)"
      />
    </template>
  </IPhone>
</template>
<script>
import Overline from "/src/components/atoms/mimiAppAtoms/Overline.vue";
import Headline from "/src/components/atoms/mimiAppAtoms/Headline.vue";
import Subline from "/src/components/atoms/mimiAppAtoms/Subline.vue";

import IPhoneButton from "/src/components/atoms/mimiAppAtoms/IPhoneButton.vue";

import IPhone from "/src/components/UI-elements/IPhone.vue";

export default {
  name: "iPhone-screen-mic-access",
  props: ["disableButton"],
  components: {
    Overline,
    Headline,
    Subline,
    IPhoneButton,
    IPhone
  },
  data() {
    return {
      currentScreen: {
        id: "setVolume",
        overline: "set up",
        headline: "Set the volume",
        subline: "Set the volume of your device to 50%.",
        cta: "Restart prototype"
      }
    };
  },
  methods: {
    handleClick() {
      this.$emit("handleClick");
    }
  }
};
</script>
