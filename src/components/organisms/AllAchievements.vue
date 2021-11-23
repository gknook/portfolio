<template>
  <div
    id="all-achievement-container"
    class="w-full z-10 px-1 mb-20 absolute bottom-0 right-0 hidden"
  >
    <x-circle-icon
      class="
        text-white
        h-6
        w-6
        mb-2
        ml-auto
        shadow-glow
        rounded-full
        opacity-0
        x-circle
        cursor-pointer
      "
      @click="closeList"
    ></x-circle-icon>
    <div
      v-for="(achievement, index) in achievements"
      :key="index"
      class="
        all-achievements
        bg-gradient-to-r
        px-4
        py-1
        rounded-full
        font-semibold
        flex
        items-center
        mb-2
      "
      :class="[
        {
          'from-gray-200 to-gray-400 text-gray-800 opacity-50':
            achievement.acvAchieved === false
        },
        {
          'from-yellow-200 to-yellow-400 text-yellow-800 shadow-glow':
            achievement.acvAchieved === true
        }
      ]"
    >
      <div class="text-xl flex-none mr-4">💎</div>
      <div>
        <div
          v-if="achievement.acvAchieved === true"
          class="uppercase text-sm -mb-1 text-yellow-700"
        >
          Achievement unlocked!
        </div>
        <div class="text-lg">{{ achievement.acvTitle }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { gsap } from "gsap";
import { mapGetters } from "vuex";
import { XCircleIcon } from "@zhuowenli/vue-feather-icons";
export default {
  name: "all-achievements",
  components: { XCircleIcon },
  data() {
    return {
      allAchievementsTimeline: null
    };
  },
  computed: {
    ...mapGetters(["achievements"])
  },
  beforeUnmount() {
    this.allAchievementsTimeline.kill();
  },
  mounted() {
    this.initTimeline();
  },
  methods: {
    initTimeline() {
      this.allAchievementsTimeline = gsap
        .timeline({ paused: true })
        .set(".all-achievements", { scale: 0.1, opacity: 0 })
        .to(
          ".all-achievements",
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: "Power2.easeInOut",
            stagger: { amount: 0.2, from: "end" }
          },
          "<"
        )
        .to(".x-circle", { rotate: "360", opacity: 1, duration: 1 }, "-=0.5");
    },
    playAnimation() {
      document
        .getElementById("all-achievement-container")
        .classList.remove("hidden");
      this.allAchievementsTimeline.play(0);
    },
    closeList() {
      this.allAchievementsTimeline.reverse(0);
      setTimeout(() => this.hideList(), 1000);
    },
    hideList() {
      document
        .getElementById("all-achievement-container")
        .classList.add("hidden");
      this.$emit("remove-achievements");
    }
  }
};
</script>
