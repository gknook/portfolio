<template>
  <div class="flex flex-wrap p-6 mx-auto w-full">
    <div
      id="introduction"
      class="mb-8 md:px-12 sm:px-6 w-full max-w-screen-md mx-auto"
    >
      <hgroup class="mb-4">
        <h2 class="text-indigo-50 text-sm uppercase font-bold mb-4">
          Case study
        </h2>
        <h1 class="text-indigo-50 sm:text-3xl text-xl font-bold mb-2">
          Noise meter
        </h1>
        <div class="text-indigo-50 sm:text-lg text-md flex items-end">
          <span class="mb-0">2017 - </span>
          <div class="mx-2 rounded-lg">
            <img src="/src/assets/company_logos/Mimi.png" class="h-10" />
          </div>
          <span class="mb-0"> - UX designer</span>
        </div>
      </hgroup>

      <h4 class="text-indigo-50 text-sm uppercase font-bold mb-2">Situation</h4>
      <p class="text-indigo-50 mb-8">
        Our hearing test was doing well, more than a million people had
        downloaded the app by now.
      </p>
      <h4 class="text-indigo-50 text-sm uppercase font-bold mb-2">Metric</h4>
      <p class="text-indigo-50 mb-8">
        The main metric for this product was
        <span class="underline">completed tests</span>. They're worth measuring
        because they equate to the core value for the user, but also because
        they generate data to further improve our algorithms.
      </p>
      <h4 class="text-indigo-50 text-sm uppercase font-bold mb-2">Problem</h4>
      <p class="text-indigo-50 mb-8">
        Despite the large number of downloads, not everyone started a hearing
        test. Analyzing the funnel, I discovered that the biggest bottleneck had
        become the noise meter. This was a feature that we built in to increase
        the accuracy of the test. The accuracy goes down when it's noisy in the
        environment the user is doing a hearing test in.
      </p>
      <h4 class="text-indigo-50 text-sm uppercase font-bold mb-2">
        the funnel
      </h4>
      <p class="text-indigo-50 mb-8">
        Clearly the biggest drop-off was between the intro and the noise meter.
        The events below are triggered when the user finished a certain step.
        E.g. <span class="font-mono font-bold">98%</span>
        <span class="italic"> "finished the introduction"</span>, and (only)
        <span class="font-mono font-bold">84%</span>
        <span class="italic"> "finished the noise meter"</span>.
      </p>
      <Funnel
        :funnelSteps="funnelSteps"
        :width="1800"
        :height="600"
        class="mb-8"
      />

      <h4 class="text-indigo-50 text-sm uppercase font-bold mb-2">Old flow</h4>
      <div
        class="
          flex flex-wrap-reverse
          sm:justify-between
          justify-center
          items-center
        "
      >
        <IPhone
          :animation="animation"
          @openedNoiseMeter="delayedAnimation"
          @closedNoiseMeter="toggleAnimation"
          @changedPage="changePage"
          class="flex-none"
        />
        <div class="text-gray-50 w-auto sm:pl-8 sm:flex-1">
          <div
            class="
              bg-gray-700
              px-4
              py-2
              rounded-lg
              inline-block
              mb-4
              font-semibold
            "
          >
            Screen: {{ currentScreen }}
          </div>
          <h4 class="font-semibold uppercase text-xs mb-2">Try it out!</h4>
          <p class="mb-8">
            Try out the prototype as it was before. Don't worry, I won't
            actually access your microphone. The 'environmental noise' is
            simulated using a
            <a
              class="underline text-indigo-200"
              href="https://en.wikipedia.org/wiki/Simplex_noise"
              target="_blank"
              alt="Wikipedia on Simplex Noise"
              >Simplex Noise</a
            >
            function.
          </p>

          <h4 class="font-semibold uppercase text-xs mb-2">Note</h4>
          <p class="mb-8">
            I rebuilt this from memory because I don't have access to the files
            from that time. For illustrative purposes it should do the job 😅!
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

      <h4 class="text-indigo-50 text-sm uppercase font-bold mb-2">
        Hypotheses
      </h4>
      <Hypotheses class="mb-8" />

      <h4 class="text-indigo-50 text-sm uppercase font-bold mb-2">
        the prototype
      </h4>
      <p class="text-indigo-50 mb-8"></p>
      <router-link
        :to="{ name: 'noise-meter-prototype' }"
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
          w-44
          text-center
          inline-block
        "
      >
        Prototype
      </router-link>
    </div>

    <div class="absolute left-0 bottom-0 lg:block hidden">
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
        { stepId: 2, name: "Intro", percentage: 98 },
        { stepId: 3, name: "Noise meter", percentage: 84 },
        { stepId: 4, name: "Set Volume", percentage: 80 },
        { stepId: 5, name: "Start test", percentage: 79 },
        { stepId: 6, name: "Finish test", percentage: 76 }
      ],
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
