<template>
  <div id="home">
    <!-- <articles>
      <banner />
    </articles>-->
    <NotificationUpdate/>
    <newestpost/>

    <!-- <subscribe /> -->
    <!-- <social/> -->
  </div>
</template>

<script>
export default {
  name: "Home",

  components: {
    newestpost: () => import("@/components/NewestPosts.vue"),
    NotificationUpdate: () => import("@/components/core/NotificationUpdate.vue")
  }
};
</script>
