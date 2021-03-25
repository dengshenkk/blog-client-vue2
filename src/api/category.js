import { request } from '@/api/index'

/**
 * 创建分类
 * @param categoryName
 * @returns {AxiosPromise}
 */
export function createCategory({ categoryName }) {
  return request({
    url: `/category`,
    method: 'post',
    data: {
      categoryName
    }
  })
}

/**
 * 更新分类
 * @param categoryName
 * @returns {AxiosPromise}
 */
export function updateCategory({ categoryName }) {
  return request({
    url: `/category`,
    method: 'put',
    data: {
      categoryName
    }
  })
}

/**
 * 查询分类
 * @returns {AxiosPromise}
 */
export function queryCategoryAll() {
  return request({
    url: `/category`,
    method: 'get',
    params: {}
  })
}

/**
 * 查询分类分页
 * @param {number} pageNum
 * @param {number} pageSize
 * @returns {AxiosPromise}
 */
export function queryCategoryPage({ pageNum, pageSize }) {
  return request({
    url: `/category/page`,
    method: 'get',
    params: {
      pageNum,
      pageSize
    }
  })
}
