import React, { PureComponent } from 'react'
import WalletContext from 'components/Wallet'

class StartRoute extends PureComponent {
  render() {
    return (
      <div>
        <h1>Welcome to sight.io</h1>
        <p>Please press the Button below to get started.</p>
        <button>Register</button>
        <WalletContext.Consumer>
          {({ account }) => (
            <p>You're connected as {account}</p>
          )}
        </WalletContext.Consumer>
      </div>
    )
  }
}

export default StartRoute