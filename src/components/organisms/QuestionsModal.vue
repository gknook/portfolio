<template>
  <div class="absolute w-full h-full bg-opacity-90 bg-black z-50">
    <div
      class="
        relative
        md:px-0
        px-6
        w-full
        h-full
        flex
        justify-center
        items-center
      "
    >
      <div
        class="
          md:p-12
          py-10
          px-6
          rounded-3xl
          bg-black
          max-w-xl
          w-full
          text-center
          shadow-card-glow
          text-gray-200
        "
      >
        <h1 class="text-3xl font-semibold gradient-text mb-8">
          {{ welcomeMessage }}
        </h1>

        <StartQuestionRole v-if="currentQuestion == 'role'" />
        <StartQuestionTopics v-if="currentQuestion == 'topics'" />
        <StartQuestionName v-if="currentQuestion == 'name'" />
        <StartQuestionSummary v-if="currentQuestion == 'welcome'" />
      </div>
    </div>
  </div>
</template>
<script>
// import { gsap } from "gsap";
import { mapGetters, mapMutations } from "vuex";
import GlowyButton from "/src/components/atoms/GlowyButton.vue";
import InputFieldWithKeyboard from "/src/components/molecules/InputFieldWithKeyboard.vue";
import StartQuestionRole from "/src/components/molecules/StartQuestionRole.vue";
import StartQuestionName from "/src/components/molecules/StartQuestionName.vue";
import StartQuestionTopics from "/src/components/molecules/StartQuestionTopics.vue";
import StartQuestionSummary from "/src/components/molecules/StartQuestionSummary.vue";

export default {
  name: "questions-modal",
  components: {
    GlowyButton,
    InputFieldWithKeyboard,
    StartQuestionRole,
    StartQuestionName,
    StartQuestionTopics,
    StartQuestionSummary
  },
  computed: {
    ...mapGetters(["userName", "hiringRole", "hiringSkills"]),
    welcomeMessage() {
      if (this.userName) {
        return `Welcome back ${this.userName}`;
      } else {
        return "Welcome to my portfolio!";
      }
    },
    currentQuestion() {
      if (this.hiringRole == null) {
        return "role";
      } else if (this.hiringSkills.length < 1) {
        return "topics";
      } else if (this.userName == null) {
        return "name";
      } else {
        return "welcome";
      }
    }
  },
  methods: {
    finalizePreferences() {
      this.$emit("finalizePreferences");
    }
  }
};
</script>
