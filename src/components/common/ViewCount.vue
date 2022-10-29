<template>
  <div class="view-count">Total menu clicks: <span>{{ menuClicks }}</span></div>
</template>

<script>
export default {
  computed: {
    menuClicks() {
      return this.$store.state.count
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log(to, from, next)
  }
}
</script>

<style lang="scss">
.view-count {
  font-size: 18px;
  line-height: 20px;
  margin-bottom: 20px;

  span {
    font-weight: 700;
    color: green;
  }
}
</style>