<template>
  <nav class="header-nav">
    <ul class="header-nav__list">
      <li v-for="item in items" :key="item.label" class="header-nav__item">
        <nuxt-link class="header-nav__link" :to="item.route">{{
          item.label
        }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          route: { name: 'index', hash: '#catalog-section' },
          label: 'Каталог',
        },
        {
          route: { name: 'index', hash: '#recommendation-section' },
          label: 'Вопрос / ответ',
        },
        {
          route: { name: 'index', hash: '#calculation-section' },
          label: 'Расчёт стоимости',
        },
        {
          route: { name: 'index', hash: '#reviews-section' },
          label: 'Отзывы',
        },
        {
          route: { name: 'vacancy' },
          label: 'Вакансии',
        },
        {
          route: { name: 'index', hash: '#contacts-section' },
          label: 'Контакты',
        },
      ],
    }
  },
}
</script>

<style lang="sass" scoped>
.header-nav
  &__list
    @media (min-width: map-get($breakpoints, 'lg'))
      display: flex
  &__item
    font-size: 16px
    line-height: 18px
    transition: all 0.3s
    height: 50px
    display: flex
    align-items: center
    @media (min-width: map-get($breakpoints, 'sm'))
      margin-right: 14px
      font-size: 18px
      line-height: 22px
      transition: all 0.3s
      height: auto
    @media (min-width: map-get($breakpoints, 'lg'))
      margin-right: 26px
      font-size: 13px
      line-height: 15px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      font-size: 14px
      line-height: 17px
      margin-right: 40px
      -webkit-touch-callout: none
      -webkit-user-select: none
      -khtml-user-select: none
      -moz-user-select: none
      -ms-user-select: none
      user-select: none
    &:hover
      text-shadow: 1px 0 1px #000000
    &:last-child
      margin-right: 0
  &__link
    padding: 10px 0
    @media (min-width: map-get($breakpoints, 'sm'))
      padding: 16px 0
    @media (min-width: map-get($breakpoints, 'lg'))
      padding: 10px 0
    @media (min-width: map-get($breakpoints, 'xxxl'))
      padding: 12px 0
</style>
