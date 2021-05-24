import { gsap } from "gsap";
export default {
  data() {
    return {
      hoveringTopicId: null,
      pulsateTimeline: new Array()
    };
  },
  mounted() {
    this.initPulsateTimelines();
  },
  methods: {
    initPulsateTimelines() {
      for (let i = 0; i < 3; i++) {
        let elId = `#active-underline-${i + 1}`;
        this.pulsateTimeline[i] = gsap
          .timeline({
            repeat: -1,
            yoyo: false,
            paused: true,
            onRepeat: this.checkShouldStop
          })
          .set(elId, { width: "1rem" })
          .to(elId, {
            opacity: 0.8,
            duration: 1
          })
          .to(elId, {
            opacity: 0,
            duration: 0.5
          });
      }
    },
    pulsateLine(topicId) {
      if (topicId == this.activeTopic[0].topicId) return;

      if (this.hoveringTopicId == topicId) {
        this.hoveringTopicId = null;
      } else {
        this.hoveringTopicId = topicId;
        this.pulsateTimeline[topicId - 1].play();
      }
    },
    checkShouldStop() {
      if (this.hoveringTopicId != null) {
        this.pulsateTimeline[this.hoveringTopicId - 1].resume();
        for (let i = 0; i < this.pulsateTimeline.length; i++) {
          if (i != this.hoveringTopicId - 1) {
            this.pulsateTimeline[i].pause();
          }
        }
      } else {
        for (let tl of this.pulsateTimeline) {
          tl.pause();
        }
      }
    },
    moveUnderline(topicId) {
      this.hoveringTopicId = null;

      let masterTimeLine = gsap.timeline();
      let prevTopicEl = `#active-underline-${this.activeTopic[0].topicId}`;
      let nextTopicEl = `#active-underline-${topicId}`;

      let fadeOutTl = gsap.timeline({
        onComplete: this.activateTopic,
        onCompleteParams: [topicId]
      });
      fadeOutTl.to(prevTopicEl, {
        scaleX: 0.1,
        transformOrigin: "100% 50%",
        duration: 0.3
      });
      fadeOutTl.to("#topic-text", { opacity: 0, duration: 0.5 }, "<");
      fadeOutTl.to(
        ".topic-tag",
        { opacity: 0, duration: 0.5, stagger: 0.1 },
        "<"
      );
      fadeOutTl.to(prevTopicEl, { opacity: 0, duration: 0.1 });
      fadeOutTl.set(prevTopicEl, { scaleX: 1, width: "1rem" });

      let fadeInTl = gsap.timeline();
      this.pulsateTimeline[topicId - 1].kill();
      fadeInTl.to(nextTopicEl, { opacity: 1, duration: 0.2 });
      fadeInTl.to("#topic-text", { opacity: 1, duration: 0.5 });
      fadeInTl.to(
        ".topic-tag",
        { opacity: 1, duration: 0.5, stagger: 0.1 },
        "<"
      );
      fadeInTl.to(nextTopicEl, { width: "100%", duration: 0.6 }, "<");

      masterTimeLine.add(fadeOutTl);
      masterTimeLine.add(fadeInTl);
    }
  }
};
