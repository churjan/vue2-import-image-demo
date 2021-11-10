<template>
  <div>
    <h1>Src</h1>
    <img src="../../assets/images/frog.jpg" alt="" />
    <img src="@/assets/images/frog.jpg" alt="" />
    <img src="~@/assets/images/frog.jpg" alt="" />
    <img :src="require('../../assets/images/frog.jpg')" alt="" />
    <img :src="require('@/assets/images/frog.jpg')" alt="" />
    <img :src="require('../../assets/images/' + name)" alt="" />
    <hr />
    <h1>PublicPath</h1>
    <img :src="`${publicPath}images/frog.jpg`" alt="" />
    <hr />
    <h1>Style</h1>
    <div
      class="img"
      :style="`background: url(${require('../../assets/images/frog.jpg')}) center/100% no-repeat;`"
    ></div>
    <div
      class="img"
      :style="`background: url(${require('@/assets/images/frog.jpg')}) center/100% no-repeat;`"
    ></div>
    <hr />
    <h1>CSS</h1>
    <div class="img bg"></div>
    <div class="img bg2"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'frog.jpg',
    };
  },
};
</script>

<style lang="scss" scoped>
img,
.img {
  width: 100px;
  height: 100px;
}
.bg {
  background: url('../../assets/images/frog.jpg') center/100% no-repeat;
}
.bg2 {
  background: url('~@/assets/images/frog.jpg') center/100% no-repeat;
}
</style>
