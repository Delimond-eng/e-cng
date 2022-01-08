<template>
  <div>
    <d-header />

    <!--content viewer-->
    <router-view />
    <!--End content viewer-->

    <!--mobile bottom nav-->
    <d-bottom-nav />
    <!--End mobile bottom nav-->

    <!--main footer-->
    <d-footer />
    <!--End main footer-->

    <a href="#" class="back-to-top">
      <i class="lni-chevron-up"></i>
    </a>
  </div>
</template>

<script>
import dHeader from "@/components/layouts/header.vue";
import dBottomNav from "@/components/layouts/bottom_nav.vue";

export default {
  components: {
    dHeader,
    dBottomNav,
  },
};
</script>
