import { StorageSerializers, useLocalStorage, type RemovableRef } from '@vueuse/core'
import { useRemoteSecurity } from '~/hooks/useRemoteSecurity'

export type AuthRequest = {
  state?: string
  provider?: string
  redirectUri: string
}

export type AuthResponse = {
  authUri: string
}

export type LogoutRequest = {
  idToken: string
  redirectUri: string
}

export type LogoutResponse = {
  logoutUri: string
}

export type CallbackRequest = {
  state: string
  code: string
  redirectUri: string
  sessionState: string
  subscriptionId?: string
  sessionRef?: string
}

export type CallbackResponse = {
  idToken: string
  idExpiresIn: number
  accessToken: string
  accessExpiresIn: number
  refreshToken: string
  refreshExpiresIn: number
  principal: Principal
}


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
  idToken: Token | null
  accessToken: Token | null
  refreshToken: Token | null
}

export type Token = {
  token: string
  expiresIn: number
  expiresAt: number
  invalidateInterval: number
}

function initialState(): AuthState {
  return {
    principal: null,
    idToken: null,
    accessToken: null,
    refreshToken: null,
  }
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
    async signOut() {
      Object.assign(this, savePersistedState({
        principal: null,
        idToken: null,
        accessToken: null,
        refreshToken: null,
      }))
    },
    async doLogout() {
      const remoteSecurity = useRemoteSecurity()
      const redirectUri = new URL('/', window.location.origin)
      const idToken = this.idToken?.token
      Object.assign(this, savePersistedState({
        principal: null,
        idToken: null,
        accessToken: null,
        refreshToken: null,
      }))
      const { data } = await remoteSecurity.post<LogoutResponse>('/security/logout', {
        redirectUri,
        idToken,
      })

      return data
    },
    async doAuth(request: Omit<AuthRequest, "redirectUri">) {
      const remoteSecurity = useRemoteSecurity()
      const redirectUri = new URL('/auth/callback', window.location.origin)
      const { data } = await remoteSecurity.post<AuthResponse>('/security/auth', {
        ...request,
        redirectUri,
      })

      return data
    },
    async doCallback(request: Omit<CallbackRequest, "redirectUri">) {
      const now = Date.now()
      const remoteSecurity = useRemoteSecurity()
      const redirectUri = new URL('/auth/callback', window.location.origin)
      const { data } = await remoteSecurity.post<CallbackResponse>('/security/callback', {
        ...request,
        redirectUri: redirectUri.toString()
      })

      if (request.sessionRef == null) {
        Object.assign(this, savePersistedState({
          principal: data.principal,
          idToken: {
            token: data.idToken,
            expiresIn: data.idExpiresIn,
            expiresAt: now + data.idExpiresIn * 1000,
            invalidateInterval: 10 * 1000,
          },
          accessToken: {
            token: data.accessToken,
            expiresIn: data.accessExpiresIn,
            expiresAt: now + data.accessExpiresIn * 1000,
            invalidateInterval: 10 * 1000,
          },
          refreshToken: {
            token: data.refreshToken,
            expiresIn: data.refreshExpiresIn,
            expiresAt: now + data.refreshExpiresIn * 1000,
            invalidateInterval: 10 * 1000,
          },
        }))
      }

      return data
    },
    doClear() {
      Object.assign(this, savePersistedState({
        principal: null,
        idToken: null,
        accessToken: null,
        refreshToken: null,
      }))
    }
  }
})
