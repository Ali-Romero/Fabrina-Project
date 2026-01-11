<template>
  <ui-form class="feedback-modal-main" @submit="submit">
    <div class="feedback-modal-main__wrapper">
      <div class="feedback-modal-main__image">
        <img
          src="@/assets/images/feedback-main-img.png?webp"
          alt="image"
          width="328"
          height="587"
          loading="lazy"
        />
      </div>
      <div class="feedback-modal-main__top">
        <div class="feedback-modal-main__title">
          {{ title }}
          <span>{{ description }}</span>
        </div>
        <div class="feedback-modal-main__container">
          <ui-validator
            v-slot="{ error }"
            show-message
            class="feedback-modal-main__input"
            rules="required"
          >
            <ui-input-name v-model="fields.name" :error="error" />
          </ui-validator>
          <ui-validator
            v-slot="{ error }"
            show-message
            rules="required|email"
            class="feedback-modal-main__input"
          >
            <ui-input-email v-model="fields.email" :error="error" />
          </ui-validator>
          <ui-validator
            v-slot="{ error }"
            show-message
            rules="required|phone"
            class="feedback-modal-main__input"
          >
            <ui-input-phone v-model="fields.phone" :error="error" />
          </ui-validator>
          <div class="feedback-modal-main__button">
            <ui-button fluid type="submit">{{ btnText }}</ui-button>
          </div>
          <div class="feedback-modal-main__agree">
            <ui-agree-modal></ui-agree-modal>
          </div>
        </div>
      </div>
    </div>
  </ui-form>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: '',
    },
    btnText: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      loading: false,
      fields: {
        name: '',
        email: '',
        phone: '',
        'section-name-text': `${this.title} ${this.description}`.trim(),
        'section-btn-text': this.btnText,
        'section-name': 'Закрытая',
      },
    }
  },
  methods: {
    async submit() {
      await this.$feedback.submit(this.fields)
      this.$emit('submit')
    },
  },
}
</script>

<style lang="sass" scoped>
.feedback-modal-main
  background: #FFFFFF
  box-shadow: 0px 10px 35px rgba(0, 0, 0, 0.08)
  border-radius: 8px
  width: 300px
  margin: 0 auto
  overflow: hidden
  @media (min-width: map-get($breakpoints, 'sm'))
    width: 576px
  @media (min-width: map-get($breakpoints, 'lg'))
    width: 670px
  @media (min-width: map-get($breakpoints, 'xxxl'))
    width: 730px
  &__wrapper
    @media (min-width: map-get($breakpoints, 'sm'))
      display: flex
      justify-content: space-between
  &__top
    max-width: 258px
    margin: 0 auto
    padding: 20px 0
    @media (min-width: map-get($breakpoints, 'sm'))
      margin: 0
      display: block
      max-width: 304px
      padding: 40px 0 0 0
    @media (min-width: map-get($breakpoints, 'lg'))
      max-width: 392px
      padding: 46px 40px 22px 9px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      max-width: 435px
      padding: 40px 21px 30px 27px
  &__title
    font-size: 17px
    line-height: 21px
    margin-bottom: 20px
    color: #212121
    text-align: center
    @media (min-width: map-get($breakpoints, 'sm'))
      font-size: 18px
      line-height: 22px
      margin-bottom: 20px
    @media (min-width: map-get($breakpoints, 'lg'))
      font-size: 20px
      line-height: 26px
      @media (max-height: 800px)
        font-size: 18px
        line-height: 24px
        max-width: 283px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      font-size: 22px
      line-height: 31px
      margin-bottom: 24px
    span
      font-size: 13px
      line-height: 17px
      display: block
      margin-top: 4px
      @media (min-width: map-get($breakpoints, 'sm'))
        font-size: 14px
        line-height: 18px
      @media (min-width: map-get($breakpoints, 'lg'))
        font-size: 16px
        line-height: 22px
  &__title-info
    font-family: 'Manrope-Light'
    display: block
  &__image
    display: none
    @media (min-width: map-get($breakpoints, 'sm'))
      display: block
    img
      width: 280px
      height: auto
      @media (min-width: map-get($breakpoints, 'sm'))
        width: 260px
      @media (min-width: map-get($breakpoints, 'lg'))
        width: 304px
        @media (max-height: 800px)
          width: 282px
      @media (min-width: map-get($breakpoints, 'xxxl'))
        width: 328px
  &__container
    max-width: 258px
    width: 100%
    margin: 0 auto
    @media (min-width: map-get($breakpoints, 'sm'))
      max-width: 264px
    @media (min-width: map-get($breakpoints, 'lg'))
      max-width: 296px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      max-width: 318px
  &__input
    margin-bottom: 16px
    height: 50px
    @media (min-width: map-get($breakpoints, 'lg'))
      height: 60px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      margin-bottom: 24px
  &__button
    height: 50px
    margin-bottom: 12px
    @media (min-width: map-get($breakpoints, 'lg'))
      height: 60px
      margin-bottom: 8px
      height: 60px
    ::v-deep
      .ui-button
        font-size: 16px
        line-height: 20px
        @media (min-width: map-get($breakpoints, 'lg'))
          font-size: 20px
          line-height: 36px
</style>
