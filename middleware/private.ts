export default defineNuxtRouteMiddleware((to, from) => {
  const auth = useAuthStore()
  const { principal } = storeToRefs(auth)

  if (principal.value == null) {
    return navigateTo('/login')
  }
})
