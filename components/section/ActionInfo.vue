<script setup lang="ts">
defineProps<{
  title: string
  description: string
}>()
</script>

<template>
  <div class="py-24 sm:py-32">
    <div class="gap-16 sm:gap-y-24 flex flex-col">
      <div class="rounded-xl divide-y divide-gray-200 dark:divide-gray-800 ring-1 ring-gray-200 dark:ring-gray-800 shadow relative bg-gray-100/50 dark:bg-gray-800/50" data-v-b064f615="">
        <div class="flex flex-col gap-16 sm:gap-y-24 px-4 sm:p-6 py-24 sm:py-32 sm:px-16">
          <div class="text-center">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl" v-text="title"></h2>
            <div class="mt-6 text-lg/8 text-gray-600 dark:text-gray-300" v-text="description"></div>
            <div class="mt-8 flex items-center gap-x-6 justify-center">
              <slot />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
