<template>
  <ui-form class="feedback" @submit="submit">
    <div class="feedback__container">
      <ui-validator
        v-slot="{ error }"
        show-message
        class="feedback__input"
        rules="required"
      >
        <ui-input-name v-model="fields.name" :error="error" />
      </ui-validator>
      <ui-validator
        v-slot="{ error }"
        show-message
        rules="required|email"
        class="feedback__input"
      >
        <ui-input-email v-model="fields.email" :error="error" />
      </ui-validator>
      <ui-validator
        v-slot="{ error }"
        show-message
        rules="required|phone"
        class="feedback__input"
      >
        <ui-input-phone v-model="fields.phone" :error="error" />
      </ui-validator>
      <ui-validator
        v-slot="{ error }"
        show-message
        class="feedback__input"
        rules="required"
      >
        <ui-input-question v-model="fields.question" textarea :error="error" />
      </ui-validator>
      <div class="feedback__button">
        <ui-button fluid type="submit">Задать вопрос</ui-button>
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
        name: '',
        email: '',
        phone: '',
        question: '',
        'section-name-text':
          'Получите развёрнутую консультацию по оптовому пошиву прямо сейчас',
        'section-btn-text': 'Задать вопрос',
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
  max-width: 284px
  margin: 0 auto
  @media (min-width: map-get($breakpoints, 'sm'))
    max-width: 333px
  @media (min-width: map-get($breakpoints, 'lg'))
    max-width: 320px
  @media (min-width: map-get($breakpoints, 'xxxl'))
    max-width: 359px
  &__container
    margin-bottom: 14px
    @media (min-width: map-get($breakpoints, 'sm'))
      max-width: 284px
      margin: 0 auto 16px auto
    @media (min-width: map-get($breakpoints, 'lg'))
      max-width: 100%
      margin: 0
      margin-bottom: 26px
  &__input
    max-width: 260px
    width: 100%
    margin: 0 auto
    margin-bottom: 16px
    height: 50px
    @media (min-width: map-get($breakpoints, 'sm'))
      margin: 0
      margin-bottom: 20px
      max-width: 284px
      height: 52px
    @media (min-width: map-get($breakpoints, 'lg'))
      max-width: 364px
      height: 54px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      max-width: 449px
      height: 60px
      margin-bottom: 32px
    &:last-child
      margin-bottom: 0
    &:nth-child(4)
      height: 120px
      ::v-deep
        .ui-validator__error
          top: auto
          bottom: 1px
          @media (min-width: map-get($breakpoints, 'sm'))
            bottom: 0
          @media (min-width: map-get($breakpoints, 'lg'))
            bottom: -16px
          @media (min-width: map-get($breakpoints, 'xxxl'))
            bottom: -19px

      .ui-input
        align-items: flex-start
      ::v-deep
        .ui-input__field
          padding-top: 3px
          @media (min-width: map-get($breakpoints, 'sm'))
            padding-top: 2px
          @media (min-width: map-get($breakpoints, 'lg'))
            padding-top: 5px
          @media (min-width: map-get($breakpoints, 'xxxl'))
            padding-top: 7px
    .ui-input
      padding: 16px 14px
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
      max-width: 449px
      height: 72px
</style>
