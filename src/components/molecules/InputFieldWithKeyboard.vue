<template>
  <div class="max-w-sm mx-auto relative mb-4">
    <label
      for="name"
      class="mb-1 text-gray-200 text-left block max-w-sm mx-auto"
      >What's your name?</label
    >
    <div
      id="keyboard-hint"
      class="
        absolute
        font-semibold
        bg-gray-800
        rounded-md
        text-gray-500 text-base
        px-2
        py-1
        right-0
        bottom-0
        mb-2
        mr-2
        opacity-0
      "
    >
      enter
    </div>

    <input
      :type="inputType"
      id="name"
      v-model="name"
      autocomplete="given-name"
      :name="inputName"
      :placeholder="placeholder"
      class="bg-gray-900 px-4 py-3 rounded-xl w-full font-medium"
      v-on:keypress.enter="pressedEnter"
    />
  </div>
</template>
<script>
import { gsap } from "gsap";
export default {
  name: "input-with-keyboard-hint",
  props: {
    userName: { type: String },
    keyBoardHint: { type: String, default: "enter" },
    inputType: { type: String, default: "text" },
    inputName: { type: String, required: true },
    placeholder: {
      type: String,
      default: `Type it and press enter`
    }
  },

  data() {
    return {
      name: "",
      keyBoardTimeline: null
    };
  },
  mounted() {
    this.initKeyBoardTimeline();
  },
  methods: {
    initKeyBoardTimeline() {
      console.log("start timeline");
      this.keyBoardTimeline = gsap
        .timeline()
        .pause()
        .to("#keyboard-hint", { opacity: 1, duration: 0.2 });
    },
    pressedEnter() {
      this.$emit("pressed-enter");
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
