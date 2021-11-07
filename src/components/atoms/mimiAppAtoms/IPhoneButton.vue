<template>
  <button
    class="
      w-full
      px-4
      py-2
      rounded-xl
      font-semibold
      tracking-wide
      mr-2
      z-10
      disabled:opacity-50 disabled:cursor-not-allowed
    "
    :class="`bg-${color}-400 text-${color}-900`"
    :disabled="disableButton"
    @click="click"
  >
    {{ cta }}
  </button>
</template>
<script>
export default {
  name: "iPhone-button",
  props: {
    cta: { type: String, default: "Button cta" },
    disableButton: { type: Boolean, default: false },
    color: { type: String, default: "green" }
  },
  methods: {
    click() {
      return this.$emit("clicked-button");
    }
  }
};
</script>
