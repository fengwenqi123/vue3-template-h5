<template>
  <div class="container">
    <van-cell-group>
      <van-cell title="本机IP" value="90%" />
      <van-cell title="本机网关" :value="`${a}V`" />
      <van-cell title="本机掩码" :value="`${a}V`" />
    </van-cell-group>
    <van-cell-group style="margin-top: 10px">
      <van-cell title="通信ID" value="1231232" />
      <van-cell title="ICCID" value="1231232" />
      <van-cell title="服务器地址" value="1231232" />
      <van-cell title="服务器端口" value="1231232" />
      <van-cell title="采集间隔(分钟)" value="1231232" />
      <van-cell title="心跳间隔(分钟)" value="1231232" />
      <van-cell title="维护时间" value="1231232" />
    </van-cell-group>
    <div class="button">
      <van-button round color="#4481FE" block>读 取</van-button>
      <van-button round color="linear-gradient(to right, #ff6034, #ee0a24)" block class="save">保 存</van-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const a = ref(1)
</script>

<style scoped lang="scss">
.container {
  font-size: 30px;
  .button {
    width: 266px;
    margin: 18px auto;
    .save {
      margin-top: 14px;
    }
  }
}
</style>
