<template>
  <div class="advantage-section">
    <div class="advantage-section__wrapper o-hidden">
      <ui-wrapper>
        <div class="advantage-section__inner">
          <h2 class="advantage-section__title title-secondary">
            <span></span>
            5 преимуществ сотрудничества
          </h2>
          <div class="advantage-section__info">
            <div class="advantage-section__info-item">
              <div class="advantage-section__info-item-num">
                <ui-icon name="num-icon-1"></ui-icon>
              </div>
              <div class="advantage-section__info-item-text">
                <h3>
                  <span>Экономия времени и денег —</span>
                  <div>все этапы осуществляются на одном производстве</div>
                </h3>
              </div>
            </div>
            <div class="advantage-section__info-item">
              <div class="advantage-section__info-item-num">
                <ui-icon name="num-icon-2"></ui-icon>
              </div>
              <div class="advantage-section__info-item-text">
                <h3>
                  <span>Уникальный ассортимент,</span>
                  <div>пошитый специально для вашего бренда</div>
                </h3>
              </div>
            </div>
            <div class="advantage-section__info-item">
              <div class="advantage-section__info-item-num">
                <ui-icon name="num-icon-3"></ui-icon>
              </div>
              <div class="advantage-section__info-item-text">
                <h3>
                  <span>Адаптация размерного ряда</span>
                  <div>под фигуру российских покупателей</div>
                </h3>
              </div>
            </div>
            <div class="advantage-section__info-item">
              <div class="advantage-section__info-item-num">
                <ui-icon name="num-icon-4"></ui-icon>
              </div>
              <div class="advantage-section__info-item-text">
                <h3>
                  <span>Премиальное качество пошива,</span>
                  <div>внимание к деталям и к исполнению</div>
                </h3>
              </div>
            </div>
            <div class="advantage-section__info-item">
              <div class="advantage-section__info-item-num">
                <ui-icon name="num-icon-5"></ui-icon>
              </div>
              <div class="advantage-section__info-item-text">
                <h3>
                  <span>Прозрачность сделки,</span>
                  <div>
                    предоставление всех необходимых документов для
                    контролирующих органов
                  </div>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </ui-wrapper>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.advantage-section
  position: relative
  background-color: #1C95BC
  &:before
    content: ""
    position: absolute
    width: 100%
    height: 100%
    pointer-events: none
    z-index: 1
    background: url("@/assets/images/advantage-section-photo.png?webp")
    background-size: 309px auto
    background-position-x: calc(50% - 12px)
    background-repeat: no-repeat
    background-position-y: bottom
    @media (min-width: map-get($breakpoints, 'sm'))
      background-size: 446px auto
      background-position-x: calc(50% - 312px)
    @media (min-width: map-get($breakpoints, 'lg'))
      background-size: 706px auto
      background-position-x: calc(50% - 351px)
    @media (min-width: map-get($breakpoints, 'xxxl'))
      background-size: 888px auto
      background-position-x: calc(50% - 524px)
  &__inner
    padding: 60px 0 300px 0
    color: white
    max-width: 668px
    margin: 0 0 0 auto
    @media (min-width: map-get($breakpoints, 'sm'))
      padding: 74px 0 69px 0
    @media (min-width: map-get($breakpoints, 'lg'))
      padding: 120px 0 107px 0
      max-width: 745px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      max-width: 950px
  &__title
    margin-bottom: 56px
    @media (min-width: map-get($breakpoints, 'lg'))
      margin-bottom: 64px
    span
      padding-left: 79px
      @media (min-width: map-get($breakpoints, 'sm'))
        padding-left: 190px
      @media (min-width: map-get($breakpoints, 'xxxl'))
        padding-left: 175px
    &:before
      max-width: 70px
      background-color: white
      @media (min-width: map-get($breakpoints, 'sm'))
        max-width: 170px
      @media (min-width: map-get($breakpoints, 'xxxl'))
        max-width: 142px
  &__info
    max-width: 480px
    margin: 0 0 0 auto
    @media (min-width: map-get($breakpoints, 'lg'))
      max-width: 558px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      max-width: 776px
  &__info-item
    display: flex
    align-items: center
    margin: 0 0 26px 0
    @media (min-width: map-get($breakpoints, 'sm'))
      margin: 0 0 35px 0
    @media (min-width: map-get($breakpoints, 'lg'))
      margin: 0 0 45px 0
    @media (min-width: map-get($breakpoints, 'xxxl'))
      margin: 0 0 67px 0
    &:last-child
      margin-bottom: 0
      .advantage-section__info-item-num
        &:before
          content: none
  &__info-item-num
    display: flex
    justify-content: center
    align-items: center
    border: 1px solid white
    border-radius: 100%
    width: 30px
    height: 30px
    margin: 0 7px 0 0
    background-color: #1C95BC
    position: relative
    @media (min-width: map-get($breakpoints, 'sm'))
      width: 36px
      height: 36px
      margin: 0 14px 0 0
    @media (min-width: map-get($breakpoints, 'lg'))
      width: 46px
      height: 46px
      margin-right: 20px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      width: 56px
      height: 56px
    &:before
      content: ""
      position: absolute
      height: 80px
      width: 1px
      background-color: white
      bottom: calc( 0% - 80px )
    svg
      width: 16px
      height: auto
      @media (min-width: map-get($breakpoints, 'sm'))
        width: 20px
      @media (min-width: map-get($breakpoints, 'lg'))
        width: 24px
        height: 16px

  &__info-item-text
    max-width: 262px
    @media (min-width: map-get($breakpoints, 'sm'))
      max-width: 429px
    @media (min-width: map-get($breakpoints, 'lg'))
      max-width: 488px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      max-width: 588px
    span
      font-family: 'Montserrat-Bold'
    h3
      font-size: 14px
      line-height: 19px
      font-weight: 400
      @media (min-width: map-get($breakpoints, 'sm'))
        font-size: 16px
        line-height: 20px
      @media (min-width: map-get($breakpoints, 'lg'))
        font-size: 18px
        line-height: 22px
      @media (min-width: map-get($breakpoints, 'xxxl'))
        font-size: 22px
        line-height: 27px
</style>
