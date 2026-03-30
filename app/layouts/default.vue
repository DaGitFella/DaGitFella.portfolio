<template>
  <client-only>
    <div>
      <NavMobile v-if="$device.isMobileOrTablet" />
      <NavDesktop v-else />

      <main>
        <slot></slot>
      </main>
    </div>
  </client-only>
</template>

<script lang="ts" setup></script>

<style></style>
