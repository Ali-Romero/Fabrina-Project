<template>
  <ui-circle-slider
    :value="value"
    :length="items.length"
    :start="0"
    :gap="30"
    class="stages-slider-mobile"
  >
    <div class="stages-slider-mobile__circle stages-slider-mobile__circle--1" />

    <template v-for="(item, index) in items" #[index]="{ active }">
      <div
        :key="index"
        class="stages-slider-mobile__item"
        :class="{ 'stages-slider-mobile__item--active': active }"
      >
        <ui-icon class="stages-slider-mobile__icon" :name="item.icon" />
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
.stages-slider-mobile
  color: #1EA2CC
  width: 420px
  height: 420px
  border: 1px solid
  top: 0

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

  &__item
    width: 60px
    height: 60px
    display: flex
    align-items: center
    justify-content: center
    border: 1px solid
    border-radius: 100%
    background: #F5F2F1
    transform: scale(0.60)
    transition: all $transition-timing

    &--active
      color:  #F5F2F1
      background: #1EA2CC
      transform: scale(1)

  &__icon
    ::v-deep
      width: 30px
      height: 31px
</style>
