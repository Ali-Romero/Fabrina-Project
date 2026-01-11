<template>
  <section id="calculation-section" class="calculation-section">
    <div class="calculation-section__wrapper o-hidden">
      <ui-wrapper>
        <div class="calculation-section__inner">
          <transition name="fade-blur">
            <div :key="currentId" class="calculation-section__image">
              <img
                class="example-card__image"
                :src="currentItem.image"
                width="583"
                height="1010"
                alt="image"
                loading="lazy"
              />
            </div>
          </transition>
          <h2 class="calculation-section__title title-secondary">
            <span></span>
            Расчёт стоимости пошива. <br />
            От чего зависит цена?
          </h2>
          <div class="calculation-section__info-helper">
            Стоимость пошива рассчитывается индивидуально для каждого заказа и
            зависит от:
          </div>
          <div class="calculation-section__toggle">
            <div
              v-for="item in items"
              :key="item.id"
              class="calculation-section__toggle-item"
            >
              <app-calculation-item
                :title="`0${item.id} / ${item.title}`"
                :description="item.description"
                :expanded="item.id === currentId"
                :class="{
                  'calculation-section__toggle--active': item.id === currentId,
                }"
                @expand="currentId = item.id"
              />
            </div>
          </div>
          <div class="calculation-section__container">
            <div class="calculation-section__container-text">
              При заказе партии от 500 единиц разработка лекал осуществляется
              бесплатно.
            </div>
            <div
              class="calculation-section__container-btn"
              @click.prevent="modal = true"
            >
              <ui-button fluid>
                Получить расчёт
              </ui-button>
            </div>
          </div>
        </div>
      </ui-wrapper>
      <ui-modal v-model="modal">
        <app-feedback-modal-main
          title="Получите расчёт стоимости оптового пошива под Ваш заказ"
          btn-text="Получить расчёт"
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
      currentId: 1,
      items: [
        {
          id: 1,
          title: 'Стоимости ткани',
          description:
            'Себестоимость изделия на 80% складывается из цены материала. Цена ткани в свою очередь зависит от ряда факторов: курса валюты, состава, плотности, принта, ширины полотна, расхода на пошив единицы изделия.',
          image: require('@/assets/images/calculation-section-img-1.jpg?webp'),
        },
        {
          id: 2,
          title: 'Наличия элементов, усложняющих пошив',
          description:
            'Сложность пошива определяется выбранным фасоном, видом ткани, наличием декоративных элементов, отделки фурнитурой, отстрочки. Чем сложнее в исполнении изделие, тем больше времени уходит на его пошив, что напрямую влияет на конечную стоимость.',
          image: require('@/assets/images/calculation-section-img-2.jpg?webp'),
        },
        {
          id: 3,
          title: 'Скорость и качество пошива',
          description:
            'Важно учитывать, что качественное исполнение, тщательная проработка деталей и проверка на брак может незначительно увеличить срок пошива. Такой заказ обойдётся чуть дороже, чем в Китае, Киргизии, Казахстане, но будет значительно выигрывать по качеству и отсутствию брака.',
          image: require('@/assets/images/calculation-section-img-3.jpg?webp'),
        },
        {
          id: 4,
          title: 'Стоимости фурнитуры',
          description:
            'Цена фурнитуры зависит от курса доллара, сложности дизайна и количества элементов, используемых на одну единицу изделия.',
          image: require('@/assets/images/calculation-section-img-4.jpg?webp'),
        },
        {
          id: 5,
          title: 'Объёма заказа',
          description:
            'Чем больше партия, тем дешевле обходится пошив одной единицы изделия.',
          image: require('@/assets/images/calculation-section-img-5.jpg?webp'),
        },
        {
          id: 6,
          title: 'Требований к упаковке',
          description:
            'Стоимость упаковки зависит от потребностей заказчика: фулфилмент (упаковка под ключ с учётом требований к реализации в рознице или через маркетплейсы) или полуфабрикат (без нашивки брендированных бирок в стандартной упаковке, предназначенной для транспортировки готовой партии).',
          image: require('@/assets/images/calculation-section-img-6.jpg?webp'),
        },
      ],
    }
  },
  computed: {
    currentItem() {
      return this.items.find((item) => item.id === this.currentId)
    },
  },
}
</script>

