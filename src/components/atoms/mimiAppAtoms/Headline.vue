<template>
  <h2 class="text-lg font-semibold text-gray-700 leading-tight mb-2">
    {{ headlineCopy }}
  </h2>
</template>
<script>
export default {
  name: "headline",
  props: ["headlineCopy"]
};
</script>
