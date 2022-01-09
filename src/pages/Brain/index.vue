<template>
  <div class="p-6 mx-auto w-full">
    <div
      id="introduction"
      class="mb-8 md:px-12 sm:px-6 w-full max-w-screen-md mx-auto"
    >
      <hgroup class="mb-4">
        <h2 class="text-indigo-50 text-sm uppercase font-bold mb-4">
          Guido's portfolio
        </h2>
        <h1 class="text-indigo-50 sm:text-3xl text-xl font-bold mb-2">
          My brain
        </h1>
      </hgroup>
      <paragraph-content>
        I once said to a girl "I want to get to know your mind better", thinking
        that would be a romantic way to tell her I liked her. Well... safe to
        say that didn't turn out how I wanted it.
      </paragraph-content>
      <paragraph-content
        >Anyway, with this page I'd like to give you some more insight into my
        mind.
        <span class="whitespace-nowrap">Very much non-romantically.</span>
      </paragraph-content>
    </div>
    <div class="mb-8 md:px-12 sm:px-6 w-full max-w-screen-md mx-auto">
      <div
        class="
          py-6
          px-8
          bg-gray-900
          rounded-3xl
          text-gray-50
          flex
          space-x-2
          items-center
          list-item-hover
          cursor-pointer
          hover:bg-indigo-900
        "
        @click="handleListItemClick('product-principles')"
      >
        <div class="-mb-8 flex-grow">
          <h2 class="font-semibold text-lg mb-2">Product principles</h2>
          <paragraph-content
            >Principles that show how I think about product.</paragraph-content
          >
        </div>
        <chevron-right-icon size="2x" class="flex-none"></chevron-right-icon>
      </div>
    </div>
  </div>
</template>
<script>
import { ChevronRightIcon } from "@zhuowenli/vue-feather-icons";

export default {
  name: "brain",
  components: { ChevronRightIcon },
  data() {
    return {};
  },
  methods: {
    handleListItemClick(name) {
      this.$router.push({ name: name });
    }
  }
};
</script>
<style scoped>
.list-item-hover:hover .feather {
  transform: translateX(8px);
  transition: all 0.2s;
}
</style>
