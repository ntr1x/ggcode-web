<script setup lang="ts">
import type { Menu } from "primevue";
import { ref } from "vue"

defineProps<{
  viewDetails?: boolean
}>()

const menu = ref<InstanceType<typeof Menu>>()

const items = ref([
  {
    label: 'Options',
    items: [
      { label: 'Linux (.AppImage)', icon: 'mdi mdi-linux' },
      { label: 'macOS (.dmg)', icon: 'mdi mdi-apple' },
      { label: 'Windows (.exe)', icon: 'mdi mdi-microsoft-windows' },
    ]
  }
])

function handleToggle(e: MouseEvent) {
  menu.value?.toggle(e)
};
</script>

<template>
  <ButtonGroup class="flex items-stretch">
    <Button size="large" rounded class="flex gap-3 items-center">
      <span class="pi pi-download" />
      <span>Download</span>
    </Button>
    <Button size="large" rounded @click="handleToggle" class="flex gap-3 items-center">
      <span v-if="viewDetails">Linux (.AppImage)</span>
      <span class="pi pi-chevron-down" />
    </Button>
    <Menu ref="menu" :model="items" :popup="true" />
  </ButtonGroup>
</template>
