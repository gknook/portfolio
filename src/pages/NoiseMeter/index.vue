<template>
  <div class="p-6 mx-auto w-full my-12">
    <div
      id="introduction"
      class="md:px-12 sm:px-6 w-full max-w-screen-md mx-auto"
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
      <paragraph-content
        >I often start with data. It's one of my favorite ways to learn that
        something needs to be done, what the potential impact is and where to
        start looking to empathize.</paragraph-content
      >
    </div>

    <div
      id="case-wrapper"
      class="mb-8 md:px-12 sm:px-6 w-full max-w-screen-md mx-auto"
    >
      <paragraph-header id="situation">Situation</paragraph-header>
      <paragraph-content>
        Our hearing test was doing well, more than a million people had
        downloaded the app by now.
      </paragraph-content>

      <paragraph-header id="metric">Metric</paragraph-header>
      <paragraph-content>
        The main metric for this product was
        <span class="underline">completed tests</span>. They're worth measuring
        because they equate to the core value for the user, but also because
        they generate data to further improve our algorithms.
      </paragraph-content>

      <paragraph-header id="problem">Problem</paragraph-header>
      <paragraph-content>
        Despite the large number of downloads, not everyone started a hearing
        test. Analyzing the funnel, I discovered that the biggest bottleneck had
        become the noise meter. This was a feature that we built in to increase
        the accuracy of the test. The accuracy goes down when it's noisy in the
        environment the user is doing a hearing test in.
      </paragraph-content>

      <paragraph-header id="funnel">The funnel</paragraph-header>

      <paragraph-content>
        Clearly the biggest drop-off was between the intro and the noise meter.
        The events below are triggered when the user finished a certain step.
        E.g. <span class="font-mono font-bold">98%</span>
        <span class="italic"> "finished the introduction"</span>, and (only)
        <span class="font-mono font-bold">84%</span>
        <span class="italic"> "finished the noise meter"</span>.
      </paragraph-content>

      <Funnel
        :funnelSteps="funnelSteps"
        :width="1800"
        :height="600"
        class="mb-8"
      />

      <paragraph-header id="old-flow">Old flow</paragraph-header>
      <div
        class="flex flex-wrap-reverse sm:justify-between justify-center mb-8"
      >
        <OldPrototypeRouter
          ref="oldMimiRouter"
          @clicked-prototype="clickedPrototype(event)"
        />
        <div class="text-gray-50 w-auto sm:pl-8 sm:flex-1 mt-8">
          <!-- <div
            class="
              bg-gray-700
              px-4
              -mx-4
              py-2
              rounded-lg
              inline-block
              mb-4
              font-semibold
            "
          >
            Step: {{ oldMimiNoiseMeterPage }}
          </div> -->
          <h4
            class="font-semibold uppercase text-xs mb-2"
            v-if="oldMimiNoiseMeterPage == 'micAccessPriming'"
          >
            Try it out!
          </h4>
          <paragraph-content v-if="oldMimiNoiseMeterPage == 'micAccessPriming'">
            Try out the prototype as it was before!
          </paragraph-content>

          <h4
            class="font-semibold uppercase text-xs mb-2"
            v-if="oldMimiNoiseMeterPage == 'micAccessPriming'"
          >
            Note
          </h4>
          <paragraph-content v-if="oldMimiNoiseMeterPage == 'micAccessPriming'">
            I rebuilt this from memory because I don't have access to the files
            from that time. For illustrative purposes it should do the job 😅!
          </paragraph-content>

          <h4
            class="font-semibold uppercase text-xs mb-2"
            v-if="oldMimiNoiseMeterPage == 'micAccessAlert'"
          >
            Mic Permission
          </h4>
          <paragraph-content v-if="oldMimiNoiseMeterPage == 'micAccessAlert'">
            Don't worry, I won't actually access your microphone.
          </paragraph-content>

          <h4
            class="font-semibold uppercase text-xs mb-2"
            v-if="oldMimiNoiseMeterPage == 'oldNoiseMeter'"
          >
            Noise meter
          </h4>
          <paragraph-content v-if="oldMimiNoiseMeterPage == 'oldNoiseMeter'">
            The simulation does a pretty good job of showing how frustrating
            this feature was. When it's loud around, you're blocked, and it's
            hard to do something about it. We had good reasons for designing it
            like this, but the user experience wasn't great.
          </paragraph-content>

          <h4
            class="font-semibold uppercase text-xs mb-2"
            v-if="oldMimiNoiseMeterPage == 'oldNoiseMeter'"
          >
            Noise simulation
          </h4>
          <paragraph-content v-if="oldMimiNoiseMeterPage == 'oldNoiseMeter'">
            The 'environmental noise' in this and the redesigned flow prototypes
            is simulated using a
            <a
              class="underline text-indigo-200"
              href="https://en.wikipedia.org/wiki/Simplex_noise"
              target="_blank"
              alt="Wikipedia on Simplex Noise"
              >Simplex Noise</a
            >
            function.
          </paragraph-content>

          <h4
            class="font-semibold uppercase text-xs mb-2"
            v-if="oldMimiNoiseMeterPage == 'setVolume'"
          >
            Restart the prototype
          </h4>
          <paragraph-content v-if="oldMimiNoiseMeterPage == 'setVolume'">
            In the app, here you would set the volume as the next step. However,
            that's not what this case study is about. Feel free to retry the
            prototype!
          </paragraph-content>

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

      <!-- <paragraph-header id="hypotheses" class="mb-4"
        >Hypotheses</paragraph-header
      >

      <Hypotheses class="mb-8" /> -->

      <paragraph-header id="new-flow">User tests</paragraph-header>

      <paragraph-content
        >We did several user tests to discover what the underlying problem was.
        When we invited people in, we encountered one of two scenarios:
        <ol class="list-decimal ml-8 my-2">
          <li class="mb-2">
            Either there was no problem, because the big button would just allow
            them to continue (it was quiet enough).
          </li>
          <li>
            Or they quickly just got frustrated, telling us they couldn't
            continue, because the button was disabled (it was too loud).
          </li>
        </ol>
        Although this also makes clear why a user test is not always perfect
        (people behave differently in a test setting). A real problem in the
        latter case was that the users didn't seem to feel the agency to change
        their situation.</paragraph-content
      >

      <paragraph-header id="new-flow">Redesigned noise meter</paragraph-header>
      <paragraph-content
        >In the prototype below I show what we changed on the noise meter to
        address the issues we encounted (click through the iPhone
        app).</paragraph-content
      >

      <div class="flex flex-wrap sm:justify-between justify-center">
        <div class="text-gray-50 w-auto sm:pr-8 sm:flex-1 mt-8">
          <!-- <div
            class="
              bg-gray-700
              px-4
              -mx-4
              py-2
              rounded-lg
              inline-block
              mb-4
              font-semibold
            "
          >
            Step: {{ newMimiNoiseMeterPage }}
          </div> -->
          <h4
            class="font-semibold uppercase text-xs mb-2"
            v-if="newMimiNoiseMeterPage == 'micAccessPriming'"
          >
            Updated prototype
          </h4>
          <paragraph-content v-if="newMimiNoiseMeterPage == 'micAccessPriming'">
            To the right you find the prototype with the redesign of the noise
            meter. The first steps are still the same, as they weren't the focus
            of this story. I included them for context.
          </paragraph-content>

          <h4
            class="font-semibold uppercase text-xs mb-2"
            v-if="newMimiNoiseMeterPage == 'newNoiseMeter'"
          >
            Extra range
          </h4>
          <paragraph-content v-if="newMimiNoiseMeterPage == 'newNoiseMeter'">
            By adding an extra range, we increased the number of people that
            were able to continue at the risk of test result accuracy.
            <ul class="list-disc ml-6 mt-2 mb-2">
              <li>It's quiet around you</li>
              <li>
                There's some noise
                <span
                  class="
                    bg-yellow-200
                    px-2
                    text-gray-900
                    font-semibold
                    rounded-md
                  "
                  >+ NEW</span
                >
              </li>
              <li>It's loud</li>
            </ul>
            Where's previously the loud range included both 'some noise' and
            'loud', people in the 'some noise' could now also continue, but with
            a warning.
          </paragraph-content>

          <h4
            class="font-semibold uppercase text-xs mb-2"
            v-if="newMimiNoiseMeterPage == 'newNoiseMeter'"
          >
            Range visualization
          </h4>
          <paragraph-content v-if="newMimiNoiseMeterPage == 'newNoiseMeter'">
            Instead of a binary 'good / bad' indicator, we made the noise around
            you more insightful and actionable. Because of the granular steps in
            the meter users could now better understand whether it was just one
            loud or a continuous background sound that caused the problem.
          </paragraph-content>

          <h4
            class="font-semibold uppercase text-xs mb-2"
            v-if="newMimiNoiseMeterPage == 'accuracyAlert'"
          >
            Warning and results
          </h4>
          <paragraph-content v-if="newMimiNoiseMeterPage == 'accuracyAlert'">
            When the user decided to continue, even though there was noise
            around them, we warned them and added a label to their hearing test
            result that it was done in a noisy environment. Balancing the need
            for accuracy.
          </paragraph-content>
          <paragraph-content v-if="newMimiNoiseMeterPage == 'accuracyAlert'">
            Note that we only showed this warning if the environment wasn't
            quiet (so in the 'ok'-range). In this prototype I always show it for
            illustrative purposes.
          </paragraph-content>

          <h4
            class="font-semibold uppercase text-xs mb-2"
            v-if="newMimiNoiseMeterPage == 'setVolume'"
          >
            Restart the prototype
          </h4>
          <paragraph-content v-if="newMimiNoiseMeterPage == 'setVolume'">
            In the app, here you would set the volume as the next step. However,
            that's not what this case study is about. Feel free to retry the
            prototype!
          </paragraph-content>

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
            v-if="newMimiNoiseMeterPage == 'noiseMeter'"
            @click="toggleAnimation"
          >
            {{ noiseAnimationButtonText }}
          </button>
        </div>

        <NewPrototypeRouter
          ref="newMimiRouter"
          @clicked-prototype="clickedPrototype(event)"
        />
      </div>
      <paragraph-header id="wish-list"
        >What I'd still have loved to add</paragraph-header
      >
      <paragraph-content>
        <ul class="list-disc ml-6 mt-2">
          <li class="mb-2">
            <strong>Add a reminder feature.</strong> Beyond the direct issue,
            part of the problem was that people didn't have access to a quieter
            place at the moment they downloaded the app. I'd love to have added
            a reminder feature to do the test later that day or that week when
            they were more likely in a quieter environment.
          </li>
          <li>
            <strong>Intelligent noise monitor during the hearing test.</strong>
            Not all noise is created equal, and if you have bad hearing some of
            it doesn't matter. Technically we would have been able to measure
            whether the noise that we registered during the test actually had an
            impact on your hearing. To explain why I'd have to go deeply into
            sound and hearing, so if you're interested in how that might work,
            feel free to ask!
          </li>
        </ul>
      </paragraph-content>
    </div>
    <div class="mx-auto max-w-sm mt-20">
      <RateCaseStudy />
    </div>
  </div>
