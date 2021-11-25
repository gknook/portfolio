<template>
  <div class="bg-gray-900 w-full max-w-md rounded-xl p-6 mb-8">
    <h3 class="font-semibold mb-4 text-gray-50 text-center">
      What did you think of this case study?
    </h3>
    <ul class="flex text-yellow-400 items-end justify-center h-8 mb-8">
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
          :id="`rating-${index}`"
          @mouseenter="registerHover('rating', index)"
          @mouseleave="resetHover('rating', index)"
          @click="registerRatingClick('rating', index)"
        ></star-icon>
      </li>
    </ul>
    <div class="hidden">
      <label>What's the reason for that score?</label>
      <input class="w-full" placeholder="Reason" />
    </div>
    <IPhoneButton
      :cta="buttonCopy"
      :disableButton="disableButton"
      @clicked-button="submitRating"
      :color="'pink'"
      v-if="!showAverageRating"
    />
    <div v-if="averageRating && showAverageRating">
      <div class="text-white mb-4 text-center" v-html="ratingAlert"></div>
      <ul>
        <li class="mb-4 flex justify-between">
          <span
            class="
              px-2
              py-1
              rounded-lg
              bg-gray-800
              text-yellow-300
              font-semibold
              flex
              items-center
            "
            >Average {{ averageRating }}
            <star-icon class="flex-none h-4 w-4 ml-2"></star-icon
          ></span>
          <span
            class="px-2 py-1 rounded-lg bg-pink-400 text-gray-900 font-semibold"
            >{{ numberOfRatings }} ratings</span
          >
        </li>
        <li
          class="flex space-x-2 items-center text-yellow-300 mx-3"
          v-for="star in 5"
          :key="star"
        >
          <span class="font-semibold w-4 text-yellow-50">{{ star }}</span
          ><star-icon class="flex-none h-4 w-4"></star-icon>
          <div class="w-full">
            <div
              class="h-1 rounded bg-yellow-200"
              :style="`width: ${getPercentageOfRatingsForStar(star)}%`"
            ></div>
          </div>
          <span class="font-semibold text-yellow-50">{{
            getPercentageOfRatingsForStar(star)
          }}</span
          ><span> %</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { StarIcon } from "@zhuowenli/vue-feather-icons";
import IPhoneButton from "/src/components/atoms/mimiAppAtoms/IPhoneButton.vue";
import faunadb from "faunadb";

export default {
  name: "rate-case-study",
  components: { StarIcon, IPhoneButton },
  props: ["caseStudy"],
  data() {
    return {
      disableButton: true,
      starRating: { type: Number, default: 0 },
      starPlural: "case study",
      ratingAlert: null,
      q: faunadb.query,
      client: null,
      noiseMeterRatings: new Object(),
      averageRating: null,
      showAverageRating: false,
      numberOfRatings: 0
    };
  },
  mounted() {},
  computed: {
    buttonCopy() {
      if (this.disableButton == true) {
        return "Rate case study";
      } else {
        return `Rate ${this.starRating} ${this.starPlural}`;
      }
    }
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
    async runQuery() {
      try {
        return await fetch("/.netlify/functions/getNoiseMeterRatings", {
          headers: { accept: "Accept: application/json" }
        }).then(x => {
          return x.json();
        });
      } catch (err) {
        console.error("Error: %s", err);
      }
    },
    async logRating() {
      this.noiseMeterRatings = await this.runQuery();
      // console.log(this.noiseMeterRatings);
      let ratingsArray = this.noiseMeterRatings;
      let averageRating =
        ratingsArray.reduce((a, b) => parseInt(a) + parseInt(b)) /
        ratingsArray.length;
      // console.log(averageRating);
      this.averageRating = this.roundToTwo(averageRating);
      this.numberOfRatings = ratingsArray.length;
    },
    async submitRatingToDB() {
      try {
        return await fetch("/.netlify/functions/submitRating", {
          headers: { accept: "Accept: application/json" },
          body: JSON.stringify({
            caseStudy: this.caseStudy,
            rating: this.starRating
          }),
          method: "POST"
        });
      } catch (err) {
        console.error("Error: %s", err);
      }
    },
    roundToTwo(num) {
      return +(Math.round(num + "e+2") + "e-2");
    },
    async submitRating() {
      this.ratingAlert = `You rated ${this.starRating} ${this.starPlural}. Thank you for rating!`;
      await this.submitRatingToDB();
      await this.logRating();
      this.showAverageRating = true;
    },
    registerRatingClick(ratingName, index) {
      this.disableButton = false;
      for (let i = 0; i < 5; i++) {
        if (i <= index) {
          document
            .getElementById(`${ratingName}-${i}`)
            .classList.add("fill-star");
          this.starRating = `${index + 1}`;
          if (index > 0) {
            this.starPlural = "stars";
          } else {
            this.starPlural = "star";
          }
        } else {
          document
            .getElementById(`${ratingName}-${i}`)
            .classList.remove("fill-star");
        }
      }
    },
    getPercentageOfRatingsForStar(star) {
      let starRatingArray = new Array();
      for (let rating of this.noiseMeterRatings) {
        starRatingArray.push(rating);
      }
      starRatingArray = starRatingArray.filter(rating => rating == star);
      const percentage = Math.round(
        (starRatingArray.length / this.numberOfRatings) * 100
      );
      return percentage;
    }
  }
};
</script>
<style scoped>
.fill-star {
  @apply fill-current;
}
</style>
