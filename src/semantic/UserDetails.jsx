import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import PlacesAutocomplete,{
    geocodeByAddress,
    geocodeByPlaceId,
    getLatLng,
  } from 'react-places-autocomplete';
  
import './Syntact.css'
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import { DateRangePicker } from 'react-dates';
import moment from 'moment';




class UserDetails extends Component{


    constructor(props) {
        super(props);
        this.state = { address: '', zipCode: "",  date: moment(this.props.value, 'LLL')
,        startDate: null,
        endDate: null,
        focusedInput: null,
       };
      }
     
      handleChange = address => {
        this.setState({ address });
      };
      handleChange1=()=> {
        //const valueOfInput = date.format();
        //console.log(valueOfInput);
        //this.setState({startDate:this.state.startDate});
        //alert(this.state.startDate);
        alert(moment("12-25-1995", "L"));
    };
     
      handleSelect = address => {
        geocodeByAddress(address)
          //.then(results => getLatLng(results[0]))
          //.then(latLng => console.log('Success', latLng))
          //.catch(error => console.error('Error', error));
          .then(results => {
              console.log(results);
            let postalCode = "",
              country = "",
              country_code = "",
              state = "",
              locality = "";
            results[0].address_components.forEach(data => {
                //console.log(data);
              if (data.types.includes("postal_code")) {
                postalCode = data.long_name;
              } else if (data.types.includes("country")) {
                country = data.long_name;
                country_code = data.short_name;
              } else if (data.types.includes("administrative_area_level_1")) {
                state = data.long_name;
              } else if (data.types.includes("locality")) {
                locality = data.long_name;
              }
            });
            this.setState({
              address: results[0].formatted_address,
              selectedAddress: results[0],
              zipCode: postalCode,
              country: country,
              country_code: country_code,
              state: state,
              locality: locality
            });
            return getLatLng(results[0]);
          })


      };

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }


    

    render(){
        const { values } = this.props;
        console.log(this.state.startDate);
        return(
            <Form>
                <h1 className="ui centered">Enter Teams Details</h1>
                <Form.Field>
      <DateRangePicker
          startDateId="startDate"
          endDateId="endDate"
          startDate={this.state.startDate}
          endDate={this.state.endDate}
         dateFormat="yyyy/MM/dd"

        //  dateFormat="LLL"
        //  dateFormat="dddd, DDD, ddd, d, dd MMMM yyyy à HH'h'mm"
       
       // onChange={(value, e) => this.handleChange1(value, e)}


       // selected={this.state.inputValue}

          onDatesChange={({ startDate, endDate }) => { this.setState({ startDate, endDate })}}
          focusedInput={this.state.focusedInput}
          onFocusChange={(focusedInput) => { this.setState({ focusedInput })}}
        /></Form.Field>
        <button onClick={this.handleChange1}>Click me</button>
                <Form.Field>
                    <label>What type of group are you representing?
                    </label>
                    <input
                    placeholder='group type'
                    onChange={this.props.handleChange('grouptype')}
                    defaultValue={values.grouptype}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Other - What activity does your organization do?
                    </label>
                    <input
                    placeholder='Other main activity'
                    onChange={this.props.handleChange('other_main_activity')}
                    defaultValue={values.other_main_activity}
                    />
                </Form.Field>
                <Form.Field>
                    <label>What is the name of your organization?
                    </label>
                    <input
                    type='email'
                    placeholder='Group name'
                    onChange={this.props.handleChange('group_name')}
                    defaultValue={values.group_name}
                    />
                </Form.Field>

                {/* <Form.Field>
                    <label>Group’s Main Activity
                    </label>
                    <input
                    type='email'
                    placeholder='main activity'
                    onChange={this.props.handleChange('main_activity')}
                    defaultValue={values.main_activity}
                    />
                </Form.Field> */}
<Form.Field>{this.state.zipcode}Address .. {this.state.address}
<PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>

      </Form.Field>
     

                <Button onClick={this.saveAndContinue}>Save And Continue </Button>
            </Form>
        )
    }
}

export default UserDetails;