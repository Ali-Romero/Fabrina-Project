<template>
  <div class="recommendations-mobile">
    <div
      v-for="(item, index) in items"
      :key="item.id"
      class="recommendations-mobile__item"
      :class="{
        'recommendations-mobile__item--active': item.id === currentId,
      }"
    >
      <div
        class="recommendations-mobile__head"
        @click="$emit('expand', item.id)"
      >
        0{{ index + 1 }}
        {{ item.name }}
      </div>
      <transition-collapse>
        <div
          v-if="item.id === currentId"
          class="recommendations-mobile__head-wrapper"
        >
          <app-recommendation-lessons
            :title="`0${index + 1} / ${item.title}`"
            :lessons="item.lessons"
          />
        </div>
      </transition-collapse>
    </div>
  </div>
</template>

<script>
import TransitionCollapse from '../ui/TransitionCollapse.vue'
export default {
  components: { TransitionCollapse },
  props: {
    items: {
      type: Array,
      required: true,
    },
    currentId: {
      type: Number,
      required: true,
    },
  },
}
</script>

<style lang="sass" scoped>
.recommendations-mobile
  &__item
    margin-bottom: 10px
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.781)
    border-radius: 10px
    background-color: #1C95BC
    transform: scale(0.98)
    transition: 0.3s
    &:last-child
      margin-bottom: 0
    &--active
      transform: scale(1)
      .recommendations-mobile__head
        border-radius: 4px 4px 0 0
  &__head
    padding: 20px 13px
    font-size: 17px
    line-height: 22px
    color: white
    background: linear-gradient(180deg, #1f3d97 0%, #6230cc 0%, #3F00C5 100%)
    font-family: 'Montserrat-Medium'
    border-radius: 4px
  &__head-wrapper
    border-radius: 5px
</style>
