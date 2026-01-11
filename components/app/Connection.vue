<template>
  <div class="connection" :class="classes">
    <div class="connection__container">
      <div v-if="page === 'thanks'" class="connection__num">
        <a href="tel:+78432052188">
          <!-- +7 (843) 205-21-88 -->
        </a>
      </div>
      <div v-else class="connection__num" @click.prevent="modal = true">
        <a href="tel:+78432052188">
          <!-- +7 (843) 205-21-88 -->

          <span class="connection__description">Заказать звонок</span></a
        >
      </div>
      <div class="connection__description connection__description--header">
        <a v-if="page === 'thanks'" href="tel:+78432052188"
          >Позвоните сейчас,<br />
          чтобы не ждать звонка</a
        >
      </div>
      <div class="connection__description connection__description--footer">
        <a v-if="page === 'thanks'" href="tel:+78432052188"
          >Позвоните прямо сейчас</a
        >
      </div>
    </div>
    <ui-modal v-model="modal">
      <app-feedback-modal-call @submit="modal = false" />
    </ui-modal>
  </div>
</template>

<script>
export default {
  props: {
    header: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      modal: false,
    }
  },
  computed: {
    page() {
      return this.$route.name
    },
    classes() {
      return {
        'connection--header': this.header,
      }
    },
  },
}
</script>

<style lang="sass">
.connection
  display: flex
  color: white
  &--header
    color: black
    .connection__num
      font-size: 15px
      line-height: 17px
      @media (min-width: map-get($breakpoints, 'sm'))
        font-size: 20px
        line-height: 20px
      @media (min-width: map-get($breakpoints, 'xxxl'))
        font-size: 24px
        line-height: 29px

  &__num
    font-size: 17px
    line-height: 18px
    @media (min-width: map-get($breakpoints, 'sm'))
      font-size: 16px
      line-height: 16px
    @media (min-width: map-get($breakpoints, 'lg'))
      font-size: 20px
      line-height: 20px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      font-size: 24px
      line-height: 29px

  &__description
    font-size: 12px
    line-height: 13px
    display: flex
    justify-content: center
    color: inherit
    text-align: center
    @media (min-width: map-get($breakpoints, 'lg'))
      font-size: 13px
      line-height: 14px
    &--footer
      display: none
      text-align: center
</style>
