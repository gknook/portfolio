<template>
  <div class="max-w-sm mx-auto mb-8">
    <p class="text-gray-400 mb-2">
      You indicated you're looking for a
      <span
        class="
          rounded-lg
          py-1
          px-4
          bg-pink-700
          text-pink-50
          transition-all
          duration-200
          cursor-pointer
          m-1
          flex-grow
          inline-block
        "
      >
        {{ hiringRole }}</span
      >
    </p>
    <p class="text-gray-400 text-sm mb-2">
      You're interested in seeing how I've demonstrated
      <span
        v-for="skill in hiringSkills"
        class="
          rounded-lg
          py-1
          px-4
          bg-indigo-700
          text-purple-50
          m-1
          flex-grow
          inline-block
        "
        :key="skill"
        >{{ skill }}</span
      >
    </p>
  </div>
  <div class="flex md:flex-no-wrap flex-wrap -my-1 w-full">
    <GlowyButton
      class="flex-1 m-1"
      :cta="'reset preferences'"
      @clicked-button="removePreferences"
      variant="secondary"
    />
    <GlowyButton
      v-if="modal"
      class="flex-1 m-1"
      :cta="'enter portfolio'"
      @clicked-button="finalizePreferences"
    />
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import GlowyButton from "/src/components/atoms/GlowyButton.vue";

export default {
  name: "questions-modal",
  props: {
    modal: { type: Boolean, default: true }
  },
  components: {
    GlowyButton
  },
  computed: {
    ...mapGetters(["userName", "hiringRole", "hiringSkills"])
  },
  methods: {
    ...mapMutations(["updateHiringRole", "updateSkills", "setPreferences"]),
    finalizePreferences() {
      this.setPreferences(true);
    },
    removePreferences() {
      this.updateHiringRole(null);
      this.updateSkills(new Array());
      localStorage.removeItem("hiringRole");
      localStorage.removeItem("hiringSkills");
      this.setPreferences(false);
    }
  }
};
</script>
