<template>
  <div class="relative h-52">
    <div class="flex items-center space-x-4 absolute left-0 top-0 h-40">
      <div
        class="
          rounded-full
          text-white
          border-4 border-gray-700 border-dotted
          hover:border-indigo-700
          transition-all
          duration-200
          w-52
          cursor-pointer
        "
        @mouseenter="toggleDescription('step-1')"
        @mouseleave="toggleDescription(null)"
      >
        <div
          class="
            bg-gray-900
            hover:bg-indigo-900
            p-4
            rounded-full
            transition-all
            duration-200
          "
        >
          <div class="text-sm w-full text-center mb-px">Social rhythm</div>
          <div
            class="text-xs w-full text-center"
            :class="[{ hidden: description != 'step-1' }]"
          >
            Set up a social rhythm
          </div>
        </div>
      </div>
      <svg
        width="62"
        height="18"
        viewBox="0 0 62 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="4.5" cy="9" r="3.5" stroke="#7B61FF" stroke-width="2" />
        <rect x="8" y="8" width="42" height="2" fill="#7B61FF" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M50.7513 0.880336C51.0823 0.446857 51.6906 0.372877 52.1099 0.715097L61.2988 8.2151C61.5311 8.40474 61.6667 8.69393 61.6667 8.99998C61.6667 9.30603 61.5311 9.59522 61.2988 9.78486L52.1099 17.2849C51.6906 17.6271 51.0823 17.5531 50.7513 17.1196C50.4203 16.6861 50.4919 16.0573 50.9111 15.7151L57.9132 9.99998H49.6667C49.6667 9.99998 49.6667 9.55227 49.6667 8.99998C49.6667 8.4477 49.6667 7.99998 49.6667 7.99998H57.9132L50.9111 2.28486C50.4919 1.94264 50.4203 1.31381 50.7513 0.880336Z"
          fill="#7B61FF"
        />
      </svg>
      <div
        class="
          rounded-2xl
          text-white
          border-4 border-gray-700 border-dotted
          hover:border-indigo-700
          w-52
          cursor-pointer
        "
        @mouseenter="toggleDescription('step-2')"
        @mouseleave="toggleDescription(null)"
      >
        <div
          class="
            bg-gray-900
            hover:bg-indigo-900
            p-4
            rounded-xl
            transition-all
            duration-200
          "
        >
          <div class="text-sm w-full text-center mb-px">
            Add a regular meeting
          </div>
          <div
            class="text-xs w-full text-center"
            :class="[{ hidden: description != 'step-2' }]"
          >
            Typically a meeting you already have.
          </div>
        </div>
      </div>
      <svg
        width="62"
        height="18"
        viewBox="0 0 62 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="4.5"
          cy="9"
          r="3.5"
          stroke="#7B61FF"
          stroke-width="2"
          class="flex-none"
        />
        <rect
          x="8"
          y="8"
          width="42"
          height="2"
          fill="#7B61FF"
          class="flex-shrink"
        />
        <path
          class="flex-none"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M50.7513 0.880336C51.0823 0.446857 51.6906 0.372877 52.1099 0.715097L61.2988 8.2151C61.5311 8.40474 61.6667 8.69393 61.6667 8.99998C61.6667 9.30603 61.5311 9.59522 61.2988 9.78486L52.1099 17.2849C51.6906 17.6271 51.0823 17.5531 50.7513 17.1196C50.4203 16.6861 50.4919 16.0573 50.9111 15.7151L57.9132 9.99998H49.6667C49.6667 9.99998 49.6667 9.55227 49.6667 8.99998C49.6667 8.4477 49.6667 7.99998 49.6667 7.99998H57.9132L50.9111 2.28486C50.4919 1.94264 50.4203 1.31381 50.7513 0.880336Z"
          fill="#7B61FF"
        />
      </svg>
      <div
        class="
          rounded-2xl
          text-white
          border-4 border-gray-700 border-dotted
          hover:border-indigo-700
          w-52
          cursor-pointer
        "
        @mouseenter="toggleDescription('step-3')"
        @mouseleave="toggleDescription(null)"
      >
        <div
          class="
            bg-gray-900
            hover:bg-indigo-900
            p-4
            rounded-xl
            transition-all
            duration-200
          "
        >
          <div class="text-sm w-full text-center mb-px">Define length</div>
          <div
            class="text-xs w-full text-center"
            :class="[{ hidden: description != 'step-3' }]"
          >
            How much time you spend on the social moment
          </div>
        </div>
      </div>
      <svg
        width="62"
        height="18"
        viewBox="0 0 62 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="4.5"
          cy="9"
          r="3.5"
          stroke="#7B61FF"
          stroke-width="2"
          class="flex-none"
        />
        <rect
          x="8"
          y="8"
          width="42"
          height="2"
          fill="#7B61FF"
          class="flex-shrink"
        />
        <path
          class="flex-none"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M50.7513 0.880336C51.0823 0.446857 51.6906 0.372877 52.1099 0.715097L61.2988 8.2151C61.5311 8.40474 61.6667 8.69393 61.6667 8.99998C61.6667 9.30603 61.5311 9.59522 61.2988 9.78486L52.1099 17.2849C51.6906 17.6271 51.0823 17.5531 50.7513 17.1196C50.4203 16.6861 50.4919 16.0573 50.9111 15.7151L57.9132 9.99998H49.6667C49.6667 9.99998 49.6667 9.55227 49.6667 8.99998C49.6667 8.4477 49.6667 7.99998 49.6667 7.99998H57.9132L50.9111 2.28486C50.4919 1.94264 50.4203 1.31381 50.7513 0.880336Z"
          fill="#7B61FF"
        />
      </svg>
      <div
        class="
          rounded-full
          text-white
          border-4 border-gray-700 border-dotted
          hover:border-indigo-700
          w-52
          cursor-pointer
        "
        @mouseenter="toggleDescription('step-4')"
        @mouseleave="toggleDescription(null)"
      >
        <div
          class="
            bg-gray-900
            hover:bg-indigo-900
            p-4
            rounded-full
            transition-all
            duration-200
          "
        >
          <div class="text-sm w-full text-center mb-px">Receive rhythm</div>
          <div
            class="text-xs w-full text-center"
            :class="[{ hidden: description != 'step-4' }]"
          >
            Suggested activities for the regular meeting
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "user-flow-atium-rhythm",
  data() {
    return {
      description: null
    };
  },
  mounted() {},
  computed: {},
  methods: {
    toggleDescription(id) {
      if (this.descript == id) {
        this.description = null;
      } else {
        this.description = id;
      }
    }
  }
};
</script>
