<template>
  <section id="main-section" class="main-section">
    <div class="main-section__wrapper o-hidden">
      <ui-wrapper>
        <div class="main-section__inner">
          <h1 class="main-section__title title">
            <span />Пошив одежды <br />
            из трикотажа для брендов под ключ:
          </h1>
          <div class="main-section__info">
            <ul>
              <li>
                <span></span>
                <div>
                  <h3>широкий выбор готовых моделей</h3>
                </div>
              </li>
              <li>
                <span></span>
                <div>
                  <h3>разработка лекал под ваш эскиз</h3>
                </div>
              </li>
              <li>
                <span></span>
                <div><h3>тройной контроль качества</h3></div>
              </li>
            </ul>
          </div>
          <div class="main-section__button" @click.prevent="modal = true">
            <ui-button fluid>
              Заказать пошив
            </ui-button>
          </div>
          <div class="main-section__photo">
            <img
              src="@/assets/images/main-section-photo.png?webp"
              width="1032"
              height="752"
              alt="photo"
              loading="lazy"
              class="d-block"
            />
          </div>
        </div>
      </ui-wrapper>
      <ui-modal v-model="modal">
        <app-feedback-modal-main
          title="Узнайте о спецпредложениях на пошив"
          btn-text="Заказать пошив"
          @submit="modal = false"
        />
      </ui-modal>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      modal: false,
    }
  },
}
</script>

<style lang="sass" scoped>
.main-section
  background-color: #F4F4F4
  &__inner
    padding: 40px 0 242px 0
    position: relative
    z-index: 1
    @include above('sm')
      padding: 56px 0 60px 0
    @media (min-width: map-get($breakpoints, 'lg'))
      padding: 100px 0 70px 0
      @media (max-height: 800px)
        padding: 50px 0 40px 0
    @media (min-width: map-get($breakpoints, 'xxxl'))
      padding: 100px 0 100px 0
      @media (max-height: 800px)
        padding: 60px 0 60px 0
  &__title
    max-width: 510px
    margin-bottom: 22px
    @media (min-width: map-get($breakpoints, 'lg'))
      max-width: 734px
      margin-bottom: 31px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      max-width: 862px
    span
      width: 100%
      max-width: 56px
      height: 1px
      margin: 0 8px 6px 0
      background-color: #000000
      display: inline-block
      @media (min-width: map-get($breakpoints, 'sm'))
        max-width: 74px
        height: 2px
        margin: 0 10px 9px 0
      @media (min-width: map-get($breakpoints, 'lg'))
        height: 3px
        max-width: 120px
        margin: 0 20px 14px 0
      @media (min-width: map-get($breakpoints, 'xxxl'))
        margin: 0 28px 16px 0
        max-width: 160px
  &__info
    margin-bottom: 30px
    @media (min-width: map-get($breakpoints, 'lg'))
      margin-bottom: 48px
    ul
      li
        margin-bottom: 6px
        display: flex
        align-items: center
        @media (min-width: map-get($breakpoints, 'lg'))
          margin-bottom: 16px
        &:last-child
          margin-bottom: 0
        span
          width: 8px
          height: 8px
          display: block
          border-radius: 100%
          background-color: #77BFD7
          margin-right: 8px
          @media (min-width: map-get($breakpoints, 'sm'))
            width: 10px
            height: 10px
            margin-right: 12px
          @media (min-width: map-get($breakpoints, 'lg'))
            width: 16px
            height: 16px
        h3
          font-weight: 400
          font-size: 16px
          line-height: 18px
          @media (min-width: map-get($breakpoints, 'sm'))
            font-size: 18px
            line-height: 22px
          @media (min-width: map-get($breakpoints, 'lg'))
            font-size: 22px
            line-height: 27px
  &__button
    max-width: 250px
    height: 55px
    margin: 0 auto
    @media (min-width: map-get($breakpoints, 'sm'))
      margin: 0
    @media (min-width: map-get($breakpoints, 'lg'))
      max-width: 300px
      height: 66px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      max-width: 328px
      height: 72px
  &__photo
    display: block
    position: absolute
    bottom: 0
    right: 7px
    z-index: -1
    @media (min-width: map-get($breakpoints, 'sm'))
      right: -156px
    @media (min-width: map-get($breakpoints, 'lg'))
      right: -180px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      right: -221px
    ::v-deep
      img
        width: 300px
        height: auto
        @media (min-width: map-get($breakpoints, 'sm'))
          width: 530px
        @media (min-width: map-get($breakpoints, 'lg'))
          width: 750px
        @media (min-width: map-get($breakpoints, 'xxxl'))
          width: 944px
</style>
