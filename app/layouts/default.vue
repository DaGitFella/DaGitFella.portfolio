<template>
  <client-only>
    <div>
      <LazyNavMobile v-if="$device.isMobileOrTablet" />
      <LazyNavDesktop v-else />

      <main>
        <slot></slot>
      </main>
    </div>
  </client-only>
</template>

<script lang="ts" setup></script>

<style></style>
