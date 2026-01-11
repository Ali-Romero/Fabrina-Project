<template>
  <div class="reviews">
    <div class="reviews__head">
      <div class="reviews__head-container">
        <div class="reviews__photo">
          <img
            class="reviews__photo-image"
            :src="image"
            width="88"
            height="88"
            alt="photo"
            loading="lazy"
          />
        </div>
        <div class="reviews__name">
          {{ name }}
          <span class="reviews__name-description">{{ nameDescription }}</span>
        </div>
      </div>
      <div class="reviews__logo">
        <img
          class="reviews__head-logo"
          :src="logo"
          width="88"
          height="88"
          alt="logo"
          loading="lazy"
        />
      </div>
    </div>
    <div class="reviews__description">
      <div class="reviews__description-wrapper">
        {{ reviewsDescription }}
      </div>
    </div>
    <div class="reviews__content">
      <div class="reviews__content-video" :class="classes">
        <youtube
          ref="youtube"
          :video-id="video"
          class="video-frame"
          @paused="paused"
          @playing="playing"
        ></youtube>
        <div class="reviews__content-video-control">
          <button
            class="reviews__content-video-button reviews__content-video-control--play"
            @click="playing"
          >
            <ui-icon name="play"></ui-icon>
          </button>
          <div class="reviews__content-video-text">
            <span>
              Смотреть видеоотзыв
            </span>
          </div>
        </div>
        <div class="reviews__content-preview">
          <img
            class="reviews__content-preview-bg"
            :src="reviewImage"
            width="420"
            height="236"
            alt="img"
            loading="lazy"
          />
        </div>
      </div>

      <div class="reviews__content-image" @click.prevent="modal = true">
        <img
          class="reviews__content-image-doc"
          :src="reviewsDocImage"
          width="175"
          height="236"
          alt="logo"
          loading="lazy"
        />
      </div>
    </div>
    <ui-modal v-model="modal">
      <img
        class="reviews__modal-img"
        :src="reviewsDocImage"
        width="608"
        height="448"
        alt="img"
        loading="lazy"
      />
    </ui-modal>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    nameDescription: {
      type: String,
      required: true,
    },
    reviewsDescription: {
      type: String,
      required: true,
    },
    video: {
      type: String,
      required: true,
    },
    reviewImage: {
      type: String,
      required: true,
    },
    reviewsDocImage: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      preview: true,
      modal: false,
    }
  },
  computed: {
    player() {
      return this.$refs.youtube.player
    },
    classes() {
      return {
        'reviews__content-video--start': this.preview,
      }
    },
  },
  methods: {
    playing() {
      this.player.playVideo()
      this.preview = false
    },
    paused() {
      this.player.pauseVideo('pause')
      this.preview = true
    },
  },
}
</script>

