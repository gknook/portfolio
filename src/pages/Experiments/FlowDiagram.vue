<template>
  <div class="flex px-4 mx-auto w-full">
    <canvas
      id="canvasContainer"
      :width="debugWidth"
      :height="debugHeight"
      @mousemove="canvasMouseMove"
    >
    </canvas>
  </div>
</template>
<script>
// import { gsap } from "gsap";
// import Hypotheses from "/src/components/hypotheses/Hypotheses.vue";

export default {
  components: {},
  props: ["width", "height"],
  data() {
    return {
      debugWidth: 500,
      debugHeight: 300
    };
  },
  mounted() {
    this.initiateFunnel();
  },
  methods: {
    initiateFunnel() {
      let c = document.getElementById("canvasContainer");
      let ctx = c.getContext("2d");

      let steps = this.funnelSteps;
      let width = c.width / steps.length - 10;
      let currX = 8;
      let base = c.height;

      ctx.fillStyle = "#fff";
      ctx.font = "16px Work Sans";
      ctx.textAlign = "center";
      let bgGradient = ctx.createLinearGradient(0, 0, c.width, c.height);
      bgGradient.addColorStop(0, "#EEF2FF");
      bgGradient.addColorStop(1, "#FBCFE8");

      for (let i = 0; i < steps.length; i++) {
        let h = (steps[i].percentage / 100) * (c.height * 0.8);
        let currH = c.height - h - 30;
        ctx.fillStyle = bgGradient;
        this.roundRect(ctx, currX, currH, width, h, 8, true, false);
        this.rects.push({ x: currX, y: currH, w: width, h: h });
        ctx.fillStyle = "#EEF2FF";
        this.addStepName(ctx, steps[i], width, currX, base);
        ctx.fillStyle = "#312E81";
        ctx.fillText(
          `${steps[i].percentage}%`,
          currX + width / 2,
          base - h - 6,
          width
        );
        currX += width + 8;
      }
    },
    addStepName(ctx, step, maxWidth, currX, base) {
      let stepName = step.name;
      let text = ctx.measureText(stepName);
      // if (text.width > maxWidth) {
      //   stepName = step.stepId;
      // };
      ctx.fillText(stepName, currX + maxWidth / 2, base - 8, maxWidth);
    }
  }
};
</script>
<style>
.conv-option:hover div {
  background-color: #fff;
}
</style>
