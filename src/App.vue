<template>
  <div
    class="
      min-h-portfolio
      flex
      items-center
      flex-grow
      bg-gray-800
      rounded-3xl
      m-2
      relative
      lg:overflow-hidden
      pb-20
    "
  >
    <router-view></router-view>
  </div>
  <NavBar />
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
  name: "app",
  components: { NavBar }
};

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>
