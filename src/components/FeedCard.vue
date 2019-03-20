<template>
  <v-flex xs12 :class="classes">
    <router-link :to="{ name: 'single-course', params: { ID: value.ID } }">
      <base-card color="grey lighten-1" dark href="#!">
        <v-img
          src="http://fantazija.narod.ru/kart_zemlja.jpg"
          height="100%"
          gradient="rgba(0, 0, 0, .42), rgba(0, 0, 0, .42)"
        >
          <v-layout fill-height wrap text-xs-right ma-0>
            <v-flex xs12>
              <v-chip
                label
                class="mx-0 mb-2 text-uppercase"
                color="grey darken-3"
                text-color="white"
                small
                @click.stop
              >{{ value.post_type }}</v-chip>
              <h3 class="title font-weight-bold mb-2">{{ value.post_title }}</h3>
              <div class="caption">
                {{ value.post_author }}
                <br>Date
              </div>
            </v-flex>
            <v-flex align-self-end>
              <v-chip class="text-uppercase ma-0" color="primary" label small @click.stop>Read More</v-chip>
            </v-flex>
          </v-layout>
        </v-img>
      </base-card>
    </router-link>
  </v-flex>
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      required: true
    },
    value: {
      type: Object,
      default: () => ({})
    }
  },

  computed: {
    classes() {
      return {
        md6: this.size === 2,
        md4: this.size === 3
      };
    }
  }
};
</script>

<style>
.v-image__image {
  transition: 0.3s linear;
}
</style>
