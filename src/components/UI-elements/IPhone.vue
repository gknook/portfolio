<template>
  <div class="py-12 sm:mx-5 mx-5 relative flex justify-center items-center">
    <div
      id="iPhone"
      class="
        bg-gray-100
        w-full
        h-full
        px-4
        pt-12
        pb-8
        flex flex-col
        justify-between
        relative
      "
      style="height: 37rem; max-width: 17rem"
    >
      <div id="iPhone-content" class="z-10 relative">
        <div id="heading-content" class="mb-8 mt-4">
          <h3 class="uppercase text-green-700 font-semibold text-xs">
            {{ currentScreen.overline }}
          </h3>
          <h2 class="text-lg font-semibold text-gray-700 leading-snug mb-2">
            {{ currentScreen.headline }}
          </h2>
          <p class="text-sm text-gray-700">
            {{ currentScreen.subline }}
          </p>
        </div>
        <NoiseMeter
          :animation="animation"
          :screenId="currentScreen.id"
          v-if="currentScreen.id == 'noiseMeter'"
          @noiseChange="changeEnvironment"
        />
        <MicAccessIllustration
          :screenId="currentScreen.id"
          :check="currentEnvironment"
          v-if="screenId == 'micAccess'"
        />
        <OldNoiseMeter
          :animation="animation"
          :screenId="currentScreen.id"
          @noiseChange="changeEnvironment"
          v-if="currentScreen.id == 'noiseMeterOld'"
          :check="currentEnvironment"
        />
        <NoiseIllustration v-if="currentScreen.id == 'noiseMeterOld'" />
      </div>
      <button
        class="
          bg-green-400
          w-full
          px-4
          py-2
          rounded-xl
          font-semibold
          text-green-900
          tracking-wide
          mr-2
          z-10
          disabled:opacity-50 disabled:cursor-not-allowed
        "
        :disabled="disableButton"
        @click="handleClick(currentScreen)"
      >
        {{ currentScreen.cta }}
      </button>
      <IOSAlert
        v-if="currentScreen.id == 'micAccessAlert'"
        @clickedAlert="handleClick(currentScreen)"
      />
    </div>
    <img src="/src/assets/iphone.png" class="max-w-xs absolute" />
  </div>
</template>
<script>
import NoiseMeter from "/src/components/UI-elements/NoiseMeter.vue";
import NoiseIllustration from "/src/components/Illustrations/NoiseIllustration.vue";
import MicAccessIllustration from "/src/components/Illustrations/MicAccessIllustration.vue";
import OldNoiseMeter from "/src/components/UI-elements/OldNoiseMeter.vue";
import IOSAlert from "/src/components/UI-elements/IOSAlert.vue";

export default {
  name: "iPhoneFrame",
  props: ["animation"],
  components: {
    NoiseMeter,
    NoiseIllustration,
    MicAccessIllustration,
    IOSAlert,
    OldNoiseMeter
  },
  data() {
    return {
      screens: {
        micAccess: {
          id: "micAccess",
          overline: "set up",
          headline: "Provide microphone access",
          subline:
            "We use the microphone to listen whether your environment is quiet enough to ensure an accurate hearing test.",
          cta: "Provide access"
        },
        micAccessAlert: {
          id: "micAccessAlert",
          overline: "set up",
          headline: "Provide microphone access",
          subline:
            "We use the microphone to listen whether your environment is quiet enough to ensure an accurate hearing test.",
          cta: "Provide access"
        },
        noiseMeter: {
          id: "noiseMeter",
          overline: "set up",
          headline: "Find a quiet place",
          subline: "The hearing test is most accurate when done in silence.",
          cta: "Start test"
        },
        noiseMeterOld: {
          id: "noiseMeterOld",
          overline: "set up",
          headline: "Find a quiet place",
          subline: "The hearing test is most accurate when done in silence.",
          cta: "Start test"
        },
        setVolume: {
          id: "setVolume",
          overline: "set up",
          headline: "Restart the prototype",
          subline:
            "In the app, here you would start the test. That's not what this case study is about though. Feel free to restart the prototype.",
          cta: "Restart prototype"
        }
      },
      currentScreen: new Object(),
      currentEnvironment: "quiet"
    };
  },
  mounted() {
    this.updateCurrentScreen(this.screens.micAccess);
  },
  computed: {
    disableButton() {
      if (
        this.currentScreen.id == "noiseMeterOld" &&
        this.currentEnvironment != "quiet"
      ) {
        return true;
      } else if (
        this.currentScreen.id == "noiseMeter" &&
        this.currentEnvironment == "loud"
      ) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    updateCurrentScreen(screenObject) {
      this.currentScreen = screenObject;
    },
    handleClick(currentScreen) {
      if (currentScreen.id == "micAccess") {
        this.currentScreen = this.screens.micAccessAlert;
      } else if (currentScreen.id == "micAccessAlert") {
        this.currentScreen = this.screens.noiseMeterOld;
        this.$emit("openedNoiseMeter");
      } else if (currentScreen.id == "noiseMeter") {
        this.$emit("closedNoiseMeter");
        this.currentScreen = this.screens.setVolume;
      } else if (currentScreen.id == "noiseMeterOld") {
        this.currentScreen = this.screens.setVolume;
      } else {
        this.currentScreen = this.screens.micAccess;
      }
      this.$emit("changedPage", this.currentScreen);
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
