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
        bg-opacity-50 bg-white
        z-20
        shadow-lg
        rounded-2xl
      "
    >
      <div class="p-4 text-center text-sm font-semibold">
        "Mimi Hearing Test" Would Like To Access the Microphone
      </div>
      <div class="flex border-t border-gray-400">
        <div
          class="text-blue-500 w-1/2 border-r border-gray-400 text-center py-2"
        >
          Don't Allow
        </div>
        <div
          class="
            text-blue-500
            w-1/2
            text-center
            py-2
            font-semibold
            cursor-pointer
          "
          @click="clickedAlert"
        >
          Ok
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "iOS-alert",
  methods: {
    clickedAlert() {
      this.$emit("clickedAlert");
    }
  }
};
</script>
