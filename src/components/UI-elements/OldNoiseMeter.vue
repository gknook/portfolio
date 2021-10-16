<template>
  <div>
    <svg
      width="120"
      height="132"
      viewBox="0 0 120 132"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="w-2/5 mx-auto mt-20"
    >
      <rect width="120" height="120" rx="40" fill="white" />
      <path
        d="M58 46L48 54H40V66H48L58 74V46Z"
        stroke="#1F2937"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M74.1401 45.86C77.8895 49.6105 79.9958 54.6967 79.9958 60C79.9958 65.3033 77.8895 70.3894 74.1401 74.14M67.0801 52.92C68.9548 54.7953 70.0079 57.3384 70.0079 59.99C70.0079 62.6416 68.9548 65.1847 67.0801 67.06"
        stroke="#1F2937"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M48 120C48 113.373 53.3726 108 60 108C66.6274 108 72 113.373 72 120C72 126.627 66.6274 132 60 132C53.3726 132 48 126.627 48 120Z"
        fill="#86EFAC"
        id="check-circle-bg"
        v-if="check == 'quiet'"
      />
      <path
        id="check"
        d="M66 115.5L57.75 123.75L54 120"
        stroke="#166534"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
        v-if="check == 'quiet'"
      />
      <path
        id="cross-circle-bg"
        d="M48 120C48 113.373 53.3726 108 60 108C66.6274 108 72 113.373 72 120C72 126.627 66.6274 132 60 132C53.3726 132 48 126.627 48 120Z"
        fill="#FCA5A5"
        v-if="check != 'quiet'"
      />
      <g id="cross" v-if="check != 'quiet'">
        <path
          d="M55.5 115.5L64.5 124.5"
          stroke="#991B1B"
          stroke-width="3"
          stroke-linecap="round"
        />
        <path
          d="M64.5 115.5L55.5 124.5"
          stroke="#991B1B"
          stroke-width="3"
          stroke-linecap="round"
        />
      </g>
    </svg>
    <p
      class="text-center w-full text-xs"
      :class="{ invisible: check == 'quiet' }"
    >
      It's too loud around you
    </p>
  </div>
</template>
<script>
import SimplexNoise from "https://cdn.skypack.dev/simplex-noise";
import { map } from "@georgedoescode/generative-utils";

export default {
  name: "old-noise-meter",
  props: ["check", "animation"],
  data() {
    return {
      noise: 0,
      noiseSteps: 16,
      interval: null,
      noiseArray: [],
      timeInterval: 0
    };
  },
  beforeUnmount() {
    this.stopAnimation();
  },
  mounted() {
    this.noiseTest();
  },
  methods: {
    startAnimation() {
      this.interval = setInterval(() => {
        this.changeColor();
      }, 50);
    },
    stopAnimation() {
      clearInterval(this.interval);
    },
    noiseTest() {
      const simplex = new SimplexNoise();
      let time = 0;

      const width = 200;
      const height = 200;
      const numPoints = 2000;
      const pointStep = width / numPoints;
      for (let x = 0; x < width; x += pointStep) {
        const noise = simplex.noise2D(time, time);
        const noiseValue = map(noise, -1, 1, 1, 16);
        time += 0.01;
        this.noiseArray.push(Math.floor(noiseValue));
      }
    },
    changeColor() {
      let currentNoise = this.noiseArray[this.timeInterval];
      let i = 1;
      while (i <= currentNoise) {
        let element = document.querySelector(
          `.noiseMeter path:nth-child(${i})`
        );
        if (currentNoise < 6) {
          this.$emit("noiseChange", "quiet");
        } else if (currentNoise < 12) {
          this.$emit("noiseChange", "ok");
        } else {
          this.$emit("noiseChange", "loud");
        }
        i++;
      }
      // Start the animation from the beginning
      if (this.timeInterval >= 2000) {
        this.timeInterval = 0;
      } else {
        this.timeInterval += 1;
      }
    }
  },
  watch: {
    animation: function (val) {
      if (val) {
        this.startAnimation();
      } else {
        this.stopAnimation();
      }
    }
  }
};
</script>
