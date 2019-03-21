<template>
  <div class="container" style="max-width:1280px">
    <div class="row">
      <v-card v-for="(post,i) in category" :key="post.ID" style="margin: 10px">
        <v-card-title>
          <div>
            <span class="red--text">{{post.post_title}}</span>
            <br>
            <span>By: {{post.post_author}}</span>
            <br>
            <span>{{post.post_date}}</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn
            :to="{ name: 'single-post', params: { id: post.ID } }"
            flat
            color="primary"
          >Read more</v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  props: ["id"],
  created() {
    this.$store.dispatch("fetchCategoryById", this.id);
  },
  computed: mapState(["category"])
};
</script>

<style>
</style>
