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

<style>
/*-----------------------------------
vue animation
------------------------------------*/
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
.deli-enter-active {
  animation: fadeInUp 0.5s;
}

.deli-leave-active {
  animation: fadeInUp 0.5s reverse;
}

/* Enter and leave animations can use different */
/* durations and timing functions.*/
.fade-enter-active {
  transition: all 0.2s ease;
}
.fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-enter,
.fade-leave-active {
  transform: translateX(10px);
  opacity: 0;
}
.slide-enter.enter,
.slide-leave-active {
  transition: all 0.2s ease;
}
.slideback-leave-active,
.sldeback-enter-active {
  transition: all 0.2s ease;
}
.slideback-enter {
  transform: translate(-100%, 0);
}
.slideback-leave-to {
  transform: translate(100%, 0);
}
.slide-enter {
  transform: translate(-100%, 0);
}
.slide-leave-to {
  transform: translate(100%, 0);
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(0);
  }
}

@-webkit-keyframes fadeInUp {
  0% {
    opacity: 0;
    -webkit-transform: translateY(20px);
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    -webkit-transform: translateY(20px);
    -ms-transform: translateY(20px);
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }
}
</style>
