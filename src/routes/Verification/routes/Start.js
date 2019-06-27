import React, { useContext } from 'react'
import { Form, Field } from 'react-final-form'
import WalletContext from 'components/Wallet'

import { createValidator, validations } from 'utils/form'

import TextInput from 'components/Form/TextInput'
import Select from 'components/Form/Select'
import StepTitle from 'components/StepTitle'

import countrylist from 'assets/countrylist.json'
const mappedCountryList = Object.keys(countrylist).map((key) => ({
  label: countrylist[key],
  value: key
}))

const formIsValid = createValidator({
  email: validations.email(),
  firstName: validations.required(),
  lastName: validations.required(),
  account: validations.required("The connection to your Wallet was lost. Please try again."),
})

const VerificationRouteStart = ({ submitData }) => {
  const wallet = useContext(WalletContext)

  return (
    <Form
    className="container"
    validate={formIsValid}
    onSubmit={submitData}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <StepTitle>Start Verification Process</StepTitle>
        <Field component={TextInput} type="hidden" initialValue={wallet.account} name="account" />
        <Field component={TextInput} name="firstName" label="First Name" placeholder="Please enter your first name" />
        <Field component={TextInput} name="lastName" label="Last Name" placeholder="Please enter your last name" />
        <Field component={TextInput} name="email" label="E-Mail" placeholder="Please enter your E-Mail address" />
        <Field component={Select} name="country" label="Country" placeholder="Please enter your Country" options={mappedCountryList} />
        <p>Current Account: {wallet.account}</p>
        <button type="submit">Continue</button>
      </form>
    )}
    />
  )
}

export default VerificationRouteStart