<script lang="ts" setup></script>

<template>
  <!-- Placeholder content -->
  <progress id="file" class="c-progress u-mb-14" max="42" value="8">
    20%
  </progress>
</template>

<style scoped lang="scss">
.c-progress {
  width: 100%;
  &::-webkit-progress-value{
    background: theme('colors.blue');
    border-radius: 20px;
    width: 100%;
  }
  &::-webkit-progress-bar {
  border-radius: 20px;

    background: theme('colors.grey');
  }
}
</style>
