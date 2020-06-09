import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import './Syntact.css'

class AdditionalInfo extends Component{

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }


    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const { values } = this.props;
        return(
            <Form >
                <h1 className="ui centered">Contact Information</h1>
                <Form.Field>
                    <label>First Name</label>
                    <input
                    placeholder='First Name'
                    onChange={this.props.handleChange('firstName')}
                    defaultValue={values.firstName}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input
                    placeholder='Last Name'
                    onChange={this.props.handleChange('lastName')}
                    defaultValue={values.lastName}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Email Address</label>
                    <input
                    type='email'
                    placeholder='Email Address'
                    onChange={this.props.handleChange('email')}
                    defaultValue={values.email}
                    />
                </Form.Field>

                 <Form.Field>
                    <label>Facebook Page</label>
                    <input
                   
                    placeholder='facebook_page'
                    onChange={this.props.handleChange('facebook_page')}
                    defaultValue={values.facebook_page}
                    />
                </Form.Field>
                <Button onClick={this.back}>Back</Button>
                <Button onClick={this.saveAndContinue}>Save And Continue </Button>
            </Form>
        )
    }
}

export default AdditionalInfo;