<template>
  <div
    class="
      max-w-sm
      w-full
      bg-gray-700
      p-4
      rounded-2xl
      flex
      items-center
      relative
      z-50
      overflow-visible
      justify-start
      flex-none
    "
  >
    <div
      class="
        w-12
        h-12
        rounded-full
        border-2 border-purple-300
        bg-gradient-to-br
        from-purple-200
        to-pink-300
        mr-2
        flex-none flex
        items-center
        justify-center
        font-semibold
      "
      @click="updateAchievements('acv-2')"
    >
      {{ exploredPercentage }}%
    </div>
    <div class="flex-grow">
      <span class="font-semibold mb-1 text-white block"
        >You've explored {{ exploredPercentage }}%</span
      >
      <div
        class="
          w-full
          rounded-full
          h-4
          border border-pink-200
          overflow-hidden
          bg-gray-800
        "
      >
        <div
          :style="`width: ${exploredPercentage + 2}%`"
          class="
            bg-gradient-to-br
            from-purple-200
            to-pink-300
            h-full
            rounded-r-full
          "
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
      // console.log(`new value: ${newVal}, old value: ${oldVal}`);
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
