'use strict'
import React from 'react'

export class StepOne extends React.Component {
  constructor () {
    super()
    this.state = { 
      firstName: '', 
      lastName: ''
    }
    this.handleFirstNameChanged = this.handleFirstNameChanged.bind(this);
    this.handleLastNameChanged = this.handleLastNameChanged.bind(this);
  }

  handleFirstNameChanged (event) {
    this.setState({firstName: event.target.value})
  }

  handleLastNameChanged (event) {
    this.setState({lastName: event.target.value})
  }

  render () {
    return (
      <div>
       <h1> Group Information</h1>

        <div className='row'>
          <div className='six columns'>
            <label>What type of group are you representing?
            </label>
            <input
              className='u-full-width'
              placeholder='group type'
              type='text'
              onChange={this.handleFirstNameChanged}
              value={this.state.firstName}
              autoFocus
            />
          </div>
          <div className='six columns'>
            <label>Other - What activity does your organization do?</label>
            <input
              className='u-full-width'
              placeholder='Other main activity'
              type='text'
              onChange={this.handleLastNameChanged}
              value={this.state.lastName}
            />
          </div>
        </div>
        <div className='row'>
          <div className='six columns'>
            <label>What is the name of your organization?</label>
            <input
              className='u-full-width'
              placeholder='Group name'
              type='text'
              onChange={this.handleLastNameChanged}
              value={this.state.lastName}
            />
          </div>
          <div className='six columns'>
            <label>Group’s Main Activity</label>
            <input
              className='u-full-width'
              placeholder='main_activity'
              type='text'
              onChange={this.handleLastNameChanged}
              value={this.state.lastName}
            />
          </div>
        </div>

        <div className='row'>
          <div className='six columns'>
            <label>Mailing address for the organization</label>
            <input
              className='u-full-width'
              placeholder='email_org'
              type='text'
              onChange={this.handleLastNameChanged}
              value={this.state.lastName}
            />
          </div>
          <div className='six columns'>
            <label>In this year’s group, how many youth/student participants do you estimate will be enrolled?</label>
            <input
              className='u-full-width'
              placeholder='member_participants'
              type='text'
              onChange={this.handleLastNameChanged}
              value={this.state.lastName}
            />
          </div>
        </div>
      </div>
    )
  }
}
