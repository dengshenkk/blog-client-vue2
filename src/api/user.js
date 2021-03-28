import { request } from '@/api/index'

/**
 * 注册
 * @param name
 * @param avatar
 * @param phone
 * @param password
 * @param repeatPassword
 * @returns {Promise}
 */
export function register ({
                            name,
                            avatar,
                            phone,
                            password,
                            repeatPassword
                          }) {
  return request({
    url: `/user/register`,
    method: 'post',
    data: {
      name,
      avatar,
      phone,
      password,
      repeatPassword
    }
  })
}

/**
 * 登录
 * @param phone
 * @param password
 * @returns {Promise}
 */
export function login ({
                         phone,
                         password
                       }) {
  return request({
    url: `/user/login`,
    method: 'post',
    data: {
      phone,
      password
    }
  })
}
