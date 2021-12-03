<template>
  <div class="absolute w-full h-full bg-opacity-90 bg-black z-50">
    <div
      class="
        absolute
        p-12
        rounded-3xl
        bg-black
        top-1/4
        left-1/2
        max-w-xl
        w-full
        -ml-72
        text-center
        shadow-card-glow
        text-gray-200
      "
    >
      <h1 class="text-3xl font-semibold gradient-text mb-8">
        {{ welcomeMessage }}
      </h1>
      <p class="text-gray-400 text-xs max-w-sm mx-auto" v-if="userName != null">
        You indicated you're looking for a product designer.
      </p>
      <p class="text-gray-400 text-xs max-w-sm mx-auto" v-if="userName != null">
        And that you're interested in [[Data]] [[User Research]] and [[Visual
        Design]].
      </p>
      <label for="name" class="mb-4 block text-gray-200" v-if="userName == null"
        >What's your name?</label
      >
      <div class="max-w-sm mx-auto relative">
        <div
          id="keyboard-hint"
          class="
            absolute
            bg-gray-800
            rounded-md
            text-gray-500 text-base
            px-2
            py-1
            right-0
            top-0
            mt-2
            mr-2
            opacity-0
          "
        >
          enter
        </div>
        <div class="flex flex-col space-y-4 mb-2">
          <input
            type="text"
            id="name"
            v-model="name"
            name="name"
            placeholder="Type your name and press enter"
            class="bg-gray-900 px-4 py-3 rounded-xl w-full font-semibold"
            v-if="userName == null"
          />
          <button
            class="
              font-semibold
              text-blue-100
              rounded-xl
              bg-gradient-to-br
              from-indigo-700
              via-blue-600
              to-green-600
              px-8
              py-3
            "
            @click="setUserName"
          >
            {{ buttonCopy }}
          </button>
        </div>
      </div>
      <p class="text-gray-400 text-xs max-w-sm mx-auto" v-if="userName == null">
        I'm only storing this in your LocalStorage. Meaning that I'm just using
        it to personalize your experience temporarily.
      </p>
    </div>
  </div>
</template>
<script>
import { gsap } from "gsap";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "questions-modal",
  data() {
    return {
      name: "",
      keyBoardTimeline: null,
      welcomeMessage: "Welcome to my portfolio"
    };
  },
  mounted() {
    this.initKeyBoardTimeline();
    this.initModalCopy();
  },
  computed: {
    ...mapGetters(["userName"])
  },
  methods: {
    ...mapMutations(["updateUserName"]),
    initKeyBoardTimeline() {
      console.log("start timeline");
      this.keyBoardTimeline = gsap
        .timeline()
        .pause()
        .to("#keyboard-hint", { opacity: 1, duration: 0.2 });
    },
    initModalCopy() {
      if (this.userName == null) {
        this.welcomeMessage = "Welcome to my portfolio!";
        this.buttonCopy = "let's go";
      } else {
        this.welcomeMessage = `Welcome back ${this.userName}`;
        this.buttonCopy = "re-enter";
      }
    },
    setUserName() {
      this.updateUserName(this.name);
    }
  },
  watch: {
    name: function () {
      if (this.name.length == 1) {
        this.keyBoardTimeline.play();
      } else if (this.name.length == 0) {
        this.keyBoardTimeline.reverse();
      }
    }
  }
};
</script>
