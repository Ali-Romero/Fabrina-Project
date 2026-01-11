<template>
  <section class="about-section">
    <div class="about-section__wrapper o-hidden">
      <ui-wrapper>
        <div class="about-section__inner">
          <h2 class="about-section__title title-secondary">
            <span></span>
            Факты o нас
          </h2>
          <div class="about-section__circle">
            <div class="about-circle">
              <div
                v-for="item in items"
                :key="item.id"
                class="about-circle__item"
              >
                <app-about-section-toggle
                  :num="`0${item.id}`"
                  :right="item.right"
                  :expand="item.expand"
                >
                  <app-about-section-card
                    :title="item.title"
                    :description="item.description"
                  />
                </app-about-section-toggle>
              </div>
            </div>
            <div class="about-section__circle-photo"></div>
          </div>
          <div class="about-section__swiper-mobile">
            <ui-swiper class="about-swiper" :params="params">
              <ui-swiper-wrapper>
                <ui-swiper-slide v-for="item in items" :key="item.id">
                  <app-about-section-toggle
                    :num="`0${item.id}`"
                    :right="item.right"
                  >
                    <app-about-section-card
                      :number="`0${item.id}`"
                      :title="item.title"
                      :description="item.description"
                    />
                  </app-about-section-toggle>
                </ui-swiper-slide>
              </ui-swiper-wrapper>
            </ui-swiper>
          </div>
        </div>
      </ui-wrapper>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          title: 'Осуществляем полный производственный цикл',
          description:
            'от разработки модели до отгрузки готовой оптовой партии',
          expand: true,
        },
        {
          id: 2,
          title: 'Берём в работу заказы от 200 единиц изделий в партии',
          description:
            'Чем больше заказ, тем дешевле стоит пошив единицы изделия',
        },
        {
          id: 3,
          title: 'Шьём трикотажные изделия',
          description: 'по вашим эскизам или c использованием готовых лекал',
        },
        {
          id: 4,
          title: 'Предоставляем ткань или используем ваши материалы',
          description: 'На усмотрение заказчика',
        },
        {
          id: 5,
          title: 'Каталог из более 1000 различных моделей',
          description: 'Можно адаптировать под ваш бренд',
          right: true,
        },
        {
          id: 6,
          title: 'Осуществляем упаковку одежды',
          description:
            'для реализации через маркетплейсы Wildberries, Ozon, KazanExpress, Я.Маркет, AliExpress, Lamoda',
          right: true,
        },
        {
          id: 7,
          title: 'Пошив для всех сегментов вашей целевой аудитории',
          description:
            'женская, мужская, молодёжная одежда, спортивные костюмы, термобельё, корпоративная форма, спецодежда, за исключением нижнего белья и детской одежды',
          right: true,
        },
        {
          id: 8,
          title: 'Используем на производстве импортное оборудование',
          description:
            'Выполняем сложные строчки и элементы декора быстро и качественно',
          right: true,
        },
      ],
      params: {
        slidesPerView: 'auto',
        speed: 500,
        centeredSlides: true,
        spaceBetween: 28,
        breakpoints: {
          768: {
            spaceBetween: 54,
          },
        },
      },
    }
  },
}
</script>

