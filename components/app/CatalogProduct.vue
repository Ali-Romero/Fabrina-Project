<template>
  <div class="catalog-product">
    <div class="catalog-product__image">
      <img :src="image" width="328" height="380" alt="photo" />
    </div>
    <div class="catalog-product__name">{{ name }}</div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="sass" scoped>
.catalog-product
  &__image
    margin-bottom: 8px
    @media (min-width: map-get($breakpoints, 'lg'))
      margin-bottom: 10px
    ::v-deep
      img
        width: 206px
        height: auto
        margin: 0 auto
        @media (min-width: map-get($breakpoints, 'sm'))
          margin: 0
        @media (min-width: map-get($breakpoints, 'lg'))
          width: 250px
        @media (min-width: map-get($breakpoints, 'xxxl'))
          width: 328px
  &__name
    font-size: 15px
    line-height: 19px
    max-width: 218px
    text-align: center
    margin: 0 auto
    @media (min-width: map-get($breakpoints, 'sm'))
      margin: 0
      text-align: left
      font-size: 13px
      line-height: 15px
      max-width: 188px
    @media (min-width: map-get($breakpoints, 'lg'))
      max-width: 233px
      font-size: 16px
      line-height: 20px
</style>
