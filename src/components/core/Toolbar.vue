<template>
  <v-toolbar app flat>
    <v-toolbar-side-icon class="hidden-md-and-up" @click="toggleDrawer"/>
    <v-container mx-auto py-0>
      <v-layout>
        <router-link to="/">
          <v-img
            :src="require('@/assets/logo.png')"
            class="mr-5"
            contain
            height="48"
            width="48"
            max-width="48"
          />
        </router-link>
        <v-btn
          v-for="(link, i) in links"
          :key="i"
          :to="{ name: 'single-category', params: { id: link.term_id } }"
          class="ml-0 hidden-sm-and-down"
          flat
        >{{ link.name }}</v-btn>

        <v-spacer/>
        <v-text-field
          append-icon="mdi-magnify"
          flat
          hide-details
          solo-inverted
          style="max-width: 300px;"
        />
      </v-layout>
    </v-container>
  </v-toolbar>
</template>

<script>
// Utilities
import { mapState, mapGetters, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState(["links"])
  },

  methods: {
    ...mapMutations(["toggleDrawer"])
  }
};
</script>
