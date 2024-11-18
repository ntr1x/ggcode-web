import axios from 'axios'

export const useRemoteSecurity = () => {
  const config = useRuntimeConfig()
  return axios.create({
    baseURL: config.public.remote.api.baseURL,
  })
}
