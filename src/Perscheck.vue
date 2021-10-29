<script>
import { defineComponent, h, ref, onMounted } from "vue";

import { setLocal, getLocal } from "./utils.ts";

export default defineComponent({
  name: "Perscheck",
  props: {
    id: {
      type: String,
      required: true,
    },
    default: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const cref = ref(0);

    onMounted(() => {
      const checked = getLocal(props.id, props.default);
      cref._rawValue.checked = checked;
    });

    return () => {
      return h(
        "input",
        {
          type: "checkbox",
          ref: cref,
          id: props.id,
          onChange: (event) => {
            setLocal(props.id, event.target.checked);
          },
        },
        []
      );
    };
  },
});
</script>

<style></style>
