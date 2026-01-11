<template>
  <div class="yandex-map">
    <client-only>
      <yandex-map :coords="coords" :controls="[]" :zoom="16">
        <ymap-marker
          marker-id="geo"
          marker-type="placemark"
          :coords="coords"
          :icon="markerIcon"
        />
      </yandex-map>
    </client-only>
  </div>
</template>

<script>
export default {
  data: () => ({
    coords: [55.78184868438159, 49.22969504232787],
    markerIcon: {
      layout: 'default#imageWithContent',
      imageHref: require('@/assets/images/geo-map.svg'),
      imageSize: [70, 90],
      imageOffset: [-34, -86],
      content: 'ул. Сахарова, 16А',
      contentOffset: [80, 40],
      contentLayout: '<div  >$[properties.iconContent]</div>',
    },
  }),
}
</script>

<style lang="sass" scoped>
.yandex-map
  height: 100%
  width: 100%

.ymap-container
  height: 100%
  width: 100%
  ::v-deep
    .ymaps-2-1-79-image-with-content
      div
        background-color: white
        width: 150px
        height: 20px
        font-size: 13px
        line-height: 18px
        border-radius: 5px
        color: black
        font-family: 'Montserrat-Bold'
        @media (min-width: map-get($breakpoints, 'sm'))
          width: 176px
          height: 26px
          font-size: 15px
          line-height: 26px
</style>
