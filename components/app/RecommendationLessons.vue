<template>
  <div class="recommendations-lessons">
    <div class="recommendations-lessons__title">
      <h3>
        {{ title }}
      </h3>
    </div>
    <div class="recommendations-lessons__list">
      <div
        v-for="lesson in lessons"
        :key="lesson.id"
        class="recommendations-lessons__item"
      >
        <nuxt-link
          :to="{ name: `lessons-${lesson.id}` }"
          class="recommendations-lessons__link"
        >
          <span class="recommendations-lessons__item-container">
            <ui-icon name="arrow-small"></ui-icon>
            <span>Урок {{ lesson.id }}</span>
          </span>
          <span class="recommendations-lessons__text">
            {{ lesson.description }}
          </span>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    lessons: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="sass" scoped>
.recommendations-lessons
  background-color: #1C95BC
  color: white
  padding: 20px 10px
  border-radius: 0 0 4px 4px

  overflow: hidden
  @media (min-width: map-get($breakpoints, 'sm'))
    border-radius: 0
    padding: 30px 10px 0 10px
  @media (min-width: map-get($breakpoints, 'lg'))
    padding: 30px 10px 0 30px
  @media (min-width: map-get($breakpoints, 'xxxl'))
    padding: 39px 36px 0 39px
  &__title
    margin-bottom: 20px
    @media (min-width: map-get($breakpoints, 'sm'))
      margin-bottom: 30px
    @media (min-width: map-get($breakpoints, 'lg'))
      margin-bottom: 30px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      margin-bottom: 40px
    h3
      font-size: 16px
      line-height: 19px
      font-weight: 400
      @media (min-width: map-get($breakpoints, 'sm'))
        font-size: 22px
        line-height: 25px
      @media (min-width: map-get($breakpoints, 'lg'))
        font-size: 25px
        line-height: 30px
      @media (min-width: map-get($breakpoints, 'xxxl'))
        font-size: 28px
        line-height: 34px
  &__list
    font-size: 14px
    line-height: 18px
    @media (min-width: map-get($breakpoints, 'lg'))
      font-size: 16px
      line-height: 20px
  &__item
    margin-bottom: 26px
    @media (min-width: map-get($breakpoints, 'lg'))
      margin-bottom: 40px
    &:last-child
      margin-bottom: 0
  &__item-container
    display: flex
    padding-bottom: 8px
    font-family: 'Montserrat-Bold'
    svg
      margin-right: 16px
</style>
