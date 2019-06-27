import React, { PureComponent } from 'react'

class Select extends PureComponent {
  render() {
    const {
      name,
      label,
      options,
      placeholder,
      input: inputProps,
      meta: { error, touched },
      ...props
    } = this.props

    return (
      <div className="field field--select">
        <label htmlFor={name}>{label}</label>
        <select name={name} {...inputProps}>
          {placeholder && <option value={''}>{placeholder}</option>}
          {options.map(({ value, label }) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
        {error && touched && <span className="error">{error}</span>}
      </div>
    )
  }
}

export default Select