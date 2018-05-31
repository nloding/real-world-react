import http, { limit } from './http'

const omitSlug = article => Object.assign({}, article, { slug: undefined })

const ArticlesApi = {
  all: page => http().get(`/articles?${limit(10, page)}`),
  byAuthor: (author, page) => http().get(`/articles?author=${encodeURIComponent(author)}&${limit(5, page)}`),
  byTag: (tag, page) => http().get(`/articles?tag=${encodeURIComponent(tag)}&${limit(10, page)}`),
  del: slug => http().delete(`/articles/${slug}`),
  favorite: slug => http().post(`/articles/${slug}/favorite`),
  favoritedBy: (author, page) => http().get(`/articles?favorited=${encodeURIComponent(author)}&${limit(5, page)}`),
  feed: () => http().get(`/articles/feed?${limit(10, 0)}'`),
  get: slug => http().get(`/articles/${slug}`),
  unfavorite: slug => http().delete(`/articles/${slug}/favorite`),
  update: article => http().put(`/articles/${article.slug}`, { article: omitSlug(article) }),
  create: article => http().post('/articles', { article })
}

export default ArticlesApi
