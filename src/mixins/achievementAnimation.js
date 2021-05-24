import { gsap } from "gsap";
export default {
  data() {
    return {
      achievementTimeline: null
    };
  },
  beforeUnmount() {
    this.achievementTimeline.kill();
  },
  mounted() {
    this.achievementTimeline = gsap
      .timeline({ paused: true })
      .set(".achievement", { scale: 0.1 })
      .to(".achievement", { opacity: 1, duration: 0.4, ease: "expo.easeOut" })
      .to(
        ".achievement",
        { scaleX: 1, duration: 0.8, ease: "Power2.easeInOut" },
        "<"
      )
      .to(".achievement", { scaleY: 1, duration: 0.8, ease: "Power2.easeOut" })
      .to(
        ".achievement",
        { opacity: 0, duration: 1, ease: "Power2.easeIn" },
        "+=2"
      )
      .to(
        ".achievement",
        { scaleY: 0.1, duration: 0.2, ease: "Power2.easeIn" },
        "-=0.8"
      )
      .to(
        ".achievement",
        { scaleX: 0.1, duration: 0.6, ease: "Power2.easeIn" },
        "-=0.6"
      );
  },
  methods: {
    showNewAchievement() {
      this.achievementTimeline.play(0);
    }
  }
};
