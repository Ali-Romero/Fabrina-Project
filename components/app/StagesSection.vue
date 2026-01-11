<template>
  <section class="stages-section">
    <div v-gsap-timeline:stages.sm="timeline">
      <ui-wrapper>
        <div class="stages-section__container">
          <div class="stages-section__inner">
            <div class="stages-section__slider">
              <app-stages-section-slider :value="slide" :items="stages" />
            </div>
            <div class="stages-section__head">
              <div class="stages-section__titles">
                <h2
                  class="stages-section__title stages-section__title--primary"
                >
                  От идеи до готовой
                </h2>
                <h2 class="stages-section__title">
                  к реализации в рознице и на маркетплейсах
                </h2>
                <h2 class="stages-section__title">
                  партии одежды
                </h2>
              </div>
              <div class="stages-section__description">
                Возьмём на себя весь производственный процесс и придадим
                товарный вид готовым изделиям. Вам остаётся только принять
                готовую к реализации, упакованную партию одежды.
              </div>
            </div>
            <div class="stages-section__content">
              <div class="stages-section__nav">
                <div class="stages-section__subtitle">
                  Этапы сотрудничества:
                </div>
                <div class="stages-section__progress">
                  <div
                    class="stages-section__progress-track"
                    :style="{ width: `${progress}%` }"
                  />
                </div>
              </div>
              <div class="stages-section__stages">
                <div class="stages-section__track">
                  <app-stages-section-stage
                    v-for="(stage, index) in stages"
                    :key="stage.id"
                    v-gsap-from-to:stages.sm="tweens[index]"
                    :title="`0${stage.id} / ${stage.title}`"
                    :items="stage.items"
                    class="stages-section__stage"
                    :class="{
                      'stages-section__stage--active': index === slide,
                    }"
                  />
                </div>
              </div>
            </div>
            <div class="stages-section__slider-mobile">
              <div class="stages-section__slider-btn-container">
                <button
                  class="stages-section__slider-btn stages-section__slider-btn--prev"
                  @click="prev"
                >
                  <ui-icon name="arrow-icon-small"></ui-icon>
                </button>
                <button
                  class="stages-section__slider-btn stages-section__slider-btn--next"
                  @click="next"
                >
                  <ui-icon name="arrow-icon-small"></ui-icon>
                </button>
              </div>
              <ui-swiper v-model="slide" :params="params">
                <ui-swiper-wrapper>
                  <ui-swiper-slide
                    v-for="(stage, index) in stages"
                    :key="stage.id"
                  >
                    <app-stages-section-stage
                      :title="`0${stage.id} / ${stage.title}`"
                      :items="stage.items"
                      class="stages-section__slider-stage"
                      :class="{
                        'stages-section__slider-stage--active': index === slide,
                      }"
                    />
                  </ui-swiper-slide>
                </ui-swiper-wrapper>
              </ui-swiper>
            </div>
            <div class="stages-section__circle-mobile">
              <app-stages-section-slider-mobile
                :value="slide"
                :items="stages"
              />
            </div>
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
      progress: 0,
      slide: 0,
      stages: [
        {
          id: 1,
          title: 'Консультация и заключение договора',
          icon: 'stage-pen',
          items: [
            'Помощь в разработке востребованной линейки одежды',
            'Расчёт себестоимости',
            'Подбор ткани (с использованием давальческого сырья)',
            'Заключение официального договора на оптовый пошив',
          ],
        },
        {
          id: 2,
          title: 'Разработка лекал и технологических карт',
          icon: 'stage-sewing',
          items: [
            'Предоставление собственных лекал',
            'Доработка лекал с учётом особенностей модели',
            'Раскрой по лекалам от заказчика',
            'Пошив тестового образца',
            'Согласование образца',
          ],
        },
        {
          id: 3,
          title: 'Массовый раскрой и пошив',
          icon: 'stage-machine',
          items: [
            'Согласование сроков заказа',
            'Проверка ткани на брак',
            'Индивидуальная раскладка элементов на ткани с целью экономии материала',
            'Массовый раскрой',
            'Пошив оптовой партии одежды',
          ],
        },
        {
          id: 4,
          title: 'Подготовка к реализации в рознице и на маркетплейсах',
          icon: 'stage-shirt',
          items: [
            'Печать этикеток, размерников, составников и бирок в соответствии со стандартами ГОСТ и требованиями маркетплейсов',
            'Влажная тепловая обработка изделий',
            'Упаковка',
            'Крепление штрих-кодов',
          ],
        },
        {
          id: 5,
          title: 'Отгрузка готовой партии',
          icon: 'stage-boxes',
          items: [
            'Подбор оптимального решения по стоимости и срокам доставки',
            'Передача заказа в транспортную компанию',
            'Доставка заказа до складов маркетплейсов в Казани курьером',
          ],
        },
      ],
      params: {
        slidesPerView: 1,
        speed: 500,
      },
    }
  },
  computed: {
    timeline() {
      return this.getTimeline()
    },
    tweens() {
      const items = new Array(this.stages.length - 2).fill(this.middleTween)

      return [
        this.getFirstTween(0),
        ...items.map((_, index) => this.getMiddleTween(index + 1)),
        this.getLastTween(this.stages.length - 1),
      ]
    },
  },
  methods: {
    prev() {
      this.slide = Math.max(this.slide - 1, 0)
    },
    next() {
      this.slide = Math.min(this.slide + 1, this.stages.length - 1)
    },
    getTimeline() {
      return {
        pin: true,
        pinSpacing: true,
        scrub: 1,
        start: `top top+=${this.$config.headerHeight}`,
        end: '200%',
        onUpdate: ({ progress }) => {
          this.progress = Math.ceil(progress * 100)
        },
      }
    },
    getFirstTween(index) {
      return [
        {
          yPercent: 0,
        },
        {
          yPercent: 0,
          onReverseComplete: () => (this.slide = index),
        },
      ]
    },
    getMiddleTween(index) {
      return [
        {
          yPercent: 100,
        },
        {
          yPercent: 0,
          onStart: () => (this.slide = index),
          onReverseComplete: () => (this.slide = index - 1),
        },
      ]
    },
    getLastTween(index) {
      return [
        {
          yPercent: 100,
        },
        {
          yPercent: 0,
          onStart: () => (this.slide = index),
          onReverseComplete: () => (this.slide = index - 1),
        },
      ]
    },
  },
}
</script>

