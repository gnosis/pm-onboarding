import React, { PureComponent } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import { WalletProvider } from 'components/Wallet'

import Start from 'routes/Start'
import Verification from 'routes/Verification'

class Page extends PureComponent {
  render() {
    return (
      <WalletProvider>
        <BrowserRouter>
          <Route path="/" exact component={Start} />
          <Route path="/verification" component={Verification} />
        </BrowserRouter>
      </WalletProvider>
    )
  }
}

export default Page