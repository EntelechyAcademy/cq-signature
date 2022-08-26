<script lang="ts" setup>
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
</script>

<template>
  <section id="c-user" class="o-wrapper">
    <div class="c-user">
      <UserHeader :full-name="userStore.getUserFullName" />

      <UserDetails :user="userStore.getUserDetails" />

      <div class="c-user__strengths" />

      <div class="c-user__focuses" />
    </div>
  </section>
</template>

<style scoped></style>
