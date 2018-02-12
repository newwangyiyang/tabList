<template>
  <div class="wrap_list_item">
      <img src="../assets/img/goods.jpg" alt="">
      <div>
          <p>为美好生活喝彩，为了世博和奥运</p>
          <p>活着不易，且行且珍惜</p>
      </div>
  </div>
</template>

<script>
export default {
    name: 'ListItem',
    data() {
        return {

        }
    }
}
</script>

<style lang='less' scoped>
.wrap_list_item {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    height: 260px;
    align-items: center;
    >img {
        width: 300px;
        height: 220px;
    }
    >div {
        flex: 1;
        height: 100%;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        >p:first-of-type {
            font-size: 30px;
            color: #333;
        }
        >p:last-of-type {
            font-size: 26px;
            color: #666;
        }
    }
}
</style>
