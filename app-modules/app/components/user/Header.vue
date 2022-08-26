<script lang="ts" setup>
import Typography from '@/enums/Typography'

interface UserHeaderProps {
  fullName: string
}

const props = defineProps<UserHeaderProps>()
</script>

<template>
  <div class="c-user__header">
    <div class="c-user__name">
      <BaseText :type="Typography.H1" :label="fullName" />
    </div>
    <div class="c-user__cta">
      <BaseButton href="https://entelechy.academy" label="Get your own signature" />
    </div>
  </div>
</template>

<style scoped></style>
