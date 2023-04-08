<template>
  <div class="example-wrapper">
    <ExampleItem
        v-for="itm in Examlist"
        :option="itm"
    />
  </div>
</template>



<script>
import ExampleItem from "../components/ExampleItem.vue";
export default {
  name: "Examples",
  components: {
    ExampleItem,
  },
  props: {
    Examlist: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
    };
  },
}
</script>

<style scoped>
.example-wrapper {
  display: grid;
  grid-template-columns: 18% 18% 18% 18%;
  grid-column-gap: 100px;
  grid-row-gap: 30px;
  padding: 20px 0;
}
</style>