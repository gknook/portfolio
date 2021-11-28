<template>
  <!-- <chevron-left-icon
    class="flex-none w-8 h-8 absolute left-0 z-50"
    style="top: calc(50% - 2rem)"
  ></chevron-left-icon> -->
  <cloudinary-image
    v-if="true"
    :imageVersion="'v1638036639'"
    :imagePublicId="'atium-rhythm/calendar-2_bbdwun'"
    :background="'bg-gray-50'"
  >
    <span class="text-gray-400"
      >Weekly calendar view where the team lead can add their meetings</span
    >
  </cloudinary-image>
  <!-- <div class="absolute bottom-10 left-1/2 flex space-x-3">
    <div class="w-3 h-3 rounded-full bg-gray-500"></div>
    <div class="w-3 h-3 rounded-full bg-gray-500"></div>
  </div>
  <chevron-right-icon
    class="flex-none w-8 h-8 absolute right-0 z-50"
    style="top: calc(50% - 2rem)"
  ></chevron-right-icon> -->
  <cloudinary-image
    v-if="false"
    :imageVersion="'v1638036639'"
    :imagePublicId="'atium-rhythm/calendar-1_j3yvmh'"
    :background="'bg-gray-50'"
  >
    <span class="text-gray-400"
      >Weekly calendar view where the team lead can add their meetings</span
    >
  </cloudinary-image>
</template>
<script>
import {
  ChevronRightIcon,
  ChevronLeftIcon
} from "@zhuowenli/vue-feather-icons";
import CloudinaryImage from "/src/components/atoms/CloudinaryImage.vue";

export default {
  name: "cloud-image",
  components: { ChevronRightIcon, ChevronLeftIcon, CloudinaryImage },
  props: {
    images: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      currentImageIndex: 0
    };
  }
};
</script>
