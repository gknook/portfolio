<template>
  <div class="p-6 mx-auto w-full my-12">
    <div
      id="introduction"
      class="mb-8 md:px-12 sm:px-6 w-full max-w-screen-md mx-auto"
    >
      <hgroup class="mb-4">
        <h2 class="text-indigo-50 text-sm uppercase font-bold mb-4">
          Guido's portfolio
        </h2>
        <h1 class="text-indigo-50 sm:text-3xl text-xl font-bold mb-2">
          👋 Hi! I'm Guido. Welcome!
        </h1>
        <h3 class="text-indigo-50 sm:text-2xl text-lg font-bold">
          I'm a product designer, product manager and wannabe front-end
          developer living in Amsterdam
        </h3>
      </hgroup>

      <p class="text-indigo-50">
        I love to make people's lives easier with (software) products and have
        done that at three companies so far:
      </p>
    </div>
    <div class="mb-8 md:px-12 sm:px-6 w-full max-w-screen-md mx-auto">
      <TabBox />

      <p class="text-indigo-50 mb-2">
        In this portfolio I'm currently building out case-studies so that you
        can get an idea of how I think and work.
      </p>

      <p class="text-indigo-50 mb-40">
        <em>
          p.s. If your company also has a name with 5 or less characters, let's
          talk.</em
        >
      </p>
    </div>
  </div>
  <div
    class="
      absolute
      left-0
      bottom-0
      lg:w-80 lg:h-80
      md:w-60 md:h-40
      w-20
      h-20
      md:block
      hidden
    "
  >
    <ProfilePic />
  </div>

  <!-- <ul class="w-1/4">
    <h2 class="text-indigo-50 text-sm uppercase font-bold mb-4">
      What brings you here?
    </h2>
    <li
      v-for="(option, index) in options"
      :key="index"
      class="
        conv-option
        bg-indigo-800
        rounded-2xl
        p-4
        hover:bg-indigo-600
        flex
        items-center
        cursor-pointer
        mb-2
        transition-all
        duration-500
      "
      @click="option.link"
    >
      <div
        class="w-4 h-4 rounded-full mr-4 transition-all duration-1000 flex-none"
      ></div>
      <p class="text-indigo-50">{{ option.text }}</p>
    </li>
  </ul> -->
</template>
<script>
// import { gsap } from "gsap";
import TabBox from "/src/components/TabBox.vue";
import ProfilePic from "/src/assets/svg/ProfilePic.vue";

export default {
  components: { TabBox, ProfilePic },
  data() {
    return {
      options: [
        {
          text: "I'm looking to hire a Product Designer",
          link: "https://gknook.nl"
        },
        {
          text: "I'm looking to hire a Product Manager",
          link: "https://gknook.nl"
        },
        {
          text: "I'm looking to hire a Product/Design Leader",
          link: "https://gknook.nl"
        },
        {
          text: "I'm looking to hire a <Front-End Developer>",
          link: "https://gknook.nl"
        },
        {
          text: "Just browsing",
          link: "https://gknook.nl"
        }
      ]
    };
  }
};
</script>
<style>
.conv-option:hover div {
  background-color: #fff;
}
</style>
