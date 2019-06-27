import React, { Fragment, useCallback, useState } from 'react'
import { Route } from 'react-router-dom'

import WalletContext from 'components/Wallet'

import 'normalize.css'

import VerificationStart from 'routes/Verification/routes/Start'
import VerificationFundSource from 'routes/Verification/routes/FundSource'

const FORM_STEPS = [
  '/verification',
  '/verification/fund_source'
]

class VerificationRoutes extends React.Component {
  static contextType = WalletContext
  constructor(props) {
    super(props)

    this.handleCompleteStep = this.handleCompleteStep.bind(this)
    this.handleCompleteForm = this.handleCompleteForm.bind(this)

    this.state = {
      verificationForm: {},
      stepIndex: 0
    }
  }

  async componentDidMount() {
    const wallet = this.context

    if (!wallet.status != 'connected') {
      try {
        await wallet.connectWallet()
      } catch (err) {
        this.props.history.push('/')
      }
    }

  }

  async handleCompleteStep(values) {
    const newState = {
      verificationForm: {
        ...this.state.verificationForm,
        ...values
      },
      stepIndex: this.state.stepIndex + 1
    }
    await this.setState(newState)
    this.props.history.push(FORM_STEPS[newState.stepIndex])

    return newState.verificationForm
  }

  async handleCompleteForm(values) {
    const verificationForm = await this.handleCompleteStep(values)
    await this.props.setPersonalData(verificationForm)
    this.props.history.push('/external')
  }

  render() {
    const { match } = this.props

    return (
      <Fragment>
        <Route path={`${match.path}`} exact render={routeProps => (
          <VerificationStart {...routeProps} submitData={this.handleCompleteStep} />
        )} />
        <Route path={`${match.path}/fund_source`} render={routeProps => (
          <VerificationFundSource {...routeProps} submitData={this.handleCompleteForm} />
        )} />
      </Fragment>
    )
  }
}

export default VerificationRoutes