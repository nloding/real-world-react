import React from 'react'
import { connect } from 'react-redux'
import {
  Button,
  Form,
} from 'semantic-ui-react'

import { TextInput } from '../components/input'

import { logIn } from '../ducks/account'

class LoginForm extends React.Component {
  state = { email: '', password: '' }

  handleChange = ({ target: { name, value }}) => this.setState({ [name]: value })

  onSubmit = () => {
    const { email, password } = this.state
    this.props.logIn(email, password)
  }

  render() {
    return (
      <div style={{ width: '60%', margin: '0 auto' }}>
        <Form onSubmit={this.onSubmit}>
          {/* <Form.Field>
            <label>Email</label>
            <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} />
          </Form.Field> */}
          <TextInput label="Email" name="email" placeholder="email" value={this.state.email} onChange={this.handleChange} />
          <Form.Field>
            <label>Password</label>
            <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
          </Form.Field>
          <Button type="submit">Log In</Button>
        </Form>
      </div>
    )
  }
}

export { LoginForm }

export default connect(
  null,
  { logIn }
)(LoginForm)
