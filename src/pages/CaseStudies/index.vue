<template>
  <div class="flex flex-wrap p-6 mx-auto w-full my-12">
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
        <li v-for="(caseStudy, index) in caseStudies" :key="index">
          <CaseStudyCard :caseStudy="caseStudy" />
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
// import { gsap } from "gsap";
import CaseStudyCard from "/src/components/organisms/CaseStudyCard.vue";

export default {
  name: "case-study",
  components: { CaseStudyCard },
  data() {
    return {
      caseStudies: [
        {
          title: "Mimi's new noise meter",
          name: "noise-meter",
          status: "WIP",
          description:
            "Increase the number of people that start a hearing test by making the noise meter work and feel better.",
          company: "Mimi",
          role: "UX designer",
          tags: ["Mobile (iOS)", "User Testing", "Design", "Data"],
          active: true
        },
        {
          title: "Mimi's hearing test SDK",
          status: "soon",
          description:
            "Increase the number of people that start a hearing test by making the noise meter work and feel better.",
          company: "Mimi",
          role: "Head of Product and Senior Product Manager",
          tags: [
            "Mobile (iOS)",
            "Mobile (Android)",
            "Story Mapping",
            "Design System"
          ],
          active: false
        },
        {
          title: "Mimi's sound processing prototype",
          status: "soon",
          description:
            "Increase the number of people that start a hearing test by making the noise meter work and feel better.",
          company: "Mimi",
          role: "Head of Product and Senior Product Manager",
          tags: ["Prototyping", "Design", "Sales Enablement", "DSP"],
          active: false
        },
        {
          title: "Bizcuit's KYC flow",
          status: "soon",
          description:
            "Increase the number of people that start a hearing test by making the noise meter work and feel better.",
          company: "Bizcuit (via Koos)",
          role: "Senior Product Designer",
          tags: ["Prototyping", "Design", "User Testing", "KYC", "Finance"],
          active: false
        },
        {
          title: "Iddink tender concepts",
          status: "soon",
          description:
            "Increase the number of people that start a hearing test by making the noise meter work and feel better.",
          company: "Iddink (via Koos)",
          role: "Senior Product Designer",
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
          status: "soon",
          description:
            "Increase the number of people that start a hearing test by making the noise meter work and feel better.",
          company: "Atium",
          role: "Designer, Front-end Dev, Product Manager and CEO",
          tags: [
            "Breadboarding",
            "Wireframing",
            "Front-end",
            "Design",
            "Implementation"
          ],
          active: false
        },
        {
          title: "Atium's 'two truths, one lie' game",
          status: "soon",
          description:
            "Increase the number of people that start a hearing test by making the noise meter work and feel better.",
          company: "Atium",
          role: "Game Designer, Front-end Dev, Product Manager and CEO",
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
  }
};
</script>
