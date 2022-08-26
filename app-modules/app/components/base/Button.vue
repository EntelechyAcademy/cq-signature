<script setup lang="ts">
import Typography from '@/enums/Typography'

interface LinkProps {
  label: string
  href?: string
}

const props = defineProps<LinkProps>()

const isLink = props.href?.length
</script>

<template>
  <component
    :is="isLink ? 'a' : 'button'"
    :href="href"
    class="c-btn"
    target="_blank"
  >
    <BaseText :type="Typography.BUTTON" :label="label" />
  </component>
</template>
