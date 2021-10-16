<template>
  <IPhone>
    <template v-slot:heading-content>
      <Overline :overlineCopy="currentScreen.overline" />
      <Headline :headlineCopy="currentScreen.headline" />
      <Subline :sublineCopy="currentScreen.subline" />
    </template>
    <template v-slot:interactive-content>
      <MicAccessIllustration />
    </template>
    <template v-slot:cta-button>
      <IPhoneButton
        :cta="currentScreen.cta"
        :disableButton="disableButton"
        @clicked-button="handleClick(currentScreen)"
      />
      <IOSAlert @clickedAlert="handleClick(currentScreen)" />
    </template>
  </IPhone>
</template>
<script>
import Overline from "/src/components/atoms/mimiAppAtoms/Overline.vue";
import Headline from "/src/components/atoms/mimiAppAtoms/Headline.vue";
import Subline from "/src/components/atoms/mimiAppAtoms/Subline.vue";

import MicAccessIllustration from "/src/components/Illustrations/MicAccessIllustration.vue";

import IPhoneButton from "/src/components/atoms/mimiAppAtoms/IPhoneButton.vue";
import IOSAlert from "/src/components/UI-elements/IOSAlert.vue";

import IPhone from "/src/components/UI-elements/IPhone.vue";

export default {
  name: "iPhone-screen-mic-access",
  props: ["disableButton"],
  components: {
    Overline,
    Headline,
    Subline,
    IPhoneButton,
    MicAccessIllustration,
    IPhone,
    IOSAlert
  },
  data() {
    return {
      currentScreen: {
        id: "micAccessAlert",
        overline: "set up",
        headline: "Provide microphone access",
        subline:
          "We use the microphone to listen whether your environment is quiet enough to ensure an accurate hearing test.",
        cta: "Provide access"
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
