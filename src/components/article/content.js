import React from 'react'
import { Link } from 'react-router-dom'

const ArticleContent = ({ article }) => (
  <React.Fragment>
    <h1>
      <Link to={`/article/${article.slug}`} className="preview-link">{article.title}</Link>
    </h1>
    <p>{article.description}</p>
  </React.Fragment>
)

export default ArticleContent
