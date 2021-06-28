<template>
  <div class="text-indigo-50">
    <h4 class="text-indigo-50 text-sm uppercase font-bold mb-2">
      {{ company.name }}
    </h4>
    <p>
      {{ company.description }}
    </p>
  </div>
</template>
<script>
export default {
  props: ["company"],
  data() {
    return {};
  }
};
</script>
