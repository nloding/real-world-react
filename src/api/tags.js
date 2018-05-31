import http from './http'

const TagsApi = {
  getAll: () => http().get('/tags')
}

export default TagsApi
