<template>
  <div class="examples-section">
    <div class="examples-section__wrapper o-hidden">
      <ui-wrapper>
        <div class="examples-section__inner">
          <h2 class="examples-section__title title-secondary">
            <span />
            Примеры работ
          </h2>
          <div class="examples-section__nav">
            <ul>
              <li
                v-for="category in categories"
                :key="category.id"
                :class="{ active: category.id === categoryId }"
                @click="categoryId = category.id"
              >
                <span>{{ category.name }}</span>
              </li>
            </ul>
          </div>
          <transition name="fade-blur" mode="out-in">
            <div :key="categoryId" class="examples-section__product">
              <div class="examples-section__product-mb">
                <ui-swiper class="swiper-examples" :params="params">
                  <ui-swiper-wrapper>
                    <ui-swiper-slide
                      v-for="example in categoryExamples"
                      :key="example.id"
                    >
                      <app-example-card :image="example.image" />
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
              <div class="examples-section__product-ds d-none d-sm-flex">
                <ul class="examples-col examples-col--1">
                  <li v-for="example in leftExamples" :key="example.id">
                    <app-example-card :image="example.image" />
                  </li>
                </ul>
                <ul class="examples-col examples-col--2">
                  <li v-for="example in middleExamples" :key="example.id">
                    <app-example-card small :image="example.image" />
                  </li>
                </ul>
                <ul class="examples-col examples-col--3">
                  <li v-for="example in rightExamples" :key="example.id">
                    <app-example-card :image="example.image" />
                  </li>
                </ul>
              </div>
            </div>
          </transition>
          <div class="examples-section__helper-info">
            <div class="examples-section__helper-info-text">
              <h3>
                <span>Нужна помощь в разработке дизайна одежды?</span>
                Наши конструкторы помогут воплотить идею в жизнь
              </h3>
            </div>
            <div
              class="examples-section__helper-info-btn"
              @click.prevent="modal = true"
            >
              <ui-button fluid>
                Узнать подробнее
              </ui-button>
            </div>
          </div>
        </div>
      </ui-wrapper>
      <ui-modal v-model="modal">
        <app-feedback-modal-main
          title="Нужна помощь в разработке дизайна одежды?"
          btn-text="Узнать подробнее"
          description="Наши конструкторы помогут воплотить идею в жизнь"
          @submit="modal = false"
        />
      </ui-modal>
    </div>
  </div>
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
      ],
      examples: [
        {
          id: 1,
          categoryId: 1,
          image: require('@/assets/images/examples-women-1.jpg?webp'),
        },
        {
          id: 2,
          categoryId: 1,
          image: require('@/assets/images/examples-women-2.jpg?webp'),
        },
        {
          id: 3,
          categoryId: 1,
          image: require('@/assets/images/examples-women-3.jpg?webp'),
          small: true,
        },
        {
          id: 4,
          categoryId: 1,
          image: require('@/assets/images/examples-women-4.jpg?webp'),
          small: true,
        },
        {
          id: 5,
          categoryId: 1,
          image: require('@/assets/images/examples-women-5.jpg?webp'),
          small: true,
        },
        {
          id: 6,
          categoryId: 1,
          image: require('@/assets/images/examples-women-6.jpg?webp'),
        },
        {
          id: 7,
          categoryId: 1,
          image: require('@/assets/images/examples-women-7.jpg?webp'),
        },
        {
          id: 8,
          categoryId: 2,
          image: require('@/assets/images/examples-man-1.jpg?webp'),
        },
        {
          id: 9,
          categoryId: 2,
          image: require('@/assets/images/examples-man-2.jpg?webp'),
        },
        {
          id: 10,
          categoryId: 2,
          image: require('@/assets/images/examples-man-3.jpg?webp'),
          small: true,
        },
        {
          id: 11,
          categoryId: 2,
          image: require('@/assets/images/examples-man-4.jpg?webp'),
          small: true,
        },
        {
          id: 12,
          categoryId: 2,
          image: require('@/assets/images/examples-man-5.jpg?webp'),
          small: true,
        },
        {
          id: 13,
          categoryId: 2,
          image: require('@/assets/images/examples-man-6.jpg?webp'),
        },
        {
          id: 14,
          categoryId: 2,
          image: require('@/assets/images/examples-man-7.jpg?webp'),
        },
        {
          id: 15,
          categoryId: 3,
          image: require('@/assets/images/examples-uniform-1.jpg?webp'),
        },
        {
          id: 16,
          categoryId: 3,
          image: require('@/assets/images/examples-uniform-2.jpg?webp'),
        },
        {
          id: 17,
          categoryId: 3,
          image: require('@/assets/images/examples-uniform-3.jpg?webp'),
          small: true,
        },
        {
          id: 18,
          categoryId: 3,
          image: require('@/assets/images/examples-uniform-4.jpg?webp'),
          small: true,
        },
        {
          id: 19,
          categoryId: 3,
          image: require('@/assets/images/examples-uniform-5.jpg?webp'),
          small: true,
        },
        {
          id: 20,
          categoryId: 3,
          image: require('@/assets/images/examples-uniform-6.jpg?webp'),
        },
        {
          id: 21,
          categoryId: 3,
          image: require('@/assets/images/examples-uniform-7.jpg?webp'),
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
    categoryExamples() {
      return this.examples.filter((example) => {
        return example.categoryId === this.categoryId
      })
    },
    leftExamples() {
      const [first, second] = this.categoryExamples

      return [first, second]
    },
    rightExamples() {
      return [this.categoryExamples.at(-2), this.categoryExamples.at(-1)]
    },
    middleExamples() {
      return this.categoryExamples.filter(({ small }) => small)
    },
  },
}
</script>

