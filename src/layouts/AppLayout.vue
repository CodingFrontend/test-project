<template>
  <div class="wrapper">
    <sidebar/>
    <page-heading/>
    <view-count/>
    <slot/>
  </div>
</template>

<script>
import PageHeading from '../components/common/page-heading/PageHeading'
import Sidebar from '../components/common/sidebar/Sidebar'
import ViewCount from '../components/common/ViewCount'

export default {
  name: 'AppLayout',
  components: {
    PageHeading,
    Sidebar,
    ViewCount
  }
}
</script>

<style lang="scss">
.wrapper {
  flex-grow: 1;
  padding-left: 80px;
  padding-top: 30px;
}
</style>