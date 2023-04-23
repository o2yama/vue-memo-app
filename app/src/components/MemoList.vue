<template>
  <ul v-if="hasMemos">
    <li class="memo-item" v-for="memo in memos" :key="memo.id">
      <router-link
        class="memo-link"
        :to="{ name: 'edit', params: { id: memo.id } }"
      >
        <h3>{{ memo.title }}</h3>
        <h6>{{ memo.content }}</h6>
      </router-link>
    </li>
  </ul>

  <p v-else>まだメモはありません!</p>
</template>

<script>
export default {
  name: "MemoList",
  computed: {
    hasMemos() {
      return this.$store.getters.getCount;
    },
    memos() {
      return this.$store.getters.getMemos;
    },
  },
};
</script>

<style scoped>
h3 {
  font-size: 2rem;
  font-weight: 900;
  text-decoration: underline;
  margin: 0;
}
h6 {
  font-size: large;
  font-family: "Courier New", Courier, monospace;
  margin: 0;
}
ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column-reverse;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  text-decoration: none;
}
.memo-item {
  border-top: 1px #777 solid;
  margin: 1rem 0;
}
.memo-link {
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  transition: 0.2s;
}
.memo-link:hover {
  width: 100%;
  background-color: #eee;
  opacity: 0.1;
}
</style>
