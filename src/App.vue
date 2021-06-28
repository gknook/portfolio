<template>
  <div class="flex items-center flex-grow">
    <router-view></router-view>
  </div>
  <NavBar class="flex-none absolute bottom-0" />
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
