import React from 'react'
import { Dimmer, Loader } from 'semantic-ui-react'

import { ArticlesApi } from '../../api'

class GlobalFeedApi extends React.Component {
  state = { loading: true, data: [] }

  componentDidMount() {
    ArticlesApi.all()
      .then(
        result => this.setState({ loading: false, data: result.data.articles })
      )
  }

  render() {
    const { loading, data } = this.state
    const { children } = this.props

    return (
      loading
        ? <Dimmer active><Loader /></Dimmer>
        : children(data)
    )
  }
}

export default GlobalFeedApi
