<template>
  <div class="about-toggle" :class="classes">
    <div class="about-toggle__trigger" @click="expanded = !expanded">
      <span class="about-toggle__plus"><ui-icon name="plus"></ui-icon></span>
      <span class="about-toggle__num">{{ num }}</span>
    </div>
    <div class="about-toggle__content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    num: {
      type: String,
      default: '',
    },
    right: {
      type: Boolean,
      default: false,
    },
    expand: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      expanded: this.expand,
    }
  },
  computed: {
    classes() {
      return {
        'about-toggle--right': this.right,
        'about-toggle--expand': this.expanded,
      }
    },
  },
}
</script>

<style lang="sass" scoped>
.about-toggle
  position: relative
  display: flex
  align-items: center
  width: 244px
  height: 255px
  @media (min-width: map-get($breakpoints, 'sm'))
    width: 320px
    height: 314px
  @media (min-width: map-get($breakpoints, 'md'))
    width: 38px
    height: 38px
  @media (min-width: map-get($breakpoints, 'lg'))
    width: 40px
    height: 40px
  @media (min-width: map-get($breakpoints, 'xxxl'))
    width: 50px
    height: 50px
  @media (min-width: map-get($breakpoints, 'xxxxxl'))
    width: 60px
    height: 60px
  &--expand
    .about-toggle
      &__content
        @media (min-width: map-get($breakpoints, 'md'))
          transform: scale(1) translateX(0%) skew(0deg)
          opacity: 1
          width: 310px
          min-height: 74px
          height: 100%
        @media (min-width: map-get($breakpoints, 'lg'))
          min-height: 78px
          width: 387px
        @media (min-width: map-get($breakpoints, 'xxxl'))
          width: 460px
          min-height: 80px
        @media (min-width: map-get($breakpoints, 'xxxxxl'))
          width: 500px
          min-height: 100px
      &__plus
        opacity: 0
        transform: rotate(180deg) scale(0)
      &__num
        opacity: 1
        transform: scale(1)
  &--right
    .about-toggle
      &__content
        @media (min-width: map-get($breakpoints, 'md'))
          right: auto
          left: 50%
    ::v-deep
      .about-card
        @media (min-width: map-get($breakpoints, 'md'))
          padding: 16px 10px 22px 20px
        @media (min-width: map-get($breakpoints, 'lg'))
          padding: 14px 14px 19px 40px
        @media (min-width: map-get($breakpoints, 'xxxl'))
          padding: 16px 16px 16px 40px
        @media (min-width: map-get($breakpoints, 'xxxxxl'))
          padding: 20px 20px 20px 50px
  &__trigger
    display: none
    @media (min-width: map-get($breakpoints, 'md'))
      width: 100%
      height: 100%
      border-radius: 100%
      background-color: #1C95BC
      cursor: pointer
      position: relative
      z-index: 6
      display: block
      -webkit-tap-highlight-color: transparent
      -webkit-touch-callout: none
      -webkit-user-select: none
      -khtml-user-select: none
      -moz-user-select: none
      -ms-user-select: none
      user-select: none
  &__content
    width: 100%
    @media (min-width: map-get($breakpoints, 'md'))
      position: absolute
      right: 50%
      width: 0
      height: 0
      transform: scale(0)
      opacity: 0
      transition: 0.4s
      z-index: 4
  &__plus
    @media (min-width: map-get($breakpoints, 'md'))
      transform: rotate(0) scale(1)
      opacity: 1
      transition: transform 0.4s, opacity 0.6s
      position: absolute
      top: 0
      bottom: 0
      left: 0
      right: 0
      margin: auto
      height: 18px
      width: 19px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      height: 24px
      width: 25px
    @media (min-width: map-get($breakpoints, 'xxxxxl'))
      height: 24px
      width: 25px
    svg
      width: 18px
      height: 19px
      @media (min-width: map-get($breakpoints, 'xxxl'))
        width: 24px
        height: 25px
  &__num
    transform: scale(0)
    opacity: 0
    transition: 0.4s
    font-size: 18px
    line-height: 18px
    color: white
    position: absolute
    top: 0
    bottom: 0
    left: 0
    right: 0
    margin: auto
    height: 18px
    text-align: center
    display: block
    @media (min-width: map-get($breakpoints, 'xxxl'))
      font-size: 24px
      line-height: 24px
      height: 24px
    @media (min-width: map-get($breakpoints, 'xxxxxl'))
      font-size: 28px
      line-height: 28px
      height: 28px
</style>
