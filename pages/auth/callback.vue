<script setup lang="ts">
type QueryParams = {
  code: string,
  session_state: string,
  state: string
}

definePageMeta({
  layout: 'splash'
})

useHead({
  title: 'Welcome'
})

const route = useRoute()
const router = useRouter()
const authStore = useAuthStore()

onMounted(async () => {
  try {
    const { code, session_state, state } = route.query as QueryParams

    await authStore.doCallback({
      code,
      sessionState: session_state,
      state
    })

    router.push('/private/user/profile')
  } catch (e) {
    console.error(e)
    authStore.doClear()
    router.push('/')
  }
})
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
  </section>
</template>

<style lang="postcss" scoped>
a {
  @apply text-blue-600 hover:underline;
}
</style>