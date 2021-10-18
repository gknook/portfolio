<template>
  <ul class="flex items-end w-full">
    <li
      v-for="topic in tabTopics"
      :key="`topic-${topic.topicId}`"
      class="cursor-pointer relative mb-8 sm:w-auto overflow-hidden"
      @click="moveUnderline(topic.topicId)"
      @mouseenter="pulsateLine(topic.topicId)"
      @mouseleave="pulsateLine(topic.topicId)"
      :class="[{ 'w-1/4': !topic.isActive }, { 'w-1/2': topic.isActive }]"
    >
      <strong
        class="py-2 inline-block uppercase text-sm truncate pr-6"
        :class="[
          { 'text-pink-300': topic.isActive },
          { 'text-gray-400 hover:text-indigo-200 w-full': !topic.isActive }
        ]"
        >{{ topic.topicTitle }}</strong
      >
      <div class="w-4/5 relative">
        <div
          :id="`active-underline-${topic.topicId}`"
          class="w-full absolute bottom-0 h-1 rounded-full"
          :class="[
            { 'bg-pink-300': topic.isActive },
            { 'bg-indigo-200 opacity-0': !topic.isActive }
          ]"
        ></div>
      </div>
    </li>
  </ul>
  <div v-if="activeTopic" class="h-40 overflow-visible">
    <p class="text-indigo-50 text-lg mb-4" id="topic-text">
      {{ activeTopic[0].description }}
    </p>
    <ul class="hidden">
      <li
        v-for="(tag, index) in activeTopic[0].tags"
        :key="index"
        class="
          topic-tag
          px-2
          py-1
          rounded-lg
          bg-indigo-700
          text-indigo-50
          font-semibold
          inline-block
          mr-2
          opacity-0
        "
      >
        #{{ tag }}
      </li>
    </ul>
  </div>
</template>
<script>
import tabBoxLineAnimation from "/src/mixins/tabBoxLineAnimation.js";
import { gsap } from "gsap";
import { mapMutations } from "vuex";

export default {
  mixins: [tabBoxLineAnimation],
  props: {},
  data() {
    return {
      tabTopics: [
        {
          topicTitle: "Mimi",
          description:
            "The first 6 years of my career I've helped people by making sense of the huge gap between 'perfect hearing' and 'hearing impaired' at Mimi. I've been a designer, design manager, product manager and head of product there (I even earned a patent 📜, fulfilling my dream to become an inventor)!",
          tags: ["health", "sound", "hearing"],
          isActive: true,
          topicId: 1
        },
        {
          topicTitle: "leadership",
          topicTitle: "Atium",
          description:
            "I've had a fascination with how to make teams work well together from very early on in my career. Building connection is key and to this end, with my co-founders, I started Atium. For about 2 years we've been exploring how we can build belonging in remote teams. Still alive, it's more of a side-project now.",
          tags: ["remote work", "belonging", "connection"],
          isActive: false,
          topicId: 2
        },
        {
          topicTitle: "Koos",
          description:
            "To fill the gap after Atium I worked on several projects at Koos as a Senior Product Designer, amongst others redesigning the KYC flow for a financial app and developing innovative concepts for an educational publisher.",
          tags: ["remote work", "belonging", "connection"],
          isActive: false,
          topicId: 3
        }
      ]
    };
  },
  computed: {
    activeTopic() {
      return this.tabTopics.filter(topic => topic.isActive == true);
    }
  },
  mounted() {
    this.loadPage();
  },
  methods: {
    ...mapMutations(["updateAchievements"]),
    loadPage() {
      let loadTl = gsap.timeline();
      loadTl.to(".topic-tag", { opacity: 1, duration: 0.5, stagger: 0.1 });
    },
    activateTopic(topicId) {
      let topicsArray = this.tabTopics;
      let topicIndex = topicsArray.findIndex(i => i.topicId == topicId);
      for (let topic of topicsArray) {
        topic.isActive = false;
      }
      topicsArray[topicIndex].isActive = true;
      this.tabTopics = topicsArray;
      if (topicId === 3) {
        this.updateAchievements("acv-3");
      }
    }
  }
};
</script>
