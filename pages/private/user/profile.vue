<script setup lang="ts">
definePageMeta({
  name: 'Profile',
  layout: false,
})

const auth = useAuthStore()
const { principal } = storeToRefs(auth)

const breadcrumb = ref([
  { label: 'User' },
  { label: 'Profile' },
])

type FormType = {
  firstName: string
  lastName: string
  email: string
}

const form: FormType = reactive<FormType>({
  firstName: principal.value?.firstName ?? '',
  lastName: principal.value?.lastName ?? '',
  email: principal.value?.email ?? '',
})
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
        <div>
          <h1 class="text-2xl text-primary-200">Your Profile</h1>
        </div>
        <div class="flex flex-col gap-3">
          <div class="leading-8">
            <h2 class="font-bold text-primary-200">Name</h2>
            <div class="text-sm">
              <p>Your name as it will be displayed</p>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-3">
            <div>
              <label for="input-first-name" class="text-xs">First Name</label>
              <div>
                <InputText id="input-first-name" size="small" fluid v-model="form.firstName" type="text" placeholder="John" />
              </div>
            </div>
            <div>
              <label for="input-last-name" class="text-xs">Last Name</label>
              <div>
                <InputText id="input-last-name" size="small" fluid v-model="form.lastName" type="text" placeholder="Smith" />
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-3">
          <div class="leading-8">
            <h2 class="font-bold text-primary-200">Email</h2>
            <div class="text-sm">
              <p>The email associated to your account</p>
            </div>
          </div>
          <div class="grid grid-cols-1 gap-3">
            <div>
              <div>
                <InputText id="input-email" size="small" fluid v-model="form.email" type="email" placeholder="john.smith@example.com" />
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-3">
          <div>
            <Button severity="info" size="small" label="Update Profile" outlined />
          </div>
        </div>
        <div class="flex flex-col gap-3">
          <div class="leading-8">
            <h2 class="font-bold text-primary-200">Danger Zone</h2>
            <div class="text-sm">
              <p>Delete account and all the associated data</p>
            </div>
          </div>
          <div>
            <Button severity="danger" size="small" label="Delete Account" outlined />
          </div>
        </div>
      </div>
    </template>
  </NuxtLayout>
</template>
