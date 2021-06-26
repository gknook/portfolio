<template>
  <ul class="w-full">
    <li v-for="hypothesis in hypotheses" :key="hypothesis.id" class="text-white">
      {{hypothesis.title}}
      </li>
  </ul>
  
</template>
<script>
export default {
  data() {
    return{
      hypotheses: [
        {
          id: "H0",
          title: "The problem is not the noise meter",
          description: "The problem is not the noise meter"
        },
        {
          id: "H1",
          title: "People are wary giving microphone access to the app.",
          description: "We asked for microphone access on this specific screen because it was contextually relevant. I thought this required permission it might be a blocker for people."
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