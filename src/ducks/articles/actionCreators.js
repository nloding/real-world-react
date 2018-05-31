import { ArticlesApi } from '../../api'

import { LOAD_ARTICLES_FOR_FEED_SUCCESS } from './actions'

export const setArticlesByFeed = (feed, articles) => ({ type: LOAD_ARTICLES_FOR_FEED_SUCCESS, payload: { feed, articles } })

export const globalFeed = () => dispatch => (
  ArticlesApi.all()
    .then(
      result => {
        console.log(result.data)
        dispatch(setArticlesByFeed('global', result.data))
      }
    )
)
