<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useUserStore } from '@/stores/user'

const route = useRoute()

const userStore = useUserStore()
userStore.getUser(String(route.params.id))
</script>

<template>
  <UiHeader />
  <UiUser />
</template>

<style></style>
