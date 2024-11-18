import axios from 'axios'

export const useRemoteSecurity = () => {
  const config = useRuntimeConfig()
  console.log('useRuntimeConfig', config)
  return axios.create({
    baseURL: config.public.remote.api.baseURL,
  })
}
