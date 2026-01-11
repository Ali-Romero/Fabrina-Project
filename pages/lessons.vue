<template>
  <section class="lessons-section o-hidden">
    <ui-wrapper>
      <div
        ref="inner"
        v-gsap-watch:lessons-nav.sm
        v-gsap-watch:lessons-image.md
        class="lessons-section__inner"
      >
        <div
          v-gsap-timeline:lessons-nav.sm="getFixedTween"
          class="lessons-section__nav"
          :style="{ height: `calc(100vh - ${$config.headerHeight}px)` }"
        >
          <ul class="lessons-section__nav-list">
            <li
              v-for="lesson in lessons"
              :key="lesson.route"
              class="lessons-section__nav-item"
              :class="{ active: lesson.route === page }"
            >
              <router-link
                class="lessons-section__nav-link"
                :to="{ name: lesson.route }"
              >
                <span class="lessons-section__nav-icon">
                  <ui-icon name="arrow-icon-small"></ui-icon>
                </span>
                {{ lesson.title }}
              </router-link>
            </li>
          </ul>
        </div>
        <div class="lessons-section__drawer">
          <div class="lessons-drawer">
            <ui-drawer v-model="drawer" left>
              <ui-drawer-inner>
                <ul class="lessons-section__nav-list">
                  <li
                    v-for="lesson in lessons"
                    :key="lesson.route"
                    class="lessons-section__nav-item"
                    :class="{ active: lesson.route === page }"
                  >
                    <router-link
                      class="lessons-section__nav-link"
                      :to="{ name: lesson.route }"
                    >
                      <span class="lessons-section__nav-icon">
                        <ui-icon name="arrow-icon-small"></ui-icon>
                      </span>
                      {{ lesson.title }}
                    </router-link>
                  </li>
                </ul>
              </ui-drawer-inner>
            </ui-drawer>
            <ui-lessons-nav-btn v-model="drawer">
              Список уроков
            </ui-lessons-nav-btn>
          </div>
        </div>

        <div class="lessons-section__content">
          <div class="lessons-section__content-top-nav">
            <app-lessons-nav
              :prev-lesson="prevLesson"
              :next-lesson="nextLesson"
            />
          </div>
          <div
            v-gsap-timeline:lessons-image.md="getFixedTween"
            class="lessons-section__image"
          >
            <transition name="fade-blur" mode="out-in">
              <img
                :key="currentLesson.image"
                :src="currentLesson.image"
                width="464"
                height="910"
                alt="image"
              />
            </transition>
          </div>
          <nuxt-child />
          <div class="lessons-section__content-bottom-nav">
            <app-lessons-nav
              :prev-lesson="prevLesson"
              :next-lesson="nextLesson"
            />
          </div>
        </div>
      </div>
    </ui-wrapper>
    <app-detect-leave-page></app-detect-leave-page>
  </section>
</template>

<script>
export default {
  middleware({ route, redirect }) {
    if (route.name === 'lessons') {
      redirect({ name: 'lessons-1' })
    }
  },
  data() {
    return {
      drawer: false,
      lessons: [
        {
          title: 'Урок 1',
          route: 'lessons-1',
          image: require('@/assets/images/lesson-1.jpg?webp'),
        },
        {
          title: 'Урок 2',
          route: 'lessons-2',
          image: require('@/assets/images/lesson-2.jpg?webp'),
        },
        {
          title: 'Урок 3',
          route: 'lessons-3',
          image: require('@/assets/images/lesson-3.jpg?webp'),
        },
        {
          title: 'Урок 4',
          route: 'lessons-4',
          image: require('@/assets/images/lesson-4.jpg?webp'),
        },
        {
          title: 'Урок 5',
          route: 'lessons-5',
          image: require('@/assets/images/lesson-5.jpg?webp'),
        },
        {
          title: 'Урок 6',
          route: 'lessons-6',
          image: require('@/assets/images/lesson-6.jpg?webp'),
        },
        {
          title: 'Урок 7',
          route: 'lessons-7',
          image: require('@/assets/images/lesson-7.jpg?webp'),
        },
        {
          title: 'Урок 8',
          route: 'lessons-8',
          image: require('@/assets/images/lesson-8.jpg?webp'),
        },
        {
          title: 'Урок 9',
          route: 'lessons-9',
          image: require('@/assets/images/lesson-9.jpg?webp'),
        },
        {
          title: 'Урок 10',
          route: 'lessons-10',
          image: require('@/assets/images/lesson-10.jpg?webp'),
        },
        {
          title: 'Урок 11',
          route: 'lessons-11',
          image: require('@/assets/images/lesson-11.jpg?webp'),
        },
        {
          title: 'Урок 12',
          route: 'lessons-12',
          image: require('@/assets/images/lesson-12.jpg?webp'),
        },
        {
          title: 'Урок 13',
          route: 'lessons-13',
          image: require('@/assets/images/lesson-13.jpg?webp'),
        },
      ],
    }
  },
  computed: {
    page() {
      return this.$route.name
    },
    currentLesson() {
      return this.lessons.find((lesson) => lesson.route === this.page)
    },
    currentIndex() {
      return this.lessons.findIndex((lesson) => lesson.route === this.page)
    },
    prevLesson() {
      return this.lessons[this.currentIndex - 1]
    },
    nextLesson() {
      return this.lessons[this.currentIndex + 1]
    },
  },
  methods: {
    getFixedTween(el) {
      return {
        pin: true,
        pinSpacing: false,
        endTrigger: () => this.$refs.inner,
        start: `top top+=${this.$config.headerHeight}`,
        end: () => `bottom-=${el.offsetHeight + this.$config.headerHeight}`,
      }
    },
  },
}
</script>

