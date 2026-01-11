<template>
  <validation-provider
    v-slot="{ errors }"
    v-bind="$attrs"
    class="ui-validator"
    tag="div"
    :mode="mode"
    :class="classes"
  >
    <div class="ui-validator__field">
      <slot v-bind="{ error: !!errors.length }" />
    </div>

    <ui-transition-collapse v-if="showMessage">
      <div v-if="!!errors.length">
        <div class="ui-validator__error">
          {{ errors[0] }}
        </div>
      </div>
    </ui-transition-collapse>
  </validation-provider>
</template>

<script>
import { ValidationProvider } from 'vee-validate'

export default {
  components: {
    ValidationProvider,
  },
  inheritAttrs: false,
  props: {
    showMessage: {
      type: Boolean,
      default: false,
    },
    mode: {
      type: String,
      default: 'lazy',
    },
    absoluteError: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    classes() {
      return {
        'ui-validator--absolute-error': this.absoluteError,
      }
    },
  },
}
</script>

<style lang="sass" scoped>
.ui-validator
  position: relative
  &--absolute-error &__error
    position: absolute
    left: 16px
    top: 100%
    @media (min-width: map-get($breakpoints, 'sm'))
      left: 5px
    @media (min-width: map-get($breakpoints, 'lg'))
      left: 2px
  &__field
    height: 100%
  &__error
    display: inline-block
    color: #b11d1d
    animation: shake 0.3s 0.3s
    font-size: 11px
    line-height: 12px
    font-family: 'Montserrat-Medium'
    padding: 3px 0 0 0
    @media (min-width: map-get($breakpoints, 'sm'))
      font-size: 12px
    @media (min-width: map-get($breakpoints, 'lg'))
      font-size: 14px
      line-height: 16px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      font-size: 15px
      line-height: 16px

@keyframes shake
  0%
    transform: translateX(-10px)
  25%
    transform: translateX(10px)
  50%
    transform: translateX(-6px)
  75%
    transform: translateX(6px)
  100%
    transform: translateX(0)
</style>
