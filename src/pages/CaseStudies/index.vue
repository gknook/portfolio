<template>
  <div class="flex flex-wrap p-6 mx-auto w-full">
    <div
      id="introduction"
      class="mb-8 md:px-12 sm:px-6 w-full max-w-screen-md mx-auto"
    >
      <hgroup class="mb-4">
        <h2 class="text-indigo-50 text-sm uppercase font-bold mb-4">
          Guido's portfolio
        </h2>
        <h1 class="text-indigo-50 sm:text-3xl text-xl font-bold mb-2">
          Case studies
        </h1>
        <paragraph-content>
          Interactive reads that explain the thinking behind some of the
          projects I worked on.
        </paragraph-content>
      </hgroup>

      <ul>
        <li v-for="(caseStudy, index) in sortedCaseStudies" :key="index">
          <CaseStudyCard :caseStudy="caseStudy" />
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import CaseStudyCard from "/src/components/organisms/CaseStudyCard.vue";
import { mapMutations } from "vuex";

export default {
  name: "case-study",
  components: { CaseStudyCard },
  data() {
    return {
      caseStudies: [
        {
          title: "Mimi's new noise meter",
          name: "noise-meter",
          status: "published",
          description:
            "Increase the number of people that start a hearing test by making the noise meter work and feel better.",
          company: "Mimi",
          role: "UX designer",
          year: 2017,
          tags: ["Mobile (iOS)", "User Testing", "Design", "Data", "B2C"],
          active: true
        },
        {
          title: "Mimi's hearing test SDK",
          status: "soon",
          description:
            "Design and build a flexible SDK for partners to do a hearing test in their apps.",
          company: "Mimi",
          role: "Senior Product Manager",
          year: 2019,
          tags: [
            "Mobile (iOS)",
            "Mobile (Android)",
            "Story Mapping",
            "Design System",
            "B2B"
          ],
          active: false
        },
        {
          title: "Mimi's sound processing prototype",
          status: "soon",
          description:
            "Create a prototype that showcased our sound processing technology to potential partners in sales meetings.",
          company: "Mimi",
          year: 2019,
          role: "Senior Product Manager",
          tags: ["Prototyping", "Design", "Sales Enablement", "DSP"],
          active: false
        },
        {
          title: "Bizcuit's KYC flow",
          status: "soon",
          description:
            "Increase the number of people who successfully finish the KYC checks after connecting a bank account.",
          company: "Bizcuit (via Koos)",
          role: "Senior Product Designer",
          year: 2021,
          tags: ["Prototyping", "Design", "User Testing", "KYC", "Finance"],
          active: false
        },
        {
          title: "Iddink tender concepts",
          status: "soon",
          description:
            "Create five strong product concepts that convice high schools to choose Iddink in tenders.",
          company: "Iddink (via Koos)",
          role: "Senior Product Designer",
          year: 2021,
          tags: [
            "Concept Design",
            "Sprints",
            "Wireframing",
            "Prototyping",
            "Education"
          ],
          active: false
        },
        {
          title: "Atium's social schedule",
          name: "social-rhythm",
          status: "WIP",
          description:
            "Increase retention of the platform by scheduling a rhythm of activities.",
          company: "Atium",
          role: "Founder",
          year: 2020,
          tags: [
            "Breadboarding",
            "Wireframing",
            "Front-end",
            "Design",
            "Implementation"
          ],
          active: true
        },
        {
          title: "Atium's 'two truths, one lie' game",
          status: "soon",
          description: "Create a fun and insightful ice-breaker game.",
          company: "Atium",
          role: "Founder",
          year: 2021,
          tags: [
            "Breadboarding",
            "Wireframing",
            "Front-end",
            "Game Design",
            "Implementation"
          ],
          active: false
        }
      ]
    };
  },
  computed: {
    sortedCaseStudies() {
      let sortedCaseStudies = this.caseStudies.sort(function (a, b) {
        if (a.active && !b.active) return -1;
        if (a.active && b.active) return 0;
        if (!a.active && b.active) return 1;
        if (!a.active && !b.active) return 0;
        a.year > b.year ? 1 : -1;
      });
      return sortedCaseStudies;
    },
    activeCaseStudies() {
      let activeCaseStudies = this.sortedCaseStudies.filter(a => a.active);
      return activeCaseStudies;
    }
  },
  mounted() {
    this.scroll();
  },
  methods: {
    ...mapMutations(["updateAchievements"]),
    scroll() {
      if (this.$route.name === "case-study") {
        window.onscroll = () => {
          let bottomOfWindow =
            Math.max(
              window.pageYOffset,
              document.documentElement.scrollTop,
              document.body.scrollTop
            ) +
              window.innerHeight ===
            document.documentElement.offsetHeight;

          if (bottomOfWindow) {
            this.updateAchievements("acv-4");
          }
        };
      }
    }
  }
};
</script>