<style lang="sass" scoped>
.lessons-section
  background: #F8F8F8
  &__inner
    position: relative
    max-width: 616px
    margin: 0 0 0 auto
    padding: 38px 0 40px 0
    background-color: white
    min-height: 100vh
    @media (min-width: map-get($breakpoints, 'sm'))
      max-width: 616px
      margin: 0 0 0 auto
    @media (min-width: map-get($breakpoints, 'md'))
      max-width: 535px
      margin: 0 auto
    @media (min-width: map-get($breakpoints, 'lg'))
      max-width: 690px
      padding: 48px 0 80px 0
    @media (min-width: map-get($breakpoints, 'xxxl'))
      max-width: 946px
  &__nav
    display: none
    @media (min-width: map-get($breakpoints, 'sm'))
      background: #F8F8F8
      position: absolute
      top: 0
      left: -510px
      width: 510px
      display: flex
      justify-content: flex-end
      z-index: 1
      overflow: auto
      @include scrollbar()

  &__nav-list
    max-width: 156px
    width: 100%
    padding: 0 16px 0 0
    @media (min-width: map-get($breakpoints, 'sm'))
      padding: 44px 16px 0 0
    @media (min-width: map-get($breakpoints, 'lg'))
      padding: 53px 16px 0 0
      max-width: 176px
    @media (min-width: map-get($breakpoints, 'xxxxxl'))
      padding: 54px 22px 0 0
      padding-top: 64px
      max-width: 208px
  &__nav-link
    height: 42px
    padding-left: 30px
    display: flex
    align-items: center
    cursor: pointer
    @media (min-width: map-get($breakpoints, 'sm'))
      height: 45px
    @media (min-width: map-get($breakpoints, 'lg'))
      padding-left: 30px
    @media (min-width: map-get($breakpoints, 'xxxxxl'))
      padding-left: 40px
      height: 63px
  &__nav-item
    font-size: 17px
    line-height: 22px
    color: #777777
    border-bottom: 1px solid #E3E3E3
    @media (min-width: map-get($breakpoints, 'lg'))
      font-size: 19px
      line-height: 24px
    @media (min-width: map-get($breakpoints, 'xxxxxl'))
      font-size: 22px
      line-height: 27px
    &:last-child
      @media (min-width: map-get($breakpoints, 'sm'))
        padding-bottom: 40px
    &.active
      color: #1C95BC
      font-family: 'Montserrat-SemiBold'
      .lessons-section__nav-icon
        width: 26px
        height: 10px
        transform: scale(1)
        transition: width 0.3s transform 0.3s
        margin-right: 8px
        @media (min-width: map-get($breakpoints, 'lg'))
          margin-right: 10px
        @media (min-width: map-get($breakpoints, 'xxxxxl'))
          margin-right: 20px
          width: 32px
          height: 13px

    &:last-child
      border: none
  &__nav-icon
    transition: all 0.4s
    transform: scale(0)
    width: 0
    height: 0
    svg
      width: 26px
      height: 12px
      @media (min-width: map-get($breakpoints, 'xxxxxl'))
        width: 32px
        height: 15px
  &__drawer
    position: absolute
    display: flex
    justify-content: flex-end
    z-index: 33
    top: 72px
    left: 7px
    @media (min-width: map-get($breakpoints, 'sm'))
      display: none

  &__image
    width: 200px
    height: 200px
    position: absolute
    right: 0
    top: 180px
    left: 0
    margin: 0 auto
    @media (min-width: map-get($breakpoints, 'sm'))
      margin: 0
      left: auto
      right: 21px
      top: 70px
    @media (min-width: map-get($breakpoints, 'md'))
      width: auto
      height: auto
      right: -326px
      top: 0
    @media (min-width: map-get($breakpoints, 'lg'))
      right: -358px
    @media (min-width: map-get($breakpoints, 'xxxxxl'))
      right: -464px
    img
      width: 200px
      height: 200px
      object-fit: cover
      @media (min-width: map-get($breakpoints, 'md'))
        width: 326px
        height: auto
      @media (min-width: map-get($breakpoints, 'lg'))
        width: 358px
      @media (min-width: map-get($breakpoints, 'xxxxxl'))
        width: 464px
  &__content
    max-width: 288px
    margin: 0 auto
    @media (min-width: map-get($breakpoints, 'sm'))
      max-width: 560px
    @media (min-width: map-get($breakpoints, 'md'))
      max-width: 513px
    @media (min-width: map-get($breakpoints, 'lg'))
      max-width: 638px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      max-width: 800px
  &__content-top-nav
    margin-bottom: 70px
    @media (min-width: map-get($breakpoints, 'sm'))
      margin-bottom: 36px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      margin-bottom: 48px
  &__content-bottom-nav
    margin-top: 36px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      margin-top: 48px
