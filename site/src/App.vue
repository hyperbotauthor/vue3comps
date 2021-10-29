<template>
  <div>
    <Labeled label="Perscheck">
      <Perscheck id="perscheck"></Perscheck>
    </Labeled>
    <Labeled label="Perstext">
      <Perstext id="perstext"></Perstext>
    </Labeled>
    <Labeled label="Perscombo">
      <Perscombo id="perscombo"></Perscombo>
    </Labeled>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

/*import { Labeled } from "../../dist/index.umd.js";
import { Perscheck } from "../../dist/index.umd.js";
import { Perstext } from "../../dist/index.umd.js";
import { Perscombo } from "../../dist/index.umd.js";*/

import { Labeled } from "@publishvue/vue3comps";
import { Perscheck } from "@publishvue/vue3comps";
import { Perstext } from "@publishvue/vue3comps";
import { Perscombo } from "@publishvue/vue3comps";

@Options({
  components: {
    Labeled,
    Perscheck,
    Perstext,
    Perscombo,
  },
})

// export app
export default class App extends Vue {}
</script>

<style></style>
