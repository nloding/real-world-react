import React from 'react'
import PropTypes from 'prop-types'
import { Form } from 'semantic-ui-react'

// exercise: migrate to bootstrap ... hint: https://reactstrap.github.io/components/form/
// import { FormGroup, Input, Label } from 'reactstrap'

class TextInput extends React.Component {
  state = { error: false }

  handleChange = ({ target: { name, value }}) => {
    const { validate, onChange } = this.props
    const error = validate(value)
    this.setState({ error })
    return onChange({ target: { name, value }}, error)
  }

  render() {
    const { label, name, value, placeholder, onChange, validate, ...rest } = this.props
    const { error } = this.state

    return (
      <Form.Field error={error}>
        <label>{label}</label>
        <input
          type="text"
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={this.handleChange}
          {...rest}
        />
      </Form.Field>
    )
  }
}

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([ PropTypes.string, PropTypes.string ]),
  onChange: PropTypes.func.isRequired,
  validate: PropTypes.func
}

TextInput.defaultProps = {
  validate: value => !(value && value.length)
}

export default TextInput
