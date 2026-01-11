<template>
  <div class="stage">
    <div class="stage__title">
      <h3>
        {{ title }}
      </h3>
    </div>
    <ul class="stage__list">
      <li v-for="(item, index) in items" :key="index" class="stage__item">
        <span class="stage__text">
          {{ item }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    items: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="sass" scoped>
.stage
  &__title
    margin-bottom: 12px
    text-align: center
    @include above('sm')
      text-align: left
      margin-bottom: 17px
    @include above('xxxl')
      margin-bottom: 17px
    h3
      font-size: 16px
      line-height: 19px
      font-weight: 400
      @include above('sm')
        font-size: 19px
        line-height: 21px
      @include above('lg')
        font-size: 22px
        line-height: 24px
      @include above('xxxl')
        font-size: 28px
        line-height: 34px
  &__item
    display: flex
    align-items: center
    margin-bottom: 12px
    font-size: 14px
    line-height: 16px
    @include above('sm')
      margin-bottom: 18px
      font-size: 15px
      line-height: 17px
    @include above('lg')
      margin-bottom: 26px
      @media (max-height: 800px)
        margin-bottom: 16px
    @include above('xxxl')
      font-size: 16px
      line-height: 20px

    &::before
      content: ''
      margin-right: 10px
      display: block
      width: 11px
      height: 0
      border-bottom: 1px solid
      @include above('sm')
        margin-right: 16px
        width: 16px

    &:last-child
      margin-bottom: 0

  &__text
    max-width: 268px
    @include above('sm')
      max-width: 400px
</style>
