<template>
  <ui-page>
    <ui-layout>
      <template #header>
        <app-header />
      </template>
      <template #main>
        <div class="main-wrapper">
          <nuxt />
        </div>
      </template>
      <template #footer>
        <app-footer />
      </template>
    </ui-layout>
  </ui-page>
</template>

<style lang="sass" scoped>
.main-wrapper
  height: 100%
</style>
