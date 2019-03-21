<template>
  <v-footer class="py-4" dark height="auto">
    <v-container mx-auto>
      <v-layout wrap>
        <v-flex xs9>
          <base-btn
            v-for="(item, i) in items"
            :key="i"
            :href="item.href"
            class="ml-0 mr-3"
            color="primary"
            square
            target="_blank"
          >
            <v-icon v-text="item.icon"/>
          </base-btn>
        </v-flex>
        <v-spacer/>
        <base-btn class="mr-0" square title="Go to top" @click="$vuetify.goTo(0)">
          <v-icon>mdi-chevron-up</v-icon>
        </base-btn>
      </v-layout>
      <div
        class="text-center"
        style="color:white"
      >&copy; {{ new Date().getFullYear() }} By Trong. On demo version</div>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        href: "https://www.facebook.com/anhyeuemnhieulamluon",
        icon: "mdi-facebook"
      },

      {
        href: "https://blog.trongggg.com",
        icon: "mdi-web"
      }
    ]
  })
};
</script>
