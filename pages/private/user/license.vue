<script setup lang="ts">
definePageMeta({
  name: 'License',
  layout: false,
})

const breadcrumb = ref([
  { label: 'User' },
  { label: 'License' },
])
</script>

<template>
  <NuxtLayout name="private">
    <template #breadcrumb>
      <Breadcrumb :model="breadcrumb" class="bg-transparent px-0 py-2 text-sm">
        <template #separator> / </template>
      </Breadcrumb>
    </template>
    <template #default>
      <div class="flex flex-col gap-4">
        <h1 class="text-2xl text-primary-200">Licenses</h1>
        <div class="flex flex-col gap-4">
          <div class="rounded-lg bg-surface-700 p-4 flex flex-col gap-3">
            <div class="flex items-center gap-3">
              <h3 class="text-primary-200 font-bold">Trial License</h3>
              <div class="flex-1"></div>
              <div>
                <Tag severity="success" value="Active" />
              </div>
            </div>
            <div>
              <div class="flex items-center gap-3">
                <span class="text-xs shrink-0 w-[7rem]">Issued At:</span>
                <span class="text-xs flex-1 font-bold"><AtomDate iso-date="2024-01-02T11:45:50" format="PPpp" /></span>
              </div>
              <div class="flex items-center gap-3">
                <span class="text-xs shrink-0 w-[7rem]">Valid Through:</span>
                <span class="text-xs flex-1 font-bold"><AtomDate iso-date="2024-03-02T11:45:50" format="PPpp" /></span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Button size="small" outlined severity="success" label="Purchase" />
        </div>
      </div>
    </template>
  </NuxtLayout>
</template>