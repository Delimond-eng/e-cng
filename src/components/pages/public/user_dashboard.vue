<template>
  <div>
    <div class="page-header" style="background: url(assets/img/banner1.jpg)">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="breadcrumb-wrapper">
              <h2 class="product-title">Mon compte</h2>
              <ol class="breadcrumb">
                <li><a href="#">Acceuil /</a></li>
                <li class="current">Mon compte</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="content" class="section-padding">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-4 col-lg-3 page-sidebar">
            <aside>
              <div class="sidebar-box">
                <div class="user">
                  <div class="usercontent">
                    <br />
                    <br />
                    <br />
                    <h3>Gaston delimond</h3>
                    <h4></h4>
                  </div>
                </div>
                <nav class="navdashboard">
                  <ul>
                    <li>
                      <router-link
                        :to="{ name: 'index' }"
                        tag="a"
                        @click.stop="scrollToContent()"
                      >
                        <i class="lni-home"></i>
                        <span>Acceuil</span>
                      </router-link>
                    </li>
                    <li>
                      <router-link tag="a" :to="{ name: 'messages' }">
                        <i class="lni-envelope"></i>
                        <span>Messages</span>
                      </router-link>
                    </li>
                    <li>
                      <router-link
                        :to="{ name: 'products' }"
                        tag="a"
                        href="account-myads.html"
                      >
                        <i class="lni-layers"></i>
                        <span>Mes produits en ventes</span>
                      </router-link>
                    </li>

                    <li>
                      <router-link :to="{ name: 'offers' }" tag="a">
                        <i class="lni-bullhorn"></i>
                        <span>Mes offres</span>
                      </router-link>
                    </li>

                    <li>
                      <a href="#" @click.prevent="disconnected">
                        <i class="lni-enter"></i>
                        <span>Deconnexion</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </aside>
          </div>
          <div class="col-sm-12 col-md-8 col-lg-9" id="content">
            <transition name="fade">
              <router-view />
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { scroller } from "vue-scrollto/src/scrollTo";
export default {
  mounted() {
    this.$nextTick(() => {
      this.$router.push({ name: "index" });
    });
  },
  methods: {
    disconnected() {
      this.$router.replace({ name: "login" });
    },
    scrollToContent() {
      const scrollTo = scroller();
      scrollTo("#content");
    },
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