<style lang="sass" scoped>
.calculation-section
  &__inner
    padding: 50px 0 60px 0
    position: relative
    max-width: 542px
    margin: 0 0 0 auto
    @media (min-width: map-get($breakpoints, 'sm'))
      padding: 66px 0
    @media (min-width: map-get($breakpoints, 'lg'))
      max-width: 873px
      padding: 70px 0
    @media (min-width: map-get($breakpoints, 'xxxl'))
      padding: 80px 0
      max-width: 1081px
  &__image
    position: absolute
    height: 100%
    top: 260px
    left: 0
    right: 0
    margin: 0 auto
    z-index: 1
    width: 300px
    height: 274px
    overflow: hidden
    display: flex
    justify-content: center
    align-items: flex-start
    @media (min-width: map-get($breakpoints, 'sm'))
      display: block
      margin: 0
      right: auto
      left: -462px
      right: auto
      overflow: unset
      width: auto
      height: 100%
      top: 0
    @media (min-width: map-get($breakpoints, 'lg'))
      left: -536px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      left: -586px
    img
      width: 220px
      height: auto
      @media (min-width: map-get($breakpoints, 'sm'))
        width: 462px
      @media (min-width: map-get($breakpoints, 'lg'))
        width: 536px
      @media (min-width: map-get($breakpoints, 'xxxl'))
        width: 586px
  &__title
    margin-bottom: 30px
    @media (min-width: map-get($breakpoints, 'sm'))
      padding-left: 44px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      margin-bottom: 40px
      padding-left: 64px
    span
      padding-left: 48px
      @media (min-width: map-get($breakpoints, 'lg'))
        padding-left: 240px
    &:before
      max-width: 42px
      @media (min-width: map-get($breakpoints, 'sm'))
        max-width: 84px
      @media (min-width: map-get($breakpoints, 'lg'))
        max-width: 273px
  &__info-helper
    font-size: 15px
    line-height: 19px
    margin-bottom: 332px
    text-align: center
    @media (min-width: map-get($breakpoints, 'sm'))
      text-align: left
      padding-left: 44px
      font-size: 16px
      line-height: 20px
      margin-bottom: 30px
    @media (min-width: map-get($breakpoints, 'lg'))
      margin-bottom: 40px
      font-size: 18px
      line-height: 23px
      padding-left: 64px
  &__toggle
    margin-bottom: 36px
    @media (min-width: map-get($breakpoints, 'sm'))
      padding-left: 69px
    @media (min-width: map-get($breakpoints, 'lg'))
      padding-left: 200px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      padding-left: 304px
    &--active
      ::v-deep
        .calculation-item__title
          color: #1C95BC
          margin-bottom: 6px
          @media (min-width: map-get($breakpoints, 'xxxl'))
            margin-bottom: 10px
  &__toggle-item
    margin-bottom: 20px
    @media (min-width: map-get($breakpoints, 'lg'))
      margin-bottom: 26px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      margin-bottom: 32px
    &:last-child
      margin-bottom: 0
  &__container
    @media (min-width: map-get($breakpoints, 'sm'))
      padding-left: 69px
    @media (min-width: map-get($breakpoints, 'lg'))
      padding-left: 200px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      padding-left: 304px
  &__container-text
    font-size: 15px
    line-height: 19px
    margin-bottom: 20px
    text-align: center
    @media (min-width: map-get($breakpoints, 'sm'))
      text-align: left
      font-size: 16px
      line-height: 20px
    @media (min-width: map-get($breakpoints, 'lg'))
      font-size: 18px
      line-height: 23px
      margin-bottom: 35px
  &__container-btn
    max-width: 258px
    height: 56px
    margin: 0 auto
    @media (min-width: map-get($breakpoints, 'sm'))
      margin: 0
      max-width: 260px
      height: 60px
    @media (min-width: map-get($breakpoints, 'lg'))
      max-width: 328px
      height: 72px
</style>
