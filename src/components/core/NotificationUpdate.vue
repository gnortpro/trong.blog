<template>
  <div class="container">
    <v-alert
      v-for="(post , i) in category"
      :key="post.ID"
      dismissible
      :value="true"
      type="success"
    >{{post.post_content}}</v-alert>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  created() {
    this.$store.dispatch("fetchCategoryById", 31);
  },
  computed: mapState(["category"])
};
</script>

<style>
</style>
