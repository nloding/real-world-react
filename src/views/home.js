import React from 'react'
import { connect } from 'react-redux'

import ArticlePreview from '../components/article/preview'

import { globalFeed } from '../ducks/articles'

class Home extends React.Component {
  componentDidMount() {
    this.props.globalFeed()
  }

  render() {
    const { articles } = this.props
    return (
      <React.Fragment>
        {articles.map(article => <ArticlePreview article={article} />)}
      </React.Fragment>
    )
  }
}

export { Home }

export default connect(
  state => ({ articles: state.articles.unnormalizedArticles }),
  { globalFeed }
)(Home)
