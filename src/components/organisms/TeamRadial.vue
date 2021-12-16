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
    <div class="absolute w-full h-full z-20">
      <NoiseMeterTeam />
    </div>
    <img
      src="/src/assets/svg/swirls-mid.png"
      class="absolute z-10 swirl opacity-0"
      id="swirl-mid"
    />
    <img
      src="/src/assets/svg/swirls-inner.png"
      id="swirl-inner"
      class="absolute z-10 filter -hue-rotate-30 swirl opacity-0"
    />
    <img
      src="/src/assets/svg/swirls-outer.png"
      class="relative z-10 swirl opacity-0 filter hue-rotate-180"
      id="swirl-outer"
    />
  </div>
</template>
<script>
import { gsap } from "gsap";
import NoiseMeterTeam from "/src/components/molecules/NoiseMeterTeam.vue";

export default {
  name: "team-radial",
  components: { NoiseMeterTeam },
  data() {
    return {
      swirlTimeLine: null
    };
  },
  mounted() {
    this.initSwirlTimeLine();
  },
  beforeUnmount() {
    if (this.swirlTimeline) {
      this.swirlTimeline.kill();
    }
  },
  methods: {
    playTimeline() {
      this.swirlTimeLine.play();
    },
    pauseTimeline() {
      this.swirlTimeLine.pause();
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
