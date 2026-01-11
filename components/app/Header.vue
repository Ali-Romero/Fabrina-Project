<template>
  <header class="header">
    <div class="header__spacer" />
    <div class="header__panel" data-scroll-lock-fill-gap>
      <ui-wrapper>
        <div class="header__inner">
          <div class="header__box">
            <div class="header__container">
              <div class="header__drawer d-lg-none">
                <app-header-drawer />
              </div>
              <div class="header__logo">
                <router-link to="/">
                  <img
                    src="@/assets/images/logo-main.svg"
                    width="208"
                    height="63"
                    alt="logo"
                    loading="lazy"
                  />
                </router-link>
              </div>
              <div class="d-none d-lg-block header__nav">
                <app-header-nav></app-header-nav>
              </div>
            </div>

            <div class="header__connection">
              <app-connection header></app-connection>
            </div>
          </div>
        </div>
      </ui-wrapper>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    page() {
      return this.$route.name
    },
  },
}
</script>

<style lang="sass" scoped>
.header
  &__spacer
    height: 66px
  &__panel
    width: 100%
    height: 66px
    position: fixed
    top: 0
    left: 0
    background-color: white
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08)
    z-index: 33
  &__inner
    padding: 18px 0
    @media (min-width: map-get($breakpoints, 'sm'))
      padding: 14px 0
    @media (min-width: map-get($breakpoints, 'lg'))
      padding: 12px 0
    @media (min-width: map-get($breakpoints, 'xxxl'))
      padding: 6px 0
  &__box
    display: flex
    justify-content: space-between
    align-items: center
  &__container
    display: flex
    align-items: center
    max-width: 148px
    width: 100%
    justify-content: space-between
    @media (min-width: map-get($breakpoints, 'sm'))
      max-width: 390px
    @media (min-width: map-get($breakpoints, 'lg'))
      width: auto
      justify-content: flex-satrt
      max-width: 100%

  &__logo
    @media (min-width: map-get($breakpoints, 'sm'))
      display: flex
      justify-content: center
    @media (min-width: map-get($breakpoints, 'lg'))
      margin-right: 30px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      margin-right: 66px
    img
      width: 98px
      height: 30px
      @media (min-width: map-get($breakpoints, 'sm'))
        width: 130px
        height: 39px
      @media (min-width: map-get($breakpoints, 'lg'))
        width: 140px
        height: 42px
      @media (min-width: map-get($breakpoints, 'xxxl'))
        width: 177px
        height: 54px
</style>
