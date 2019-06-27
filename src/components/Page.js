import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import { WalletProvider } from 'components/Wallet'

import Start from 'routes/Start'
import Verification from 'routes/Verification'
import External from 'routes/External'

import 'scss/main.scss'

class Page extends Component {
  constructor(props) {
    super(props)

    this.handleSetPersonalData = this.handleSetPersonalData.bind(this)

    this.state = {
      personalData: {}
    }
  }

  async handleSetPersonalData(personalData) {
    await this.setState({ personalData: {
      ...this.state.personalData,
      ...personalData
    } })
  }

  render() {
    return (
      <WalletProvider>
        <BrowserRouter>
          <Route path="/" exact render={(routerProps) => (
            <Start {...routerProps} setPersonalData={this.handleSetPersonalData} />
          )} />
          <Route path="/verification" render={(routerProps) => (
            <Verification {...routerProps} setPersonalData={this.handleSetPersonalData} />
          )} />
          <Route path="/external" render={(routerProps) => (
            <External {...routerProps} personalData={this.state.personalData} />
          )} />
        </BrowserRouter>
      </WalletProvider>
    )
  }
}

export default Page