<style lang="sass" scoped>
.stages-section
  background-color: #F5F2F1
  overflow: hidden

  &__container
    position: relative
    z-index: 1
    @include above('sm')
      position: unset
      padding-left: 260px
    @include above('lg')
      padding-left: 290px
    @include above('xxxl')
      padding-left: 330px

  &__inner
    position: relative
    padding: 50px 0 108px 0
    @include above('sm')
      background: url('@/assets/images/stages-bg.svg')
      background-repeat: no-repeat
      background-position: right center
      background-size: 300px auto
      padding: 50px 0 40px 30px
    @include above('lg')
      padding: 63px 0 60px 64px
      background-size: 450px auto
      @media (max-height: 800px)
        padding: 30px 0 20px 64px
    @include above('xxxl')
      background-size: auto
      padding: 100px 0 100px 64px
      @media (max-height: 800px)
        padding: 50px 0 20px 64px
        background-size: 600px auto

  &__slider
    display: none
    @include above('sm')
      display: flex
      align-items: center
      justify-content: center
      height: 100%
      width: 609px
      position: absolute
      top: 0
      right: 100%
      background: #1EA2CC
    @include above('lg')
      width: 777px
      @media (max-height: 800px)
        width: 540px
    @include above('xxxl')
      width: 932px
      @media (max-height: 800px)
        width: 600px

  &__head
    margin-bottom: 107px
    @include above('sm')
      margin-bottom: 60px
    @include above('lg')
      margin-bottom: 94px
      @media (max-height: 800px)
        margin-bottom: 40px
    @include above('xxxl')
      margin-bottom: 123px
      @media (max-height: 800px)
        margin-bottom: 50px

  &__titles
    margin-bottom: 30px
    @media (max-height: 800px)
      margin-bottom: 20px
    @include above('xxxl')
      margin-bottom: 53px
      @media (max-height: 800px)
        margin-bottom: 30px

  &__title
    font-size: 21px
    line-height: 26px
    position: relative
    font-weight: 400
    @include above('sm')
      font-size: 26px
      line-height: 27px
    @include above('lg')
      font-size: 30px
      line-height: 40px
      @media (max-height: 800px)
        font-size: 24px
        line-height: 30px
    @include above('xxxl')
      font-size: 38px
      line-height: 46px
      @media (max-height: 800px)
        font-size: 32px
        line-height: 40px

    &--primary
      margin-left: -32px
      display: flex
      align-items: center
      @include above('lg')
        margin-left: -64px

      &::before
        content: ''
        margin-right: 12px
        display: block
        width: 46px
        height: 0
        border-bottom: 1px solid
        @include above('sm')
          margin-right: 20px
          width: 76px
        @include above('lg')
          width: 170px
        @include above('xxxl')
          margin-right: 32px
          width: 273px
          @media (max-height: 800px)
            width: 218px

  &__description
    max-width: 656px
    font-size: 14px
    line-height: 17px
    @include above('sm')
      font-size: 15px
      line-height: 17px
    @include above('lg')
      max-width: 656px
      font-size: 18px
      line-height: 23px
      @media (max-height: 800px)
        max-width: 590px
        font-size: 16px
        line-height: 20px

  &__content
    display: none
    @include above('sm')
      display: block
    @include above('lg')
      display: flex
      align-items: flex-start

  &__nav
    margin-bottom: 80px
    @media (max-height: 800px)
      margin-bottom: 26px
    @include above('lg')
      padding: 0 30px 0 0
      margin-bottom: 30px

  &__subtitle
    min-width: 240px
    font-size: 16px
    line-height: 20px
    margin-bottom: 14px
    @include above('lg')
      margin-bottom: 30px

  &__progress
    background: #FFFFFF
    border-radius: 22px
    height: 8px

  &__progress-track
    background: #1C95BC
    border-radius: 22px
    height: 100%

  &__stages
    flex: 1

  &__track
    position: relative
    height: 340px
    @include above('lg')
      height: 400px
      @media (max-height: 800px)
        height: 300px

  &__stage
    width: 100%
    height: 100%
    position: absolute
    top: 0
    left: 0
    opacity: 0
    transition: opacity 0.5s

    &--active
      opacity: 1

  &__slider-mobile
    position: relative
    @media (min-width: map-get($breakpoints, 'sm'))
      display: none
    .swiper
      border-radius: 12% 12% 0 0

  &__circle-mobile
    position: absolute
    top: 320px
    z-index: -1
    left: -58px
    @media (min-width: map-get($breakpoints, 'sm'))
      display: none
    &:before
      content: ""
      position: absolute
      z-index: 1
      width: 120%
      height: 104%
      left: -51px
      top: 164px
      background-color: #F5F2F1

  &__slider-btn-container
    position: absolute
    bottom: -60px
    width: 100%
    display: flex
    justify-content: center
    align-items: center

  &__slider-btn
    padding: 0
    background: #ebebeb
    border: none
    border-radius: 100%
    width: 40px
    height: 40px
    display: flex
    justify-content: center
    align-items: center
    transform: scale(1)
    transition: scale 0.5s
    &:hover
      transform: scale(1.2)
    svg
      color: #1EA2CC
      width: 28px
      height: 12px
    &--prev
      margin-right: 30px
      svg
        transform: rotate(180deg)
</style>
