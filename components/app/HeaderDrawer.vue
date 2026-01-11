<template>
  <div class="header-drawer">
    <ui-drawer v-model="drawer" left>
      <ui-drawer-inner>
        <div class="header-drawer__logo">
          <img
            src="@/assets/images/logo-main.svg"
            width="140"
            height="42"
            alt="logo"
            loading="lazy"
          />
        </div>
        <app-header-nav />
      </ui-drawer-inner>
    </ui-drawer>
    <ui-drawer-button v-model="drawer" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    }
  },
}
</script>
