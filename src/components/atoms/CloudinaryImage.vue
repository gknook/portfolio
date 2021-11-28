<template>
  <picture class="relative">
    <source
      v-for="(format, index) in imageFormats"
      :key="index"
      :srcset="`
            https://res.cloudinary.com/gknook/image/upload/${imageTransforms}/${imageVersion}/${imagePublicId}.${format}  256w,
            https://res.cloudinary.com/gknook/image/upload/${imageTransforms}/${imageVersion}/${imagePublicId}.${format}  512w,
            https://res.cloudinary.com/gknook/image/upload/${imageTransforms}/${imageVersion}/${imagePublicId}.${format}  768w,
            https://res.cloudinary.com/gknook/image/upload/${imageTransforms}/${imageVersion}/${imagePublicId}.${format} 1024w,
            https://res.cloudinary.com/gknook/image/upload/${imageTransforms}/${imageVersion}/${imagePublicId}.${format} 1280w
  `"
      :type="`image/${format}`"
    />
    <img
      :src="`https://res.cloudinary.com/gknook/image/upload/${imageTransforms}/${imageVersion}/${imagePublicId}.jpg`"
      :alt="imageAlt"
      class="w-full mb-2 rounded-lg shadow-md"
      :class="background"
    />

    <figcaption class="text-center text-sm mb-8">
      <slot></slot>
    </figcaption>
  </picture>
</template>
<script>
// import {
//   ChevronRightIcon,
//   ChevronLeftIcon
// } from "@zhuowenli/vue-feather-icons";
export default {
  name: "cloud-image",
  // components: { ChevronRightIcon, ChevronLeftIcon },
  data() {
    return {
      imageFormats: ["webp", "png", "jpeg"],
      imageSizes: ["256w", "512w", "768w", "1024w", "1280w"]
    };
  },
  props: {
    imageTransforms: {
      type: String,
      default: "w_auto:256:1024,dpr_auto"
    },
    imagePublicId: {
      type: String,
      required: true
    },
    imageVersion: {
      type: String,
      required: true
    },
    imageAlt: {
      type: String,
      default: "image"
    },
    background: {
      type: String,
      default: "bg-transparent"
    }
  }
};
</script>
