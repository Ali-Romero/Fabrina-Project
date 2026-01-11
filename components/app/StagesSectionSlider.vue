<template>
  <ui-circle-slider
    :value="value"
    :length="items.length"
    clockwise
    :start="90"
    class="stages-slider"
  >
    <div class="stages-slider__circle stages-slider__circle--1" />
    <div class="stages-slider__circle stages-slider__circle--2" />
    <div class="stages-slider__circle stages-slider__circle--3" />
    <div class="stages-slider__circle stages-slider__circle--4" />

    <template v-for="(item, index) in items" #[index]="{ active }">
      <div
        :key="index"
        class="stages-slider__item"
        :class="{ 'stages-slider__item--active': active }"
      >
        <ui-icon :name="item.icon" />
      </div>
    </template>
  </ui-circle-slider>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 0,
    },
    items: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="sass" scoped>
.stages-slider
  color: #FFF
  width: 500px
  height: 500px
  border: 1px solid
  top: -74px
  @media (max-height: 800px)
    top: -60px
  @include above('lg')
    width: 600px
    height: 600px
    top: -18px
    @media (max-height: 800px)
      width: 420px
      height: 420px
      top: -30px
  @include above('xxxl')
    width: 750px
    height: 750px
    top: 0
    @media (max-height: 800px)
      top: 0px
      width: 500px
      height: 500px

  &__circle
    margin: auto
    position: absolute
    top: 0
    right: 0
    bottom: 0
    left: 0
    border: 1px solid
    border-radius: 100%

    &--1
      opacity: 0.1
      width: 10%
      height: 10%

    &--2
      opacity: 0.25
      width: 30%
      height: 30%

    &--3
      opacity: 0.4
      width: 55%
      height: 55%

    &--4
      opacity: 0.7
      width: 80%
      height: 80%

  &__item
    width: 66px
    height: 66px
    display: flex
    align-items: center
    justify-content: center
    border: 1px solid
    border-radius: 100%
    background: #1EA2CC
    transform: scale(0.75)
    transition: all $transition-timing
    @include above('lg')
      width: 80px
      height: 80px
      @media (max-height: 800px)
        width: 60px
        height: 60px

    &--active
      color:  #1EA2CC
      background: #FFF
      transform: scale(1)

  &__icon
    ::v-deep
      path
        fill: currentColor
</style>
