<template>
  <div class="w-full overflow-scroll pb-4">
    <canvas
      id="canvasContainer"
      :width="width"
      :height="height"
      @mousemove="canvasMouseMove"
      :style="`width: ${width / 3}px;
  height: ${height / 3}px`"
    >
    </canvas>
  </div>
</template>
<script>
import roundedRect from "/src/mixins/roundedRect.js";
export default {
  name: "funnel",
  mixins: [roundedRect],
  props: ["funnelSteps", "width", "height"],
  data() {
    return {
      scores: [100, 98, 94, 82, 80, 78],
      rects: new Array()
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
      let width = c.width / steps.length - 20;
      let currX = 24;
      let base = c.height;

      ctx.fillStyle = "#fff";
      ctx.font = "48px Work Sans medium";
      ctx.textAlign = "center";
      let bgGradient = ctx.createLinearGradient(0, 0, c.width, c.height);
      bgGradient.addColorStop(0, "#EEF2FF");
      bgGradient.addColorStop(1, "#FBCFE8");

      for (let i = 0; i < steps.length; i++) {
        let h = (steps[i].percentage / 100) * (c.height * 0.8);
        let currH = c.height - h - 90;
        ctx.fillStyle = bgGradient;
        this.roundRect(ctx, currX, currH, width, h, 32, true, false);
        this.rects.push({ x: currX, y: currH, w: width, h: h });
        ctx.fillStyle = "#EEF2FF";
        this.addStepName(ctx, steps[i], width, currX, base);
        ctx.fillStyle = "#312E81";
        ctx.fillText(
          `${steps[i].percentage}%`,
          currX + width / 2,
          base - h - 24,
          width
        );
        currX += width + 16;
      }
    },
    addStepName(ctx, step, maxWidth, currX, base) {
      let stepName = step.name;
      let text = ctx.measureText(stepName);
      // if (text.width > maxWidth) {
      //   stepName = step.stepId;
      // };
      ctx.fillText(stepName, currX + maxWidth / 2, base - 8, maxWidth);
    },
    canvasMouseMove(e) {
      // important: correct mouse position:
      let c = document.getElementById("canvasContainer");
      let ctx = c.getContext("2d");
      let rect = c.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top,
        i = 0,
        r;

      // ctx.clearRect(0, 0, this.width, this.height); // for demo

      while ((r = this.rects[i++])) {
        // add a single rect to path:
        ctx.beginPath();
        // ctx.rect(r.x, r.y, r.w, r.h);

        // check if we hover it, fill red, if not fill it blue
        ctx.fillStyle = ctx.isPointInPath(x, y) ? "red" : "blue";
        ctx.fill();
      }
    }
  }
};
</script>
