<template>
  <div
    class="
      max-w-sm
      w-full
      bg-white
      p-4
      rounded-2xl
      flex
      items-center
      relative
      z-0
      overflow-visible
      justify-start
    "
  >
    <div
      class="
        w-12
        h-12
        rounded-full
        border-2 border-green-300
        bg-gradient-radial-green-200
        mr-2
        flex-none flex
        items-center
        justify-center
      "
      @click="updateAchievements('acv-2')"
    >
      {{ exploredPercentage }}%
    </div>
    <div class="flex-grow">
      <strong>You've explored {{ exploredPercentage }}%</strong>
      <div
        class="w-full rounded-full h-4 border border-green-300 overflow-hidden"
      >
        <div
          :style="`width: ${exploredPercentage + 2}%`"
          class="bg-gradient-green-200 h-full rounded-r-full"
        ></div>
      </div>
    </div>
    <div
      class="
        achievement
        absolute
        top-0
        max-w-xs
        w-full
        -mt-16
        bg-gradient-yellow-400
        text-white
        px-4
        py-1
        rounded-full
        shadow-glow
        font-semibold
        z-10
        opacity-0
        flex
        items-center
      "
    >
      <div class="text-xl flex-none mr-4">💎</div>
      <div>
        <div class="uppercase text-sm -mb-1">Achievement unlocked!</div>
        <div class="text-lg">{{ shownAchievementTitle }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import achievementAnimation from "/src/mixins/achievementAnimation.js";

export default {
  name: "view-progress",
  mixins: [achievementAnimation],
  data() {
    return {
      shownAchievementTitle: null
    };
  },
  computed: {
    ...mapGetters(["userProgress", "achievementsGained"]),
    exploredPercentage() {
      return Math.floor(this.userProgress);
    }
  },
  mounted() {
    // setTimeout(() => this.increaseProgress(5), 2000);
    setTimeout(() => this.updateAchievements("acv-1"), 2000);
  },
  methods: {
    ...mapMutations(["increaseProgress", "updateAchievements"]),
    incrementCount() {
      this.$store.dispatch("incrementAction");
    }
  },
  watch: {
    achievementsGained(newVal, oldVal) {
      console.log(`new value: ${newVal}, old value: ${oldVal}`);
      for (let newAchievement of newVal) {
        if (oldVal.indexOf(newAchievement) === -1) {
          this.shownAchievementTitle = newAchievement.acvTitle;
        }
      }
      this.showNewAchievement();
    }
  }
};
</script>
