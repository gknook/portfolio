<template>
  <h4
    class="
      text-lg
      font-semibold
      mb-2
      tracking-wider
      rounded-lg
      bg-green-300
      text-black
      inline-block
      px-2
      -mx-2
      transition-all
      duration-200
    "
  >
    <slot>No header set</slot>
  </h4>
</template>
<script>
export default {
  name: "paragraph-header"
};
</script>
