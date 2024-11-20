<script setup lang="ts">
import { useStateSerde } from '~/hooks/useStateSerde';

definePageMeta({
  layout: 'splash'
})

useHead({
  title: 'Login'
})

const route = useRoute()
const authStore = useAuthStore()
const stateSerde = useStateSerde()

async function handleAuth(provider: string) {
  const state = stateSerde.encode(stateSerde.clean(route.query))
  const { authUri } = await authStore.doAuth({ provider, state: state ?? undefined })
  document.location.href = authUri
}
</script>

<template>
  <section class="mx-auto min-w-64 w-80 grid grid-cols-1 gap-8 p-12 bg-surface-950 rounded-lg m-4">
    <div class="flex items-center justify-center gap-4">
      <NuxtLink custom v-slot="{ navigate }" to="/">
        <Avatar size="xlarge" class="p-2" @click="navigate">
          <NuxtImg src="/img/logo.png" sizes="128px" />
        </Avatar>
      </NuxtLink>
    </div>
    <h1 class="text-center text-primary-200 font-semibold text-2xl">Welcome</h1>
    <div class="grid grid-cols-1 gap-3">
      <Button outlined icon="mdi mdi-google" label="Continue with Google" @click="() => handleAuth('google')" />
      <Button outlined icon="mdi mdi-github" label="Continue with GitHub" @click="() => handleAuth('github')" />
    </div>
    <div class="text-center text-sm">
      By using Develfish Studio, you agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
    </div>
  </section>
</template>

<style lang="postcss" scoped>
a {
  @apply text-blue-600 hover:underline;
}
</style>