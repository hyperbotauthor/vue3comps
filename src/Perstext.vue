<template>
  <input ref="text" v-on:input="input" type="text" />
</template>

<script>
import { setLocal, getLocal } from "./utils.ts";

export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    default: {
      type: String,
      default: "",
    },
  },
  methods: {
    input() {
      setLocal(this.id, this.$refs.text.value);
    },
  },
  mounted() {
    const text = getLocal(this.id, this.default);

    this.$refs.text.value = text;
  },
};
</script>

<style></style>
