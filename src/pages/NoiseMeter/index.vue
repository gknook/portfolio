<template>
  <div class="flex flex-wrap p-6 mx-auto w-full">
    <div id="introduction" class="mb-8 lg:w-1/2 lg:px-12 w-full">
      <hgroup class="mb-4">
        <h2 class="text-indigo-50 text-sm uppercase font-bold mb-4">
          Case study
        </h2>
        <h1 class="text-indigo-50 sm:text-3xl text-xl font-bold mb-2">
          Noise meter
        </h1>
        <div class="text-indigo-50 sm:text-lg text-md flex items-end">
          <span class="mb-0">2017 - </span>
          <div class="mx-2 bg-gray-900 rounded-lg">
            <img src="/src/assets/company_logos/Mimi.png" class="h-10" />
          </div>
          <span class="mb-0"> - UX designer</span>
        </div>
      </hgroup>

      <h4 class="text-indigo-50 text-sm uppercase font-bold mb-2">Situation</h4>
      <p class="text-indigo-50 mb-8">
        Our hearing test was doing well, around a million people had tested
        their hearing with our app.
      </p>
      <h4 class="text-indigo-50 text-sm uppercase font-bold mb-2">Metric</h4>
      <p class="text-indigo-50 mb-8">
        The main metric was completed tests. They're worth measuring because
        they equate to the core value for the user, but also because they
        generate data to further improve our algorithms.
      </p>
      <h4 class="text-indigo-50 text-sm uppercase font-bold mb-2">Problem</h4>
      <p class="text-indigo-50 mb-8">
        Despite the large number of downloads, not everyone started a hearing
        test. Analyzing the funnel, I discovered that the biggest bottleneck had
        become the noise meter. This was a feature that we built in to show
        people it was noisy in their environment.
      </p>
      <h4 class="text-indigo-50 text-sm uppercase font-bold mb-2">
        the funnel
      </h4>
      <Funnel :funnelSteps="funnelSteps" :width="600" :height="200" />
    </div>
    <div
      class="
        flex flex-wrap
        justify-center
        items-center
        lg:w-1/2
        w-full
        relative
      "
    >
      <IPhone
        :animation="animation"
        @openedNoiseMeter="delayedAnimation"
        @closedNoiseMeter="toggleAnimation"
      />
      <div class="z-10 max-w-sm w-full flex flex-col items-center">
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
            m-2
            w-52
            block
          "
          @click="toggleAnimation"
        >
          {{ noiseAnimationButtonText }}
        </button>
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
import Funnel from "/src/components/Funnel.vue";
import ProfilePic from "/src/assets/svg/ProfilePic.vue";
import IPhone from "/src/components/UI-elements/IPhone.vue";

export default {
  components: { Hypotheses, ProfilePic, Funnel, IPhone },
  data() {
    return {
      funnelSteps: [
        { stepId: 1, name: "Open App", percentage: 100 },
        { stepId: 2, name: "Introduction", percentage: 98 },
        { stepId: 3, name: "Noise meter", percentage: 84 },
        { stepId: 4, name: "Set Volume", percentage: 80 },
        { stepId: 5, name: "Start test", percentage: 79 },
        { stepId: 6, name: "Finish test", percentage: 76 }
      ],
      animation: false,
      noiseAnimationButtonText: "Animate Noise Meter"
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
    },
    delayedAnimation(delay) {
      let timeoutDelay = 0;
      if (delay != null) {
        timeoutDelay = delay;
      } else {
        timeoutDelay = 500;
      }
      setTimeout(() => this.toggleAnimation(), timeoutDelay);
    }
  }
};
</script>
<style>
.conv-option:hover div {
  background-color: #fff;
}
</style>
