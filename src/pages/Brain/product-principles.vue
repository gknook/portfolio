<template>
  <div class="p-6 mx-auto w-full">
    <div
      id="introduction"
      class="mb-8 md:px-12 sm:px-6 w-full max-w-screen-md mx-auto"
    >
      <hgroup class="mb-4">
        <h2 class="text-indigo-50 text-sm uppercase font-bold mb-4">
          Guido's portfolio
        </h2>
        <h1 class="text-indigo-50 sm:text-3xl text-xl font-bold mb-2">
          My brain
        </h1>
      </hgroup>
    </div>
    <div class="mb-8 md:px-12 sm:px-6 w-full max-w-screen-md mx-auto">
      <h3>Product principles</h3>
    </div>
  </div>
</template>
<script>
import StartQuestionSummary from "/src/components/molecules/StartQuestionSummary.vue";
export default {
  name: "settings",
  components: { StartQuestionSummary },
  data() {
    return {};
  },
  methods: {}
};
</script>
