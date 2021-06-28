<template>
  <div class="grid-cols-2 gap-4 grid">
    <div class="bg-gray-900 rounded-2xl text-indigo-50 p-6 hover:bg-purple-800" v-for="hypothesis in hypotheses" :key="hypothesis.id">
      <hgroup class="mb-4">
        <h3 class="uppercase text-xs font-bold">{{hypothesis.id}}</h3>
        <h2 class="text-xl font-semibold">{{hypothesis.title}}</h2>
      </hgroup>
      <p class="">{{hypothesis.description}}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return{
      hypotheses: [
        {
          id: "H0",
          title: "The problem is not the noise meter",
          description: "null-hypothesis"
        },
        {
          id: "H1",
          title: "People are wary giving microphone access to the app.",
          description: "We asked for microphone access on this specific screen (because it was contextually relevant). Since this required permission it could be a blocker for people."
        },
        {
          id: "H2",
          title: "People didn't understand the need for a quiet environment.",
          description: "Although we hinted at a quiet environment, people might not understand this or what it actually means."
        },
        {
          id: "H4",
          title: "People weren't able to find a quiet environment.",
          description: "As this was a mobile"
        }
      ]
    }
  }
}
</script>