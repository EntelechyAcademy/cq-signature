<script lang="ts" setup>
import type { PropType } from 'vue'
import Typography from '@/enums/Typography'
import type { UserDetailsProps } from '@/app-modules/app/types/user'

const props = defineProps({
  user: {
    type: Object as PropType<UserDetailsProps>,
    required: true,
  },
})
</script>

<template>
  <div class="c-user__details">
    <div class="c-user__info">
      <BaseText :type="Typography.TAG" label="Member since" />
      <BaseText :type="Typography.BODY_LARGE_BOLD" :label="user.memberSince" class="u-mb-16" />
      <BaseText :type="Typography.TAG" label="Character Qualities awarded" />
      <BaseText :type="Typography.BODY_LARGE_BOLD" label="12" />
    </div>

    <div class="c-user__goal">
      <BaseText :type="Typography.H2" label="Learning Goals" class="u-mb-16" />
      <BaseText :type="Typography.TAG" label="I am becoming" />
      <BaseText :type="Typography.BODY_LARGE_BOLD" :label="user.progressTitle" class="u-mb-16" />
      <BaseProgressBar />
      <BaseText :type="Typography.BODY_LARGE_REGULAR" :label="user.progressDesc" />
    </div>
  </div>
</template>

<style scoped></style>
