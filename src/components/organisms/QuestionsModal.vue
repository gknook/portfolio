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

      <p class="mb-1 text-gray-200 text-left block max-w-sm mx-auto">
        What role are you hiring for?
      </p>
      <ul class="grid grid-cols-2 gap-2 max-w-sm mx-auto">
        <li
          v-for="(role, index) in roles"
          :key="index"
          class="
            flex
            space-x-2
            items-center
            bg-gray-900
            rounded-lg
            py-4
            px-4
            hover:bg-indigo-400
            transition-all
            duration-200
          "
          :class="[{ 'bg-indigo-500': chosenRole == role.id }]"
        >
          <input
            type="radio"
            :id="role.id"
            :name="role.id"
            :value="role.id"
            v-model="chosenRole"
            class="absolute"
            style="left: -10000px"
          />
          <label
            :for="role.id"
            class="w-full text-center cursor-pointer font-medium text-purple-50"
            @click="choseRole(role.id)"
            ><span class="block w-full text-center text-4xl">{{
              role.emoji
            }}</span
            >{{ role.name }}</label
          >
        </li>
      </ul>

      <p class="text-gray-400 text-xs max-w-sm mx-auto" v-if="userName != null">
        You indicated you're looking for a product designer.
      </p>
      <p class="text-gray-400 text-xs max-w-sm mx-auto" v-if="userName != null">
        And that you're interested in [[Data]] [[User Research]] and [[Visual
        Design]].
      </p>
      <InputFieldWithKeyboard
        ref="inputField"
        v-if="userName == null"
        @pressed-enter="setUserName"
        :inputName="'firstname'"
        :inputType="'text'"
        :keyboardHint="'enter'"
        :placeholder="'Type your name and press enter'"
      />
      <div class="max-w-sm mx-auto flex flex-col space-y-4">
        <GlowyButton :cta="buttonCopy" @clicked-button="setUserName" />
        <p
          class="text-gray-400 text-xs max-w-sm mx-auto"
          v-if="userName == null"
        >
          I'm only storing this in your LocalStorage. Meaning that I'm just
          using it to personalize during your visits. Your name won't leave your
          browser.
        </p>
      </div>
    </div>
    <GlowyButton :cta="'clear storage'" @clicked-button="clearStorage" />
  </div>
</template>
<script>
// import { gsap } from "gsap";
import { mapGetters, mapMutations } from "vuex";
import GlowyButton from "/src/components/atoms/GlowyButton.vue";
import InputFieldWithKeyboard from "/src/components/organisms/InputFieldWithKeyboard.vue";
export default {
  name: "questions-modal",
  components: { GlowyButton, InputFieldWithKeyboard },
  data() {
    return {
      roles: [
        { category: "design", emoji: "👨🏻‍🎨", name: "Product Designer", id: "pd" },
        { category: "design", emoji: "👨🏻‍🎨", name: "Game Designer", id: "gd" },
        { category: "product", emoji: "👨‍💼", name: "Product Manager", id: "pm" },
        {
          category: "product",
          emoji: "👨‍💼",
          name: "Head of Product",
          id: "hop"
        },
        { category: "dev", emoji: "👨🏻‍💻", name: "Front-end Developer", id: "fe" },
        {
          category: "none",
          emoji: "🧙🏻‍♂️",
          name: "None, just browsing",
          id: "none"
        }
      ],
      chosenRole: null
    };
  },
  mounted() {},
  computed: {
    ...mapGetters(["userName"]),
    welcomeMessage() {
      if (this.userName) {
        return `Welcome back ${this.userName}`;
      } else {
        return "Welcome to my portfolio!";
      }
    },
    buttonCopy() {
      if (this.userName) {
        return "re-enter";
      } else {
        return "let's go!";
      }
    }
  },
  methods: {
    ...mapMutations(["updateUserName"]),
    setUserName() {
      this.updateUserName(this.$refs.inputField.name);
    },
    clearStorage() {
      localStorage.clear();
      this.$emit("rerender");
    },
    choseRole(role) {
      console.log(role);
    }
  }
};
</script>
