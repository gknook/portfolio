<template>
  <QuestionsModal v-if="!preferencesSet" />
  <div class="flex sm:flex-row flex-col sm:pl-2 sm:pt-0 pt-2 relative">
    <NavBar />
    <div
      class="
        min-h-screen
        sm:rounded-none
        rounded-t-3xl
        flex flex-grow
        bg-gray-800
        mx-2
        relative
        lg:overflow-hidden
        pb-20
        pt-4
      "
    >
      <router-view></router-view>
    </div>
  </div>
  <ProgressBar />
</template>

<script>
import { mapGetters } from "vuex";
import ProgressBar from "./components/organisms/ProgressBar.vue";
import NavBar from "./components/NavBar.vue";
import QuestionsModal from "/src/components/organisms/QuestionsModal.vue";

export default {
  name: "app",
  components: { ProgressBar, NavBar, QuestionsModal },
  beforeCreate() {
    this.$store.commit("initializeStore");
  },
  computed: {
    ...mapGetters(["preferencesSet"])
  }
};
</script>
