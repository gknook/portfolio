<template>
  <div class="bg-gray-900 w-full max-w-md rounded-2xl p-6 mb-8">
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
      <div v-if="numberOfRatings < 5" class="text-white mb-4 text-center">
        This case study has received too few ratings to show an average. <br />
        Come back later!
      </div>
      <ul v-else>
        <li
          class="
            mb-4
            flex
            items-center
            justify-center
            space-x-2
            px-2
            py-1
            rounded-xl
            bg-gray-800
            text-yellow-50
            font-semibold
          "
        >
          <span class="">Average {{ averageRating }} </span>
          <star-icon class="flex-none h-4 w-4 fill-current"></star-icon>
          <span>out of {{ numberOfRatings }} ratings</span>
        </li>
        <li
          class="flex space-x-2 items-center text-yellow-300 mx-3"
          v-for="star in stars"
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
import { gsap } from "gsap";

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
      caseStudyRatings: new Object(),
      averageRating: null,
      showAverageRating: false,
      numberOfRatings: 0,
      stars: [5, 4, 3, 2, 1],
      loadingTl: null
    };
  },
  mounted() {
    this.initLoadingTimeline();
  },
  beforeUnmount() {
    if (this.loadingTl != null) {
      this.loadingTl.kill();
    }
  },
  computed: {
    buttonCopy() {
      if (this.disableButton == true) {
        return "Rate case study";
      } else if (this.ratingAlert != null) {
        return "...";
      } else {
        return `Rate ${this.starRating} ${this.starPlural}`;
      }
    }
  },
  methods: {
    initLoadingTimeline() {
      this.loadingTl = gsap.timeline({ repeat: -1 }).pause();
      for (let i = 0; i < 5; i++) {
        this.loadingTl.to(`#rating-${i}`, {
          y: -6,
          duration: 0.2,
          ease: "Power3.out"
        });
        this.loadingTl.to(`#rating-${i}`, {
          y: 0,
          duration: 0.1,
          ease: "Power2.inout"
        });
      }
    },
    play() {
      this.loadingTl.play();
    },
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
      let script = "";
      if (this.caseStudy == "noise-meter") {
        script = "getNoiseMeterRatings";
      } else if (this.caseStudy == "atium-rhythm") {
        script = "getAtiumRhythmRatings";
      }

      try {
        return await fetch(`/.netlify/functions/${script}`, {
          headers: { accept: "Accept: application/json" }
        }).then(x => {
          return x.json();
        });
      } catch (err) {
        console.error("Error: %s", err);
      }
    },
    async logRating() {
      this.caseStudyRatings = await this.runQuery();
      // console.log(this.caseStudyRatings);
      let ratingsArray = this.caseStudyRatings;
      let averageRating =
        ratingsArray.reduce((a, b) => parseInt(a) + parseInt(b)) /
        ratingsArray.length;
      // console.log(averageRating);
      this.averageRating = this.roundToTwo(averageRating);
      this.numberOfRatings = ratingsArray.length;
      this.loadingTl.progress("0");
      this.loadingTl.pause();
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
      this.loadingTl.play();
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
      for (let rating of this.caseStudyRatings) {
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
