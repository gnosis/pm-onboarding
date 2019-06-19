import React, { Component } from 'react'

import { connectWallet } from 'api/wallet'

const WalletContext = React.createContext({
  connected: false,
  network: undefined
})

export class WalletProvider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      status: undefined,
      network: undefined,
    }
  }

  async componentDidMount() {
    let walletData
    try {
      walletData = await connectWallet(1)
    } catch (err) {
      // set error
    }

    this.setState(walletData)
  }

  render() {
    return (
      <WalletContext.Provider value={this.state}>
        {this.props.children}
      </WalletContext.Provider>
    )
  }
}

export default WalletContext