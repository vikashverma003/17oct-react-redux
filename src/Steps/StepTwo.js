'use strict'
import React from 'react'

export class StepTwo extends React.Component {
  constructor () {
    super()
    this.state = {
      email: '',
      emailConfirm: ''
    }
    this.handleEmailChanged = this.handleEmailChanged.bind(this);
    this.handleEmailConfirmChanged = this.handleEmailConfirmChanged.bind(this);
  }

  handleEmailChanged (event) {
    this.setState({email: event.target.value})
  }

  handleEmailConfirmChanged (event) {
    this.setState({emailConfirm: event.target.value})
  }

  render () {
    return (
      <div>
        <h1>Contact Information
</h1>
        <div className='row'>
          <div className='six columns'>
            <label>First Name
</label>
            <input
              className='u-full-width required'
              placeholder='First Name'
              type='email'
              onChange={this.handleEmailChanged}
              value={this.state.email}
              autoFocus
            />
          </div>
        
          <div className='six columns'>
            <label>Last Name
</label>
            <input
              className='u-full-width'
              placeholder='Last Name'
              type='email'
              onChange={this.handleEmailConfirmChanged}
              value={this.state.emailConfirm}
            />
          </div>
        </div>
        <div className='row'>
          <div className='six columns'>
            <label>Email Address
</label>
            <input
              className='u-full-width'
              placeholder='Email Address'
              type='email'
              onChange={this.handleEmailConfirmChanged}
              value={this.state.emailConfirm}
            />
          </div>
       
          <div className='six columns'>
            <label>Facebook Page

</label>
            <input
              className='u-full-width'
              placeholder='facebook_page'
              type='email'
              onChange={this.handleEmailConfirmChanged}
              value={this.state.emailConfirm}
            />
          </div>
        </div>
      </div>
    )
  }
}
