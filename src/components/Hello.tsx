import { defineComponent } from "vue";
import HelloWord from "./HelloWorld.vue";

export default defineComponent({
  setup() {
    return () => <HelloWord />;
  },
});
