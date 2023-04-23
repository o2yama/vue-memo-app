<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <MemoList />
  </div>
</template>

<script>
// @ is an alias to /src
import MemoList from "@/components/MemoList.vue";

export default {
  name: "HomeView",
  components: {
    MemoList,
  },
};
</script>
