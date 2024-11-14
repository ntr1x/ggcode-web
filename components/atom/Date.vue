<script setup lang="ts">
import { format, parseISO } from 'date-fns'

const props = defineProps<{
  isoDate: string
  format: 'P' | 'PP' | 'PPP' | 'Pp' | 'PPpp' | 'YYYY-MM-DD' | 'YYYY/MM/DD' | string
}>()

const date = computed(() => parseISO(props.isoDate))
const output = computed(() => props.format === 'ISO' ? date.value.toISOString() : format(date.value, props.format))
</script>

<template>
  <span v-text="output"></span>
</template>
