import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Image, Segment } from 'semantic-ui-react'
import styled from 'styled-components'

const Info = styled.div`
  display: inline-block;
  vertical-align: middle;

  > a {
    font-weight: 500;
    display: block;
  }

  > .date {
    font-size: 0.8rem;
    display: block;
  }
`

const ArticleMeta = ({ article }) => (
  <Segment basic>
    <Link to={`/@${article.author.username}`}>
      <Image avatar src={article.author.image} alt={article.author.username} />
    </Link>

    {/* debate! should this be its own component? */}
    <Info>
      <Link to={`/@${article.author.username}`} className="author">
        {article.author.username}
      </Link>
      <span className="date">
        {new Date(article.createdAt).toDateString()}
      </span>
    </Info>
    {/* end debate! */}

  </Segment>
)

ArticleMeta.propTypes = {
  article: PropTypes.object.isRequired
}

export default ArticleMeta
