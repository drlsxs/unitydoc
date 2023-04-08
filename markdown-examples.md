---
layout: doc
aside: false
---
<script setup>
import Examples from './views/Examples.vue'
</script>

# 说明
这是我个人的边学边做unity开发时记录的一些功能
## 标注
<Examples :Examlist="Examlist"/>

## 标注2
<Examples :Examlist="Examlist2"/>


<script>
import ExampleItem from "./components/ExampleItem.vue";
export default {
  name: "Examples",
  components: {
    ExampleItem,
  },
  data() {
    return {
      Examlist: [
        {
          cover: "../images/img.png",
          title: "添加点",
          path:"/examples/biaozhu/point/  ",
        },
        {
          cover: "../images/img_1.png",
          title: "跟随弹窗",
        },
        {
          cover: "../images/img_1.png",
          title: "跟随弹窗",
        },
        {
          cover: "../images/img_1.png",
          title: "跟随弹窗",
        },
        {
          cover: "../images/img.png",
          title: "添加点",
        },
        {
          cover: "../images/img_1.png",
          title: "跟随弹窗",
        },
        {
          cover: "../images/img_1.png",
          title: "跟随弹窗",
        },
        {
          cover: "../images/img_1.png",
          title: "跟随弹窗",
        },
        {
          cover: "../images/img.png",
          title: "添加点",
        },
        {
          cover: "../images/img_1.png",
          title: "跟随弹窗",
        },
        {
          cover: "../images/img_1.png",
          title: "跟随弹窗",
        },
        {
          cover: "../images/img_1.png",
          title: "跟随弹窗",
        },
      ],
      Examlist2: [
        {
          cover: "../images/img.png",
          title: "添加点",
        },
        {
          cover: "../images/img_1.png",
          title: "撒旦撒",
        },
        {
          cover: "../images/img_1.png",
          title: "跟随弹窗",
        },
        {
          cover: "../images/img_1.png",
          title: "跟随弹窗",
        },
      ],
    };
  },
}

</script>

<style scoped>
.button {
  color: red;
  font-weight: bold;
}
</style>
