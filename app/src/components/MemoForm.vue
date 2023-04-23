<template>
  <div>
    <input type="text" id="title-field" v-model="title" />
  </div>

  <div>
    <textarea name="msg" id="msg-field" v-model="content"></textarea>
  </div>

  <div class="center">
    <button @click="save">保存</button>
    <button class="delete-btn" v-if="memo.id" @click="remove">削除</button>
  </div>
</template>

<script>
export default {
  name: "MemoForm",
  props: ["memo"],
  data() {
    return {
      title: this.memo.title,
      content: this.memo.content,
    };
  },
  methods: {
    save() {
      let memo = {
        title: this.title,
        content: this.content,
      };
      if (this.memo.id) {
        memo.id = this.memo.id;
      }
      this.$store.commit("save", memo);
      this.$router.push("/");
    },
    remove() {
      if (this.memo.id) {
        this.$store.commit("delete", this.memo.id);
        this.$router.push("/");
      }
    },
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
input[type="text"] {
  width: 100%;
  margin: 1rem 0;
  line-height: 1.8rem;
}
textarea {
  width: 100%;
  height: 10rem;
  margin: 1rem 0;
}
.center {
  display: flex;
  justify-content: space-around;
}
button {
  width: 200px;
  height: 50px;
  border-radius: 1em;
  border: none;
  font-size: large;
  font-weight: bold;
}
.delete-btn {
  color: #fff;
  background-color: #f55;
}
</style>
