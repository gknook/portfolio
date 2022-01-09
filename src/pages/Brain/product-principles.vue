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
          Product principles
        </h1>
      </hgroup>
      <paragraph-content
        >Principles that show how I think about product.</paragraph-content
      >
    </div>
    <ul class="max-w-screen-md mx-auto md:px-12 sm:px-6">
      <li
        v-for="(principle, index) in workPrinciples"
        :key="index"
        class="mb-12 text-gray-100"
      >
        <Principle :principle="principle" />
      </li>
    </ul>
  </div>
</template>
<script>
import Principle from "/src/components/organisms/Principle.vue";
import workPrinciples from "/src/data/workPrinciple.js";

export default {
  name: "product-principles",
  components: { Principle },
  data() {
    return {
      workPrinciples: workPrinciples
    };
  },
  methods: {}
};
</script>
