<template>
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
import ProgressBar from "./components/organisms/ProgressBar.vue";
import NavBar from "./components/NavBar.vue";
export default {
  name: "app",
  components: { ProgressBar, NavBar },
  beforeCreate() {
    this.$store.commit("initializeStore");
  }
};

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>
