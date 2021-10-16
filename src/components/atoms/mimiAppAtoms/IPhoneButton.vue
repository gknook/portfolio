<template>
  <button
    class="
      bg-green-400
      w-full
      px-4
      py-2
      rounded-xl
      font-semibold
      text-green-900
      tracking-wide
      mr-2
      z-10
      disabled:opacity-50 disabled:cursor-not-allowed
    "
    :disabled="disableButton"
    @click="click"
  >
    {{ cta }}
  </button>
</template>
<script>
export default {
  name: "iPhone-button",
  props: ["cta", "disableButton"],
  methods: {
    click() {
      return this.$emit("clicked-button");
    }
  }
};
</script>
