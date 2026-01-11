<template>
  <footer class="footer" :class="classes">
    <ui-wrapper>
      <div class="footer__inner">
        <div class="footer__row">
          <div class="footer__col footer__col--1">
            <div class="footer__logo">
              <img
                src="@/assets/images/logo-secondary.svg"
                width="208"
                height="63"
                alt="logo"
                loading="lazy"
              />
            </div>
            <div class="footer__made-in">Сделано в России 🤘</div>
            <div class="footer__policy">
              <a href="#" @click.prevent="modal = true"
                >Политика конфиденциальности</a
              >
            </div>
          </div>
          <div class="footer__col footer__col--2">
            <div class="footer__year">
              «Фабрина»®, 2020-{{ new Date().getFullYear() }} г.
            </div>
            <div class="footer__name">
              ИП Зотеев Виктор Анатольевич,
              <span>ИНН 165206828302</span>
            </div>
            <div class="footer__arms">
              <img
                src="@/assets/images/arms.png?webp"
                alt="arms"
                width="27"
                height="32"
                loading="lazy"
              />
              <span>
                Российская Федерация, Республика
                <br class="d-sm-none d-lg-inline" />
                Татарстан, г. Казань
              </span>
            </div>
          </div>
          <div class="footer__col footer__col--3">
            <ul class="footer__col-nav-list">
              <li>
                <nuxt-link :to="{ name: 'index', hash: '#catalog-section' }"
                  >Каталог</nuxt-link
                >
              </li>
              <li>
                <nuxt-link :to="{ name: 'index', hash: '#main-section' }"
                  >Пошив под ключ</nuxt-link
                >
              </li>
              <li>
                <nuxt-link
                  :to="{ name: 'index', hash: '#recommendation-section' }"
                  >Вопрос / ответ</nuxt-link
                >
              </li>
              <li>
                <nuxt-link :to="{ name: 'index', hash: '#calculation-section' }"
                  >Расчёт стоимости</nuxt-link
                >
              </li>
            </ul>
          </div>
          <div class="footer__col footer__col--4">
            <ul class="footer__col-nav-list">
              <li class="header-nav__item">
                <nuxt-link :to="{ name: 'index', hash: '#reviews-section' }"
                  >Отзывы</nuxt-link
                >
              </li>
              <li class="header-nav__item">
                <router-link to="/vacancy">Вакансии</router-link>
              </li>
              <li class="header-nav__item">
                <nuxt-link :to="{ name: 'index', hash: '#contacts-section' }"
                  >Контакты</nuxt-link
                >
              </li>
            </ul>
          </div>
          <div class="footer__col footer__col--5">
            <div class="footer__connection">
              <app-connection></app-connection>
            </div>
            <div class="footer__social">
              <a href="https://m.vk.com/fabrina_opt">
                <img
                  src="@/assets/images/vk.svg"
                  alt="arms"
                  width="48"
                  height="48"
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </ui-wrapper>
    <ui-modal v-model="modal">
      <app-privacy @submit="modal = false" />
    </ui-modal>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      modal: false,
    }
  },
  computed: {
    page() {
      return this.$route.name
    },
    classes() {
      return {
        'footer--thanks': this.page === 'thanks',
      }
    },
  },
}
</script>

<style lang="sass" scoped>
.footer
  background-color: #00063D
  font-size: 13px
  line-height: 15px
  color: white
  text-align: center
  @media (min-width: map-get($breakpoints, 'sm'))
    text-align: left
    font-size: 12px
    line-height: 14px
  @media (min-width: map-get($breakpoints, 'lg'))
    font-size: 14px
    line-height: 17px
  &__inner
    padding: 40px 0
  &__row
    @media (min-width: map-get($breakpoints, 'sm'))
      display: flex
      justify-content: space-between
  &__col
    margin-bottom: 30px
    @media (min-width: map-get($breakpoints, 'sm'))
      margin-bottom: 0
      max-width: 100%
    &:last-child
      margin-bottom: 0
    &--1
      @media (min-width: map-get($breakpoints, 'sm'))
        max-width: 140px
      @media (min-width: map-get($breakpoints, 'lg'))
        max-width: 100%
    &--2
      @media (min-width: map-get($breakpoints, 'sm'))
        max-width: 240px
      @media (min-width: map-get($breakpoints, 'lg'))
        max-width: 100%
    &--5
      display: flex
      flex-direction: column
      justify-content: space-between
  &__logo
    margin-bottom: 15px
    img
      width: 130px
      height: auto
      margin: 0 auto
      @media (min-width: map-get($breakpoints, 'sm'))
        margin: 0
      @media (min-width: map-get($breakpoints, 'lg'))
        width: 208px
  &__made-in
    margin-bottom: 46px
    @media (min-width: map-get($breakpoints, 'sm'))
      margin-bottom: 30px
  &__policy
    a
      text-decoration: underline
  &__year
    margin-bottom: 24px
  &__name
    margin-bottom: 24px
    span
      margin-top: 8px
      display: block
  &__arms
    display: flex
    align-items: center
    text-align: left
    img
      margin-right: 12px
  &__col-nav-list
    li
      margin-bottom: 24px
      &:last-child
        margin-bottom: 0
  &__social
    display: flex
    justify-content: center
    @media (min-width: map-get($breakpoints, 'sm'))
      justify-content: flex-end
    img
      width: 38px
      height: auto
      margin: 0 auto
      @media (min-width: map-get($breakpoints, 'sm'))
        margin: 0
      @media (min-width: map-get($breakpoints, 'lg'))
        width: 40px
  &__connection
    margin-bottom: 20px
    @media (min-width: map-get($breakpoints, 'sm'))
      margin-bottom: 25px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      margin-bottom: 14px
    ::v-deep
      .connection
        justify-content: center
        @media (min-width: map-get($breakpoints, 'sm'))
          justify-content: flex-start
        .connection__description
          &--header
            display: none
          &--footer
            display: block
</style>
