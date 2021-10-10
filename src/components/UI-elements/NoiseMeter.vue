<template>
  <div class="rounded-xl p-6 max-w-sm w-full bg-white">
    <h2 class="font-semibold text-gray-700 mb-2 text-center">Noise meter</h2>
    <svg
      width="311"
      height="10"
      viewBox="0 0 311 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="noiseMeter mb-4 transition-all duration-500 mx-auto w-full"
    >
      <path
        d="M2 4C2 2.89543 2.89543 2 4 2H17.3125C18.4171 2 19.3125 2.89543 19.3125 4V6C19.3125 7.10457 18.4171 8 17.3125 8H4C2.89543 8 2 7.10457 2 6V4Z"
        fill="#E5E7EB"
        class="transition-colors duration-75"
      />
      <path
        d="M21.3125 4C21.3125 2.89543 22.2079 2 23.3125 2H36.625C37.7296 2 38.625 2.89543 38.625 4V6C38.625 7.10457 37.7296 8 36.625 8H23.3125C22.2079 8 21.3125 7.10457 21.3125 6V4Z"
        fill="#E5E7EB"
        class="transition-colors duration-75"
      />
      <path
        d="M40.625 4C40.625 2.89543 41.5204 2 42.625 2H55.9375C57.0421 2 57.9375 2.89543 57.9375 4V6C57.9375 7.10457 57.0421 8 55.9375 8H42.625C41.5204 8 40.625 7.10457 40.625 6V4Z"
        fill="#E5E7EB"
        class="transition-colors duration-75"
      />
      <path
        d="M59.9375 4C59.9375 2.89543 60.8329 2 61.9375 2H75.25C76.3546 2 77.25 2.89543 77.25 4V6C77.25 7.10457 76.3546 8 75.25 8H61.9375C60.8329 8 59.9375 7.10457 59.9375 6V4Z"
        fill="#E5E7EB"
        class="transition-colors duration-75"
      />
      <path
        d="M79.25 4C79.25 2.89543 80.1454 2 81.25 2H94.5625C95.6671 2 96.5625 2.89543 96.5625 4V6C96.5625 7.10457 95.6671 8 94.5625 8H81.25C80.1454 8 79.25 7.10457 79.25 6V4Z"
        fill="#E5E7EB"
        class="transition-colors duration-75"
      />
      <path
        d="M98.5625 4C98.5625 2.89543 99.4579 2 100.562 2H113.875C114.98 2 115.875 2.89543 115.875 4V6C115.875 7.10457 114.98 8 113.875 8H100.562C99.4579 8 98.5625 7.10457 98.5625 6V4Z"
        fill="#E5E7EB"
        class="transition-colors duration-75"
      />
      <path
        d="M117.875 4C117.875 2.89543 118.77 2 119.875 2H133.188C134.292 2 135.188 2.89543 135.188 4V6C135.188 7.10457 134.292 8 133.188 8H119.875C118.77 8 117.875 7.10457 117.875 6V4Z"
        fill="#E5E7EB"
        class="transition-colors duration-75"
      />
      <path
        d="M137.188 4C137.188 2.89543 138.083 2 139.188 2H152.5C153.605 2 154.5 2.89543 154.5 4V6C154.5 7.10457 153.605 8 152.5 8H139.187C138.083 8 137.188 7.10457 137.188 6V4Z"
        fill="#E5E7EB"
        class="transition-colors duration-75"
      />
      <path
        d="M156.5 4C156.5 2.89543 157.395 2 158.5 2H171.812C172.917 2 173.812 2.89543 173.812 4V6C173.812 7.10457 172.917 8 171.812 8H158.5C157.395 8 156.5 7.10457 156.5 6V4Z"
        fill="#E5E7EB"
        class="transition-colors duration-75"
      />
      <path
        d="M175.812 4C175.812 2.89543 176.708 2 177.812 2H191.125C192.23 2 193.125 2.89543 193.125 4V6C193.125 7.10457 192.23 8 191.125 8H177.812C176.708 8 175.812 7.10457 175.812 6V4Z"
        fill="#E5E7EB"
        class="transition-colors duration-75"
      />
      <path
        d="M195.125 4C195.125 2.89543 196.02 2 197.125 2H210.438C211.542 2 212.438 2.89543 212.438 4V6C212.438 7.10457 211.542 8 210.438 8H197.125C196.02 8 195.125 7.10457 195.125 6V4Z"
        fill="#E5E7EB"
        class="transition-colors duration-75"
      />
      <path
        d="M214.438 4C214.438 2.89543 215.333 2 216.438 2H229.75C230.855 2 231.75 2.89543 231.75 4V6C231.75 7.10457 230.855 8 229.75 8H216.437C215.333 8 214.438 7.10457 214.438 6V4Z"
        fill="#E5E7EB"
        class="transition-colors duration-75"
      />
      <path
        d="M233.75 4C233.75 2.89543 234.645 2 235.75 2H249.062C250.167 2 251.062 2.89543 251.062 4V6C251.062 7.10457 250.167 8 249.062 8H235.75C234.645 8 233.75 7.10457 233.75 6V4Z"
        fill="#E5E7EB"
        class="transition-colors duration-75"
      />
      <path
        d="M253.062 4C253.062 2.89543 253.958 2 255.062 2H268.375C269.48 2 270.375 2.89543 270.375 4V6C270.375 7.10457 269.48 8 268.375 8H255.062C253.958 8 253.062 7.10457 253.062 6V4Z"
        fill="#E5E7EB"
        class="transition-colors duration-75"
      />
      <path
        d="M272.375 4C272.375 2.89543 273.27 2 274.375 2H287.688C288.792 2 289.688 2.89543 289.688 4V6C289.688 7.10457 288.792 8 287.688 8H274.375C273.27 8 272.375 7.10457 272.375 6V4Z"
        fill="#E5E7EB"
        class="transition-colors duration-75"
      />
      <path
        d="M291.688 4C291.688 2.89543 292.583 2 293.688 2H307C308.105 2 309 2.89543 309 4V6C309 7.10457 308.105 8 307 8H293.687C292.583 8 291.688 7.10457 291.688 6V4Z"
        fill="#E5E7EB"
        class="transition-colors duration-75"
      />
    </svg>
    <p class="text-center text-xs">{{ noiseMeterMessage }}</p>
  </div>
