<template>
  <section id="recommendation-section" class="recommendation-section">
    <div class="recommendation-section__wrapper o-hidden">
      <ui-wrapper>
        <div class="recommendation-section__inner">
          <h2 class="recommendation-section__title title-secondary">
            <span></span>
            Важные рекомендации, или что нужно знать при заказе
            <br class="d-none d-sm-inline" />
            оптового пошива
          </h2>
          <div class="d-none d-sm-block">
            <app-recommendations-desktop
              :items="categories"
              :current-id="categoryId"
              @expand="categoryId = $event"
            />
          </div>
          <div class="d-sm-none">
            <app-recommendations-mobile
              :items="categories"
              :current-id="categoryId"
              @expand="categoryId = $event"
            />
          </div>
        </div>
      </ui-wrapper>
      <div class="recommendation-section__feedback">
        <ui-wrapper>
          <app-feedback></app-feedback>
        </ui-wrapper>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      categoryId: 1,
      categories: [
        {
          id: 1,
          image: require('@/assets/images/recommendation-tabs-img-1.jpg?webp'),
          name: 'Оформление заказа',
          title: 'Как подготовиться к оформлению заказа?',
          lessons: [
            {
              id: 1,
              title: 'Урок 1',
              description:
                'Что нужно знать и понимать до обращения на производство?',
            },
          ],
        },
        {
          id: 2,
          image: require('@/assets/images/recommendation-tabs-img-2.jpg?webp'),
          name: 'Подбор ткани',
          title: 'Как подобрать ткань?',
          lessons: [
            {
              id: 2,
              title: 'Урок 2',
              description:
                'Закупить ткань на производстве или предоставить свою? Разбор плюсов и минусов',
            },
            {
              id: 3,
              title: 'Урок 3',
              description:
                'Подбор ткани по характеристикам и свойствам. Как выбор ткани влияет на стоимость конечного изделия?',
            },
            {
              id: 4,
              title: 'Урок 4',
              description: 'Как найти поставщика тканей?',
            },
          ],
        },
        {
          id: 3,
          image: require('@/assets/images/recommendation-tabs-img-3.jpg?webp'),
          name: 'Разработка тех. задания',
          title: 'Разработка технического задания для швейного производства',
          lessons: [
            {
              id: 5,
              title: 'Урок 5',
              description:
                'Как составить техническое задание для производства, чтобы получить желаемый результат?',
            },
            {
              id: 6,
              title: 'Урок 6',
              description: 'Разработка лекала и технических карт',
            },
          ],
        },
        {
          id: 4,
          image: require('@/assets/images/recommendation-tabs-img-4.jpg?webp'),
          name: 'Выбор производства',
          title: 'Выбор швейного производства',
          lessons: [
            {
              id: 7,
              title: 'Урок 7',
              description:
                'Как выбрать швейную фабрику? Преимущества контрактного производства в России',
            },
          ],
        },
        {
          id: 5,
          image: require('@/assets/images/recommendation-tabs-img-5.jpg?webp'),
          name: 'Расчёт стоимости и сроков',
          title: 'Расчёт стоимости и сроков пошива',
          lessons: [
            {
              id: 8,
              title: 'Урок 8',
              description: 'Как рассчитать стоимость пошива?',
            },
            {
              id: 9,
              title: 'Урок 9',
              description:
                'Использование готовых лекал или реализация идеи заказчика. Сравнение стоимости пошива',
            },
            {
              id: 10,
              title: 'Урок 10',
              description:
                'Планирование сроков пошива. Очередь на оптовый пошив',
            },
          ],
        },
        {
          id: 6,
          image: require('@/assets/images/recommendation-tabs-img-6.jpg?webp'),
          name: 'Договор на пошив',
          title: 'Договор на пошив одежды',
          lessons: [
            {
              id: 11,
              title: 'Урок 11',
              description:
                'Как составить договор на пошив одежды? Пункты, на которые следует обратить внимание',
            },
          ],
        },
        {
          id: 7,
          image: require('@/assets/images/recommendation-tabs-img-7.jpg?webp'),
          name: 'Контроль качества',
          title: 'Контроль качества на производстве',
          lessons: [
            {
              id: 12,
              title: 'Урок 12',
              description:
                'Как отследить качество пошива? Проверка готовых изделий перед приёмкой',
            },
          ],
        },
        {
          id: 8,
          image: require('@/assets/images/recommendation-tabs-img-8.jpg?webp'),
          name: 'Пошив на заказ',
          title:
            'Пошив одежды для вашего бренда на производстве «Фабрина» (г. Казань)',
          lessons: [
            {
              id: 13,
              title: 'Урок 13',
              description:
                'Преимущества заказа одежды на швейном производстве «Фабрина»',
            },
          ],
        },
      ],
    }
  },
}
</script>

<style lang="sass" scoped>
.recommendation-section
  &__inner
    padding: 60px 0 30px 0
    @media (min-width: map-get($breakpoints, 'lg'))
      padding: 80px 0 40px 0
      @media (max-height: 800px)
        padding: 60px 0 40px 0
    @media (min-width: map-get($breakpoints, 'lg'))
      padding: 120px 0 63px 0
  &__title
    margin-bottom: 64px
    max-width: 714px
    @media (max-height: 800px)
      margin-bottom: 40px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      max-width: 840px
  &__feedback
    background-color: #1C95BC
    padding: 32px 0 33px 0
    ::v-deep
      .ui-validator__error
        bottom: -16px
        font-size: 12px
        line-height: 16px
        @media (min-width: map-get($breakpoints, 'sm'))
          bottom: -1px
          font-size: 9px
          line-height: 16px
        @media (min-width: map-get($breakpoints, 'lg'))
          bottom: -16px
          font-size: 13px
          line-height: 16px
        @media (min-width: map-get($breakpoints, 'xxxl'))
          bottom: -17px
          font-size: 15px
          line-height: 16px
</style>
