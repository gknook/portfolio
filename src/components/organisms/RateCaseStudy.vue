<template>
  <div class="bg-gray-900 w-full max-w-md rounded-xl p-6 mb-8">
    <h3 class="font-semibold mb-4 text-gray-50 text-center">
      What did you think of this case study?
    </h3>
    <ul class="mb-8">
      <li
        v-for="(rating, ratingIndex) in rating"
        :key="ratingIndex"
        class="flex w-full items-end justify-center"
      >
        <ul class="flex text-yellow-400 items-end h-8">
          <li v-for="(star, index) in 5" :key="index">
            <star-icon
              class="
                flex-none
                h-8
                w-8
                hover:w-10 hover:h-10
                transition-all
                duration-200
                cursor-pointer
              "
              :id="`${rating.name}-${index}`"
              @mouseenter="registerHover(rating.name, index)"
              @mouseleave="resetHover(rating.name, index)"
              @click="registerRatingClick(rating.name, index)"
            ></star-icon>
          </li>
        </ul>
      </li>
    </ul>
    <div class="hidden">
      <label>What's the reason for that score?</label>
      <input class="w-full" placeholder="Reason" />
    </div>
    <IPhoneButton
      :cta="`Rate ${starRating}`"
      :disableButton="disableButton"
      @clicked-button="submitRating"
      :color="'pink'"
    />
    <div v-if="ratingAlert" class="text-white text-sm text-center p-4">
      <span v-html="ratingAlert"></span>
    </div>
  </div>
</template>
<script>
import { StarIcon } from "@zhuowenli/vue-feather-icons";
import IPhoneButton from "/src/components/atoms/mimiAppAtoms/IPhoneButton.vue";

export default {
  name: "rate-case-study",
  components: { StarIcon, IPhoneButton },
  data() {
    return {
      rating: [{ name: "Presentation", average: "4.3", vote: null }],
      disableButton: true,
      starRating: "case study",
      ratingAlert: null
    };
  },
  methods: {
    registerHover(ratingName, index) {
      for (let i = 0; i <= index; i++) {
        document
          .getElementById(`${ratingName}-${i}`)
          .classList.add("fill-current");
      }
    },
    resetHover(ratingName, index) {
      for (let i = 0; i <= index; i++) {
        document
          .getElementById(`${ratingName}-${i}`)
          .classList.remove("fill-current");
      }
    },
    submitRating() {
      console.log(this.starRating);
      this.ratingAlert = `You rated the case study ${this.starRating}.<br /><br /> I'm still trying to figure out how to hook this up to a backend so I can gather feedback and show average ratings. Let me know if you want to help!`;
    },
    registerRatingClick(ratingName, index) {
      this.disableButton = false;
      for (let i = 0; i < 5; i++) {
        if (i <= index) {
          document
            .getElementById(`${ratingName}-${i}`)
            .classList.add("fill-star");
          if (index > 0) {
            this.starRating = `${index + 1} stars`;
          } else {
            this.starRating = `${index + 1} star`;
          }
        } else {
          document
            .getElementById(`${ratingName}-${i}`)
            .classList.remove("fill-star");
        }
      }
    }
  }
};
</script>
<style scoped>
.fill-star {
  @apply fill-current;
}
</style>
