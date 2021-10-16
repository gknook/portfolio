<template>
  <h3 class="uppercase text-green-700 font-semibold text-xs mb-2">
    {{ overlineCopy }}
  </h3>
</template>
<script>
export default {
  name: "overline",
  props: ["overlineCopy"]
};
</script>
