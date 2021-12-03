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
      z-30
      flex flex-wrap
      items-center
      justify-end
    "
  >
    <ViewProgress />
  </div>
</template>
<script>
import ViewProgress from "/src/components/ViewProgress.vue";
export default {
  name: "progress-bar",
  components: { ViewProgress }
};
</script>
