import http from './http'

const ProfileApi = {
  follow: username => http().post(`/profiles/${username}/follow`),
  get: username => http().get(`/profiles/${username}`),
  unfollow: username => http().delete(`/profiles/${username}/follow`)
}

export default ProfileApi
