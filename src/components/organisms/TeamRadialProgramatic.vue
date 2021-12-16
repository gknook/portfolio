<template>
  <div
    class="max-w-screen-md mx-auto relative flex items-center justify-center"
    @mouseenter="playTimeline"
    @mouseleave="pauseTimeline"
  >
    <svg
      viewBox="0 0 410 410"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="absolute z-0"
    >
      <circle cx="204" cy="205" r="174" stroke="#4B5563" />
      <circle cx="204" cy="205" r="116" stroke="#4B5563" />
      <circle cx="204" cy="205" r="57" stroke="#4B5563" />
    </svg>
    <img
      src="/src/assets/svg/noise-meter-team-svg.svg"
      class="absolute z-0 w-full h-full"
    />
    <img
      src="/src/assets/svg/swirls-mid.png"
      class="absolute z-10 filter hue-rotate-180 swirl opacity-0"
      id="swirl-mid"
    />
    <img
      src="/src/assets/svg/swirls-inner.png"
      id="swirl-inner"
      class="absolute z-10 filter -hue-rotate-30 swirl opacity-0"
    />
    <img
      src="/src/assets/svg/swirls.png"
      class="relative z-10 swirl opacity-0"
      id="swirl-outer"
    />
    <div
      class="absolute flex flex-col items-center text-gray-50 top-36 space-y-20"
    >
      <span>Keep informed</span>
      <span>Work together</span>
      <span>Core team</span>
    </div>
    <div class="absolute flex items-center justify-center z-20 -space-x-8">
      <div
        class="
          w-20
          h-20
          rounded-3xl
          text-3xl
          bg-gradient-to-tr
          from-purple-500
          to-purple-700
          font-semibold
          text-white
          shadow-2xl
          flex
          justify-center
          items-center
          z-0
          mt-8
          hover:z-20 hover:w-24 hover:h-24
          transition-all
          duration-300
        "
      >
        <div class="">
          <span class="block w-full text-center">MB</span>
          <span class="text-xs block w-full text-center">CMO</span>
        </div>
      </div>
      <div
        class="
          w-20
          h-20
          rounded-3xl
          text-3xl
          bg-gradient-to-tr
          from-purple-500
          to-purple-700
          font-semibold
          text-white
          shadow-2xl
          flex
          justify-center
          items-center
          z-10
          -mt-16
          hover:z-20 hover:w-24 hover:h-24
          transition-all
          duration-300
        "
      >
        <div class="">
          <span class="block w-full text-center">GM</span>
          <span class="text-xs block w-full text-center">CTO</span>
        </div>
      </div>
      <div
        class="
          w-20
          h-20
          rounded-3xl
          text-3xl
          bg-gradient-to-tr
          from-purple-500
          to-purple-700
          font-semibold
          text-white
          shadow-2xl
          flex
          justify-center
          items-center
          z-0
          mt-8
          hover:z-20 hover:w-24 hover:h-24
          transition-all
          duration-300
        "
      >
        <div class="">
          <span class="block w-full text-center">GK</span>
          <span class="text-xs block w-full text-center">CEO</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { gsap } from "gsap";

export default {
  name: "team-radial",
  data() {
    return {
      swirlTimeLine: null
    };
  },
  mounted() {
    this.initSwirlTimeLine();
  },
  beforeUnmount() {
    this.swirlTimeline.kill();
  },
  methods: {
    playTimeline() {
      // this.swirlTimeLine.play();
    },
    pauseTimeline() {
      // this.swirlTimeLine.pause();
    },
    initSwirlTimeLine() {
      const swirlInner = "#swirl-inner";
      const swirlMid = "#swirl-mid";
      const swirlOuter = "#swirl-outer";

      const innerTimeline = gsap
        .timeline({ repeat: 3 })
        .set(swirlInner, { rotation: 0 })
        .to(
          swirlInner,
          { rotation: -360, duration: 2, ease: "Power0.easeInOut" },
          "<"
        );
      const midTimeline = gsap
        .timeline({ repeat: 1 })
        .set(swirlMid, { rotation: 0 })
        .to(
          swirlMid,
          { rotation: -360, duration: 4, ease: "Power0.easeInOut" },
          "<"
        );

      const outerTimeline = gsap
        .timeline({ repeat: 0 })
        .set(swirlOuter, { rotation: 0 })

        .to(
          swirlOuter,
          { rotation: -360, duration: 8, ease: "Power0.easeInOut" },
          "<"
        );

      const repeatingRotationTl = gsap
        .timeline({ repeat: -1 })
        .add(outerTimeline)
        .add(innerTimeline, "<")
        .add(midTimeline, "<");

      this.swirlTimeLine = gsap
        .timeline()
        .add(repeatingRotationTl)
        .to(".swirl", { opacity: 1, duration: 0.5 }, "<")
        .pause();
    }
  }
};
</script>
