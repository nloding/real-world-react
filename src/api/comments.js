import http from './http'

const CommentsApi = {
  create: (slug, comment) => http().post(`/articles/${slug}/comments`, { comment }),
  delete: (slug, commentId) => http().delete(`/articles/${slug}/comments/${commentId}`),
  forArticle: slug => http().get(`/articles/${slug}/comments`)
}

export default CommentsApi
