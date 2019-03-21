<template>
  <div class="container" style="max-width: 1280px">
    <div class="row">
      <div class="col-md-12">
        <div class="post-title">
          <h2>{{postDetail.post_title}}</h2>
        </div>
        <div class="post-content" v-html="postDetail.post_content"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: ["id"],
  created() {
    this.$store.dispatch("fetchPostById", this.id);
  },
  computed: {
    ...mapState(["postDetail"])
  }
};
</script>

<style>
</style>
