<template>
  <div class="wrap_list_tab">
      <swiper class="swiper_nav" :options="swiperOption" ref="swiperNav">
        <!-- slides -->
        <swiper-slide @click.native="active(index)" :class="[{active: activeIndex === index},'top_swiper']" v-for="(item, index) in listTab" :key="index">{{item}}</swiper-slide>
    </swiper>
    <swiperItem @changeNavIndex="changeNavIndex" :listTabLength="listTab.length" :toIndex="activeIndex"/>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import swiperItem from "./swiperItem";

export default {
  name: "ListTab",
  data() {
    return {
      swiperOption: {
        slidesPerView: 5,
        watchSlidesProgress: true,
        watchSlidesVisibility: true
      },
      activeIndex: 0,
      listTab: [
        "头条",
        "热点",
        "娱乐",
        "体育",
        "NBA",
        "生活",
        "涨知识",
        "历史",
        "汽车"
      ]
    };
  },
  computed: {
    swiper() {
      return this.$refs.swiperNav.swiper;
    }
  },
  components: {
    swiper,
    swiperSlide,
    swiperItem
  },
  methods: {
    active(index) {
      this.activeIndex = index;
    },
    changeNavIndex(index) {
      this.activeIndex = index;
      this.changeTopSwiper(index);
      //   this.swiper.slideTo(index);
    },
    changeTopSwiper(index) {
      let activeNav = document.querySelectorAll(".top_swiper")[index];
      if (!activeNav.classList.contains("swiper-slide-visible")) {
        if (index > this.swiper.activeIndex) {
          var thumbsPerNav =
            Math.floor(
              this.swiper.width / activeNav.style.width.replace("px", "")
            ) - 1;
          this.swiper.slideTo(index - thumbsPerNav);
        } else {
          this.swiper.slideTo(index);
        }
      }
    }
  }
};
</script>

<style scoped lang="less">
.wrap_list_tab {
  .swiper_nav {
    text-align: center;
    height: 80px;
    > div {
      > div {
        line-height: 80px;
        font-size: 28px;
        &.active {
          color: #1571fa;
          border-bottom: 1px solid #1571fa;
        }
      }
    }
  }
}
</style>
