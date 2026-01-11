<template>
  <section class="thanks-section">
    <ui-wrapper>
      <div class="thanks-section__inner">
        <h1 v-if="(name, city)" class="thanks-section__title">
          <span class="text-border">{{ name }},</span>
          благодарим Вас за обращение
          <br class="d-none d-sm-block" />
          на город <span class="text-border">{{ city }}</span> на франшизу
          PriChina ©
        </h1>
        <h1 v-else class="thanks-section__title">
          <span class="text-border">{{ name }},</span>
          благодарим Вас за обращение
          <br class="d-none d-sm-inline" />
          в компанию «Фабрина»®
        </h1>
        <div class="thanks-section__container">
          <div class="thanks-section__description">
            Мы свяжемся с Вами в ближайшее время для предоставления бесплатной
            консультации
          </div>
          <div class="thanks-section__time">
            <div class="thanks-section__time-box thanks-section__time-box--1">
              <div>График работы компании:</div>
              <span class="thanks-section__time-box-day"
                >пн вт ср чт пт
                <span class="thanks-section__time-box-day-color"
                  >сб вс</span
                ></span
              >
            </div>
            <div class="thanks-section__time-box thanks-section__time-box--2">
              <div>По нашему местному (московскому) времени в г. Казань:</div>
              <span>с 08:00 до 17:00</span>
            </div>
          </div>
          <div class="thanks-section__time-info">
            Если Вы оставили заявку в нерабочее время или в выходной/праздничный
            день — мы перезвоним Вам в ближайший рабочий день.
          </div>
          <div class="thanks-section__social">
            <ul>
              <li>
                <div class="thanks-section__social-container">
                  <span>Вернуться на главную страницу:</span>
                  <router-link to="/">
                    <img
                      src="@/assets/images/logo-3.png?webp"
                      alt="logo"
                      width="65"
                      height="47"
                      loading="lazy"
                    />
                  </router-link>
                </div>
              </li>
              <li>
                <a
                  href="https://m.vk.com/fabrina_opt"
                  class="thanks-section__social-container"
                  target="_blank"
                >
                  <span>«Фабрина» в VK:</span>
                  <img
                    src="@/assets/images/vk.svg"
                    alt="logo"
                    width="48"
                    height="48"
                    loading="lazy"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="thanks-section__photo">
          <img
            src="@/assets/images/thanks-section-photo.png?webp"
            alt="logo"
            width="530"
            height="633"
            loading="lazy"
          />
          <div class="thanks-section__name">
            <div>Виктор Зотеев</div>
            <span>Основатель компании</span>
          </div>
        </div>
      </div>
    </ui-wrapper>
  </section>
</template>
<script>
export default {
  data() {
    return {
      name: '',
      city: '',
    }
  },
  head() {
    return {
      title: this.name + ', спасибо, ваша заявка принята',
    }
  },
  mounted() {
    this.name = localStorage.getItem('lead_name')
    this.city = localStorage.getItem('city')
  },
}
</script>

