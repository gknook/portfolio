<template>
  <div class="absolute w-full h-full bg-opacity-90 bg-black z-50">
    <div
      class="
        absolute
        p-12
        rounded-3xl
        bg-black
        top-1/4
        left-1/2
        max-w-xl
        w-full
        -ml-72
        text-center
        shadow-card-glow
        text-gray-200
      "
    >
      <h1 class="text-3xl font-semibold gradient-text mb-8">
        Welcome to my portfolio!
      </h1>
      <label for="name" class="mb-4 block text-gray-200"
        >What's your name?</label
      >
      <div class="max-w-sm mx-auto relative">
        <div
          class="
            absolute
            bg-gray-800
            rounded-md
            text-gray-500 text-base
            px-2
            py-1
            right-0
            top-0
            mt-2
            mr-2
          "
        >
          enter
        </div>

        <input
          type="text"
          id="name"
          v-model="name"
          name="name"
          placeholder="Type your name here"
          class="bg-gray-900 px-4 py-3 rounded-xl w-full font-semibold mb-2"
        />
      </div>
      <p class="text-gray-400 text-xs max-w-sm mx-auto">
        I'm only storing this in your LocalStorage. Meaning that I'm just using
        it to personalize your experience temporarily.
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "questions-modal"
};
</script>
<style scoped>
input#name::after {
  content: "enter";
}
</style>
