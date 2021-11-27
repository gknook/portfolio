<template>
  <picture>
    <!-- <source
      v-for="(format, index) in imageFormats"
      :key="index"
      :srcset="`
            https://res.cloudinary.com/gknook/image/upload/${imageTransforms}/${imageVersion}/${imagePath}.${format}  256w,
            https://res.cloudinary.com/gknook/image/upload/${imageTransforms}/${imageVersion}/${imagePath}.${format}  512w,
            https://res.cloudinary.com/gknook/image/upload/${imageTransforms}/${imageVersion}/${imagePath}.${format}  768w,
            https://res.cloudinary.com/gknook/image/upload/${imageTransforms}/${imageVersion}/${imagePath}.${format} 1024w,
            https://res.cloudinary.com/gknook/image/upload/${imageTransforms}/${imageVersion}/${imagePath}.${format} 1280w
  `"
      :type="`image/${format}`"
    />
    <img
      :src="`https://res.cloudinary.com/gknook/image/upload/${imageTransforms}/${imageVersion}/${imagePath}.jpg`"
      :alt="imageAlt"
      :width="imageWidth"
      class="rounded-lg shadow max-w-screen-sm w-full m-auto mb-2"
    /> -->

    <figcaption class="text-center text-gray-600 text-sm mb-4">
      <slot></slot>
    </figcaption>
  </picture>
</template>
<script>
export default {
  name: "cloud-image",
  data() {
    return {
      imageFormats: ["png", "webp", "jpeg"],
      imageSizes: ["256w", "512w", "768w", "1024w", "1280w"]
    };
  },
  props: {
    imagePath: {
      type: String,
      required: true
    },
    imageTransforms: {
      type: String,
      default: "w_auto:breakpoints,dpr_auto"
    },
    imageVersion: {
      type: String,
      required: true
    }
  }
};
</script>
