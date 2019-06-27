import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'

import WalletContext from 'components/Wallet'
import StepTitle from 'components/StepTitle'

const StartRoute = ({ setPersonalData }) => {
  return (
    <div className="container">
      <StepTitle>Welcome to sight.io</StepTitle>
      <p>Please press the Button below to get started.</p>
      <WalletContext.Consumer>
        {({ account, status, error, connectWallet }) => {
          return (
            <Fragment>
              {status === "connected" && ( <div>
                <Link className="like-button" to="/verification">Start Verification</Link>
                <p>Current Account: {account}</p>
              </div> )}
              {status === "unknown" && ( <button type="button" onClick={connectWallet}>Connect Wallet</button> )}
              {status === "error" && ( <div>
                <p>{error}</p>
                <button type="button" onClick={connectWallet}>Try again</button>
              </div> )}
            </Fragment>
          )}}
      </WalletContext.Consumer>
    </div>
  )
}

export default StartRoute