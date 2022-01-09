<template>
  <div class="flex flex-col">
    <h2 class="sm:text-5xl text-2xl font-semibold mb-4">
      {{ principle.name }}
    </h2>
    <p class="text-lg mb-4 font-medium">{{ principle.principle }}</p>
    <div class="p-4 pb-8 bg-gray-900 -mx-4 rounded-xl">
      <h3 class="font-semibold mb-2">Example of how I demonstrated this</h3>
      <p class="italic" v-html="principle.example"></p>
    </div>
    <ul class="flex -mt-4 flex-wrap">
      <li
        class="
          px-2
          py-1
          rounded-md
          font-semibold
          bg-gradient-to-br
          from-indigo-500
          to-purple-600
          text-white
          sm:text-base
          text-xs
          mr-4
          mb-2
        "
        v-for="(skill, index) in principle.skills"
        :key="index"
      >
        {{ skill }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    principle: { type: Object, required: true }
  }
};
</script>
