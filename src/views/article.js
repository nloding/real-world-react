import React from 'react'
import { connect } from 'react-redux'
import { Card } from 'semantic-ui-react'

import ArticleContent from '../components/article/content'
import ArticleMeta from '../components/article/meta'

class Article extends React.Component {
  render() {
    const { article } = this.props

    if (!article) {
      return <h1>Article not found!</h1>
    }

    return (
      <Card>
        <Card.Header>
          <ArticleMeta article={article} />
        </Card.Header>
        <Card.Content>
          <ArticleContent article={article} />
        </Card.Content>
      </Card>
    )
  }
}

export { Article }

export default connect(
  (state, ownProps) => ({ article: state.articles.articles[ownProps.match.params.slug] })
)(Article)
