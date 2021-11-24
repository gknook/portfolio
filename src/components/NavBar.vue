<template>
  <div class="relative sm:w-16 w-full sm:h-full h-16 sm:mt-8 sm:mx-0 flex-none">
    <div class="fixed sm:w-auto w-full sm:px-0 px-4 z-30" id="navigation">
      <ul
        class="
          z-30
          rounded-3xl
          sm:bg-none
          bg-gradient-to-br
          from-pink-800
          to-pink-700
          flex
          sm:flex-col
          flex-row
          items-center
          sm:space-y-8 sm:space-x-0 sm:py-0
          py-2
          space-x-4
          px-2
        "
      >
        <li>
          <router-link :to="{ name: 'home' }" class="nav-item">
            <home-icon class="w-8 h-8"></home-icon>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'case-study' }" class="nav-item">
            <briefcase-icon class="w-8 h-8"></briefcase-icon>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { HomeIcon, BriefcaseIcon } from "@zhuowenli/vue-feather-icons";
export default {
  name: "navbar",
  components: { HomeIcon, BriefcaseIcon }
};
</script>