</template>
<script>
// import { gsap } from "gsap";
import Hypotheses from "/src/components/hypotheses/Hypotheses.vue";
import Funnel from "/src/components/Funnel.vue";
import ProfilePic from "/src/assets/svg/ProfilePic.vue";
import IPhone from "/src/components/UI-elements/IPhone.vue";
import RateCaseStudy from "/src/components/organisms/RateCaseStudy.vue";

import OldPrototypeRouter from "/src/components/PrototypeRouters/OldPrototypeRouter.vue";
import NewPrototypeRouter from "/src/components/PrototypeRouters/NewMimiNoiseRouter.vue";

import ParagraphHeader from "/src/components/atoms/ParagraphHeader.vue";
import ParagraphContent from "/src/components/atoms/ParagraphContent.vue";

export default {
  components: {
    Hypotheses,
    ProfilePic,
    Funnel,
    IPhone,
    OldPrototypeRouter,
    NewPrototypeRouter,
    ParagraphHeader,
    ParagraphContent,
    RateCaseStudy
  },
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
      currentScreen: "micAccess",
      newMimiNoiseMeterPage: "micAccessPriming",
      oldMimiNoiseMeterPage: "micAccessPriming"
    };
  },
  mounted() {},
  computed: {
    // newMimiNoiseMeterPage() {
    //   if (this.$refs.newMimiRouter == null) {
    //     return "micAccessPriming";
    //   } else return this.$refs.newMimiRouter.currentPage;
    // }
  },
  methods: {
    clickedPrototype(event) {
      setTimeout(() => this.updatePrototypePages(), 100);
    },
    updatePrototypePages() {
      this.newMimiNoiseMeterPage = this.$refs.newMimiRouter.currentPage;
      this.oldMimiNoiseMeterPage = this.$refs.oldMimiRouter.currentPage;
    }
  }
};
</script>
