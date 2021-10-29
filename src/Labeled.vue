<script lang="ts">
import { defineComponent, h } from "vue";

export default defineComponent({
  name: "Labeled",
  props: {
    label: {
      type: String,
      required: true,
    },
  },
  setup(props, { slots }) {
    return () => {
      const inner = [
        h(
          "div",
          {
            class: ["cont"],
          },
          [
            h(
              "div",
              {
                class: ["label"],
              },
              [props.label]
            ),
            h(
              "div",
              {
                class: ["content"],
              },
              slots
            ),
          ]
        ),
      ];

      const outer = [
        h(
          "div",
          {
            class: ["labeled", "outercont"],
          },
          inner
        ),
      ];

      return outer;
    };
  },
});
</script>

<style>
.labeled.outercont {
  display: inline-block;
}
.labeled .cont {
  display: flex;
  align-items: center;
  padding: 2px;
  border: solid 1px;
}
.labeled .label {
  color: #007;
  margin-left: 2px;
}
.labeled .content {
  border: solid 1px #777;
  padding: 2px;
  margin-left: 5px;
}
</style>
