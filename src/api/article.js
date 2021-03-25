import { request } from '@/api/index'

/**
 * 创建文章
 * @param title
 * @param content
 * @param summary
 * @param coverURL
 * @param status
 * @param tags
 * @param category
 * @returns {AxiosPromise}
 */
export function createArticle({
  title,
  content,
  summary,
  coverURL,
  tags,
  category,
  status = 1
}) {
  return request({
    url: `/article`,
    method: 'post',
    data: {
      title,
      content,
      summary,
      coverURL,
      tags,
      category,
      status
    }
  })
}

/**
 * 更新文章
 * @param title
 * @param content
 * @param summary
 * @param coverURL
 * @param status   Verifying = 1, // 审核中 VerifySuccess = 2, // 审核通过 VerifyFail = 3, // 审核未通过
 * @param {string[]} tags
 * @param category
 * @returns {AxiosPromise}
 */
export function updateArticle({
  title,
  content,
  summary,
  coverURL,
  tags,
  category,
  status = 1
}) {
  return request({
    url: `/article`,
    method: 'put',
    data: {
      title,
      content,
      summary,
      coverURL,
      tags,
      category,
      status
    }
  })
}

/**
 * 查询文章
 * @param pageNum
 * @param pageSize
 * @returns {AxiosPromise}
 */
export function queryArticle({ pageNum, pageSize }) {
  return request({
    url: `/article`,
    method: 'get',
    params: {
      pageNum,
      pageSize
    }
  })
}
