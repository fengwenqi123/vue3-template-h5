<template>
  <van-nav-bar fixed placeholder safe-area-inset-top :title="title" @click-right="onClickRight('/home/pictureSet')">
    <template #right>
      <van-icon name="setting-o" size="22" />
    </template>
  </van-nav-bar>
  <div class="container">
    <van-row gutter="6">
      <van-col span="12">
        <van-image @click="showImage(0)" lazy-load src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg">
          <template v-slot:loading> <van-loading type="spinner" size="20" /> </template
        ></van-image>
      </van-col>
      <van-col span="12">
        <van-image @click="showImage(1)" lazy-load src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg">
          <template v-slot:loading> <van-loading type="spinner" size="20" /> </template
        ></van-image>
      </van-col>
      <van-col span="12">
        <van-image @click="showImage(2)" lazy-load src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg">
          <template v-slot:loading> <van-loading type="spinner" size="20" /> </template
        ></van-image>
      </van-col>
      <van-col span="12">
        <van-image lazy-load src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg">
          <template v-slot:loading> <van-loading type="spinner" size="20" /> </template
        ></van-image>
      </van-col>
    </van-row>
    <van-image-preview v-model:show="show" :images="images" @change="onChange" :startPosition="index">
      <template v-slot:index>第{{ index + 1 }}页</template>
    </van-image-preview>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const title = useRoute().meta.title
const router = useRouter()
const show = ref(false)
const index = ref(2)
const images = [
  'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
  'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
  'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
]
const onChange = (newIndex) => {
  index.value = newIndex
}
const showImage = (inx) => {
  index.value = inx
  show.value = true
}
const onClickRight = (path) => {
  router.push({ path })
}
</script>

<style scoped lang="scss">
.container {
  padding: 12px;
}
</style>
