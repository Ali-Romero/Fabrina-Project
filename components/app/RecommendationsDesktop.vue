<template>
  <div class="recommendations-desktop">
    <div
      v-for="(item, index) in items"
      :key="item.id"
      class="recommendations-desktop__item"
      :class="{
        'recommendations-desktop__item--active': item.id === currentId,
      }"
    >
      <div
        class="recommendations-desktop__item-main"
        @click="$emit('expand', item.id)"
      >
        <div class="recommendations-desktop__item-bg">
          <img
            :src="item.image"
            width="137"
            height="617"
            loading="lazy"
            alt="image"
          />
        </div>
        <div class="recommendations-desktop__item-main-num">
          0{{ index + 1 }}
        </div>
        <div class="recommendations-desktop__item-main-name">
          {{ item.name }}
        </div>
      </div>
      <div class="recommendations-desktop__toggle">
        <div class="recommendations-desktop__content">
          <app-recommendation-lessons
            :title="`0${index + 1} / ${item.title}`"
            :lessons="item.lessons"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
    currentId: {
      type: Number,
      required: true,
    },
  },
}
</script>

<style lang="sass" scoped>
.recommendations-desktop
  display: none
  @media (min-width: map-get($breakpoints, 'sm'))
    max-width: 750px
    height: 406px
    color: white
    display: flex
    background-color: #1C95BC
    overflow: hidden
  @media (min-width: map-get($breakpoints, 'lg'))
    max-width: 1406px
    height: 548px
    @media (max-height: 800px)
      height: 436px
  @media (min-width: map-get($breakpoints, 'xxxl'))
    height: 617px
  &__item
    height: 100%
    width: 100%
    display: flex
    max-width: 584px
    &--active
      .recommendations-desktop__toggle
        width: 315px
        transform: scaleX(1)
        filter: blur(0px)
        transition: all 0.4s, transform 0.3s, padding 0s, width 0s, filter 0.3s
        @media (min-width: map-get($breakpoints, 'lg'))
          width: 402px
        @media (min-width: map-get($breakpoints, 'xxxl'))
          width: 447px
      .recommendations-desktop__item-main
        width: 0
        transform: scaleX(0)
        filter: blur(5px)
        padding: 0
        transition: all 0.3s, transform 0.5s, width 0s, padding 2s
  &__item-main
    position: relative
    z-index: 1
    padding: 15px 0 13px 0
    height: 100%
    width: 62px
    display: flex
    flex-direction: column
    align-items: center
    justify-content: space-between
    cursor: pointer
    transform: scaleX(1)
    filter: blur(0px)
    transition: all 0.3s, transform 0s, width 0.5s, padding 0s
    -webkit-tap-highlight-color: transparent
    -webkit-touch-callout: none
    -webkit-user-select: none
    -khtml-user-select: none
    -moz-user-select: none
    -ms-user-select: none
    user-select: none
    @media (min-width: map-get($breakpoints, 'lg'))
      padding: 40px 0 32px 0
      width: 104px
      @media (max-height: 800px)
        padding: 30px 0 26px 0
    @media (min-width: map-get($breakpoints, 'xxxl'))
      width: 137px
  &__item-bg
    position: absolute
    top: 0
    left: 0
    z-index: -1
    img
      width: 62px
      height: 406px
      @media (min-width: map-get($breakpoints, 'lg'))
        width: 104px
        height: 548px
        object-fit: unset
        @media (max-height: 800px)
          height: 436px
      @media (min-width: map-get($breakpoints, 'xxxl'))
        width: 137px
        height: 617px
  &__item-main-num
    font-size: 30px
    line-height: 30px
    @media (min-width: map-get($breakpoints, 'lg'))
      font-size: 44px
      line-height: 44px
      @media (max-height: 800px)
        font-size: 38px
        line-height: 38px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      font-size: 54px
      line-height: 54px
  &__item-main-name
    writing-mode: vertical-rl
    transform: rotate(180deg)
    font-size: 24px
    line-height: 30px
    @media (min-width: map-get($breakpoints, 'lg'))
      font-size: 27px
      line-height: 38px
      @media (max-height: 800px)
        font-size: 21px
        line-height: 27px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      font-size: 32px
      line-height: 39px
  &__toggle
    width: 0
    transform: scaleX(0)
    filter: blur(5px)
    transition: all 0.4s, padding 0s, width 0s, filter 0s
</style>
