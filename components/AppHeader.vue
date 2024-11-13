<script setup lang="ts">

const router = useRouter()
const authStore = useAuthStore()
const { principal } = storeToRefs(authStore)

async function handleLogout() {
  await authStore.signOut()
  router.push('/')
}
</script>

<template>
  <header class="backdrop-blur border-b border-gray-200 dark:border-gray-800 -mb-px sticky top-0 z-50">
    <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-stretch justify-between gap-3 h-[--header-height]">
      <div class="lg:flex-1 flex items-center gap-1.5">
        <NuxtLink to="/" class="app-title">
          Develfish Studio
        </NuxtLink>
      </div>
      <div class="part-center">
        <ul>
          <li>
            <a href="#docs">Docs</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
        </ul>
      </div>
      <div class="part-right">
        <ClientOnly>
          <template v-if="principal != null">
            <NuxtLink custom v-slot="{ navigate }" to="/private/user/profile">
              <Button label="User Profile" text rounded @click="navigate">
                <Avatar shape="circle" icon="pi pi-user" class="-my-2 -ml-2" />
                <span>{{ principal.username ?? 'Unknown' }}</span>
              </Button>
            </NuxtLink>
            <Button label="Logout" rounded @click="handleLogout" />
          </template>
          <template v-else>
            <NuxtLink custom to="/login" v-slot="{ navigate }">
              <Button label="Sign in" rounded @click="navigate" />
              <Button label="Sign up" rounded severity="secondary" @click="navigate" />
            </NuxtLink>
          </template>
          <template #fallback>
            <NuxtLink custom to="/login" v-slot="{ navigate }">
              <Button label="Sign in" rounded @click="navigate" />
              <Button label="Sign up" rounded severity="secondary" @click="navigate" />
            </NuxtLink>
          </template>
        </ClientOnly>
      </div>
    </div>
  </header>
</template>

<style lang="postcss" scoped>
  .app-title {
    @apply flex-shrink-0 font-bold text-xl text-gray-900 dark:text-white flex items-end gap-2;
  }

  .part-center {
    @apply flex items-stretch;
    ul {
      @apply flex items-center gap-4;
      li {
        @apply relative flex items-center;
        a {
          @apply font-semibold flex items-center p-3;
        }
      }
    }
  }

  .part-right {
    @apply flex items-center justify-end lg:flex-1 gap-1.5;
  }
</style>