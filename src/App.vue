<script setup>
import { RouterView, useRouter } from 'vue-router'
import { ref } from 'vue'
const router = useRouter()
let currentRouterMeta = ref({
  title: '',
})
router.beforeEach((to) => {
  currentRouterMeta.value = to.meta
  return true
})
</script>

<template>
  <van-nav-bar v-if="currentRouterMeta.navBar" fixed placeholder safe-area-inset-top :title="currentRouterMeta.title" />

  <div class="container">
    <RouterView />
  </div>
</template>

<style scoped lang="scss">
.container {
  position: fixed;
  width: 100%;
  height: 100%;
  background: #eef3f9;
}
</style>
