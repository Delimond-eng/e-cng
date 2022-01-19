<template>
  <div>
    <nav class="mobile-bottom-nav">
      <li class="mobile-bottom-nav__item">
        <a
          href=""
          class="mobile-bottom-nav__item-content mobile-bottom-nav__item--active"
        >
          <i class="lni-home"></i>
          Accueil
        </a>
      </li>

      <li class="mobile-bottom-nav__item">
        <router-link
          :to="{ name: 'm-messages' }"
          tag="a"
          class="mobile-bottom-nav__item-content"
        >
          <i class="lni-envelope"></i>
          Messages
        </router-link>
      </li>
      <li class="mobile-bottom-nav__item">
        <router-link
          tag="a"
          :to="{ name: 'product_post' }"
          class="mobile-bottom-nav__item-content"
        >
          <i class="lni-pencil-alt"></i>
          Vendre
        </router-link>
      </li>

      <li class="mobile-bottom-nav__item">
        <router-link
          tag="a"
          :to="{ name: 'dashboard' }"
          class="mobile-bottom-nav__item-content"
        >
          <i class="lni-user"></i>
          Mon compte
        </router-link>
      </li>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Bottom-Nav",
  data() {
    return {
      selectedIndex: 0,

      items: [
        {
          title: "Acceuil",
          icon: "lni-home",
          link: "home",
        },
        {
          title: "Message",
          icon: "lni-bubble",
          link: "home",
        },
        {
          title: "Vendre",
          icon: "lni-plus",
          link: "categories",
        },
        {
          title: "Moi",
          icon: "lni-user",
          link: "login",
        },
      ],
    };
  },
};
</script>
