<script setup lang="ts">
import { computed } from 'vue'
import Typography from '~/enums/Typography'

interface TextProps {
  type: Typography
  label: string
  id?: string
}

const props = defineProps<TextProps>()

const componentDefinition = computed(() => {
  switch (props.type) {
    case Typography.H1:
      return 'h1'
    case Typography.H2:
      return 'h2'
    case Typography.H3:
      return 'h3'
    case Typography.H4:
      return 'h4'
    case Typography.BUTTON:
      return 'span'
    default:
      return 'p'
  }
})
</script>

<template>
  <component :is="componentDefinition" :id="id" :class="type">
    {{ label }}
  </component>
</template>
