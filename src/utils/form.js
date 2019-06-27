export const createValidator = (constraints) => (values) => {
  const errors = {}

  Object.keys(constraints).forEach((key) => {
    const value = values[key] || ''
    if (typeof constraints[key] == 'function') {
      const error = constraints[key](value)

      if (error) {
        errors[key] = error
      }
    } else if (typeof contraints[key] == 'object' && constraints[key].length != null) {
      // is array
      constraints[key].forEach((constraint) => {
        const error = constraint(value)
        if (error) {
          errors[key] = error
          return false // break
        }
      })
    }
  })
  return errors
}

export const isNot = (func) => (value) => {
  return !func(value)
}

import validator from 'validator'

export const validations = {
  email: (errorMessage = "Field must be a valid E-Mail") => (value) => {
    if (!validator.isEmail(value)) {
    return errorMessage
    }
  },
  required: (errorMessage = "Field is required") => (value) => {
    if (validator.isEmpty(value)) {
      return errorMessage
    }
  },
  minlength: (len, errorMessage = `This field requires atleast ${len} characters`) => (value) => {
    if (value.length < len) {
      return errorMessage
    }
  },
  checked: (errorMessage) => (value) => {
    if (value !== true) {
      return errorMessage
    }
  }
}