import { request } from '@/api/index'

/**
 * 创建标签
 * @param tagName
 * @returns {AxiosPromise}
 */
export function createTag({ tagName }) {
  return request({
    url: `/tag`,
    method: 'post',
    data: {
      tagName
    }
  })
}

/**
 * 更新标签
 * @param tagName
 * @returns {AxiosPromise}
 */
export function updateTag({ tagName }) {
  return request({
    url: `/tag`,
    method: 'put',
    data: {
      tagName
    }
  })
}

/**
 * 查询标签
 * @returns {AxiosPromise}
 */
export function queryTagAll() {
  return request({
    url: `/tag`,
    method: 'get',
    params: {}
  })
}

/**
 * 查询标签
 * @param pageSize
 * @param pageNum
 * @returns {AxiosPromise}
 */
export function queryTagPage({ pageNum, pageSize }) {
  return request({
    url: `/tag/page`,
    method: 'get',
    params: {
      pageNum,
      pageSize
    }
  })
}
