<template>
  <v-navigation-drawer v-model="drawer" app dark temporary>
    <v-list>
      <v-list-tile
        v-for="(link, i) in links"
        :key="i"
        :to="{ name: 'single-category', params: { id: link.term_id } }"
        @click="onClick($event, link)"
      >
        <v-list-tile-title v-text="link.name"/>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
// Utilities
import { mapState, mapGetters, mapMutations } from "vuex";

export default {
  name: "CoreDrawer",

  computed: {
    ...mapState(["links"]),
    drawer: {
      get() {
        return this.$store.state.drawer;
      },
      set(val) {
        this.setDrawer(val);
      }
    }
  },
  created() {
    this.$store.dispatch("fetchLinkMenu");
  },
  methods: {
    ...mapMutations(["setDrawer"]),
    onClick(e, item) {
      e.stopPropagation();

      if (item.to === "/") {
        this.$vuetify.goTo(0);
        this.setDrawer(false);
        return;
      }

      if (item.to || !item.href) return;

      this.$vuetify.goTo(item.href);
      this.setDrawer(false);
    }
  }
};
</script>
