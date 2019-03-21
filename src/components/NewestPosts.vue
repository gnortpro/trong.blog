<template>
  <div class="container" style="max-width:1280px">
    <v-layout row wrap>
      <v-card v-for="(post,i) in posts" :key="post.ID" style="margin: 10px">
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
    </v-layout>
  </div>
</template>

<script>
// Utilities
import { mapState } from "vuex";

export default {
  created() {
    this.$store.dispatch("fetchPosts");
  },
  computed: mapState(["posts"])
};
</script>
