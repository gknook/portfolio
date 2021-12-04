<template>
  <div>
    <p class="mb-1 text-gray-200 text-left block max-w-sm mx-auto">
      What role are you hiring for?
    </p>
    <ul class="grid grid-cols-2 gap-2 max-w-sm mx-auto">
      <li
        v-for="(role, index) in roles"
        :key="index"
        class="
          flex
          space-x-2
          items-center
          bg-gray-900
          rounded-lg
          py-4
          px-4
          hover:bg-indigo-400
          transition-all
          duration-200
        "
        :class="[{ 'bg-indigo-500': chosenRole == role.id }]"
      >
        <input
          type="radio"
          :id="role.id"
          :name="role.id"
          :value="role.id"
          v-model="chosenRole"
          class="absolute"
          style="left: -10000px"
        />
        <label
          :for="role.id"
          class="w-full text-center cursor-pointer font-medium text-purple-50"
          @click="choseRole(role.name)"
          ><span class="block w-full text-center text-4xl mb-1">{{
            role.emoji
          }}</span
          >{{ role.name }}</label
        >
      </li>
    </ul>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "roles",
  data() {
    return {
      roles: [
        { category: "design", emoji: "👨🏻‍🎨", name: "Product Designer", id: "pd" },
        { category: "design", emoji: "🧝🏼‍♂️", name: "Game Designer", id: "gd" },
        { category: "product", emoji: "👨‍💼", name: "Product Manager", id: "pm" },
        {
          category: "product",
          emoji: "🙋🏻‍♂️",
          name: "Head of Product",
          id: "hop"
        },
        { category: "dev", emoji: "👨🏻‍💻", name: "Front-end Developer", id: "fe" },
        {
          category: "none",
          emoji: "🧙🏻‍♂️",
          name: "None, just browsing",
          id: "none"
        }
      ],
      chosenRole: null
    };
  },
  computed: {
    ...mapGetters(["hiringRole"])
  },
  methods: {
    ...mapMutations(["updateHiringRole"]),
    choseRole(role) {
      // window.fathom.trackGoal("7I0UHWW3", 0);
      this.updateHiringRole(role);
      // console.log(role);
    }
  }
};
</script>