<style lang="sass" scoped>
.examples-section
  &__inner
    padding: 60px 0 40px 0
    @media (min-width: map-get($breakpoints, 'sm'))
      position: relative
      padding: 120px 0 226px 0
    @media (min-width: map-get($breakpoints, 'xxxl'))
      padding: 120px 0 258px 0
  &__title
    margin-bottom: 36px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      margin-bottom: 64px
  &__nav
    margin-bottom: 40px
    @media (min-width: map-get($breakpoints, 'sm'))
      margin-bottom: 80px
    ul
      display: flex
      justify-content: center
      flex-wrap: wrap
      @media (min-width: map-get($breakpoints, 'sm'))
        justify-content: flex-start
      li
        position: relative
        cursor: pointer
        font-size: 15px
        line-height: 17px
        margin: 20px 0 0 0
        font-family: 'Montserrat-Medium'
        -webkit-tap-highlight-color: transparent
        -webkit-touch-callout: none
        -webkit-user-select: none
        -khtml-user-select: none
        -moz-user-select: none
        -ms-user-select: none
        user-select: none
        @media (min-width: map-get($breakpoints, 'sm'))
          margin: 0 30px 0 0
        @media (min-width: map-get($breakpoints, 'lg'))
          font-size: 17px
          line-height: 20px
          margin: 0 50px 0 0
        @media (min-width: map-get($breakpoints, 'xxxl'))
          font-size: 18px
          line-height: 22px
          margin: 0 80px 0 0
        span
          padding: 10px 20px
          transition: all 0.3s
          @media (min-width: map-get($breakpoints, 'sm'))
            padding: 12px 24px
          @media (min-width: map-get($breakpoints, 'lg'))
            padding: 14px 28px
          @media (min-width: map-get($breakpoints, 'xxxl'))
            padding: 16px 32px
          &:hover
            box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 1)
            border-radius: 100px
        &.active
          span
            box-shadow: 0px 0px 0px 1px rgba(28, 149, 188, 1)
            border-radius: 100px
  &__product
    margin-bottom: 40px
    @media (min-width: map-get($breakpoints, 'sm'))
      margin-bottom: 0
  &__product-mb
    @media (min-width: map-get($breakpoints, 'sm'))
      display: none
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
  &__helper-info
    max-width: 283px
    margin: 0 auto
    @media (min-width: map-get($breakpoints, 'sm'))
      max-width: 512px
      position: absolute
      left: 0
      right: 0
      bottom: 88px
    @media (min-width: map-get($breakpoints, 'lg'))
      bottom: 114px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      bottom: 147px
  &__helper-info-text
    text-align: center
    margin: 0 0 17px 0
    span
      font-family: 'Montserrat-SemiBold'
      display: block
    h3
      font-size: 14px
      line-height: 20px
      font-weight: 400

  &__helper-info-btn
    max-width: 258px
    height: 56px
    margin: 0 auto
    @media (min-width: map-get($breakpoints, 'sm'))
      max-width: 260px
      height: 60px
    @media (min-width: map-get($breakpoints, 'lg'))
      max-width: 298px
      height: 66px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      max-width: 328px
      height: 72px
.examples-col
  margin-right: 14px
  @media (min-width: map-get($breakpoints, 'lg'))
    margin-right: 40px
  @media (min-width: map-get($breakpoints, 'xxxl'))
    margin-right: 32px
  li
    @media (min-width: map-get($breakpoints, 'sm'))
      margin-bottom: 14px
    @media (min-width: map-get($breakpoints, 'lg'))
      margin-bottom: 40px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      margin-bottom: 34px
    &:last-child
      margin-bottom: 0
  &--1,
  &--3
    padding-top: 64px
    @media (min-width: map-get($breakpoints, 'lg'))
      padding-top: 117px
  &--3
    margin-right: 0
</style>
