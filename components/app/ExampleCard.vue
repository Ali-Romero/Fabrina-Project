<template>
  <div class="example-card" :class="classes">
    <img
      class="example-card__image"
      :src="image"
      width="448"
      height="540"
      alt="photo"
      loading="lazy"
    />
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    small: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return {
        'example-card--small': this.small,
      }
    },
  },
}
</script>

<style lang="sass" scoped>
.example-card
  display: flex
  align-items: flex-end
  overflow: hidden
  height: 241px
  justify-content: center
  @media (min-width: map-get($breakpoints, 'sm'))
    height: auto
  &--small
    height: 370px
    @media (min-width: map-get($breakpoints, 'sm'))
      height: 198px
    @media (min-width: map-get($breakpoints, 'lg'))
      height: 294px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      height: 370px
  &__image
    width: 200px
    height: 100%
    object-fit: cover
    @media (min-width: map-get($breakpoints, 'sm'))
      height: auto
      object-fit: unset
      width: 240px
    @media (min-width: map-get($breakpoints, 'lg'))
      width: 350px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      width: 448px
</style>