</template>
<script>
// import { gsap } from "gsap";
import SimplexNoise from "https://cdn.skypack.dev/simplex-noise";
import SVG from "https://cdn.skypack.dev/@svgdotjs/svg.js";
import { map } from "@georgedoescode/generative-utils";

export default {
  name: "interactive-noise-meter",
  props: ["animation"],
  data() {
    return {
      noise: 0,
      noiseSteps: 16,
      noiseTl: null,
      yellow: "#FCD34D",
      green: "#34D399",
      red: "#DC2626",
      gray: "#D1D5DB",
      interval: null,
      noiseArray: [],
      timeInterval: 0,
      noiseMeterMessage: "find out how quiet it is"
    };
  },
  computed() {},
  beforeUnmount() {
    this.stopAnimation();
  },
  mounted() {
    this.noiseTest();
  },
  methods: {
    startAnimation() {
      this.interval = setInterval(() => {
        this.withoutGsap();
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
    withoutGsap() {
      let currentNoise = this.noiseArray[this.timeInterval];

      let i = 1;
      this.resetToGray();
      while (i <= currentNoise) {
        let element = document.querySelector(
          `.noiseMeter path:nth-child(${i})`
        );
        if (currentNoise < 6) {
          this.noiseMeterMessage = "It’s quiet enough around you";
          element.style.fill = this.green;
        } else if (currentNoise < 12) {
          this.noiseMeterMessage = "Not perfectly quiet, but ok";
          element.style.fill = this.yellow;
        } else {
          this.noiseMeterMessage =
            "It’s quite loud, try to find a quieter place";
          element.style.fill = this.red;
        }
        i++;
      }
      if (this.timeInterval >= 2000) {
        this.timeInterval = 0;
      } else {
        this.timeInterval += 1;
      }
    },
    resetToGray() {
      let elements = document.querySelectorAll(`.noiseMeter path`);
      elements.forEach(el => {
        el.style.fill = this.gray;
      });
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