::v-deep
  .lesson
    font-size: 14px
    line-height: 20px
    max-width: 272px
    margin: 0 auto
    @media (min-width: map-get($breakpoints, 'sm'))
      max-width: 100%
      margin: 0
    @media (min-width: map-get($breakpoints, 'lg'))
      font-size: 15px
      line-height: 22px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      font-size: 16px
      line-height: 22px
    &__number
      font-weight: 400
      font-size: 28px
      line-height: 36px
      text-align: center
      margin: 0 0 248px 0
      @media (min-width: map-get($breakpoints, 'sm'))
        position: relative
        text-align: left
        margin: 0 0 168px 0
        padding: 0 0 0 20px
      @media (min-width: map-get($breakpoints, 'md'))
        margin: 0 0 24px 0
      @media (min-width: map-get($breakpoints, 'lg'))
        font-size: 34px
        line-height: 46px
        padding: 0 0 0 32px
        margin: 0 0 24px 0
      @media (min-width: map-get($breakpoints, 'xxxl'))
        font-size: 38px
        line-height: 46px
        padding: 0 0 0 32px
        margin: 0 0 24px 0
      &:before
        @media (min-width: map-get($breakpoints, 'sm'))
          content: ""
          position: absolute
          max-width: 80px
          width: 100%
          height: 1px
          background-color: black
          left: -15px
          top: 0
          bottom: 0
          margin: auto 0
        @media (min-width: map-get($breakpoints, 'sm'))
          left: -60px
        @media (min-width: map-get($breakpoints, 'xxxl'))
          left: -80px
    &__title
      font-size: 15px
      line-height: 18px
      margin-bottom: 20px
      text-align: center
      @media (min-width: map-get($breakpoints, 'sm'))
        text-align: left
        font-size: 20px
        line-height: 24px
        font-weight: 400
      @media (min-width: map-get($breakpoints, 'lg'))
        font-size: 24px
        line-height: 30px
      @media (min-width: map-get($breakpoints, 'xxxl'))
        font-size: 28px
        line-height: 34px
        margin-bottom: 32px
    &__container
      margin-bottom: 26px
      @media (min-width: map-get($breakpoints, 'xxxl'))
        margin-bottom: 32px
      &:last-child
        margin-bottom: 0
    &__container-item-title
      font-size: 15px
      line-height: 17px
      margin-bottom: 5px
      font-family: 'Montserrat-Medium'
      @media (min-width: map-get($breakpoints, 'sm'))
        font-size: 17px
        line-height: 19px
        margin-bottom: 5px
        font-family: 'Montserrat-Regular'
      @media (min-width: map-get($breakpoints, 'lg'))
        font-size: 18px
        line-height: 20px
        margin-bottom: 5px
      @media (min-width: map-get($breakpoints, 'xxxl'))
        font-size: 22px
        line-height: 27px
        margin-bottom: 8px
    &__container-item-text
      margin-bottom:  8px
      &:last-child
        margin-bottom: 0
    &__container-item-list
      li
        margin-bottom: 6px
        &:last-child
          margin-bottom: 0

      &--style
        padding-left: 17px
        @media (min-width: map-get($breakpoints, 'sm'))
          padding-left: 24px
        li
          list-style-type: disc
      &--num
        padding-left: 17px
        @media (min-width: map-get($breakpoints, 'sm'))
          padding-left: 24px
        li
          list-style-type: decimal
    &__frame
      box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1)
      padding: 20px 14px
      @media (min-width: map-get($breakpoints, 'sm'))
        padding: 23px 16px
      @media (min-width: map-get($breakpoints, 'lg'))
        padding: 23px 33px
      @media (min-width: map-get($breakpoints, 'xxxl'))
        padding: 32px 47px
</style>
