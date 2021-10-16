<template>
  <div class="flex flex-wrap p-6 mx-auto w-full">
    <div
      class="flex flex-wrap-reverse justify-center items-center w-full relative"
    >
      <IPhone
        :animation="animation"
        @openedNoiseMeter="delayedAnimation"
        @closedNoiseMeter="toggleAnimation"
        @changedPage="changePage"
      />
      <div class="z-10 max-w-sm flex flex-col md:justify-start md:h-3/4">
        <div class="flex">
          <svg
            width="162"
            height="81"
            viewBox="0 0 162 81"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="mr-4 flex-none w-24 md:block hidden"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.7187 80.1423C6.76348 80.7961 5.63585 80.9131 4.60949 80.6458C4.5573 80.6528 4.50399 80.656 4.4495 80.6552C1.5525 80.6152 1.04505 77.3476 0.982537 75.8188C1.04682 75.3186 1.1265 74.6906 1.20401 74.0799L1.20408 74.0794C1.29569 73.3574 1.38425 72.6596 1.44071 72.2251C1.62745 70.7881 1.81752 69.3516 2.00759 67.915L2.00761 67.9148C2.17395 66.6576 2.34029 65.4004 2.5044 64.1429C2.55169 63.7806 2.68855 62.5888 2.88793 60.8528L2.88795 60.8526C3.81392 52.7899 6.08817 32.9872 7.00001 29.9956C7.00123 29.8557 7.05986 29.7296 7.15349 29.6395C7.15768 29.635 7.16181 29.6311 7.1659 29.6278L7.16844 29.6257C7.25669 29.5475 7.37279 29.5 7.49999 29.5C7.77614 29.5 7.99999 29.7239 7.99999 30C7.99999 30.2578 7.80491 30.47 7.55432 30.4971C7.95812 32.9624 8.03385 39.7272 8.0356 40.5632C8.04545 45.2689 8.06283 49.9747 8.08021 54.6805C8.09276 58.0763 8.1053 61.4721 8.11501 64.8679C8.11661 65.4277 8.11877 65.9876 8.12118 66.5474C16.7894 56.4445 29.4998 48.0878 39.7269 41.5621C75.8619 18.5054 118.62 5.70068 160.935 0.504184C161.507 0.434038 161.718 1.26345 161.177 1.46777C158.213 2.58694 154.728 3.05836 151.321 3.5194C149.354 3.7855 147.413 4.04814 145.612 4.42987C134.765 6.729 124.02 9.51575 113.447 12.8575C78.3418 23.9534 38.6949 41.9212 14.486 71.4591C15.3722 71.2773 16.2582 71.0952 17.1441 70.912C17.502 70.838 18.6729 70.577 20.3787 70.1967C28.3001 68.4307 47.755 64.0933 50.8803 63.975C51.0128 63.9303 51.1512 63.9444 51.2669 64.0034C51.2726 64.0059 51.2777 64.0085 51.2821 64.0113C51.2831 64.0118 51.284 64.0124 51.2849 64.013C51.3877 64.0707 51.4706 64.1649 51.5123 64.2851C51.6027 64.546 51.4645 64.8308 51.2036 64.9213C50.96 65.0057 50.6956 64.8909 50.588 64.663C48.3909 65.852 42.0241 68.1393 41.2348 68.4148C36.7925 69.9652 32.3526 71.5227 27.9128 73.0803C24.7078 74.2046 21.5027 75.3289 18.2968 76.4506C17.3716 76.7743 16.447 77.0996 15.5224 77.425C13.9586 77.9752 12.3949 78.5254 10.8285 79.0677C10.5599 79.1606 10.1826 79.2909 9.76244 79.4358C9.101 79.6641 8.33371 79.9288 7.7187 80.1423ZM0.975172 75.5082C0.975695 75.6007 0.977883 75.7049 0.982537 75.8188C0.871912 76.6796 0.806906 77.1623 0.87714 76.5283C0.926959 76.0787 0.957389 75.7444 0.975172 75.5082ZM0.993331 75.0476C0.986508 75.065 0.973633 75.236 0.975172 75.5082C1.00092 75.1663 1.00015 75.0301 0.993331 75.0476Z"
              fill="#F3F4F6"
            />
          </svg>
          <div class="text-gray-100">
            <!-- <div class="bg-gray-700 px-4 py-2 rounded-lg inline-block mb-4">
              Screen: {{ currentScreen }}
            </div> -->
            <h4 class="font-semibold uppercase text-xs mb-2">Try it out!</h4>
            <p class="mb-8">
              Try out this prototype. Don't worry, I won't actually access your
              microphone.
            </p>

            <h4 class="font-semibold uppercase text-xs mb-2">The prototype</h4>
            <p class="mb-8">
              I've rebuilt this from memory, since I don't have access to the
              exact files from that time. In any case, it's about the thinking
              that went behind it.
            </p>
            <button
              class="
                bg-gradient-to-br
                from-pink-600
                to-pink-800
                hover:from-pink-800 hover:to-pink-900
                px-4
                py-2
                rounded-xl
                font-semibold
                text-white
                tracking-wide
                w-52
                block
              "
              v-if="currentScreen == 'noiseMeter'"
              @click="toggleAnimation"
            >
              {{ noiseAnimationButtonText }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- <Hypotheses  /> -->
    <div class="absolute left-0 bottom-0 w-80 h-80 lg:block hidden">
      <!-- <ProfilePic /> -->
    </div>
  </div>
</template>
<script>
// import { gsap } from "gsap";
import Hypotheses from "/src/components/hypotheses/Hypotheses.vue";
import ProfilePic from "/src/assets/svg/ProfilePic.vue";
import IPhone from "/src/components/UI-elements/IPhone.vue";

export default {
  components: { Hypotheses, ProfilePic, IPhone },
  data() {
    return {
      animation: false,
      toggleAnimationButton: false,
      noiseAnimationButtonText: "Animate Noise Meter",
      currentScreen: "micAccess"
    };
  },
  methods: {
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
    changePage(event) {
      console.log("changed page");
      console.log(event.id);
      this.currentScreen = event.id;
    }
  }
};
</script>
<style>
.conv-option:hover div {
  background-color: #fff;
}
</style>
