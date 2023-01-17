<template>
  <div class="container">
    <van-cell-group>
      <van-cell title="电池电量" value="90%" />
      <van-cell title="电池电压" :value="`${a}V`" />
    </van-cell-group>
    <van-cell-group style="margin-top: 10px; margin-bottom: 10px">
      <van-cell title="设备型号" value="1231232" />
    </van-cell-group>
    <van-cell-group>
      <van-cell title="设备序列号" value="1231232" />
      <van-cell title="硬件版本号" value="1231232" />
      <van-cell title="软件版本号" value="1231232" />
      <van-cell title="APK版本号" value="1231232" />
      <van-cell title="视频流rtsp地址" value="1231232" />
      <van-cell title="设备经纬度" value="1231232" />
    </van-cell-group>
    <div class="button">
      <van-button round color="#4481FE" block>读 取</van-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
// import { query /*reStart*/ } from '@/api/system/index.js'
// const restart = () => {
//   query().then((response) => {
//     console.log(response)
//   })
// }
const a = ref(1)
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
