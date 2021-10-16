<template>
  <h4
    class="
      text-pink-50 text-lg
      uppercase
      font-bold
      mb-2
      tracking-wider
      rounded-lg
      hover:bg-yellow-400 hover:text-gray-800
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
