import axios, { AxiosError, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
const serviceInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
  timeout: 5000
})
const requestInterceptorCallback = (request: InternalAxiosRequestConfig) => {
  return request
}

const requestInterceptorErrorCallback = (err: AxiosError) => {
  return Promise.reject(err)
}

// 请求拦截器
serviceInstance.interceptors.request.use(requestInterceptorCallback, requestInterceptorErrorCallback)

// 响应拦截器
serviceInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data
  },
  (err: AxiosError) => {
    return err
  }
)

const request = <R>(config: AxiosRequestConfig) => {
  return serviceInstance.request<AxiosRequestConfig, R>(config)
}

export default request
