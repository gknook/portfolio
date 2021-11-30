<template>
  <div
    class="
      flex-none
      absolute
      left-0
      z-50
      rounded-full
      p-2
      bg-white
      backdrop-filter backdrop-blur-lg
      bg-opacity-25
      shadow-lg
    "
    :class="[
      { 'cursor-pointer': currentImageIndex > 0 },
      { hidden: currentImageIndex <= 0 }
    ]"
    style="top: calc(50% - 3rem)"
    @click="currentImageIndex--"
  >
    <chevron-left-icon class="w-8 h-8"></chevron-left-icon>
  </div>
  <cloudinary-image
    v-if="true"
    :imageVersion="images[currentImageIndex].imageVersion"
    :imagePublicId="images[currentImageIndex].imagePublicId"
    :background="background"
  >
    <span class="text-gray-400">{{
      images[currentImageIndex].imageDescription
    }}</span>
  </cloudinary-image>
  <div
    class="absolute bottom-10 flex space-x-3"
    :style="`left: calc(50% - ${(images.length / 2) * 1}rem`"
  >
    <div
      v-for="(image, index) in images"
      :key="index"
      class="w-3 h-3 rounded-full cursor-pointer shadow-md"
      @click="currentImageIndex = index"
      :class="[
        { 'bg-gray-300': index !== currentImageIndex },
        { 'bg-pink-500': index === currentImageIndex }
      ]"
    ></div>
  </div>
  <div
    class="
      flex-none
      absolute
      right-0
      z-50
      rounded-full
      p-2
      bg-white
      backdrop-filter backdrop-blur-lg
      bg-opacity-25
      shadow-lg
    "
    :class="[
      { 'cursor-pointer': currentImageIndex < images.length - 1 },
      { hidden: currentImageIndex >= images.length - 1 }
    ]"
    style="top: calc(50% - 3rem)"
    @click="currentImageIndex++"
  >
    <chevron-right-icon class="w-8 h-8"></chevron-right-icon>
  </div>
</template>
<script>
import {
  ChevronRightIcon,
  ChevronLeftIcon
} from "@zhuowenli/vue-feather-icons";
import CloudinaryImage from "/src/components/atoms/CloudinaryImage.vue";

export default {
  name: "image-carousel",
  components: { ChevronRightIcon, ChevronLeftIcon, CloudinaryImage },
  props: {
    images: {
      type: Object,
      required: true
    },
    background: {
      type: String,
      default: "bg-transparent"
    }
  },
  data() {
    return {
      currentImageIndex: 0
    };
  }
};
</script>
