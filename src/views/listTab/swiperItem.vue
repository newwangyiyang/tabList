<template>
  <div class="wrap_swiper_item">
      <swiper class="swiper_nav" ref="swiperItem" @slideChangeTransitionEnd="getIndex()">
            <swiper-slide v-for="(item, index) in listTabLength" :key="index">
                <listTab v-for="(item, index) in 3" :key="index"/>
            </swiper-slide>
        </swiper>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import ListTab from "../../components/listItem";
export default {
  name: "SwiperItem",
  data() {
    return {
        activeIndex: 0
    };
  },
  props: ['listTabLength', 'toIndex'],
  computed: {
      swiper() {
          return this.$refs.swiperItem.swiper;
      }
  },
  watch:{
      toIndex() {
          this.swiper.slideTo(this.toIndex);
      }
  },
  components: {
    swiper,
    swiperSlide,
    listTab: ListTab
  },
  methods: {
      getIndex() {
        //   console.log(this.swiper.activeIndex);
        //   console.log(this.swiper.previousIndex);
        this.$emit('changeNavIndex',this.swiper.activeIndex);
      }
  }
};
</script>

<style scoped lang="less">
.wrap_swiper_item {
}
</style>
