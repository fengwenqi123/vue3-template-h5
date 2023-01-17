<template>
  <div class="container">
    <RouterView />
    <van-tabbar v-model="active" @change="onChange">
      <van-tabbar-item v-for="(item, index) in tabbarList" :name="item.name" :icon="item.icon" :key="index">{{
        item.label
      }}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup>
import { RouterView, useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'

const router = useRouter()
const active = ref('/home/device')
const tabbarList = ref([
  {
    name: '/home/device',
    icon: 'desktop-o',
    label: '设备',
  },
  {
    name: '/home/param',
    icon: 'setting-o',
    label: '参数',
  },
  {
    name: '/home/picture',
    icon: 'photo-o',
    label: '图片',
  },
  {
    name: '/home/video',
    icon: 'video-o',
    label: '视频',
  },
])
onMounted(() => {
  routerTo(active.value)
})
const onChange = () => {
  routerTo(active.value)
}
const routerTo = (path) => {
  router.push({
    path,
  })
}
</script>

<style scoped lang="scss">
.container {
  font-size: 30px;

  .button {
    width: 266px;
    margin: 18px auto;
  }
}
</style>
