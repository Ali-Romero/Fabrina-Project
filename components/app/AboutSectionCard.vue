<template>
  <div class="about-card" :class="classes">
    <div v-if="number" class="about-card__number">{{ number }}</div>
    <div class="about-card__title"><h3 v-html="title"></h3></div>
    <ui-transition-collapse>
      <div v-if="expand">
        <div class="about-card__description">
          {{ description }}
        </div>
      </div>
    </ui-transition-collapse>
    <div class="about-card__toggle" @click="expand = !expand">
      <span class="about-card__toggle-text">
        {{ expand ? 'скрыть' : 'подробнее' }}
      </span>
      <span class="about-card__toggle-icon">
        <ui-icon name="chevron-bottom" />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    number: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      expand: false,
    }
  },
  computed: {
    classes() {
      return {
        'about-card--active': this.expand,
      }
    },
  },
}
</script>

<style lang="sass" scoped>
.about-card
  background: #1C95BC
  border-radius: 10px
  color: white
  position: relative
  display: flex
  flex-direction: column
  justify-content: flex-start
  width: 100%
  min-height: 148px
  padding: 19px 16px 22px 14px
  transition: 0.3s
  @media (min-width: map-get($breakpoints, 'sm'))
    padding: 36px 22px 36px 38px
    min-height: 168px
  @media (min-width: map-get($breakpoints, 'md'))
    justify-content: center
    padding: 20px 10px 22px 10px
    min-height: 74px
    width: auto
    height: auto
  @media (min-width: map-get($breakpoints, 'lg'))
    padding: 14px 14px 19px 14px
    min-height: 79px
  @media (min-width: map-get($breakpoints, 'xxxl'))
    min-height: 80px
    padding: 16px
  @media (min-width: map-get($breakpoints, 'xxxxxl'))
    min-height: 100px
    padding: 20px
  &--active
    min-height: 224px
    transition: 0.3s
    @media (min-width: map-get($breakpoints, 'sm'))
      min-height: 270px
    @media (min-width: map-get($breakpoints, 'md'))
      min-height: 100%
    .about-card__toggle-icon
      transform: rotate(180deg)
      padding: 0 5px 2px 0
    .about-card__description
      opacity: 1
  &__number
    position: absolute
    top: 0
    left: 0
    transform: translate(-50%, -50%)
    width: 40px
    height: 40px
    border-radius: 100%
    background-color: #1C95BC
    display: flex
    justify-content: center
    align-items: center
    font-size: 20px
    line-height: 20px
    @media (min-width: map-get($breakpoints, 'sm'))
      width: 60px
      height: 60px
      font-size: 28px
      line-height: 28px
  &__title
    width: 221px
    font-family: 'Montserrat-Bold'
    @media (min-width: map-get($breakpoints, 'sm'))
      width: 260px
    @media (min-width: map-get($breakpoints, 'md'))
      width: 282px
      font-family: 'Montserrat-SemiBold'
    @media (min-width: map-get($breakpoints, 'lg'))
      width: 302px
      font-family: 'Montserrat-Bold'
    @media (min-width: map-get($breakpoints, 'xxxl'))
      width: 330px
    @media (min-width: map-get($breakpoints, 'xxxxxl'))
      width: 370px
    h3
      font-size: 17px
      line-height: 20px
      font-weight: 700
      @media (min-width: map-get($breakpoints, 'sm'))
        font-size: 20px
        line-height: 24px
      @media (min-width: map-get($breakpoints, 'md'))
        font-size: 14px
        line-height: 16px
        font-weight: 600
      @media (min-width: map-get($breakpoints, 'lg'))
        font-size: 15px
        line-height: 17px
        font-weight: 700
      @media (min-width: map-get($breakpoints, 'xxxl'))
        font-size: 16px
        line-height: 18px
      @media (min-width: map-get($breakpoints, 'xxxxxl'))
        font-size: 20px
        line-height: 24px

  &__description
    font-size: 14px
    line-height: 16px
    margin-top: 8px
    width: 224px
    opacity: 0
    transition: 0.3s
    @media (min-width: map-get($breakpoints, 'sm'))
      font-size: 16px
      line-height: 20px
      width: 263px
    @media (min-width: map-get($breakpoints, 'md'))
      font-size: 12px
      line-height: 14px
      margin-top: 8px
      width: 263px
      opacity: 0
      transition: 0.3s
    @media (min-width: map-get($breakpoints, 'lg'))
      margin-top: 8px
      width: 305px
      font-size: 13px
      line-height: 15px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      margin-top: 12px
      width: 354px
      font-size: 15px
      line-height: 18px
    @media (min-width: map-get($breakpoints, 'xxxxxl'))
      font-size: 16px
      line-height: 20px
      width: 370px
  &__toggle
    position: absolute
    bottom: 0
    right: 0
    display: flex
    align-items: center
    cursor: pointer
    padding: 0 20px 10px 0
    font-size: 14px
    line-height: 14px
    -webkit-tap-highlight-color: transparent
    -webkit-touch-callout: none
    -webkit-user-select: none
    -khtml-user-select: none
    -moz-user-select: none
    -ms-user-select: none
    user-select: none
    @media (min-width: map-get($breakpoints, 'md'))
      padding: 0 12px 6px 0
      font-size: 12px
      line-height: 12px
    @media (min-width: map-get($breakpoints, 'lg'))
      font-size: 14px
      line-height: 14px
      padding: 0 14px 8px 0
    @media (min-width: map-get($breakpoints, 'xxxl'))
      padding: 0 22px 8px 0
    @media (min-width: map-get($breakpoints, 'xxxxxl'))
      padding: 0 24px 10px 0
  &__toggle-icon
    padding: 3px 0 0 3px
    transition: transform 0.2s
    opacity: 1
    transform: rotate(0deg)
    @media (min-width: map-get($breakpoints, 'lg'))
      padding: 3px 0 0 5px
</style>
