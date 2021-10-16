<template>
  <div class="py-12 sm:mx-5 mx-5 relative flex justify-center items-center">
    <div
      id="iPhone"
      class="
        bg-gray-100
        w-full
        h-full
        px-4
        pt-12
        pb-8
        flex flex-col
        justify-between
        relative
      "
      style="height: 37rem; max-width: 17rem"
    >
      <div id="iPhone-content" class="z-10 relative">
        <div id="heading-content" class="mb-8 mt-4">
          <slot name="heading-content"></slot>
        </div>
        <div id="interactive-content">
          <slot name="interactive-content"></slot>
        </div>
      </div>
      <slot name="cta-button"></slot>
    </div>
    <img src="/src/assets/iphone.png" class="max-w-xs absolute" />
  </div>
</template>
<script>
export default {
  name: "iPhone-frame"
};
</script>
