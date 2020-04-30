<template>
  <div class='o-carousel'>
    <div class='carousel' ref='flickity'>
      <div class='carousel-cell' v-for='(c, index) in contents' :key='index' @click="onCellClick(index)">
        <img :src='c.image' />
      </div>
    </div>
    <div class='button-container'>
      <div class='previous-button' @click='previous'>
        <i class='iconfont ohu-arrow_right'></i>
      </div>
      <div class='next-button' @click='next'>
        <i class='iconfont ohu-arrow_right'></i>
      </div>
    </div>
    <div class='dot-container'>
      <div class='dot' v-for='(d, index) in contents' :key='index'></div>
    </div>
    <div class='bottom-container'></div>
  </div>
</template>

<script>
import Flickity from 'flickity'

export default {
  name: 'carousel',
  props: {
    options: {
      type: Object,
      require: false
    },
    contents: {
      type: Array,
      require: true
    }
  },
  components: {},
  data() {
    return {
      defaultOptions: {
        accessibility: true,
        adaptiveHeight: false,
        autoPlay: 3000,
        cellAlign: 'center',
        draggable: '>1',
        lazyLoad: true,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true
      }
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      var carousel = document.querySelector('.carousel')
      this.$flickity = new Flickity(carousel, this.defaultOptions)
      let dots = document.getElementsByClassName('dot')
      dots[0].style.backgroundColor = '#f00'
      this.$flickity.on('change', function(index) {
        dots.forEach((element, i) => {
          if (i == index) {
            element.style.backgroundColor = '#f00'
          } else {
            element.style.backgroundColor = '#333'
          }
        })
      })
    },
    previous() {
      this.$flickity.previous()
    },
    next() {
      this.$flickity.next()
    },
    onCellClick(index) {
      this.$emit('cellClick', index)
    }
  }
}
</script>

<style lang='less'>
.o-carousel {
  width: 100%;
  // height: 300px;
  position: relative;
  background: #fff;
  border-radius: 10px;

  .previous-button {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 50%;
    left: 180px;
    // transform: translateY(-50%);
    transform: rotate(180deg);
    background: rgba(0, 0, 0, 0.12);
    border-radius: 20px;
    text-align: center;

    &:hover {
      background: rgba(0, 0, 0, 0.3);
      cursor: pointer;
    }
  }

  .next-button {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 50%;
    right: 180px;
    // transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.12);
    border-radius: 20px;
    text-align: center;
    &:hover {
      background: rgba(0, 0, 0, 0.3);
      cursor: pointer;
    }
  }

  i {
    font-size: 30px;
    line-height: 40px;
    color: #666;
  }

  .dot-container {
    margin: 0 auto;
    position: absolute;
    left: 50%;
    bottom: 0;
    margin: 10px 0;
    transform: translateX(-50%);

    .dot {
      width: 10px;
      height: 10px;
      margin: 0 5px;
      background: #333;
      opacity: 1;
      border-radius: 50px;
      float: left;
      z-index: 100;
    }
  }

  .bottom-container {
    width: 860px;
    height: 100px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3));
    pointer-events: none;
    border-radius: 0 0 10px 10px;
  }

  .carousel {
    width: 860px;
    height: 300px;
    margin: 0 auto;

    img {
      width: 860px;
      height: 300px;
      object-fit: cover;
      border-radius: 10px;
    }
  }
}

// =============== flickity css ================ //

.flickity-enabled {
  position: relative;
}

.flickity-enabled:focus {
  outline: none;
}

.flickity-viewport {
  overflow: hidden;
  position: relative;
  height: 100%;
}

.flickity-slider {
  position: absolute;
  width: 100%;
  height: 100%;
}

/* draggable */

.flickity-enabled.is-draggable {
  -webkit-tap-highlight-color: transparent;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.flickity-enabled.is-draggable .flickity-viewport {
  cursor: move;
  cursor: -webkit-grab;
  cursor: grab;
}

.flickity-enabled.is-draggable .flickity-viewport.is-pointer-down {
  cursor: -webkit-grabbing;
  cursor: grabbing;
}

/* ---- flickity-button ---- */

.flickity-button {
  position: absolute;
  background: rgba(0, 0, 0, 0.12);
  border: none;
  color: #333;
}

.flickity-button:hover {
  background: rgba(0, 0, 0, 0.3);
  cursor: pointer;
}

.flickity-button:active {
  opacity: 0.6;
}

.flickity-button:disabled {
  opacity: 0.3;
  cursor: auto;
  /* prevent disabled button from capturing pointer up event. #716 */
  pointer-events: none;
}

.flickity-button-icon {
  fill: currentColor;
}

/* ---- previous/next buttons ---- */

.flickity-prev-next-button {
  top: 50%;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  /* vertically center */
  transform: translateY(-50%);
}

.flickity-prev-next-button.previous {
  left: 10px;
}
.flickity-prev-next-button.next {
  right: 10px;
}
/* right to left */
.flickity-rtl .flickity-prev-next-button.previous {
  left: auto;
  right: 10px;
}
.flickity-rtl .flickity-prev-next-button.next {
  right: auto;
  left: 10px;
}

.flickity-prev-next-button .flickity-button-icon {
  position: absolute;
  left: 20%;
  top: 20%;
  width: 60%;
  height: 60%;
}

/* ---- page dots ---- */

.flickity-page-dots {
  position: absolute;
  width: 100%;
  bottom: -25px;
  padding: 0;
  margin: 0;
  list-style: none;
  text-align: center;
  line-height: 1;
}

.flickity-rtl .flickity-page-dots {
  direction: rtl;
}

.flickity-page-dots .dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 0 8px;
  background: #333;
  border-radius: 50%;
  opacity: 0.25;
  cursor: pointer;
}

.flickity-page-dots .dot.is-selected {
  opacity: 1;
}
</style>
