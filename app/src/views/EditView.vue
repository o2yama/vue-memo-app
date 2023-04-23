<template>
  <h1>Edit</h1>
  <MemoForm v-if="memo" :memo="memo" />
  <div v-else>Memo not found</div>
</template>

<script>
import MemoForm from "@/components/MemoForm.vue";

export default {
  name: "EditView",
  computed: {
    memo() {
      const id = parseInt(this.$route.params.id);
      return this.$store.getters.getMemoById(id);
    },
  },
  components: {
    MemoForm,
  },
};
</script>
