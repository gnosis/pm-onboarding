import React, { Component } from 'react'

import { init } from 'onfido-sdk-ui'
import { requestUserVerificationToken } from 'api/compliance'

class External extends Component {
  constructor(props) {
    super(props)

    this.state = {
      status: 'UNKNOWN'
    }
  }
  async componentDidMount() {
    try {
      const { personalData } = this.props
      if (!personalData || Object.keys(personalData).length == 0) {
        this.props.history.push('/')
        return
      }
      
      const token = await requestUserVerificationToken(personalData.account, personalData)
  
      init({
        // the JWT token that you generated earlier on
        token,
        // id of the element you want to mount the component on
        containerId: 'onfido-mount',
        useModal: false,
        steps: [
          {
            type: 'welcome',
            options: {
              title: 'Verify your Identity with Sight.io',
              descriptions: [
                'In order to start using sight.io, you have to verify your identity with us via our partner, OnFido.',
                'Please follow the described steps to complete your verification.'
              ] 
            }
          },
          'document',
          'poa',
          'face'
        ]
      })
      this.setState({ status: 'SUCCESS' })
    } catch (err) {
      console.log("caught")
      this.setState({ status: 'ERROR' })
      console.error(err)
    }
  }

  render() {
    const { status } = this.state
    return (
      <div className="container">
        <div>
          {status == 'UNKNOWN' && <p>Loading...</p>}
          {status == 'ERROR' && <p>Unfortunately, your request could not be processed. Please try again later.</p>}
        </div>
        <div id="onfido-mount" />
      </div>
    )
  }
}

export default External