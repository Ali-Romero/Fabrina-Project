<template>
  <section id="contacts-section" class="contacts-section">
    <div class="contacts-section__wrapper o-hidden">
      <ui-wrapper>
        <div class="contacts-section__inner">
          <h2 class="contacts-section__title title-secondary">
            <span></span>
            Контакты
          </h2>
          <div class="contacts-section__info">
            <div class="contacts-section__info-item">
              <a href="tel:88009998877">
                <!-- <span class="contact-name">Телефон:</span>
                <span class="contact-text">+7 (843) 205-21-88</span> -->
              </a>
            </div>
            <div class="contacts-section__info-item">
              <a href="mailto:index@fabrina.shop">
                <span class="contact-name">E-mail:</span>
                <span class="contact-text">index@fabrina.shop</span>
              </a>
            </div>
            <div class="contacts-section__info-item">
              <a href="tel:88006002468">
                <span class="contact-name">Телефон:</span>
                <span class="contact-text">8 (800) 600-24-68</span>
              </a>
            </div>
            <div class="contacts-section__info-item">
              <span class="contact-name">Почтовый адрес:</span>
              <span class="contact-text">
                420141, Республика Татарстан, г. Казань, а/я 3
              </span>
            </div>
            <div class="contacts-section__info-item">
              <span class="contact-name">Местонахождение:</span>
              <span class="contact-text">
                420100, Республика Татарстан,
                <br class="d-xxxl-none" />г. Казань, ул. Сахарова, 16А
              </span>
            </div>
            <div class="contacts-section__info-item">
              <span class="contact-name">Режим работы:</span>
              <span class="contact-text">
                с Пн-Пт, с 08:00 до 17:00 <br class="" />(местное время -
                московское)
              </span>
            </div>
          </div>
          <div class="contacts-section__info-helper">
            <div>ИП Зотеев В.А.</div>
            ОГРНИП: 320169000136495
          </div>
          <div class="contacts-section__map">
            <app-yandex-map></app-yandex-map>
          </div>
        </div>
      </ui-wrapper>
    </div>
  </section>
</template>

<style lang="sass" scoped>
.contacts-section
  &__inner
    padding: 56px 0 40px 0
    @media (min-width: map-get($breakpoints, 'sm'))
      position: relative
      max-width: 370px
      padding: 50px 0
    @media (min-width: map-get($breakpoints, 'lg'))
      max-width: 615px
      padding: 68px 0
    @media (min-width: map-get($breakpoints, 'xxxl'))
      max-width: 840px
  &__map
    width: 300px
    height: 300px
    @media (min-width: map-get($breakpoints, 'sm'))
      position: absolute
      width: 500px
      height: 584px
      right: -500px
      top: 0
    @media (min-width: map-get($breakpoints, 'lg'))
      width: 600px
      height: 776px
      right: -600px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      height: 874px
      right: -824px
      width: 824px
  &__title
    margin-bottom: 44px
    @media (min-width: map-get($breakpoints, 'lg'))
      margin-bottom: 64px
    span
      @media (min-width: map-get($breakpoints, 'sm'))
        padding-left: 146px
      @media (min-width: map-get($breakpoints, 'lg'))
        padding-left: 250px
      @media (min-width: map-get($breakpoints, 'xxxl'))
        padding-left: 360px
    &:before
      @media (min-width: map-get($breakpoints, 'sm'))
        max-width: 130px
      @media (min-width: map-get($breakpoints, 'lg'))
        max-width: 230px
        top: 22px
      @media (min-width: map-get($breakpoints, 'xxxl'))
        max-width: 328px
  &__info-item
    margin-bottom: 24px
    @media (min-width: map-get($breakpoints, 'lg'))
      margin-bottom: 34px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      margin-bottom: 40px

    span
      display: block
  &__info-helper
    font-size: 15px
    line-height: 19px
    margin-bottom: 40px
    @media (min-width: map-get($breakpoints, 'sm'))
      margin-bottom: 0
    @media (min-width: map-get($breakpoints, 'lg'))
      font-size: 20px
      line-height: 26px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      font-size: 24px
      line-height: 29px
    div
      margin-bottom: 6px
      @media (min-width: map-get($breakpoints, 'lg'))
        margin-bottom: 10px
      @media (min-width: map-get($breakpoints, 'xxxl'))
        margin-bottom: 16px

.contact-name
  font-size: 14px
  line-height: 18px
  font-family: 'Montserrat-Bold'
  margin-bottom: 4px
  @media (min-width: map-get($breakpoints, 'lg'))
    font-size: 15px
    line-height: 20px
  @media (min-width: map-get($breakpoints, 'xxxl'))
    margin-bottom: 14px
    font-size: 16px
    line-height: 21px
.contact-text
  font-size: 15px
  line-height: 19px
  @media (min-width: map-get($breakpoints, 'lg'))
    font-size: 20px
    line-height: 26px
  @media (min-width: map-get($breakpoints, 'xxxl'))
    font-size: 24px
    line-height: 29px
</style>
