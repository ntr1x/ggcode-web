<script setup lang="ts">
type ImageProps = {
  src: string,
}

defineProps<ImageProps>()
</script>

<template>
  <div class="bg-gray-900/5 dark:bg-white/5 ring-1 ring-inset ring-gray-900/10 dark:ring-white/10 rounded-xl lg:-mx-4 p-4">
    <div class="aspect-[16/9] rounded-lg relative overflow-hidden border border-dashed border-gray-900/10 dark:border-white/10">
      <NuxtImg :src="src" />
    </div>
  </div>
</template>
