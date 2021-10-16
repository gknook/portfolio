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
    </template>
  </IPhone>
</template>
<script>
import Overline from "/src/components/atoms/Overline.vue";
import Headline from "/src/components/atoms/Headline.vue";
import Subline from "/src/components/atoms/Subline.vue";

import NewNoiseMeter from "/src/components/UI-elements/NoiseMeter.vue";
import NoiseIllustration from "/src/components/Illustrations/NoiseIllustration.vue";

import IPhoneButton from "/src/components/atoms/IPhoneButton.vue";

import IPhone from "/src/components/UI-elements/IPhone.vue";

export default {
  name: "iPhone-screen-noise-meter",
  components: {
    Overline,
    Headline,
    Subline,
    IPhoneButton,
    NewNoiseMeter,
    NoiseIllustration,
    IPhone
  },
  data() {
    return {
      currentScreen: {
        id: "noiseMeterOld",
        overline: "set up",
        headline: "Find a quiet place",
        subline: "The hearing test is most accurate when done in silence.",
        cta: "Start test"
      },
      animation: false,
      toggleAnimationButton: false,
      noiseAnimationButtonText: "Animate Noise Meter",
      currentEnvironment: "quiet"
    };
  },
  mounted() {
    this.delayedAnimation();
  },
  computed: {
    disableButton() {
      if (this.currentEnvironment == "loud") {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    handleClick() {
      this.$emit("handleClick");
    },
    toggleAnimation() {
      if (this.animation) {
        this.animation = false;
        this.noiseAnimationButtonText = "Animate Noise Meter";
      } else {
        this.animation = true;
        this.noiseAnimationButtonText = "Stop animation";
      }
      if (this.toggleAnimationButton) {
        this.toggleAnimationButton = false;
      }
    },
    delayedAnimation(delay) {
      let timeoutDelay = 0;
      if (delay != null) {
        timeoutDelay = delay;
      } else {
        timeoutDelay = 500;
      }
      setTimeout(() => this.toggleAnimation(), timeoutDelay);
      this.toggleAnimationButton = true;
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
