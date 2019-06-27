import React from 'react'

import ReCaptcha from 'react-google-recaptcha'

const Captcha = ({ input: { onChange }, meta: { error, touched } }) => (
  <div className="field field--captcha">
    <ReCaptcha sitekey="6LeIDagUAAAAAJrdPQ-TC8FAdoRNIzfTBRrflBVc" onChange={onChange} />
    {touched && error && <span className="error">{error}</span>}
  </div>
)

export default Captcha