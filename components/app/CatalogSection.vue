<template>
  <section id="catalog-section" class="catalog-section">
    <div class="catalog-section__wrapper o-hidden">
      <ui-wrapper>
        <div class="catalog-section__inner">
          <div class="catalog-section__info">
            <ul>
              <li>
                <div>
                  <img
                    src="@/assets/images/catalog-info-icon-1.svg"
                    alt="icon"
                    loading="lazy"
                    width="65"
                    height="65"
                  />
                </div>
                <span><h3>Официальный договор</h3></span>
              </li>
              <li>
                <div>
                  <img
                    src="@/assets/images/catalog-info-icon-2.svg"
                    alt="icon"
                    loading="lazy"
                    width="65"
                    height="65"
                  />
                </div>
                <span
                  ><h3>
                    Подготовка к реализации <br />на маркетплейсах и в розницу
                  </h3></span
                >
              </li>
              <li>
                <div>
                  <img
                    src="@/assets/images/catalog-info-icon-3.svg"
                    alt="icon"
                    loading="lazy"
                    width="65"
                    height="65"
                  />
                </div>
                <span
                  ><h3>
                    Доставка по всей России <br />и отгрузка на склады
                    <br />маркетплейсов
                  </h3></span
                >
              </li>
            </ul>
          </div>
          <h2
            id="catalog-products"
            class="catalog-section__title title-secondary"
          >
            <span></span>
            Каталог товаров и услуг
          </h2>
          <div
            ref="content"
            v-gsap-watch:catalog
            v-gsap-watch:stages
            class="catalog-section__content"
          >
            <div class="catalog-section__nav">
              <div
                v-gsap-timeline:catalog.sm="
                  (el) => ({
                    pin: true,
                    pinSpacing: false,
                    endTrigger: () => $refs.content,
                    start: `top top+=${$config.headerHeight + 18}`,
                    end: () =>
                      `bottom-=${el.offsetHeight + 18 + $config.headerHeight}`,
                  })
                "
                class="catalog-section__sticky"
              >
                <ul>
                  <li
                    v-for="category in categories"
                    :key="category.id"
                    v-gsap-scroll-to.sm="{ to: '#catalog-products' }"
                    :class="{ active: category.id === categoryId }"
                    @click="categoryId = category.id"
                  >
                    <span></span>
                    {{ category.name }}
                  </li>
                </ul>
                <div class="catalog-section__nav-info">
                  <div
                    v-if="!isCategoryService"
                    class="catalog-section__nav-info-text"
                  >
                    <span>Соберите </span>коллекцию товаров <br />
                    для Вашего бренда
                  </div>

                  <div
                    v-if="isCategoryService"
                    class="catalog-section__nav-info-text"
                  >
                    <span>Подберите </span>услуги для заказа <br />
                    оптового пошива одежды
                  </div>
                  <div class="catalog-section__nav-info-btn">
                    <ui-button fluid @click.prevent="modal = true">
                      {{ buttonText }}
                    </ui-button>
                  </div>
                </div>
              </div>
            </div>
            <transition name="fade-blur" mode="out-in">
              <div :key="categoryId" class="catalog-section__product">
                <div class="catalog-section__product-mb d-sm-none">
                  <ui-swiper class="swiper-poduct" :params="params">
                    <ui-swiper-wrapper>
                      <ui-swiper-slide
                        v-for="product in categoryProducts"
                        :key="product.id"
                      >
                        <app-catalog-product
                          :image="product.image"
                          :name="product.name"
                        />
                      </ui-swiper-slide>
                    </ui-swiper-wrapper>
                    <ui-swiper-navigation>
                      <ui-swiper-navigation-button
                        prev
                        class="swiper-button-prev"
                      >
                        <ui-icon name="arrow-icon" />
                      </ui-swiper-navigation-button>
                      <ui-swiper-navigation-button
                        next
                        class="swiper-button-next"
                      >
                        <ui-icon name="arrow-icon" />
                      </ui-swiper-navigation-button>
                    </ui-swiper-navigation>
                  </ui-swiper>
                </div>
                <div class="catalog-section__product-list">
                  <div
                    v-for="product in categoryProducts"
                    :key="product.name"
                    class="catalog-section__product-item"
                  >
                    <app-catalog-product
                      :image="product.image"
                      :name="product.name"
                    />
                  </div>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </ui-wrapper>
      <ui-modal v-model="modal">
        <app-feedback-modal-main
          :title="modalTitle"
          :btn-text="buttonText"
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
      categoryId: 1,
      categories: [
        {
          id: 1,
          name: 'Женская одежда',
        },
        {
          id: 2,
          name: 'Мужская одежда',
        },
        {
          id: 3,
          name: 'Униформа / Спецодежда',
        },
        {
          id: 4,
          name: 'Услуги',
        },
      ],
      products: [
        {
          id: 1,
          categoryId: 1,
          image: require('@/assets/images/catalog-product-women-1.jpg?webp'),
          name: 'Футболки',
        },
        {
          id: 2,
          categoryId: 1,
          image: require('@/assets/images/catalog-product-women-2.jpg?webp'),
          name: 'Худи / толстовки',
        },
        {
          id: 3,
          categoryId: 1,
          image: require('@/assets/images/catalog-product-women-3.jpg?webp'),
          name: 'Спортивная одежда',
        },
        {
          id: 4,
          categoryId: 1,
          image: require('@/assets/images/catalog-product-women-4.jpg?webp'),
          name: 'Джемперы и кардиганы',
        },
        {
          id: 5,
          categoryId: 1,
          image: require('@/assets/images/catalog-product-women-5.jpg?webp'),
          name: 'Платья',
        },
        {
          id: 6,
          categoryId: 1,
          image: require('@/assets/images/catalog-product-women-6.jpg?webp'),
          name: 'Юбки',
        },
        {
          id: 7,
          categoryId: 1,
          image: require('@/assets/images/catalog-product-women-7.jpg?webp'),
          name: 'Брюки',
        },
        {
          id: 8,
          categoryId: 1,
          image: require('@/assets/images/catalog-product-women-8.jpg?webp'),
          name: 'Шорты',
        },
        {
          id: 9,
          categoryId: 1,
          image: require('@/assets/images/catalog-product-women-9.jpg?webp'),
          name: 'Домашняя одежда',
        },
        {
          id: 10,
          categoryId: 1,
          image: require('@/assets/images/catalog-product-women-10.jpg?webp'),
          name: 'Пижамы',
        },
        {
          id: 11,
          categoryId: 1,
          image: require('@/assets/images/catalog-product-women-11.jpg?webp'),
          name: 'Термобельё',
        },
        {
          id: 12,
          categoryId: 1,
          image: require('@/assets/images/catalog-product-women-12.jpg?webp'),
          name: 'Одежда Size+',
        },
        {
          id: 13,
          categoryId: 2,
          image: require('@/assets/images/catalog-product-man-1.jpg?webp'),
          name: 'Футболки',
        },
        {
          id: 14,
          categoryId: 2,
          image: require('@/assets/images/catalog-product-man-2.jpg?webp'),
          name: 'Худи / толстовки',
        },
        {
          id: 15,
          categoryId: 2,
          image: require('@/assets/images/catalog-product-man-3.jpg?webp'),
          name: 'Спортивная одежда',
        },
        {
          id: 16,
          categoryId: 2,
          image: require('@/assets/images/catalog-product-man-4.jpg?webp'),
          name: 'Джемперы и кардиганы',
        },
        {
          id: 17,
          categoryId: 2,
          image: require('@/assets/images/catalog-product-man-5.jpg?webp'),
          name: 'Рубашки',
        },
        {
          id: 18,
          categoryId: 2,
          image: require('@/assets/images/catalog-product-man-6.jpg?webp'),
          name: 'Брюки',
        },
        {
          id: 19,
          categoryId: 2,
          image: require('@/assets/images/catalog-product-man-7.jpg?webp'),
          name: 'Шорты',
        },
        {
          id: 20,
          categoryId: 3,
          image: require('@/assets/images/catalog-product-uniform-1.jpg?webp'),
          name: 'Спецодежда',
        },
        {
          id: 21,
          categoryId: 3,
          image: require('@/assets/images/catalog-product-uniform-2.jpg?webp'),
          name: 'Корпоративный стиль',
        },
        {
          id: 22,
          categoryId: 3,
          image: require('@/assets/images/catalog-product-uniform-3.jpg?webp'),
          name: 'Брендированная униформа',
        },
        {
          id: 23,
          categoryId: 4,
          image: require('@/assets/images/catalog-product-services-1.jpg?webp'),
          name: 'Консультация',
        },
        {
          id: 24,
          categoryId: 4,
          image: require('@/assets/images/catalog-product-services-2.jpg?webp'),
          name: 'Раскрой',
        },
        {
          id: 25,
          categoryId: 4,
          image: require('@/assets/images/catalog-product-services-3.jpg?webp'),
          name: 'Пошив',
        },
        {
          id: 26,
          categoryId: 4,
          image: require('@/assets/images/catalog-product-services-4.jpg?webp'),
          name: 'Изготовление бирок, этикеток',
        },
        {
          id: 27,
          categoryId: 4,
          image: require('@/assets/images/catalog-product-services-5.jpg?webp'),
          name: 'Обработка изделия перед упаковкой',
        },
        {
          id: 28,
          categoryId: 4,
          image: require('@/assets/images/catalog-product-services-6.jpg?webp'),
          name: 'Печать и крепление штрих-кодов на упаковку',
        },
        {
          id: 29,
          categoryId: 4,
          image: require('@/assets/images/catalog-product-services-7.jpg?webp'),
          name: 'Доставка',
        },
        {
          id: 30,
          categoryId: 4,
          image: require('@/assets/images/catalog-product-services-8.jpg?webp'),
          name: 'Обучение анализу и расчёту себестоимости изделий',
        },
      ],
      params: {
        slidesPerView: 1,
        freeMode: false,
        speed: 500,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  },
  computed: {
    categoryProducts() {
      return this.products.filter((product) => {
        return product.categoryId === this.categoryId
      })
    },
    isCategoryService() {
      return this.categoryId === this.categories[3].id
    },
    buttonText() {
      return this.isCategoryService
        ? 'Подобрать услуги'
        : 'Подобрать ассортимент'
    },
    modalTitle() {
      return this.isCategoryService
        ? 'Подберите услуги для заказа оптового пошива одежды'
        : 'Соберите коллекцию товаров для Вашего бренда'
    },
  },
}
</script>

