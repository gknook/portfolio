<template>
  <InputFieldWithKeyboard
    ref="inputField"
    v-if="userName == null"
    @pressed-enter="setUserName"
    :inputName="'firstname'"
    :inputType="'text'"
    :keyboardHint="'enter'"
    :placeholder="'Type your name and press enter'"
  />
  <div class="max-w-sm mx-auto flex flex-col space-y-4">
    <GlowyButton :cta="'let\'s go!'" @clicked-button="setUserName" />
    <p class="text-gray-400 text-xs max-w-sm mx-auto" v-if="userName == null">
      I'm only storing this in your LocalStorage. Meaning that I'm just using it
      to personalize during your visits. Your name won't leave your browser.
    </p>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import GlowyButton from "/src/components/atoms/GlowyButton.vue";
import InputFieldWithKeyboard from "/src/components/molecules/InputFieldWithKeyboard.vue";

export default {
  name: "start-questions-name",
  components: { InputFieldWithKeyboard, GlowyButton },
  computed: {
    ...mapGetters(["userName"])
  },
  methods: {
    ...mapMutations(["updateUserName"]),
    setUserName() {
      this.updateUserName(this.$refs.inputField.name);
    }
  }
};
</script>
