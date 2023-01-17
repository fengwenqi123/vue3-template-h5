import { request } from '@/utils/request/index.js'

export function reStart() {
  return request({
    url: '/basic/devinfo/reboot',
    method: 'POST',
  })
}
export function query() {
  return request({
    url: 'https://api.cjbe88.com/express/express/listByPhone?pageNum=1&pageSize=10&accessToken=4EXQ8zBqjVuGF9NXfE5BX8',
    method: 'GET',
  })
}
