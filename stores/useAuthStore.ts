import { StorageSerializers, useLocalStorage, type RemovableRef } from '@vueuse/core'

export type Principal = {
  // issuer: string
  // subject: string
  fullName: string
  firstName: string
  lastName: string
  email: string
  // token: string
  // authorities: string[]
}

export type AuthState = {
  principal: Principal | null
}

function initialState(): AuthState {
  return { principal: null }
}

function loadPersistedState(): AuthState {
  const storage = localStorage ?? sessionStorage
  const encoded = storage.getItem('pinia/auth')
  return Object.assign(initialState(), encoded == null ? undefined : JSON.parse(encoded))
}

function savePersistedState(state: AuthState) {
  const storage = localStorage ?? sessionStorage
  const encoded: string = JSON.stringify(state)
  storage.setItem('pinia/auth', encoded)
  return state
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => import.meta.browser
    ? loadPersistedState()
    : initialState()
  ,
  hydrate(state: AuthState, _initialState: AuthState) {
    Object.assign(state, loadPersistedState())
  },
  actions: {
    async signIn() {
      Object.assign(this, savePersistedState({
        principal: {
          fullName: 'Demo User',
          firstName: 'Demo',
          lastName: 'User',
          email: 'demo.user@example.com',
        },
      }))
    },
    async signOut() {
      Object.assign(this, savePersistedState({
        principal: null,
      }))
    },
  }
})
