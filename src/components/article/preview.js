import React from 'react'
import { Card } from 'semantic-ui-react'

import ArticleContent from './content'
import ArticleMeta from './meta'

const ArticlePreview = ({ article }) => {
  const renderTagList = tags => (
    <Card.Content extra>
      <ul className="tag-list">
        {
          tags.map(tag => {
            return (
              <li className="tag-default tag-pill tag-outline" key={tag}>
                {tag}
              </li>
            )
          })
        }
      </ul>
    </Card.Content>
  )

  return (
    <Card fluid>
      <Card.Content>
        <ArticleMeta article={article} />
        <ArticleContent article={article} />
      </Card.Content>
      {!!article.tagList.length && renderTagList(article.tagList)}
    </Card>
  )
}
export default ArticlePreview
