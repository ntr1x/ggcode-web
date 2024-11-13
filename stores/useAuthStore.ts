import { StorageSerializers, useStorage, type RemovableRef } from '@vueuse/core'

// export type Principal = {
//   issuer: string
//   subject: string
//   username: string
//   fullName: string
//   email: string
//   token: string
//   authorities: string[]
// }

export type Session = {
  username: string
  // principal: Principal
}

export type AuthState = {
  session: Session | null
}

function merge(state: AuthState): AuthState {
  if (import.meta.client) {
    Object.assign(state, {
      session: useStorage<Session | null>('pinia/auth/session', null, localStorage || sessionStorage, { serializer: StorageSerializers.object })
    })
  }
  return state
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => merge({
    session: null
  }),
  hydrate(state, initialState) {
    merge(state)
  },
  actions: {
    async signIn() {
      this.session = {
        username: 'Demo User',
      }
    },
    async signOut() {
      this.session = null
    },
  }
})
