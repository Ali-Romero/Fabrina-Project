<template>
  <div class="calculation-item">
    <div class="calculation-item__title" @click="$emit('expand')">
      <ui-icon name="arrow-icon-small"></ui-icon>
      <span>
        <h3>
          {{ title }}
        </h3>
      </span>
    </div>
    <transition-collapse>
      <div v-if="expanded" class="calculation-item__description">
        {{ description }}
      </div>
    </transition-collapse>
  </div>
</template>

<script>
import TransitionCollapse from '../ui/TransitionCollapse.vue'
export default {
  components: { TransitionCollapse },
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    expanded: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="sass" scoped>
.calculation-item
  &__title
    display: flex
    align-items: center
    cursor: pointer
    -webkit-tap-highlight-color: transparent
    -webkit-touch-callout: none
    -webkit-user-select: none
    -khtml-user-select: none
    -moz-user-select: none
    -ms-user-select: none
    user-select: none
    transition: all 0.3s
    h3
      font-size: 17px
      line-height: 20px
      font-weight: 400
      @media (min-width: map-get($breakpoints, 'lg'))
        font-size: 24px
        line-height: 30px
      @media (min-width: map-get($breakpoints, 'xxxl'))
        font-size: 28px
        line-height: 34px

    span
      max-width: 262px
      @media (min-width: map-get($breakpoints, 'sm'))
        max-width: 100%
    svg
      margin-right: 10px
      width: 23px
      height: 11px
      @media (min-width: map-get($breakpoints, 'lg'))
        margin-right: 16px
        width: 34px
        height: 16px
  &__description
    font-size: 14px
    line-height: 18px
    max-width: 578px
    margin-left: 22px
    @media (min-width: map-get($breakpoints, 'lg'))
      font-size: 15px
      line-height: 20px
      margin-left: 32px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      max-width: 624px
      font-size: 16px
      line-height: 21px
</style>
