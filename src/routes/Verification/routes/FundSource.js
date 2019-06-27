import React, { PureComponent } from 'react'
import { Form, Field } from 'react-final-form'
import WalletContext from 'components/Wallet'

import StepTitle from 'components/StepTitle'
import Select from 'components/Form/Select'
import TextInput from 'components/Form/TextInput'
import Captcha from 'components/Form/Captcha'
import Check from 'components/Form/Check'

import { createValidator, validations } from 'utils/form'

const submitHandler = ({ submitData, history }) => {
  return (values) => {
    submitData(values)
    history.push('/external')
  }
} 

const formIsValid = createValidator({
  source: validations.required(),
  sourceMetadata: validations.required(),
  expectedVolume: validations.required(),
  checkToc: validations.checked('Please accept the Terms and Conditions'),
  checkPrivacy: validations.checked('Please accept the Privacy Policy'),
  checkRiskDisclaimer: validations.checked('Please accept the Risk Disclaimer'),
  captcha: validations.required('Please solve the Captcha')
})

class VerificationRouteFundSource extends PureComponent {
  render() {
    return (
      <Form
      className="container"
      onSubmit={submitHandler(this.props)}
      validate={formIsValid}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
        <StepTitle>Start Verification Process</StepTitle>
          <Field name="source" label="Select your source of funds" placeholder="Please select" component={Select} options={[
            { value: 0, label: "Employment Income (Salary)" },
            { value: 1, label: "Employment Income (self-employed)" },
            { value: 2, label: "Gift" },
            { value: 3, label: "Pension" },
            { value: 4, label: "Financial Trading, income from listed investments" },
            { value: 5, label: "Tax rebates" },
            { value: 6, label: "Cryptocurrency Trading" },
            { value: 7, label: "Proceeds from sale of investments / liquidation of investment porftolio" },
            { value: 8, label: "Proceeds from sale of property" },
            { value: 9, label: "Proceeds from sale of company or interest in a company" },
            { value: 10, label: "Rental Income" },
            { value: 11, label: "Other" },
          ]} />
          <Field name="sourceMetadata" label={'Add specifics to your source of funds. Like "Sale of House", "Work at own Company"'} component={TextInput} />
          <Field name="expectedVolume" label="What will be your expected monthly volume?" placeholder="Please select" component={Select} options={[
            { value: 1000, label: '<1.000,- Euro/month' },
            { value: 5000, label: 'between 1.000,- and 5.000,- Euro/month' },
            { value: 10000, label: 'more than 5.000,- Euro/month' },
          ]} />
          <Field name="checkToc" label="Accept Terms and conditions" component={Check} type="checkbox" />
          <Field name="checkPrivacy" label="Accept Privacy Policy" component={Check} type="checkbox" />
          <Field name="checkRiskDisclaimer" label="Accept Risk Disclaimer" component={Check} type="checkbox" />
          <Field name="captcha" component={Captcha} />
          <button type="submit">Continue</button>
        </form>
      )}
      />
    )
  }
}

export default VerificationRouteFundSource