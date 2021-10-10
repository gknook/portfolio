<template>
  <div class="py-12 relative flex justify-center items-center">
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
      "
      style="height: 37rem; max-width: 17rem"
    >
      <div id="iPhone-content" class="z-10">
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
          v-if="currentScreen.id == 'noiseMeter'"
        />
        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="w-1/3 mx-auto text-green-900"
          v-if="currentScreen.id == 'micAccess'"
        >
          <rect width="120" height="120" rx="40" fill="white" />
          <path
            d="M60 38C58.4087 38 56.8826 38.6321 55.7574 39.7574C54.6321 40.8826 54 42.4087 54 44V60C54 61.5913 54.6321 63.1174 55.7574 64.2426C56.8826 65.3679 58.4087 66 60 66C61.5913 66 63.1174 65.3679 64.2426 64.2426C65.3679 63.1174 66 61.5913 66 60V44C66 42.4087 65.3679 40.8826 64.2426 39.7574C63.1174 38.6321 61.5913 38 60 38V38Z"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M74 56V60C74 63.713 72.525 67.274 69.8995 69.8995C67.274 72.525 63.713 74 60 74C56.287 74 52.726 72.525 50.1005 69.8995C47.475 67.274 46 63.713 46 60V56"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M60 74V82"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M52 82H68"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M66 86C66 79.3726 71.3726 74 78 74C84.6274 74 90 79.3726 90 86C90 92.6274 84.6274 98 78 98C71.3726 98 66 92.6274 66 86Z"
            fill="#86EFAC"
          />
          <path
            d="M84 81.5L75.75 89.75L72 86"
            stroke="#166534"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
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
        "
        @click="handleClick(currentScreen)"
      >
        {{ currentScreen.cta }}
      </button>
      <div
        v-if="currentScreen.id == 'micAccessAlert'"
        class="
          h-full
          w-full
          z-20
          flex
          items-center
          justify-center
          absolute
          bg-opacity-40 bg-gray-900
          left-0
          top-0
          mt-12
        "
        style="height: 37rem"
      >
        <div
          class="
            w-5/6
            backdrop-filter backdrop-blur-lg
            bg-opacity-50 bg-white
            z-20
            shadow-lg
            rounded-2xl
          "
        >
          <div class="p-4 text-center text-sm font-semibold">
            "Mimi Hearing Test" Would Like To Access the Microphone
          </div>
          <div class="flex border-t border-gray-400">
            <div
              class="
                text-blue-500
                w-1/2
                border-r border-gray-400
                text-center
                py-2
              "
            >
              Don't Allow
            </div>
            <div
              class="
                text-blue-500
                w-1/2
                text-center
                py-2
                font-semibold
                cursor-pointer
              "
              @click="handleClick(currentScreen)"
            >
              Ok
            </div>
          </div>
        </div>
      </div>
    </div>
    <img src="/src/assets/iphone.png" class="max-w-xs absolute" />
  </div>
</template>
<script>
import NoiseMeter from "/src/components/UI-elements/NoiseMeter.vue";

export default {
  name: "iPhoneFrame",
  props: ["animation"],
  components: { NoiseMeter },
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
        hearingTest: {
          id: "hearingTest",
          overline: "hearing test",
          headline: "Restart the prototype",
          subline:
            "In the app, here you would start the test. That's not what this case study is about though. Feel free to restart the prototype.",
          cta: "Restart prototype"
        }
      },
      currentScreen: new Object()
    };
  },
  mounted() {
    this.updateCurrentScreen(this.screens.micAccess);
  },
  methods: {
    updateCurrentScreen(screenObject) {
      console.log(screenObject);
      this.currentScreen = screenObject;
    },
    handleClick(currentScreen) {
      if (currentScreen.id == "micAccess") {
        this.currentScreen = this.screens.micAccessAlert;
      } else if (currentScreen.id == "micAccessAlert") {
        this.currentScreen = this.screens.noiseMeter;
        this.$emit("openedNoiseMeter");
      } else if (currentScreen.id == "noiseMeter") {
        this.$emit("closedNoiseMeter");
        this.currentScreen = this.screens.hearingTest;
      } else {
        this.currentScreen = this.screens.micAccess;
      }
    }
  }
};
</script>
