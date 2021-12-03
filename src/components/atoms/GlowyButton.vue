<template>
  <button
    class="
      font-semibold
      text-blue-100
      rounded-2xl
      bg-gradient-to-br
      from-indigo-700
      via-blue-600
      to-green-600
      px-8
      py-3
      transition-shadow
      duration-200
      hover:shadow-button-glow
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
