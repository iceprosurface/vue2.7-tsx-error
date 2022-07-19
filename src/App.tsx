import { defineComponent } from "vue";
import { VueConstructor } from "vue/types/umd";
import Hello from "./components/Hello";
import HelloWorld from "./components/HelloWorld.vue";
const x = {};
export default defineComponent({
  setup() {
    const a = (b: VueConstructor) => {
      console.log(b);
    };
    a(HelloWorld);
    return () => (
      <div id="app">
        <img alt="Vue logo" src="./assets/logo.png" />
        <Hello />
        <x />
        <HelloWorld />
      </div>
    );
  },
});
