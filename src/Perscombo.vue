<script>
import { defineComponent, h, ref, onMounted } from "vue";

import { setLocal, getLocal } from "./utils.ts";

export default defineComponent({
  name: "Perscombo",
  props: {
    id: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      default: [1, 2, 3].map((i) => ({
        display: `Default Option ${i}`,
        value: `defaultoption${i}`,
      })),
    },
  },
  setup(props, context) {
    const optionRefs = props.options.map((option) => ref(0));

    onMounted(() => {
      const selected = getLocal(props.id, props.default);
      optionRefs.forEach((optionRef) => {
        optionRef._rawValue.removeAttribute("selected");
        if (optionRef._rawValue._value === selected)
          optionRef._rawValue.setAttribute("selected", true);
      });
    });

    return () => {
      return h(
        "select",
        {
          id: props.id,
          onChange: (event) => {
            setLocal(props.id, event.target.value);
          },
        },
        props.options.map((option, i) =>
          h(
            "option",
            {
              value: option.value,
              ref: optionRefs[i],
            },
            [option.display]
          )
        )
      );
    };
  },
});
</script>

<style></style>
