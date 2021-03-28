import { request } from '@/api/index'

/**
 * 创建标签
 * @param commentName
 * @returns {Promise}
 */
export function createComment ({ commentName }) {
  return request({
    url: `/comment`,
    method: 'post',
    data: {
      commentName
    }
  })
}

/**
 * 更新标签
 * @param commentName
 * @returns {Promise}
 */
export function updateComment ({ commentName }) {
  return request({
    url: `/comment`,
    method: 'put',
    data: {
      commentName
    }
  })
}

/**
 * 查询标签
 * @returns {Promise}
 */
export function queryCommentAll () {
  return request({
    url: `/comment`,
    method: 'get',
    params: {}
  })
}

/**
 * 查询标签
 * @param pageSize
 * @param pageNum
 * @returns {Promise}
 */
export function queryCommentPage ({
                                    pageNum,
                                    pageSize
                                  }) {
  return request({
    url: `/comment/page`,
    method: 'get',
    params: {
      pageNum,
      pageSize
    }
  })
}
