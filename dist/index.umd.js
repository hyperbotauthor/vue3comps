(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Labeled = {}, global.Vue));
})(this, (function (exports, vue) { 'use strict';

  var script$3 = vue.defineComponent({
      name: "Labeled",
      props: {
          label: {
              type: String,
              required: true,
          },
      },
      setup: function setup(props, ref) {
          var slots = ref.slots;

          return function () {
              var inner = [
                  vue.h("div", {
                      class: ["cont"],
                  }, [
                      vue.h("div", {
                          class: ["label"],
                      }, [props.label]),
                      vue.h("div", {
                          class: ["content"],
                      }, slots) ]) ];
              var outer = [
                  vue.h("div", {
                      class: ["labeled", "outercont"],
                  }, inner) ];
              return outer;
          };
      },
  });

  function styleInject(css, ref) {
    if ( ref === void 0 ) { ref = {}; }
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z = "\n.labeled.outercont {\n  display: inline-block;\n}\n.labeled .cont {\n  display: flex;\n  align-items: center;\n  padding: 2px;\n  border: solid 1px;\n}\n.labeled .label {\n  color: #007;\n  margin-left: 2px;\n}\n.labeled .content {\n  border: solid 1px #777;\n  padding: 2px;\n  margin-left: 5px;\n}\n";
  styleInject(css_248z);

  script$3.__file = "src/Labeled.vue";

  function setLocal(key, value) {
      var json = JSON.stringify(value);
      localStorage.setItem(key, json);
  }
  function getLocal(key, deffault) {
      var stored = localStorage.getItem(key);
      if (stored !== null) {
          try {
              var json = JSON.parse(stored);
              return json;
          }
          catch (err) {
              return deffault;
          }
      }
      return deffault;
  }

  var script$2 = vue.defineComponent({
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
    setup: function setup(props, context) {
      var cref = vue.ref(0);

      vue.onMounted(function () {
        var checked = getLocal(props.id, props.default);
        cref._rawValue.checked = checked;
      });

      return function () {
        return vue.h(
          "input",
          {
            type: "checkbox",
            ref: cref,
            id: props.id,
            onChange: function (event) {
              setLocal(props.id, event.target.checked);
            },
          },
          []
        );
      };
    },
  });

  script$2.__file = "src/Perscheck.vue";

  var script$1 = {
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
      input: function input() {
        setLocal(this.id, this.$refs.text.value);
      },
    },
    mounted: function mounted() {
      var text = getLocal(this.id, this.default);

      this.$refs.text.value = text;
    },
  };

  function render(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createElementBlock("input", {
      ref: "text",
      onInput: _cache[0] || (_cache[0] = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return ($options.input && $options.input.apply($options, args));
    }),
      type: "text"
    }, null, 544 /* HYDRATE_EVENTS, NEED_PATCH */))
  }

  script$1.render = render;
  script$1.__file = "src/Perstext.vue";

  var script = vue.defineComponent({
    name: "Perscombo",
    props: {
      id: {
        type: String,
        required: true,
      },
      options: {
        type: Array,
        default: [1, 2, 3].map(function (i) { return ({
          display: ("Default Option " + i),
          value: ("defaultoption" + i),
        }); }),
      },
    },
    setup: function setup(props, context) {
      var optionRefs = props.options.map(function (option) { return vue.ref(0); });

      vue.onMounted(function () {
        var selected = getLocal(props.id, props.default);
        optionRefs.forEach(function (optionRef) {
          optionRef._rawValue.removeAttribute("selected");
          if (optionRef._rawValue._value === selected)
            { optionRef._rawValue.setAttribute("selected", true); }
        });
      });

      return function () {
        return vue.h(
          "select",
          {
            id: props.id,
            onChange: function (event) {
              setLocal(props.id, event.target.value);
            },
          },
          props.options.map(function (option, i) { return vue.h(
              "option",
              {
                value: option.value,
                ref: optionRefs[i],
              },
              [option.display]
            ); }
          )
        );
      };
    },
  });

  script.__file = "src/Perscombo.vue";

  exports.Labeled = script$3;
  exports.Perscheck = script$2;
  exports.Perscombo = script;
  exports.Perstext = script$1;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=index.umd.js.map
