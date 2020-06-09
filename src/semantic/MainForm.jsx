import React, { Component } from 'react';
import UserDetails from './UserDetails';
import PersonalDetails from './PersonalDetails';
import Confirmation from './Confirmation';
import AdditionalInfo from './AdditionalInfo';

import Success from './Success';

import './Syntact.css'


class MainForm extends Component {
    state = {
        step: 1,
        grouptype:'',
        other_main_activity:'',
        group_name:'',
        main_activity:'',
        email_org:'',
        member_participants:'',
        facebook_page:'',

        firstName: '',
        lastName: '',
        email: '',
        age: '',
        city: '',
        country: ''
    }

    nextStep = () => {
        const { step } = this.state
        this.setState({
            step : step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step : step - 1
        })
    }

    handleChange = input => event => {
        this.setState({ [input] : event.target.value })
    }

    render(){
        const {step} = this.state;
        const {grouptype,other_main_activity, group_name,main_activity, email_org, member_participants,  firstName, lastName, email, age, city, country } = this.state;
        const values = {grouptype,other_main_activity, group_name,main_activity, email_org, member_participants,firstName, lastName, email, age, city, country };
        switch(step) {
        case 1:
            return <UserDetails 
                    nextStep={this.nextStep} 
                    handleChange = {this.handleChange}
                    values={values}
                    />
        case 2:
            return <PersonalDetails 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    values={values}
                    />
        case 3:
            return <AdditionalInfo 
                                nextStep={this.nextStep}
                                prevStep={this.prevStep}
                                handleChange = {this.handleChange}
                                values={values}
                                />
        case 4:
            return <Confirmation 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                    />
        case 5:
            return <Success />
        }
    }
}

export default MainForm;