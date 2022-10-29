<template>
  <div class="sidebar-menu" :class="{active: menuToggleActive}">
    <button type="icon" class="sidebar-menu__button" @click="toggleMenu">
      <span class="material-icons">{{ menuToggleActive ? 'menu_open' : 'menu' }}</span>
    </button>
    <nav class="sidebar-menu__items">
      <router-link v-for="item in $options.MENU_ITEMS" :key="item.path" :to="item.to" @click.native="clickMenuItem">
        <span class="material-icons">{{ item.icon }}</span>
        <span class="sidebar-menu__label">{{ item.label }}</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
import MENU_ITEMS from './menu'

export default {
  MENU_ITEMS,
  computed: {
    menuToggleActive() {
      return this.$store.state.isSidebarOpen
    }
  },
  methods: {
    toggleMenu() {
      this.$store.dispatch('sidebarToggle')
    },
    clickMenuItem() {
      this.$store.dispatch('menuCount')
    }
  },
  watch: {
    '$route'() {
      this.$store.dispatch('closeSidebar')
    }
  }
}
</script>

<style lang="scss">
.sidebar-menu {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 50px;
  overflow: hidden;
  background-color: #3b5998;
  transition: width .2s cubic-bezier(.4, 0, .2, 1);

  a {
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    display: flex;
    align-items: center;
    transition: all .3s ease;

    &:hover {
      background-color: #ddd;
      color: #000;
    }

    &.router-link-exact-active {
      background-color: #ddd;
      color: #000;
    }

    .material-icons {
      margin-right: 12px;
    }
  }

  &.active {
    width: 200px;
  }
}

.sidebar-menu__items {
  padding: 20px 0 70px 0;
}

.sidebar-menu__button {
  position: absolute;
  bottom: 40px;
  left: 10px;
  color: #f2f2f2;
  cursor: pointer;
  background: transparent;
  border: none;
}
</style>