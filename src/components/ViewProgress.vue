<template>
  <div
    class="
      sm:max-w-sm
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
    <!-- <div
      class="
        w-12
        h-12
        rounded-full
        border-2 border-purple-300
        bg-gradient-to-br
        from-purple-200
        via-pink-300
        to-yellow-500
        mr-2
        flex-none flex
        items-center
        justify-center
        font-semibold
      "
      @click="updateAchievements('acv-2')"
    >
      {{ exploredPercentage }}%
    </div> -->
    <div class="flex-grow">
      <div class="flex justify-between">
        <span
          class="font-semibold mb-2 text-white block"
          @click="updateAchievements('acv-2')"
          >You explored {{ exploredPercentage }}%</span
        >
        <button
          class="
            px-4
            py-1
            bg-gradient-to-br
            from-purple-100
            to-yellow-300
            hover:bg-pink-300
            text-pink-900
            rounded-lg
            text-xs
            mb-2
            font-semibold
            tracking-wide
            transform
            hover:-translate-y-px
          "
          @click="showAllAchievements"
        >
          see all
        </button>
      </div>
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
            via-pink-300
            to-yellow-500
            h-full
            rounded-r-full
          "
        ></div>
      </div>
    </div>
    <AllAchievements
      ref="allAchievements"
      v-if="allAchievementsShown"
      @remove-achievements="removeAchievements"
    />
    <div
      class="
        absolute
        achievement
        top-0
        right-0
        w-full
        -mt-16
        z-10
        hidden
        opacity-0
        px-1
      "
      id="new-achievement-container"
    >
      <div
        class="
          bg-gradient-to-r
          from-yellow-200
          to-yellow-400
          text-yellow-900
          px-4
          py-1
          rounded-full
          shadow-glow
          font-semibold
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
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import achievementAnimation from "/src/mixins/achievementAnimation.js";
import AllAchievements from "/src/components/organisms/AllAchievements.vue";

export default {
  name: "view-progress",
  mixins: [achievementAnimation],
  components: { AllAchievements },
  data() {
    return {
      shownAchievementTitle: null,
      allAchievementsShown: false
    };
  },
  computed: {
    ...mapGetters(["userProgress", "achievementsGained"]),
    exploredPercentage() {
      return Math.floor(this.userProgress);
    }
  },
  mounted() {
    if (localStorage.getItem("userProgress") == null) {
      setTimeout(() => this.updateAchievements("acv-1"), 2000);
    }
  },
  methods: {
    ...mapMutations(["updateAchievements"]),
    showAllAchievements() {
      this.allAchievementsShown = true;
      setTimeout(() => this.$refs.allAchievements.playAnimation(), 100);
    },
    removeAchievements() {
      this.allAchievementsShown = false;
    }
  },
  watch: {
    achievementsGained(newVal, oldVal) {
      // console.log(
      //   `new value: ${JSON.stringify(newVal)}, old value: ${JSON.stringify(
      //     oldVal
      //   )}`
      // );
      if (JSON.stringify(newVal) === JSON.stringify(oldVal)) {
        return;
      } else {
        let newestAchievement = sessionStorage.getItem("acv-id");
        if (oldVal.findIndex(x => x.acvId === newestAchievement) === -1) {
          let newTitle = newVal.find(
            x => x.acvId === newestAchievement
          ).acvTitle;
          this.shownAchievementTitle = newTitle;
        }
        this.showNewAchievement();
      }
    }
  }
};
</script>