<style lang="sass" scoped>
.thanks-section
  height: 100%
  position: relative
  z-index: 1
  display: flex
  justify-content: center
  align-items: center
  color: #1F1F1F
  background: url("@/assets/images/about-section-bg.jpg?webp")
  background-repeat: no-repeat
  background-position: center
  background-size: cover
  overflow: hidden
  &__inner
    padding: 60px 0 78px 0
    position: relative
    @media (min-width: map-get($breakpoints, 'lg'))
      padding: 72px 0 100px 0
    @media (min-width: map-get($breakpoints, 'xxxl'))
      padding: 88px 0 117px 0
  &__title
    font-size: 23px
    line-height: 32px
    margin-bottom: 28px
    font-weight: 400
    text-align: center
    @media (min-width: map-get($breakpoints, 'sm'))
      text-align: left
      font-size: 28px
      line-height: 42px
      margin-bottom: 39px
    @media (min-width: map-get($breakpoints, 'lg'))
      font-size: 32px
      line-height: 48px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      font-size: 34px
      line-height: 44px
      margin-bottom: 32px
    span
      font-family: 'Montserrat-SemiBold'
      color: #1C95BC
  &__container
    max-width: 634px
  &__description
    font-size: 14px
    line-height: 20px
    margin-bottom: 16px
    text-align: center
    @media (min-width: map-get($breakpoints, 'sm'))
      text-align: left
      max-width: 420px
    @media (min-width: map-get($breakpoints, 'lg'))
      max-width: 100%
      font-size: 16px
      line-height: 20px
      margin-bottom: 32px
  &__time
    margin-bottom: 32px
    @media (min-width: map-get($breakpoints, 'lg'))
      display: flex
      margin-bottom: 32px
  &__time-box
    color: black
    height: 120px
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1)
    margin: 0 auto
    @media (min-width: map-get($breakpoints, 'sm'))
      margin: 0
    div
      font-size: 14px
      line-height: 18px
    &--1
      max-width: 254px
      width: 100%
      padding: 34px 24px
      background: url("@/assets/images/calendar-image.jpg?webp")
      background-repeat: no-repeat
      background-position: right
      background-size: 129px auto
      background-color: white
      margin-bottom: 30px
      @media (min-width: map-get($breakpoints, 'lg'))
        margin-right: 30px
        margin-bottom: 0
      div
        margin-bottom: 14px
    &--2
      max-width: 254px
      width: 100%
      padding: 16px 36px 16px 24px
      background: url("@/assets/images/time-image.jpg?webp")
      background-repeat: no-repeat
      background-position: right
      background-size: 90px auto
      background-color: white
      @media (min-width: map-get($breakpoints, 'lg'))
        max-width: 350px
        padding: 16px 24px
      div
        margin-bottom: 12px
      span
        font-size: 22px
        line-height: 28px
  &__time-box-day
    color: #1C95BC
    font-family: 'Montserrat-SemiBold'
    font-size: 20px
    line-height: 25px
  &__time-box-day-color
    font-family: 'Montserrat-Regular'
    color: #777777
  &__time-info
    font-size: 16px
    line-height: 20px
    margin-bottom: 32px
  &__social
    margin-bottom: 30px
    ul
      @media (min-width: map-get($breakpoints, 'sm'))
        display: flex
      li
        font-size: 16px
        line-height: 20px
        font-family: 'Montserrat-Medium'
        &:first-child
          margin-bottom: 20px
          @media (min-width: map-get($breakpoints, 'sm'))
            margin-bottom: 0
            margin-right: 48px

        .thanks-section__social-container
          display: flex
          align-items: center
          justify-content: space-between
          @media (min-width: map-get($breakpoints, 'sm'))
            justify-content: flex-start
        span
          display: block
          margin-right: 10px
  &__photo
    position: relative
    top: -90px
    @media (min-width: map-get($breakpoints, 'sm'))
      position: absolute
      top: 132px
      right: 30px
    @media (min-width: map-get($breakpoints, 'lg'))
      top: 56px
      right: 23px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      top: 32px
      right: 91px
    img
      width: 332px
      height: auto
      @media (min-width: map-get($breakpoints, 'lg'))
        width: 446px
      @media (min-width: map-get($breakpoints, 'xxxl'))
        width: 530px
  &__name
    position: absolute
    width: 300px
    bottom: 4px
    border: 1px solid #1C95BC
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1)
    text-align: center
    @media (min-width: map-get($breakpoints, 'lg'))
      width: 350px
      bottom: 4px
    div
      background-color: #1C95BC
      font-size: 20px
      line-height: 22px
      color: white
      padding: 16px 8px
      @media (min-width: map-get($breakpoints, 'lg'))
        padding: 21px 8px
        font-size: 22px
        line-height: 24px
    span
      font-size: 14px
      line-height: 18px
      background-color: white
      display: block
      padding: 14px 10px
      @media (min-width: map-get($breakpoints, 'lg'))
        padding: 18px 10px
</style>
