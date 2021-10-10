<template>
  <div
    class="
      fixed
      p-4
      bottom-0
      w-full
      lg:bg-none
      bg-gradient-to-t
      from-gray-800
      to-transparent
      z-50
    "
  >
    <ViewProgress />
  </div>
</template>
<script>
import ViewProgress from "/src/components/ViewProgress.vue";
export default {
  components: { ViewProgress }
};
</script>
