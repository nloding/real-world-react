import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

// Instead of using a HOC, we can share code using a
// regular component with a render prop!
class Mouse extends React.Component {
  static propTypes = {
    render: PropTypes.func.isRequired
  }

  state = { x: 0, y: 0 }

  handleMouseMove = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    })
  }

  render() {
    return (
      <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
        {this.props.children(this.state)}
      </div>
    )
  }
}

const App = () => (
  <div style={{ height: '100%' }}>
    <Mouse>
      {({ x, y }) => (
        // The render prop gives us the state we need
        // to render whatever we want here.
        <h1>The mouse position is ({x}, {y})</h1>
      )}
    </Mouse>
  </div>
)

ReactDOM.render(<App/>, document.getElementById('app'))
