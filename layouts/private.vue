<script setup lang="ts">
const router = useRouter()
const authStore = useAuthStore()

async function handleLogout() {
  await authStore.signOut()
  router.push('/')
}

const menu = [
  {
    key: 'user',
    label: 'User',
    items: [
      { key: 'profile', to: '/private/user/profile', icon: 'mdi mdi-account-circle-outline', label: 'Profile' },
      { key: 'license', to: '/private/user/license', icon: 'mdi mdi-license', label: 'License' },
    ]
  },
  {
    key: 'other',
    label: 'Other',
    items: [
      { key: 'download', to: '/private/other/download', icon: 'mdi mdi-download-circle-outline', label: 'Downloads' },
      { key: 'logout', action: handleLogout, icon: 'mdi mdi-logout', label: 'Logout' },
    ]
  },
]
</script>

<template>
  <div class="min-h-screen bg-slate-900">
    <div class="mx-auto max-w-4xl min-h-screen flex flex-col items-stretch">
      <div class="p-4 sm:p-6 lg:p-8 flex-1 flex gap-3">
        <div class="w-48 shrink-0 flex flex-col gap-3">
          <div>
            <NuxtLink custom to="/" v-slot="{ navigate }">
              <Button text icon="pi pi-times" label="Exit Settings" size="small" @click="navigate" />
            </NuxtLink>
          </div>
          <div v-for="group in menu" :key="group.key">
            <h3 class="text-xs text-primary-500 font-semibold p-3" v-text="group.label"></h3>
            <ul>
              <li v-for="item in group.items" :key="item.key">
                <template v-if="item.to != null">
                  <NuxtLink custom :to="item.to" v-slot="{ navigate, isActive }">
                    <Button
                      text
                      :icon="item.icon"
                      icon-class="scale-125"
                      size="small"
                      fluid
                      class="justify-start"
                      :class="{
                        '!bg-primary-700': isActive
                      }"
                      :label="item.label"
                      @click="navigate"
                    />
                  </NuxtLink>
                </template>
                <template v-else-if="item.action != null">
                  <Button
                    text
                    :icon="item.icon"
                    icon-class="scale-125"
                    size="small"
                    fluid
                    class="justify-start"
                    :label="item.label"
                    @click="item.action"
                  />
                </template>
              </li>
            </ul>
          </div>
        </div>
        <div class="flex-1 flex flex-col gap-3">
          <div class="shrink-0 px-4">
            <slot name="breadcrumb" />
          </div>
          <div class="flex-1 p-8 bg-surface-950 border border-primary-800 rounded-lg">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
