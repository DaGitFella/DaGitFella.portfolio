<template>
  <client-only>
    <div>
      <nav-mobile v-if="$device.isMobileOrTablet" />
      <nav-desktop v-else />

      <main>
        <slot></slot>
      </main>
    </div>
  </client-only>
</template>

<script lang="ts" setup></script>

<style></style>
