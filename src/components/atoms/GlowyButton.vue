<template>
  <button
    class="
      font-semibold
      text-blue-100
      rounded-2xl
      px-8
      py-3
      transition-shadow
      duration-200
      hover:shadow-button-glow
    "
    :class="[
      {
        'bg-gradient-to-br from-indigo-700 via-blue-600 to-green-600':
          variant == 'primary'
      },
      {
        'bg-transparent border-2 border-indigo-500': variant == 'secondary'
      }
    ]"
    :disabled="disableButton"
    @click="click"
  >
    {{ cta }}
  </button>
</template>
<script>
export default {
  name: "glowy-button",
  props: {
    cta: { type: String, default: "Button cta" },
    disableButton: { type: Boolean, default: false },
    color: { type: String, default: "green" },
    variant: { type: String, default: "primary" }
  },
  methods: {
    click() {
      return this.$emit("clicked-button");
    }
  }
};
</script>
