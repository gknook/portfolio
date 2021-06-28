<template>
  <Company :company="Mimi" />
</template>
<script>
import Company from "/src/components/Company.vue";
export default {
  components: { Company },
  data() {
    return {
      companies: [
        {
          name: "Mimi Hearing Technologies GmbH",
          description:
            "At Mimi we helped people learn about their hearing. Our mobile hearing tests not only received multiple App Store features, they also got great ratings (4.5+ on average) and reviews (highlighting the intuitiveness, accuracy and value). In the bigger picture of the business the hearing test was a gateway towards the 'Mimi eco-system'. Although we learned that we were able to charge up to 10 euros for advanced tests, we learned that the true value lies in helping people actually 'solve their hearing problems'. In other words, helping them hear better. To do that though, first they'd need to know how well they hear.",
          startYear: 2014,
          endYear: 2020
        }
      ]
    };
  },
  computed: {
    Mimi() {
      return this.companies.find(
        c => c.name == "Mimi Hearing Technologies GmbH"
      );
    }
  }
};
</script>
