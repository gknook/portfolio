<template>
  <router-link
    v-if="caseStudy.active"
    :to="{ name: caseStudy.name }"
    class="bg-gray-900 p-6 rounded-3xl mb-4 shadow-xl block"
    :class="[
      { 'cursor-pointer perspective-left hover:shadow-2xl': caseStudy.active }
    ]"
  >
    <div class="flex justify-between items-start">
      <h3 class="text-indigo-50 sm:text-2xl text-lg font-bold mb-2">
        {{ caseStudy.title }}
      </h3>
      <div
        class="
          pl-2
          pr-4
          py-1
          font-semibold
          bg-white
          rounded-lg
          text-sm
          flex
          items-center
          capitalize
        "
        :class="[
          { 'text-green-900': caseStudy.status == 'published' },
          { 'text-yellow-900': caseStudy.status == 'WIP' },
          { 'text-blue-900': caseStudy.status == 'soon' }
        ]"
      >
        <div
          class="w-2 h-2 rounded-full border-2 mr-2"
          :class="[
            {
              'bg-green-400 border-green-200': caseStudy.status == 'published'
            },
            { 'bg-yellow-400 border-yellow-200': caseStudy.status == 'WIP' },
            { 'bg-blue-400 border-blue-200': caseStudy.status == 'soon' }
          ]"
        ></div>
        {{ caseStudy.status }}
      </div>
    </div>
    <p class="mb-2 text-gray-200">
      {{ caseStudy.description }}
    </p>
    <ul class="text-gray-200 mb-4 flex">
      <li class="mr-8">
        <span class="font-semibold">Company:</span> {{ caseStudy.company }}
      </li>
      <li><span class="font-semibold">Role:</span> {{ caseStudy.role }}</li>
    </ul>
    <ul class="flex flex-wrap">
      <li
        v-for="(tag, index) in caseStudy.tags"
        :key="index"
        class="
          text-sm
          topic-tag
          px-4
          py-1
          rounded-lg
          bg-pink-100
          text-pink-900
          font-semibold
          mr-2
          mb-2
        "
      >
        {{ tag }}
      </li>
    </ul>
  </router-link>
  <div
    v-else
    :to="{ name: caseStudy.name }"
    class="bg-gray-700 p-6 rounded-3xl mb-4 shadow-xl block"
  >
    <div class="flex justify-between items-start">
      <h3 class="text-indigo-50 sm:text-2xl text-lg font-bold mb-2">
        {{ caseStudy.title }}
      </h3>
      <div
        class="
          pl-2
          pr-4
          py-1
          font-semibold
          bg-white
          rounded-lg
          text-sm
          flex
          items-center
          capitalize
        "
        :class="[
          { 'text-green-900': caseStudy.status == 'published' },
          { 'text-yellow-900': caseStudy.status == 'WIP' },
          { 'text-blue-900': caseStudy.status == 'soon' }
        ]"
      >
        <div
          class="w-2 h-2 rounded-full border-2 mr-2"
          :class="[
            {
              'bg-green-400 border-green-200': caseStudy.status == 'published'
            },
            { 'bg-yellow-400 border-yellow-200': caseStudy.status == 'WIP' },
            { 'bg-blue-400 border-blue-200': caseStudy.status == 'soon' }
          ]"
        ></div>
        {{ caseStudy.status }}
      </div>
    </div>
    <p class="mb-2 text-gray-200">
      {{ caseStudy.description }}
    </p>
    <ul class="text-gray-200 mb-4 flex">
      <li class="mr-8">
        <span class="font-semibold">Company:</span> {{ caseStudy.company }}
      </li>
      <li><span class="font-semibold">Role:</span> {{ caseStudy.role }}</li>
    </ul>
    <ul class="flex flex-wrap">
      <li
        v-for="(tag, index) in caseStudy.tags"
        :key="index"
        class="
          text-sm
          topic-tag
          px-4
          py-1
          rounded-lg
          bg-pink-100
          text-pink-900
          font-semibold
          mr-2
          mb-2
        "
      >
        {{ tag }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "case-study-card",
  props: ["caseStudy"]
};
</script>
