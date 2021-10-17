<template>
  <div
    class="
      h-full
      w-full
      z-20
      flex
      items-center
      justify-center
      absolute
      bg-opacity-40 bg-gray-900
      left-0
      top-0
    "
    style="height: 37rem"
  >
    <div
      class="
        w-5/6
        backdrop-filter backdrop-blur-lg
        bg-opacity-75 bg-white
        z-20
        shadow-lg
        rounded-2xl
      "
    >
      <div class="p-4 text-center text-sm font-semibold">
        {{ alert.text }}
      </div>
      <div class="flex border-t border-gray-400">
        <div
          v-if="alert.twoButtons"
          class="text-blue-500 text-center py-2"
          :class="[
            { 'border-r border-gray-400 w-1/2': alert.twoButtons },
            { 'w-full font-semibold': !alert.twoButtons }
          ]"
        >
          {{ alert.cta1 }}
        </div>
        <div
          class="text-blue-500 text-center py-2 font-semibold cursor-pointer"
          :class="[
            { 'w-1/2': alert.twoButtons },
            { 'w-full font-semibold': !alert.twoButtons }
          ]"
          @click="clickedAlert"
        >
          {{ alert.cta2 }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "iOS-alert",
  props: ["alert"],
  methods: {
    clickedAlert() {
      this.$emit("clickedAlert");
    }
  }
};
</script>
