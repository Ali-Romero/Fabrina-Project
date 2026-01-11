<template>
  <div class="lessons-nav">
    <ul class="lessons-nav__list">
      <li class="lessons-nav__item">
        <router-link class="lessons-nav__link" :to="{ name: prev.route }">
          <ui-icon name="arrow-icon-small"></ui-icon>
          {{ prev.title }}
        </router-link>
      </li>
      <li class="lessons-nav__item">
        <template v-if="main">
          <router-link class="lessons-nav__link" :to="{ name: main.route }">
            {{ main.title }}
          </router-link>
        </template>
      </li>
      <li class="lessons-nav__item">
        <template v-if="next">
          <router-link class="lessons-nav__link" :to="{ name: next.route }">
            {{ next.title }}
            <ui-icon name="arrow-icon-small"></ui-icon>
          </router-link>
        </template>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    prevLesson: {
      type: Object,
      default: null,
    },
    nextLesson: {
      type: Object,
      default: null,
    },
  },
  computed: {
    mainItem() {
      return {
        title: 'На главную',
        route: 'index',
      }
    },
    prev() {
      return this.prevLesson || this.mainItem
    },
    main() {
      return this.prevLesson ? this.mainItem : null
    },
    next() {
      return this.nextLesson
    },
  },
}
</script>

<style lang="sass" scoped>
.lessons-nav
  &__list
    display: flex
    justify-content: space-between
    align-items: center
  &__item
    display: flex
    color: #1C95BC
    min-width: 83px
    font-size: 14px
    line-height: 16px
    @media (min-width: map-get($breakpoints, 'sm'))
      min-width: 120px
    @media (min-width: map-get($breakpoints, 'lg'))
      font-size: 16px
      line-height: 18px
    &:last-child
      justify-content: flex-end
    svg
      margin-left: 4px
      @media (min-width: map-get($breakpoints, 'sm'))
        margin-left: 8px
      @media (min-width: map-get($breakpoints, 'lg'))
        margin-left: 16px
    &:first-child
      color: #9C9C9C
      svg
        transform: rotate(180deg)
        margin-left: 0
        margin-right: 4px
        @media (min-width: map-get($breakpoints, 'sm'))
          margin-right: 8px
        @media (min-width: map-get($breakpoints, 'lg'))
          margin-right: 16px
    svg
      width: 22px
      height: 10px
      @media (min-width: map-get($breakpoints, 'sm'))
        width: 26px
        height: 12px
      @media (min-width: map-get($breakpoints, 'lg'))
        width: 34px
        height: 16px
  &__link
    display: flex
    align-items: center
</style>
