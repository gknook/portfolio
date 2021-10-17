<template>
  <IPhone>
    <template v-slot:heading-content>
      <Overline :overlineCopy="currentScreen.overline" />
      <Headline :headlineCopy="currentScreen.headline" />
      <Subline :sublineCopy="currentScreen.subline" />
    </template>
    <template v-slot:interactive-content>
      <NewNoiseMeter
        :animation="animation"
        @noiseChange="changeEnvironment"
        :check="currentEnvironment"
      />
    </template>
    <template v-slot:cta-button>
      <IPhoneButton
        :cta="currentScreen.cta"
        :disableButton="disableButton"
        @clicked-button="handleClick(currentScreen)"
      />
      <IOSAlert @clickedAlert="handleClick(currentScreen)" :alert="alert" />
    </template>
  </IPhone>
</template>
<script>
import Overline from "/src/components/atoms/mimiAppAtoms/Overline.vue";
import Headline from "/src/components/atoms/mimiAppAtoms/Headline.vue";
import Subline from "/src/components/atoms/mimiAppAtoms/Subline.vue";

import NewNoiseMeter from "/src/components/UI-elements/NoiseMeter.vue";

import IPhoneButton from "/src/components/atoms/mimiAppAtoms/IPhoneButton.vue";
import IOSAlert from "/src/components/UI-elements/IOSAlert.vue";

import IPhone from "/src/components/UI-elements/IPhone.vue";

export default {
  name: "iPhone-screen-noise-meter-warning",
  props: ["disableButton"],
  components: {
    Overline,
    Headline,
    Subline,
    IPhoneButton,
    NewNoiseMeter,
    IPhone,
    IOSAlert
  },
  data() {
    return {
      currentScreen: {
        id: "accuracyAlert",
        overline: "set up",
        headline: "Find a quiet place",
        subline: "The hearing test is most accurate when done in silence.",
        cta: "Start test"
      },
      alert: {
        text: "Doing the Hearing Test in a Noisy Environment May Impact the Accuracy of Your Test Results",
        twoButtons: false,
        cta2: "Continue"
      },
      animation: false,
      currentEnvironment: "quiet"
    };
  },
  methods: {
    handleClick() {
      this.$emit("handleClick");
    },
    changeEnvironment(event) {
      if (this.currentEnvironment == event) {
        return;
      } else {
        this.currentEnvironment = event;
      }
    }
  }
};
</script>
