<template>
  <div>
    <ul class="max-w-screen-md mx-auto md:px-12 sm:px-6">
      <li
        v-for="(principle, index) in workPrinciples"
        :key="index"
        class="mb-12 text-gray-100"
      >
        <h2 class="text-5xl font-semibold mb-4">{{ principle.name }}</h2>
        <p class="text-lg mb-4">{{ principle.principle }}</p>
        <div class="p-4 pb-8 bg-gray-900 -mx-4">
          <h3 class="font-semibold mb-2">Example of how I demonstrated this</h3>
          <p class="italic">{{ principle.example }}</p>
        </div>
        <ul class="flex space-x-4 -mt-4">
          <li
            class="bg-gray-700 px-2 py-1 rounded-md"
            v-for="(skill, index) in principle.skills"
            :key="index"
          >
            {{ skill }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
import workPrinciples from "/src/data/workPrinciple.js";
export default {
  data() {
    return {
      workPrinciples: workPrinciples
    };
  }
};
</script>
