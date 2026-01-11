<template>
  <ui-form class="feedback" @submit="submit">
    <div class="feedback__title">
      Заполните форму ниже <br />
      и прикрепите резюме
      <span>Мы свяжемся с Вами в ближайшее время</span>
    </div>
    <div class="feedback__container">
      <span class="feedback__name-text">Ваше имя</span>
      <ui-validator
        v-slot="{ error }"
        show-message
        class="feedback__input"
        rules="required"
      >
        <ui-input-name v-model="fields.name" :error="error" />
      </ui-validator>
      <span class="feedback__name-text">E-mail</span>
      <ui-validator
        v-slot="{ error }"
        show-message
        rules="required|email"
        class="feedback__input"
      >
        <ui-input-email v-model="fields.email" :error="error" />
      </ui-validator>
      <span class="feedback__name-text">Телефон</span>
      <ui-validator
        v-slot="{ error }"
        show-message
        rules="required|phone"
        class="feedback__input"
      >
        <ui-input-phone v-model="fields.phone" :error="error" />
      </ui-validator>

      <div class="feedback__file">
        <ui-validator
          v-slot="{ error }"
          show-message
          mode="aggressive"
          rules="required|size:10000|ext:pdf,docx,doc,txt"
          :absolute-error="false"
        >
          <ui-input-file v-model="fields.file" :error="error" />
        </ui-validator>
      </div>
      <div class="feedback__button">
        <ui-button fluid type="submit">Откликнуться на вакансию</ui-button>
      </div>
    </div>
    <div class="feedback__agree">
      <ui-agree></ui-agree>
    </div>
  </ui-form>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      fields: {
        file: null,
        name: '',
        email: '',
        phone: '',
        'section-name-text':
          'Заполните форму ниже и прикрепите резюме. Мы свяжемся с Вами в ближайшее время',
        'section-btn-text': 'Откликнуться на вакансию',
        'section-name': 'Открытая',
      },
    }
  },
  methods: {
    async submit() {
      await this.$feedback.submit(this.fields)
    },
  },
}
</script>

<style lang="sass" scoped>
.feedback
  color: white
  margin: 0 auto
  background: #1C95BC
  padding: 36px 6px
  @media (min-width: map-get($breakpoints, 'sm'))
    padding: 36px 16px
  @media (min-width: map-get($breakpoints, 'lg'))
    padding: 40px
  &__title
    font-size: 18px
    line-height: 22px
    font-family: 'Montserrat-SemiBold'
    text-align: center
    margin-bottom: 32px
    @media (min-width: map-get($breakpoints, 'lg'))
      font-size: 22px
      line-height: 27px
    span
      display: block
      font-family: 'Montserrat-Regular'
      font-size: 13px
      line-height: 18px
      margin-top: 8px
      @media (min-width: map-get($breakpoints, 'lg'))
        font-size: 16px
        line-height: 22px
  &__container
    margin-bottom: 14px
    max-width: 261px
    margin: 0 auto 16px auto
    @media (min-width: map-get($breakpoints, 'sm'))
      max-width: 284px
      margin: 0 auto 16px auto
    @media (min-width: map-get($breakpoints, 'lg'))
      max-width: 535px
      margin: 0
      margin-bottom: 26px
  &__name-text
    font-size: 14px
    line-height: 16px
    display: block
    margin-bottom: 4px
  &__input
    max-width: 260px
    width: 100%
    margin: 0 auto
    margin-bottom: 16px
    height: 50px
    @media (min-width: map-get($breakpoints, 'sm'))
      margin: 0
      margin-bottom: 16px
      max-width: 284px
      height: 46px
    @media (min-width: map-get($breakpoints, 'lg'))
      max-width: 364px
      height: 54px
      margin-bottom: 20px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      max-width: 448px
      height: 60px
  &__file
    margin: 20px 0 18px 0
    @media (min-width: map-get($breakpoints, 'sm'))
      margin: 20px 0
    @media (min-width: map-get($breakpoints, 'lg'))
      margin: 20px 0 18px 0
    @media (min-width: map-get($breakpoints, 'xxxl'))
      margin: 26px 0 24px 0
  &__button
    max-width: 260px
    width: 100%
    margin: 0 auto
    height: 50px
    @media (min-width: map-get($breakpoints, 'sm'))
      height: auto
      margin: 0
      max-width: 284px
      height: 48px
    @media (min-width: map-get($breakpoints, 'lg'))
      max-width: 364px
      height: 60px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      max-width: 448px
      height: 72px
  &__agree
    ::v-deep
      .agree
        &__description
          text-align: left
        svg
          width: 16px
          height: 19px
</style>
