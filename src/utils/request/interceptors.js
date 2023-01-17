// import { getToken } from '@/utils'
import { resolveResError } from './helpers'

export function reqResolve(config) {
  config.headers['accessToken'] = '4EXQ8zBqjVuGF9NXfE5BX8' // 让每个请求携带自定义token

  return config
}

export function reqReject(error) {
  return Promise.reject(error)
}

export function resResolve(response) {
  // TODO: 处理不同的 response.headers
  const { data, status, statusText } = response
  if (data?.code !== 200) {
    const code = data?.code ?? status

    /** 根据code处理对应的操作，并返回处理后的message */
    const message = resolveResError(code, data?.message ?? statusText)

    return Promise.reject({ code, message, error: data || response })
  }
  return Promise.resolve(data)
}

export function resReject(error) {
  return Promise.reject(error)
}
