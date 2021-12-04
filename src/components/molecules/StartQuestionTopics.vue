<template>
  <div class="flex flex-col space-y-4">
    <p class="mb-1 text-gray-200 text-left block max-w-sm mx-auto">
      What skills would you like to have highlighted?
    </p>
    <ul class="flex flex-wrap w-full mx-auto -m-1 justify-center">
      <li
        v-for="(skill, index) in relevantSkills"
        :key="index"
        class="
          bg-gray-900
          rounded-lg
          py-1
          px-4
          hover:bg-indigo-400
          transition-all
          duration-200
          cursor-pointer
          m-1
          flex-grow
        "
        :class="[{ 'bg-indigo-500': chosenSkills.includes(skill.name) }]"
        @click="choseSkill(skill.name)"
      >
        <span class="text-center font-medium text-purple-50 text-sm">{{
          skill.name
        }}</span>
      </li>
    </ul>
    <div class="text-xs">
      Showing {{ filtered == true ? hiringRole : "all" }} skills.
      <button @click="showAllSkills" class="underline">
        Show {{ filtered == false ? hiringRole : "all" }} skills
      </button>
    </div>
    <div class="flex md:flex-no-wrap flex-wrap -my-1 w-full">
      <GlowyButton
        class="flex-1 m-1"
        :cta="'continue without'"
        @clicked-button="withoutSkills"
        variant="secondary"
      />
      <GlowyButton
        v-if="chosenSkills.length > 0"
        class="flex-1 m-1"
        :cta="`set ${chosenSkills.length} skills`"
        @clicked-button="setSkills"
      />
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import GlowyButton from "/src/components/atoms/GlowyButton.vue";

export default {
  name: "topics",
  components: { GlowyButton },
  data() {
    return {
      skills: [
        {
          role: ["Product Designer", "Product Manager"],
          name: "user research"
        },
        {
          role: [
            "Product Designer",
            "Product Manager",
            "Game Designer",
            "Front-end Developer"
          ],
          name: "prototyping"
        },
        {
          role: ["Product Designer", "Product Manager", "Head of Product"],
          name: "customer development"
        },
        { role: ["Product Designer", "Game Designer"], name: "sketching" },
        {
          role: ["Product Designer", "Product Manager"],
          name: "information architecture"
        },
        {
          role: ["Product Manager", "Head of Product"],
          name: "product vision"
        },
        {
          role: ["Product Designer", "Game Designer", "Product Manager"],
          name: "wireframing"
        },
        { role: ["Product Designer", "Game Designer"], name: "design systems" },
        {
          role: ["Product Designer", "Game Designer"],
          name: "design libraries"
        },
        { role: ["Product Designer", "Game Designer"], name: "visual design" },
        {
          role: ["Product Designer", "Product Manager"],
          name: "usability testing"
        },
        { role: ["Head of Product", "Product Manager"], name: "OKRs" },
        { role: ["Head of Product", "Product Manager"], name: "leadership" },
        { role: ["Head of Product"], name: "team management" }
      ],
      chosenSkill: null,
      chosenSkills: new Array(),
      filtered: true
    };
  },
  computed: {
    ...mapGetters(["hiringRole", "hiringSkills"]),
    relevantSkills() {
      if (this.filtered && this.hiringRole !== "None, just browsing") {
        return this.skills.filter(x => x.role.includes(this.hiringRole));
      } else {
        return this.skills;
      }
    }
  },
  methods: {
    ...mapMutations(["updateSkills"]),
    choseSkill(skill) {
      if (this.chosenSkills.indexOf(skill) !== -1) {
        // console.log("already exists");
        this.chosenSkills.splice(this.chosenSkills.indexOf(skill), 1);
      } else {
        this.chosenSkills.push(skill);
        // console.log("doesn't exist yet");
      }
    },
    setSkills() {
      // console.log(this.chosenSkills);
      this.updateSkills(this.chosenSkills);
      // window.fathom.trackGoal("7I0UHWW3", 0);
    },
    withoutSkills() {
      this.chosenSkills = new Array();
      this.chosenSkills.push("nothing");
      setTimeout(() => this.setSkills(), 300);
    },
    showAllSkills() {
      this.filtered = !this.filtered;
    }
  }
};
</script>