<style lang="sass" scoped>
.about-section
  background: url("@/assets/images/about-section-bg.jpg?webp")
  background-size: cover
  background-repeat: no-repeat
  background-position: center
  background-size: 768px 100%
  @media (min-width: map-get($breakpoints, 'sm'))
    background-size: 1024px 100%
  @media (min-width: map-get($breakpoints, 'md'))
    background-size: cover

  &__wrapper
    position: relative
    z-index: 1
    &:before
      content: ""
      position: absolute
      pointer-events: none
      width: 100%
      height: 100%
      z-index: 2
      background: url("@/assets/images/about-section-photo.png?webp")
      background-size: 302px auto
      background-position: center
      background-position-y: bottom
      background-repeat: no-repeat
      bottom: -120px
      @media (min-width: map-get($breakpoints, 'sm'))
        background-size: 388px auto
      @media (min-width: map-get($breakpoints, 'md'))
        content: none
      @media (min-width: map-get($breakpoints, 'xxxl'))
        content: ""
        bottom: 0
        background: url("@/assets/images/about-section-photo.png?webp")
        background-size: 398px auto
        background-position: center
        background-position-y: bottom
        background-repeat: no-repeat
      @media (min-width: map-get($breakpoints, 'xxxxxl'))
        background-size: 487px auto
        background-position: center
        background-position-y: bottom
  &__inner
    padding: 60px 0 390px 0
    @media (min-width: map-get($breakpoints, 'sm'))
      padding: 80px 0 520px 0
    @media (min-width: map-get($breakpoints, 'md'))
      padding: 76px 0
    @media (min-width: map-get($breakpoints, 'xxxl'))
      padding: 120px 0 51px 0
  &__title
    margin-bottom: 26px
    @media (min-width: map-get($breakpoints, 'sm'))
      margin-bottom: 44px
    @media (min-width: map-get($breakpoints, 'md'))
      margin-bottom: 90px
    @media (min-width: map-get($breakpoints, 'xxxxxl'))
      margin-bottom: 111px
  &__circle
    display: none
    @media (min-width: map-get($breakpoints, 'md'))
      display: flex
      justify-content: center
      position: relative
  &__circle-photo
    width: 320px
    height: 320px
    position: absolute
    background-color: #e3e0e0
    left: 0
    left: 0
    right: 0
    bottom: 0
    top: 0
    margin: auto
    border-radius: 100%
    overflow: hidden
    @media (min-width: map-get($breakpoints, 'xxxl'))
      display: none
    &:before
      content: ""
      position: absolute
      pointer-events: none
      width: 100%
      height: 100%
      z-index: 2
      background: url("@/assets/images/about-section-photo.png?webp")
      background-size: 186px auto
      background-position: center
      background-position-y: bottom
      background-repeat: no-repeat
      @media (min-width: map-get($breakpoints, 'xxxl'))
        content: none
  &__swiper-mobile

    @media (min-width: map-get($breakpoints, 'md'))
      display: none
.about-swiper
  &.swiper
    overflow: unset
  & .swiper-slide
      width: 244px !important
      @media (min-width: map-get($breakpoints, 'sm'))
        width: 320px !important
.about-circle
  width: 410px
  height: 410px
  border: 1px solid #1C95BC
  border-radius: 100%
  position: relative
  @media (min-width: map-get($breakpoints, 'xxxl'))
    width: 552px
    height: 552px
  @media (min-width: map-get($breakpoints, 'xxxxxl'))
    width: 692px
    height: 692px

  &__item
    position: absolute
    &:nth-child(1)
      top: -17px
      left: 139px
      @media (min-width: map-get($breakpoints, 'xxxl'))
        top: 15px
        left: 109px
      @media (min-width: map-get($breakpoints, 'xxxxxl'))
        top: 38px
    &:nth-child(2)
      top: 111px
      left: -4px
      @media (min-width: map-get($breakpoints, 'xxxl'))
        top: 159px
        left: -11px
      @media (min-width: map-get($breakpoints, 'xxxxxl'))
        top: 213px
        left: -15px
    &:nth-child(3)
      top: 270px
      left: -2px
      @media (min-width: map-get($breakpoints, 'xxxl'))
        top: 344px
        left: -9px
      @media (min-width: map-get($breakpoints, 'xxxxxl'))
        top: 427px
        left: -9px
    &:nth-child(4)
      top: 383px
      left: 139px
      @media (min-width: map-get($breakpoints, 'xxxl'))
        top: 473px
        left: 83px
      @media (min-width: map-get($breakpoints, 'xxxxxl'))
        top: 587px
        left: 100px
    &:nth-child(5)
      top: 383px
      right: 139px
      @media (min-width: map-get($breakpoints, 'xxxl'))
        top: 473px
        right: 83px
      @media (min-width: map-get($breakpoints, 'xxxxxl'))
        top: 587px
        right: 100px
    &:nth-child(6)
      top: 270px
      right: -2px
      @media (min-width: map-get($breakpoints, 'xxxl'))
        top: 344px
        right: -9px
      @media (min-width: map-get($breakpoints, 'xxxxxl'))
        top: 427px
        right: -9px
    &:nth-child(7)
      top: 111px
      right: -4px
      @media (min-width: map-get($breakpoints, 'xxxl'))
        top: 159px
        right: -11px
      @media (min-width: map-get($breakpoints, 'xxxxxl'))
        top: 213px
        right: -15px
    &:nth-child(8)
      top: -17px
      right: 139px
      @media (min-width: map-get($breakpoints, 'xxxl'))
        top: 15px
        right: 109px
      @media (min-width: map-get($breakpoints, 'xxxxxl'))
        top: 38px
</style>
