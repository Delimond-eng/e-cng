<template>
  <div>
    <nav class="mobile-bottom-nav">
      <li
        class="mobile-bottom-nav__item"
        v-for="(item, index) in items"
        :key="item.title"
      >
        <a
          @click.stop="selectedIndex = index"
          href="#"
          class="mobile-bottom-nav__item-content"
          :class="selectedIndex === index ? 'mobile-bottom-nav__item--active' : ''"
        >
          <i :class="item.icon"></i>
          {{ item.title }}
        </a>
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
