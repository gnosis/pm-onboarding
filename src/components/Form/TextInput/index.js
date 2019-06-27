import React, { PureComponent } from 'react'

import '../style.scss'

class TextInput extends PureComponent {
  render() {
    const {
      name,
      label,
      placeholder,
      input: inputProps,
      meta: { error, touched },
      ...props
    } = this.props
    return (
      <div className="field field--textinput">
        <label htmlFor={name}>{label}</label>
        <input type="text" name={name} {...inputProps} placeholder={placeholder} />
        {(touched && error) && <span className="error">{error}</span>}
      </div>
    )
  }
}

export default TextInput