<style lang="sass" scoped>
.reviews
  max-width: 290px
  margin: 0 auto
  background: #FFFFFF
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1)
  padding: 20px 10px
  min-height: 494px
  @include above('sm')
    padding: 24px
    max-width: 600px
  @include above('lg')
    max-width: 560px
    padding: 24px
    min-height: 507px
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1)
  @include above('xxxl')
    padding: 31px
    max-width: 688px
    min-height: 612px
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1)

  &__modal-img
    width: 300px
    height: auto
    @include above('lg')
      width: 460px
    @include above('xxxl')
      width: 608px

  &__head
    display: flex
    align-items: center
    justify-content: space-between
    margin: 0 0 16px 0
    position: relative
    @include above('xxxl')
      margin: 0 0 32px 0

  &__head-container
    @include above('sm')
      display: flex
      align-items: center

  &__logo
    position: absolute
    top: 2px
    right: 0
    @include above('sm')
      position: unset

  &__head-logo
    border-radius: 100%
    width: 70px
    height: 70px
    @include above('xxxl')
      width: 88px
      height: 88px

  &__photo
    margin: 0 16px 0 0
    @include above('sm')
      margin: 0 16px 0 0

  &__photo-image
    border-radius: 100%
    width: 75px
    height: auto
    @include above('xxxl')
      width: 88px
      height: 88px

  &__name
    font-size: 22px
    line-height: 30px
    @include above('sm')
      font-size: 18px
      line-height: 22px
    @include above('lg')
      font-size: 22px
      line-height: 27px
    span
      font-size: 13px
      line-height: 15px
      display: block
      color: #777777
      max-width: 307px
      margin-top: 2px
      @include above('sm')
        margin-top: 4px
        font-size: 14px
        line-height: 18px

  &__description
    font-size: 15px
    line-height: 18px
    text-align: center
    color: #272727
    background: rgba(28, 148, 188, 0.05)
    display: flex
    align-items: center
    min-height: 250px
    padding: 0 8px
    margin: 0 0 14px 0
    @include above('sm')
      padding: 0 22px
      margin: 0 0 16px 0
      min-height: 148px
    @include above('xxxl')
      min-height: 160px
      margin: 0 0 32px 0
      padding: 0 42px
      font-size: 16px
      line-height: 21px

  &__content
    display: flex
    justify-content: space-between
    align-items: center
    flex-direction: column-reverse
    @include above('sm')
      flex-direction: row

  &__content-video
    max-width: 264px
    height: 148px
    width: 100%
    position: relative
    z-index: 1
    -webkit-tap-highlight-color: transparent
    -webkit-touch-callout: none
    -webkit-user-select: none
    -khtml-user-select: none
    -moz-user-select: none
    -ms-user-select: none
    @include above('sm')
      max-width: 340px
      height: 191px
    @include above('xxxl')
      max-width: 420px
      height: 236px
    ::v-deep
      .video-frame
        width: 264px
        height: 148px
        @include above('sm')
          width: 340px
          height: 191px
        @include above('xxxl')
          width: 420px
          height: 236px

    &--start
      .reviews__content-preview
        opacity: 1
        z-index: 1
      .reviews__content-video-control
        opacity: 1
        z-index: 12

  &__content-image
    max-width: 139px
    height: 189px
    width: 100%
    cursor: pointer
    margin: 0 0 10px 0
    -webkit-tap-highlight-color: transparent
    -webkit-touch-callout: none
    -webkit-user-select: none
    -khtml-user-select: none
    -moz-user-select: none
    -ms-user-select: none
    @include above('sm')
      margin: 0
    @include above('xxxl')
      max-width: 175px
      height: 236px
    img
      width: 139px
      height: 189px
      @include above('xxxl')
        width: 175px
        height: 236px

  &__content-video-control
    opacity: 0
    position: absolute
    top: 0
    z-index: -1
    display: flex
    justify-content: center
    align-items: center
    height: 100%
    width: 100%

  &__content-video-button
    background: none
    border: none
    padding: 0
    position: absolute
    cursor: pointer
    animation: pulse 2.5s infinite linear alternate
    svg
      width: 140px
      height: 141px
      @include above('sm')
        width: 160px
        height: 161px
      @include above('xxxl')
        width: 194px
        height: 195px
    @keyframes pulse
      0%
        transform: scale(0.8)
        opacity: 0.9
      50%
        transform: scale(0.9)
        opacity: 1
      100%
        transform: scale(0.8)
        opacity: 0.9

  &__content-video-text
    font-size: 14.3833px
    line-height: 19px
    color: white
    position: absolute
    bottom: 0
    top: 0
    margin: 0 auto
    display: flex
    justify-content: center
    align-items: center
    pointer-events: none
    @include above('sm')
      font-size: 15.3833px
      line-height: 20px
    span
      margin: 100px 0 0 0
      @include above('sm')
        margin: 120px 0 0 0
      @include above('xxxl')
        margin: 140px 0 0 0

  &__content-preview
    position: absolute
    top: 0
    left: 0
    opacity: 0
    z-index: -1
    img
      width: 264px
      height: 148px
      @include above('sm')
        width: 340px
        height: 191px
      @include above('xxxl')
        width: 420px
        height: 236px
</style>
