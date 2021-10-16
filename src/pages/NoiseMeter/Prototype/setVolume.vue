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
import Overline from "/src/components/atoms/Overline.vue";
import Headline from "/src/components/atoms/Headline.vue";
import Subline from "/src/components/atoms/Subline.vue";

import IPhoneButton from "/src/components/atoms/IPhoneButton.vue";

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
        headline: "Restart the prototype",
        subline:
          "In the app, here you would start the test. That's not what this case study is about though. Feel free to restart the prototype.",
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
