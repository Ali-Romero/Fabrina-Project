<template>
  <section id="reviews-section" class="reviews-section">
    <div class="reviews-section__wrapper o-hidden">
      <ui-wrapper>
        <div class="reviews-section__inner">
          <h2 class="reviews-section__title title-secondary">
            Отзывы наших заказчиков
          </h2>
          <div class="reviews-section__slider">
            <ui-swiper class="swiper-poduct" :params="params">
              <ui-swiper-wrapper>
                <ui-swiper-slide v-for="review in reviews" :key="review.id">
                  <app-reviews
                    :image="review.image"
                    :name="review.name"
                    :name-description="review.nameDescription"
                    :logo="review.logo"
                    :video="review.video"
                    :review-image="review.reviewImage"
                    :reviews-description="review.reviewsDescription"
                    :reviews-doc-image="review.reviewsDocImage"
                  />
                </ui-swiper-slide>
              </ui-swiper-wrapper>
              <ui-swiper-navigation>
                <ui-swiper-navigation-button prev>
                  <ui-icon name="arrow-icon" />
                </ui-swiper-navigation-button>
                <ui-swiper-navigation-button next>
                  <ui-icon name="arrow-icon" />
                </ui-swiper-navigation-button>
              </ui-swiper-navigation>

              <ui-swiper-pagination></ui-swiper-pagination>
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
      reviews: [
        {
          id: 1,
          image: require('@/assets/images/reviews-photo-1.jpg?webp'),
          name: 'Алина',
          video: '_LYCFX6oq7I',
          reviewImage: require('@/assets/images/reviews-video-1.jpg?webp'),
          nameDescription:
            'координатор лидерских программ тренингового центра «Синергия»',
          logo: require('@/assets/images/reviews-logo-1.jpg?webp'),
          reviewsDocImage: require('@/assets/images/reviews-doc-image-1.jpg?webp'),
          reviewsDescription:
            'Хочу с особой благодарностью отметить фабрику «Фабрина», с которой мы давно работаем, за высокое качество текстиля, за внимательное отношение к нашим пожеланиям и быстроту изготовления. Ребята всегда идут к нам навстречу и в короткие сроки шьют максимально качественную одежду.',
        },
        {
          id: 2,
          image: require('@/assets/images/reviews-photo-2.jpg?webp'),
          name: 'Ксения',
          video: 'F1h7WA2HwiQ',
          reviewImage: require('@/assets/images/reviews-video-2.jpg?webp'),
          nameDescription: 'менеджер караоке-бара «Сладкая жизнь»',
          logo: require('@/assets/images/reviews-logo-2.jpg?webp'),
          reviewsDocImage: require('@/assets/images/reviews-doc-image-2.jpg?webp'),
          reviewsDescription:
            'В нашей работе нам требуется униформа для официантов и барменов. Одежда обновляется достаточно часто. За 2022 год мы трижды обращались в компанию «Фабрина». Нам очень нравится качество футболок, высокая скорость работы и ответственный подход менеджеров. С компанией «Фабрина» планируем сотрудничать и в дальнейшем.',
        },
        {
          id: 3,
          image: require('@/assets/images/reviews-photo-3.jpg?webp'),
          name: 'Олеся',
          video: '8WfkSwsxvVc',
          reviewImage: require('@/assets/images/reviews-video-3.jpg?webp'),
          nameDescription: 'организатор танцевальной группы DecaDance Room',
          logo: require('@/assets/images/reviews-logo-3.jpg?webp'),
          reviewsDocImage: require('@/assets/images/reviews-doc-image-3.jpg?webp'),
          reviewsDescription:
            'Мы заказываем наш мерч (футболки с логотипом для нашей промо группы) от «Фабрины». Мы довольны качеством и сроками работы. Всем рекомендуем!',
        },
      ],
      params: {
        slidesPerView: 1,
        freeMode: false,
        speed: 500,
        spaceBetween: 28,
        pagination: {
          type: 'bullets',
        },
        breakpoints: {
          300: {
            spaceBetween: 29,
            slidesPerView: 1,
            pagination: {
              type: 'bullets',
            },
          },
          1200: {
            spaceBetween: 40,
            slidesPerView: 2,
            noSwipingClass: 'reviews__content',
            pagination: {
              type: 'bullets',
            },
          },
          1500: {
            slidesPerView: 2,
            spaceBetween: 40,
            noSwipingClass: 'reviews__content',
          },
        },
      },
    }
  },
}
</script>

<style lang="sass" scoped>
.reviews-section
  .ui-wrapper
    @include above('lg')
      overflow: hidden

  &__inner
    padding: 50px 0 60px 0
    @media (min-width: map-get($breakpoints, 'sm'))
      padding: 76px 0
    @media (min-width: map-get($breakpoints, 'xxxl'))
      padding: 120px 0

  &__title
    text-align: center
    margin: 0 auto 70px auto
    @media (min-width: map-get($breakpoints, 'sm'))
      max-width: 640px
      margin: 0 auto 38px auto
    @media (min-width: map-get($breakpoints, 'lg'))
      max-width: 1000px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      max-width: 100%
      margin: 0 auto 48px auto
    &:before
      max-width: 44px
      @media (min-width: map-get($breakpoints, 'sm'))
        max-width: 116px
      @media (min-width: map-get($breakpoints, 'lg'))
        max-width: 270px
      @media (min-width: map-get($breakpoints, 'xxxl'))
        max-width: 392px
    &:after
      content: ""
      position: absolute
      right: 20px
      width: 100%
      height: 1px
      background-color: black
      top: 47px
      max-width: 44px
      @media (min-width: map-get($breakpoints, 'sm'))
        height: 2px
        max-width: 116px
        right: 0
        top: 18px
      @media (min-width: map-get($breakpoints, 'lg'))
        top: 24px
        max-width: 270px
      @media (min-width: map-get($breakpoints, 'xxxl'))
        max-width: 392px

  &__slider
    max-width: 636px
    margin: 0 auto
    padding: 0 0 76px 0
    @include above('lg')
      max-width: 100%
    @include above('xxxl')
      padding: 0 0 100px 0
    ::v-deep
      .swiper
        overflow: unset
      .swiper-slide
        &:first-child
          .reviews__head-logo
            border-radius: 0
      .swiper-pagination-bullets
        margin: 0 auto
        position: absolute
        max-width: 180px
        bottom: -53px
        left: 0
        right: 0
        height: 2px
        display: flex
        align-items: center
        @include above('sm')
          max-width: 208px
        @include above('xxxl')
          bottom: -67px
        .swiper-pagination-bullet
          width: 100%
          border-radius: 0
          margin: 0
          height: 2.5px
          background: #BBBBBB
        .swiper-pagination-bullet-active
          height: 5px
          background: #1C95BC
      .swiper-navigation
        bottom: -26px
        max-width: 392px
        margin: 0 auto
        left: 0
        right: 0
        @include above('xxxl')
          bottom: -39px
          max-width: 392px
        .swiper-button-disabled
          svg
            color: #D9D9D9 !important
        .swiper-button
          position: absolute
          width: 50px
          height: 50px
          border: 2px solid #1C95BC
          display: flex
          justify-content: center
          align-items: center
          border-radius: 100%
          background: #1C95BC
          @include above('xxxl')
            width: 60px
            height: 60px
          svg
            color: white
            width: 28px
            height: 17px
            @include above('xxxl')
              width: 32px
              height: 21px
        .swiper-button-prev
          left: 0
        .swiper-button-next
          right: 0
          svg
            transform: rotate(180deg)
        .swiper-button-disabled
          background: none
          svg
            color: #1C95BC !important
</style>
