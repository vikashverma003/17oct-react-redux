'use strict'
import React from 'react'

export class StepThree extends React.Component {
  constructor () {
    super()
    this.state = { 
      password: '', 
      passwordConfirm: '' 
    }
    this.handlePasswordChanged = this.handlePasswordChanged.bind(this);
    this.handlePasswordConfirmChanged = this.handlePasswordConfirmChanged.bind(this);
  }

  handlePasswordChanged (event) {
    this.setState({password: event.target.value})
  }

  handlePasswordConfirmChanged (event) {
    this.setState({passwordConfirm: event.target.value})
  }

  render () {
    return (
      <div>
        <div className='row'>
        <h1> Set Your Sponsorship Tiers</h1>
        <p>Set your sponsorship levels & value below! Successfully sponsored organization have four tiers like below to maximize contributions. Please
          customize your own group’s sponsorship options and fill in the description of what you are providing each sponsor (see example descriptions at
          bottom for ideas!).
        </p>
          <div className='six columns'>
            <label>
           </label>
            <input
              className='u-full-width required'
              placeholder='Other information'
              type='password'
              onChange={this.handlePasswordChanged}
              value={this.state.password}
              autoFocus
            />
          </div>
        </div>
        <div className='row'>
          <div className='six columns'>
            <label>Additional Information</label>
            <input
              className='u-full-width'
              placeholder='additional Information'
              type='password'
              onChange={this.handlePasswordConfirmChanged}
              value={this.state.additionalInformation}
            />
          </div>
        </div>
      </div>
    )
  }
}
