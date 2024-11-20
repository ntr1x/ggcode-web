<script setup lang="ts">
import { omitBy, isUndefined } from 'lodash'
import { useStateSerde } from '~/hooks/useStateSerde'

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
const stateSerde = useStateSerde()

onMounted(async () => {
  const { code, session_state, state } = route.query as QueryParams
  const stateData = stateSerde.clean(stateSerde.decode(state))

  try {
    const data = await authStore.doCallback({
      code,
      state,
      sessionState: session_state,
      subscriptionId: stateData?.subscriptionId ?? undefined,
      sessionRef: stateData?.sessionRef ?? undefined
    })

    router.push({
      path: stateData?.successPath ?? '/private/user/profile',
      query: omitBy({
        sessionRef: stateData?.sessionRef ?? undefined,
        subscriptionId: stateData?.subscriptionId ?? undefined,
        authData: stateData?.subscriptionId == null ? undefined : data.idToken?.split('.')[0] ?? undefined,
      }, isUndefined)
    })
  } catch (e) {
    console.error(e)
    authStore.doClear()
    router.push(stateData?.failurePath ?? '/')
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