<style lang="sass" scoped>
.catalog-section
  &__inner
    padding: 60px 0 40px 0
    @media (min-width: map-get($breakpoints, 'sm'))
      padding: 70px 0 90px 0
    @media (min-width: map-get($breakpoints, 'xxxl'))
      padding: 100px 0 120px 0
  &__title
    margin-bottom: 36px
    max-width: 290px
    @media (min-width: map-get($breakpoints, 'sm'))
      max-width: 100%
    @media (min-width: map-get($breakpoints, 'xxxl'))
      margin-bottom: 48px
    span
      padding-left: 79px
      @media (min-width: map-get($breakpoints, 'sm'))
        padding-left: 328px
      @media (min-width: map-get($breakpoints, 'xxxl'))
        padding-left: 360px

    &:before
      max-width: 70px
      top: 18px
      @media (min-width: map-get($breakpoints, 'sm'))
        max-width: 298px
      @media (min-width: map-get($breakpoints, 'lg'))
        top: 22px
      @media (min-width: map-get($breakpoints, 'xxxl'))
        max-width: 328px
  &__info
    margin-bottom: 80px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      margin-bottom: 100px
    ul
      @media (min-width: map-get($breakpoints, 'sm'))
        display: flex
        justify-content: space-between
      li
        max-width: 328px
        text-align: center
        margin-bottom: 20px
        @media (min-width: map-get($breakpoints, 'sm'))
          margin-bottom: 0
        @media (min-width: map-get($breakpoints, 'lg'))
          max-width: 328px
        &:last-child
          margin-bottom: 0
        h3
          font-size: 14px
          line-height: 17px
          font-weight: 400
          @media (min-width: map-get($breakpoints, 'lg'))
            font-size: 16px
            line-height: 20px
          @media (min-width: map-get($breakpoints, 'xxxl'))
            font-size: 18px
            line-height: 22px

        div
          display: flex
          justify-content: center
          margin-bottom: 10px
          @media (min-width: map-get($breakpoints, 'lg'))
            margin-bottom: 15px
          @media (min-width: map-get($breakpoints, 'xxxl'))
            margin-bottom: 21px
        span
          display: block
        img
          width: 40px
          height: auto
          @media (min-width: map-get($breakpoints, 'lg'))
            width: 48px
          @media (min-width: map-get($breakpoints, 'xxxl'))
            width: 65px

  &__content
    position: relative
    @media (min-width: map-get($breakpoints, 'sm'))
      position: unset
      display: flex
  &__nav
    max-width: 298px
    width: 100%
    @media (min-width: map-get($breakpoints, 'sm'))
      margin-right: 32px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      max-width: 328px
    ul
      margin-bottom: 320px
      @media (min-width: map-get($breakpoints, 'sm'))
        margin-bottom: 60px
      li
        margin-bottom: 18px
        font-size: 15px
        line-height: 18px
        cursor: pointer
        display: flex
        align-items: center
        -webkit-tap-highlight-color: transparent
        -webkit-touch-callout: none
        -webkit-user-select: none
        -khtml-user-select: none
        -moz-user-select: none
        -ms-user-select: none
        user-select: none
        @media (min-width: map-get($breakpoints, 'xxxl'))
          font-size: 16px
          line-height: 20px
          margin-bottom: 24px
        span
          transition: all 0.4s
          transform: scale(0)
          width: 0
          height: 0
        &:last-child
          margin-bottom: 0
        &.active
          font-family: 'Montserrat-SemiBold'
          span
            transform: scale(1)
            background-color: black
            margin-right: 11px
            width: 16px
            height: 2px
  &__nav-info-text
    font-size: 14px
    line-height: 20px
    padding: 20px 0
    border-top: 1.5px solid black
    text-align: center
    @media (min-width: map-get($breakpoints, 'sm'))
      text-align: center
    @media (min-width: map-get($breakpoints, 'xxxl'))
      padding: 18px 0
    span
      font-family: 'Montserrat-SemiBold'

  &__nav-info-btn
    max-width: 258px
    height: 56px
    margin: 0 auto
    @media (min-width: map-get($breakpoints, 'sm'))
      margin: 0
      max-width: 328px
      height: 66px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      max-width: 328px
      height: 72px

  &__product
    max-width: 420px
    width: 100%
    position: absolute
    top: 142px
    @media (min-width: map-get($breakpoints, 'sm'))
      top: auto
      position: unset
    @media (min-width: map-get($breakpoints, 'lg'))
      max-width: 800px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      max-width: 1048px
    ::v-deep
      .swiper-navigation
        top: 106px
        .swiper-button-disabled
          svg
            color: #D9D9D9 !important
        .swiper-button
          svg
            color: #1C95BC
        .swiper-button-next
          svg
            transform: rotate(180deg)
  &__product-list
    display: none
    @media (min-width: map-get($breakpoints, 'sm'))
      display: flex
      flex-wrap: wrap
      margin: 0 -8px -20px 0
    @media (min-width: map-get($breakpoints, 'lg'))
      margin: 0 -32px -40px 0
    @media (min-width: map-get($breakpoints, 'xxxl'))
      margin: 0 -32px -60px 0
  &__product-item
    @media (min-width: map-get($breakpoints, 'sm'))
      margin: 0 8px 20px 0
    @media (min-width: map-get($breakpoints, 'lg'))
      margin: 0 22px 40px 0
    @media (min-width: map-get($breakpoints, 'xxxl'))
      margin: 0 32px 60px 0
</style>
