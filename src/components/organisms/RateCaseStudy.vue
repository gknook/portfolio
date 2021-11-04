<template>
  <div class="bg-white w-full max-w-md rounded-xl p-4 mb-8">
    What did you think of this case study?
    <div
      v-for="(rating, ratingIndex) in rating"
      :key="ratingIndex"
      class="flex w-full items-end"
    >
      <div class="text-semibold w-28 flex-none">
        {{ rating.name }} {{ ratingIndex }}
      </div>
      <ul class="flex text-yellow-400 items-end h-8">
        <li v-for="(star, index) in 5" :key="index">
          <star-icon
            size="1.5x"
            class="flex-none"
            :class="{
              'fill-current': currentHover == `${rating.name}-${index}`
            }"
            :id="`${rating.name}-${index + 1}`"
            @mouseenter="registerHover(rating.name, index - 1)"
          ></star-icon>
          {{ index }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { StarIcon } from "@zhuowenli/vue-feather-icons";

export default {
  name: "rate-case-study",
  components: { StarIcon },
  data() {
    return {
      rating: [
        { name: "Story", average: "3.8", vote: null },
        { name: "Presentation", average: "4.3", vote: null },
        { name: "Result", average: "4.8", vote: null }
      ],
      currentHover: null
    };
  },
  methods: {
    registerHover(ratingName, index) {
      console.log(`${ratingName}-${index}`);
      this.currentHover = `${ratingName}-${index}`;
    }
  }
};
</script>
<style scoped>
.feather-star:hover {
  fill: #f59e0b;
  width: 28px;
  height: 28px;
  transition: 0.1s;
}
.feather-star {
  transition: all 0.3s;
  transition-timing-function: ease-out;
}
</style>
