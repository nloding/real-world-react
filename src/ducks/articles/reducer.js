import * as actions from './actions'
import initialState from './initialState'

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.LOAD_ARTICLES_FOR_FEED_SUCCESS: {

      /* exercise: better normalize this state by feed */
      /* hint: */
      const keyedArticles =
        action.payload.articles.articles.reduce((acc, article) => {
          acc[article.slug] = article
          return acc
        }, {})

      return {
        ...state,
        articles: keyedArticles,
        unnormalizedArticles: [
          ...state.unnormalizedArticles,
          ...action.payload.articles.articles
        ]
      }
    }

    default:
      return state
  }
}
