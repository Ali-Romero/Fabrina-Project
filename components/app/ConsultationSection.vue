<template>
  <section id="consultation-section" class="consultation-section">
    <div class="consultation-section__wrapper o-hidden">
      <ui-wrapper>
        <div class="consultation-section__inner">
          <h2 class="consultation-section__title title-secondary">
            <span></span>
            Получите развёрнутую консультацию по оптовому пошиву прямо сейчас
          </h2>
          <div class="consultation-section__feedback">
            <app-feedback-consultation></app-feedback-consultation>
          </div>
        </div>
      </ui-wrapper>
    </div>
  </section>
</template>

<style lang="sass" scoped>
.consultation-section
  background-color: #1C95BC
  &__inner
    position: relative
    padding: 50px 0 60px 0
    max-width: 457px
    margin: 0 0 0 auto
    @media (min-width: map-get($breakpoints, 'lg'))
      padding: 66px 0 84px 0
      max-width: 566px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      max-width: 792px
    &:before
      @media (min-width: map-get($breakpoints, 'sm'))
        content: ""
        position: absolute
        width: 526px
        height: 100%
        background: url("@/assets/images/consultation-section-image.jpg?webp")
        background-position: left
        background-size: cover
        background-repeat: no-repeat
        left: -526px
        top: 0
        margin: 0 auto
        z-index: 1
      @media (min-width: map-get($breakpoints, 'lg'))
        width: 748px
        left: -748px
      @media (min-width: map-get($breakpoints, 'xxxl'))
        width: 888px
        left: -888px
  &__title
    margin-bottom: 48px
    color: white
    font-size: 20px
    line-height: 27px
    @media (min-width: map-get($breakpoints, 'sm'))
      font-size: 28px
      line-height: 32px
      padding-left: 33px
    @media (min-width: map-get($breakpoints, 'lg'))
      font-size: 30px
      line-height: 40px
      padding-left: 44px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      font-size: 38px
      line-height: 46px
    span
      padding-left: 50px
      @media (min-width: map-get($breakpoints, 'sm'))
        padding-left: 34px
      @media (min-width: map-get($breakpoints, 'lg'))
        padding-left: 40px
      @media (min-width: map-get($breakpoints, 'xxxl'))
        padding-left: 140px
    &:before
      background-color: white
      max-width: 42px
      @media (min-width: map-get($breakpoints, 'sm'))
        max-width: 75px
        left: -17px
      @media (min-width: map-get($breakpoints, 'lg'))
        max-width: 93px
        left: -27px
      @media (min-width: map-get($breakpoints, 'xxxl'))
        max-width: 167px
        left: -19px
      @media (min-width: map-get($breakpoints, 'xxxxxl'))
        max-width: 217px
        left: -70px
</style>
