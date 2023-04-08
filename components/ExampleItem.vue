<template>
  <div class="example-item" @click="handleClick">
    <div class="example-cover">
      <img :src="option.cover" alt="">
    </div>
    <div class="example-title">
      {{option.title}}
    </div>
  </div>
</template>

<script>
export default {
  name: "ExampleItem",
  props: {
    option:{
      type:Object,
      default:()=>{
        return {};
      }
    }
  },
  methods: {
    handleClick() {
      console.log(this.option);
      window.location = this.option.path;
    },
  },
}
</script>

<style scoped>
.example-item {
  cursor: pointer;
}
.example-item .example-cover img{
  width: 100%;
  height: 206px;
}
.example-item .example-title {
  height: 30px;
  background: white;
  line-height: 30px;
  text-align: center;
  color: black;
  border-top: 1px solid black;
}

</style>