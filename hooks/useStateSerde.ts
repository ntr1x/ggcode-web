import basex from 'base-x'
import { isEmpty, isUndefined, omitBy } from 'lodash'

const BASE62 = basex('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')

export type AuthState = {
  sessionRef?: string
  subscriptionId?: string
  successPath?: string
  failurePath?: string
  payload?: string
}

const cleanString = (st: any): string | undefined => st == null ? undefined : '' + st

export const useStateSerde = () => ({
  clean: (state?: AuthState | null): AuthState | null => {
    const candidate = state == null ? null : omitBy({
      sessionRef: cleanString(state.sessionRef),
      subscriptionId: cleanString(state.subscriptionId),
      successPath: cleanString(state.successPath),
      failurePath: cleanString(state.failurePath),
      payload: cleanString(state.payload),
    }, isUndefined)
    return isEmpty(candidate) ? null : candidate
  },
  encode: (state?: AuthState | null) => state == null
    ? null
    : BASE62.encode(new TextEncoder().encode(JSON.stringify(state))),
  decode: (st?: string | null) => st == null
    ? null
    : JSON.parse(new TextDecoder().decode(BASE62.decode(st))) as AuthState
})
