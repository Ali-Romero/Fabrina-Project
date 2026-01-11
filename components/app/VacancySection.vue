<template>
  <section class="vacancy-section">
    <div class="vacancy-section__head">
      <ui-wrapper>
        <h2 class="vacancy-section__title title-secondary">
          <span></span>
          Вакансии
        </h2>
      </ui-wrapper>
    </div>
    <div class="vacancy-section__inner">
      <ui-wrapper>
        <div class="vacancy-section__content">
          <div class="vacancy-section__info">
            <div class="vacancy-section__info-title">
              <h3>Швея на оверлок, плоскошовку, прямострочку</h3>
            </div>
            <div class="vacancy-section__info-helper">
              <span>Обязанности:</span> пошив трикотажных изделий пооперационно.
            </div>
            <div
              class="vacancy-section__info-list vacancy-section__info-list--1"
            >
              <div class="vacancy-section__info-list-title">Требования:</div>
              <ul>
                <li>1. Умение работать на промышленном оборудовании</li>
                <li>2. Аккуратность</li>
                <li>3. Скорость пошива</li>
                <li>4. Внимательность</li>
              </ul>
            </div>
            <div
              class="vacancy-section__info-list vacancy-section__info-list--2"
            >
              <div class="vacancy-section__info-list-title">Условия труда:</div>
              <ul>
                <li>
                  1. Светлое, тёплое помещение с окнами по типу офиса с
                  установленным кондиционером
                </li>
                <li>2. Новое промышленное оборудование</li>
                <li>3. Удобное расположение</li>
                <li>4. Своевременная заработная плата: оклад + премия</li>
                <li>График: 5/2, выходной: суббота, воскресенье.</li>
                <li>Время работы: 7:00-16:00.</li>
              </ul>
            </div>
          </div>
          <div class="vacancy-section__feedback">
            <app-feedback-vacancy></app-feedback-vacancy>
          </div>
          <div class="vacancy-section__backup">
            <router-link to="/">
              <ui-button fluid>
                Вернуться на главную страницу
              </ui-button>
            </router-link>
          </div>
        </div>
      </ui-wrapper>
    </div>
  </section>
</template>

<style lang="sass" scoped>
.vacancy-section
  &__head
    background-color: #1C95BC
    padding: 14px 0
    @media (min-width: map-get($breakpoints, 'lg'))
      padding: 20px 0
    @media (min-width: map-get($breakpoints, 'xxxl'))
      padding: 32px 0
  &__title
    color: white
    span
      padding-left: 60px
      @media (min-width: map-get($breakpoints, 'sm'))
        padding-left: 120px
      @media (min-width: map-get($breakpoints, 'lg'))
        padding-left: 191px
    &:before
      max-width: 50px
      background-color: white
      @media (min-width: map-get($breakpoints, 'sm'))
        max-width: 110px
      @media (min-width: map-get($breakpoints, 'lg'))
        max-width: 160px
  &__content
    @media (min-width: map-get($breakpoints, 'sm'))
      position: relative
      display: flex
      align-items: flex-start
  &__inner
    padding: 48px 0 80px 0
  &__info
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1)
    padding: 30px 14px
    max-width: 808px
    font-size: 14px
    line-height: 19px
    margin-bottom: 30px
    @media (min-width: map-get($breakpoints, 'sm'))
      margin-bottom: 0
      padding: 22px 26px
      max-width: 808px
      font-size: 14px
      line-height: 19px
      margin-right: 24px
    @media (min-width: map-get($breakpoints, 'lg'))
      margin-right: 39px
      font-size: 16px
      line-height: 22px
      padding: 40px 57px
  &__info-title
    color: #1C95BC
    font-family: 'Montserrat-SemiBold'
    margin-bottom: 20px
    h3
      text-align: center
      font-size: 18px
      line-height: 22px
      font-weight: 600
      @media (min-width: map-get($breakpoints, 'sm'))
        text-align: left
      @media (min-width: map-get($breakpoints, 'lg'))
        font-size: 21px
        line-height: 26px
      @media (min-width: map-get($breakpoints, 'xxxl'))
        font-size: 22px
        line-height: 27px

  &__info-helper
    margin-bottom: 20px
    @media (min-width: map-get($breakpoints, 'lg'))
      margin-bottom: 24px
  &__info-list
    &--1
      margin-bottom: 20px
      @media (min-width: map-get($breakpoints, 'lg'))
        margin-bottom: 24px
    ul
      li
        margin-bottom: 6px
        @media (min-width: map-get($breakpoints, 'lg'))
          margin-bottom: 8px
        &:last-child
          margin-bottom: 0
  &__info-list-title
    font-family: 'Montserrat-SemiBold'
    margin-bottom: 8px
  &__feedback
    max-width: 330px
    width: 100%
    margin-bottom: 30px
    @media (min-width: map-get($breakpoints, 'sm'))
      margin-bottom: 0
    @media (min-width: map-get($breakpoints, 'lg'))
      max-width: 444px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      max-width: 535px
  &__backup
    max-width: 300px
    height: 50px
    width: 100%
    @media (min-width: map-get($breakpoints, 'sm'))
      position: absolute
      bottom: -4px
      max-width: 272px
      height: 50px
    @media (min-width: map-get($breakpoints, 'lg'))
      bottom: 31px
      max-width: 352px
      height: 65px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      bottom: 30px
      max-width: 424px
      height: 72px
</style>
