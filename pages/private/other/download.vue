<script setup lang="ts">
definePageMeta({
  name: 'Downloads',
  layout: false,
})

useHead({
  title: 'Downloads'
})

const breadcrumb = ref([
  { label: 'Other' },
  { label: 'Downloads' },
])

type ItemType = {
  tag: string
  type: 'preview' | 'stable'
  date: string
  variants: VariantType[]
}

type VariantType = {
  type: 'windows:exe' | 'linux:app-image' | 'macos:dmg'
}

const items: ItemType[] = [
  {
    tag: '1.3.alfa.1',
    type: 'preview',
    date: '2025-06-01Z',
    variants: [
      { type: 'windows:exe' },
      { type: 'linux:app-image' },
      { type: 'macos:dmg' },
    ]
  },
  {
    tag: '1.2',
    type: 'stable',
    date: '2025-02-23Z',
    variants: [
      { type: 'windows:exe' },
      { type: 'linux:app-image' },
      { type: 'macos:dmg' },
    ]
  },
  {
    tag: '1.1',
    type: 'stable',
    date: '2024-04-05Z',
    variants: [
      { type: 'windows:exe' },
      { type: 'linux:app-image' },
      { type: 'macos:dmg' },
    ]
  },
  {
    tag: '1.0',
    type: 'preview',
    date: '2023-11-20Z',
    variants: [
      { type: 'windows:exe' },
      { type: 'linux:app-image' },
      { type: 'macos:dmg' },
    ]
  },
]
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
        <h1 class="text-2xl text-primary-200">Downloads</h1>
        <div class="flex flex-col gap-4">
          <div v-for="item in items" :key="item.tag" class="rounded-lg bg-surface-700 p-4 flex flex-col gap-3">
            <div class="flex items-center gap-3">
              <h3 class="text-primary-200 font-bold">Version {{ item.tag }}</h3>
              <div class="flex-1"></div>
              <div>
                <Tag v-if="item.type === 'stable'" severity="success" value="Stable" />
                <Tag v-if="item.type === 'preview'" severity="warn" value="Preview" />
              </div>
            </div>
            <div>
              <div class="flex items-center gap-3">
                <span class="text-xs shrink-0 w-[7rem]">Release Date:</span>
                <span class="text-xs flex-1 font-bold"><AtomDate :iso-date="item.date" format="PPpp" /></span>
              </div>
            </div>
            <div class="flex items-center gap-1 -mx-3">
              <div v-for="variant in item.variants" :key="variant.type">
                <Button
                  v-if="variant.type === 'windows:exe'"
                  link
                  size="small"
                  :href="`/downloads/windows/${item.tag}/develfish-studio-${item.tag}.exe`"
                  icon="mdi mdi-microsoft-windows"
                  label="Windows .exe"
                />
                <Button
                  v-if="variant.type === 'linux:app-image'"
                  link
                  size="small"
                  :href="`/downloads/linux/${item.tag}/develfish-studio-${item.tag}.AppImage`"
                  icon="mdi mdi-linux"
                  label="Linux .AppImage"
                />
                <Button
                  v-if="variant.type === 'linux:app-image'"
                  link
                  size="small"
                  :href="`/downloads/macos/${item.tag}/develfish-studio-${item.tag}.dmg`"
                  icon="mdi mdi-apple"
                  label="macOS .dmg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </NuxtLayout>
</template>
