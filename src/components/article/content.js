import React from 'react'
import { Link } from 'react-router-dom'

const ArticleContent = ({ article }) => (
  <Link to={`/article/${article.slug}`} className="preview-link">
    <h1>{article.title}</h1>
    <p>{article.description}</p>
  </Link>
)

export default ArticleContent
