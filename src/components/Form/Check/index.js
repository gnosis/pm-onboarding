import React from 'react'

import '../style.scss'

const Check = ({ label, value, name, input: { onChange }, meta: { error, touched } }) => {
  return (
    <div className="field field--check">
      <label htmlFor={name}><input type="checkbox" checked={value} onChange={onChange} name={name} />&nbsp;{label}</label>
        {error && touched && (
          <>
            <br />
            <span className="error">{error}</span>
          </>
        )}
    </div>
  )
}

export default Check