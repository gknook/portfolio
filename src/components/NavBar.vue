<template>
  <div
    class="
      fixed
      p-4
      bottom-0
      w-full
      bg-gradient-to-t
      from-gray-800
      to-transparent
      z-50
      flex flex-wrap
      items-center
      justify-end
    "
  >
    <ul class="flex justify-end mr-12" id="navigation">
      <li>
        <router-link
          :to="{ name: 'home' }"
          class="
            hover:bg-gray-800
            px-6
            py-4
            hover:rounded-xl
            font-semibold
            text-white
            tracking-wide
            m-2
            transition-all
            duration-500
            border-white border-b-2
            block
          "
        >
          Home
        </router-link>
      </li>
      <li>
        <router-link
          :to="{ name: 'noise-meter' }"
          class="
            hover:bg-gray-800
            px-6
            py-4
            hover:rounded-xl
            font-semibold
            text-white
            tracking-wide
            m-2
            transition-all
            duration-500
            hover:border-gray-200
            border-gray-700 border-b-2
            block
          "
        >
          Case studies
        </router-link>
      </li>
    </ul>
    <ViewProgress />
  </div>
</template>
<script>
import ViewProgress from "/src/components/ViewProgress.vue";
export default {
  components: { ViewProgress }
};
</script>
