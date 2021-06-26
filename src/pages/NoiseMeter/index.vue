<template>
  <div class="max-w-screen-md px-4 mx-auto w-full">
    <div id="introduction" class="mb-8">
      <hgroup class="mb-4">
        <h2 class="text-indigo-50 text-sm uppercase font-bold mb-4">
          Case study
        </h2>
        <h1 class="text-indigo-50 sm:text-3xl text-xl font-bold mb-2">
          Noise meter
        </h1>
        <div class="text-indigo-50 sm:text-lg text-md flex items-end">
          <span class="mb-0">2017 - </span><img src="/src/assets/company_logos/Mimi.png" class="h-10"/>
        </div>
      </hgroup>

      <h4 class="text-indigo-50 text-sm uppercase font-bold mb-2">Situation</h4> 
      <p class="text-indigo-50 mb-8">
        Our hearing test was already doing very well, around a million people had already tested their hearing with our app.
      </p>
      <h4 class="text-indigo-50 text-sm uppercase font-bold mb-2">Metric</h4> 
      <p class="text-indigo-50 mb-8">The main metric was completed tests. They're worth measuring because they equate to the core value for the user, but also because they generate data to further improve our algorithms.</p>
      <h4 class="text-indigo-50 text-sm uppercase font-bold mb-2">Problem</h4> 
      <p class="text-indigo-50 mb-8">
       Despite the large number of downloads, not everyone started a hearing test. Analyzing the funnel, I discovered that the biggest bottleneck had become the noise meter. This was a feature that we built in to show people it was noisy in their environment.
      </p>
    </div>
    <Hypotheses />
    <div class="absolute left-0 bottom-0 w-80 h-80 lg:block hidden">
      <ProfilePic />
    </div>
  </div>
  
</template>
<script>
// import { gsap } from "gsap";
import Hypotheses from "/src/components/hypotheses/Hypotheses.vue";
import ProfilePic from "/src/assets/svg/ProfilePic.vue";

export default {
  components: { Hypotheses, ProfilePic },
  data() {
    return {
      }
  }
};
</script>
<style>
.conv-option:hover div {
  background-color: #fff;
}
</style>
