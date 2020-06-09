import React, { Component } from 'react';
import { connect } from 'react-redux'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import 'react-day-picker/lib/style.css';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import { createPerson, updatePerson } from '../store';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


class PersonEditor extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      person     : props.person || {},
      saving     : false,
      serverError: null,
     // file: '',imagePreviewUrl: '',
    // selectedDay: undefined,
    }
  }

  componentWillReceiveProps(nextProps) {
    const prevPerson = this.props.person || {};
    const nextPerson = nextProps.person || {};

    if (prevPerson.objectId !== nextPerson.objectId) {
      this.setState({ person: nextPerson })
    }
  }

  close = () => {
    this.setState({
      person     : {},
      saving     : false,
      serverError: null
    });

    this.props.onHide()
  };

  preparePerson() {
    const { person } = this.state;

    return {
      ...person,
      name   : (person.name || '').trim() || null,
      address: (person.address || '').trim() || null,
      game: (person.game || '').trim() || null,
      image: (person.image || '').trim() || null,
      imagePreviewUrl: (person.imagePreviewUrl || '').trim() || null,
      selectedDay: (person.selectedDay || '').trim() || null,  
     // file:  (person.file ),
      date1: (person.file || '').trim() || null,
        
      date1: (person.date1 || '').trim() || null,
        
    }
  }

  save = () => {
    const person = this.preparePerson();

    const action = this.props.person
      ? this.props.updatePerson
      : this.props.createPerson;

    action(person)
      .then(() => this.close())
      .catch(e => this.setState({ serverError: e.message }));
      console.log('handle uploading-', this.state.file);
  };

  // _handleImageChange = e => this.setState({ person: { ...this.state.person, file: e.target.value } });

 onSelectedDay = e => this.setState({ person: { ...this.state.person, selectedDay: e.target.value} });

  // onSelectedDay(day) {
  //   this.setState({ selectedDay: day });
  // }

  onDateChange = e => this.setState({ person: { ...this.state.person, date1: e.target.value } });
  onNameChange = e => this.setState({ person: { ...this.state.person, name: e.target.value } });

  onGameChange = e => this.setState({ person: { ...this.state.person, game: e.target.value } });
  onAddressChange = e => this.setState({ person: { ...this.state.person, address: e.target.value } });

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
        // person: { ...this.state.person, file: e.target.value},
        //  person: { ...this.state.person, imagePreviewUrl: e.target.value}
      
      });
    }

    reader.readAsDataURL(file)
  }
  render() {
    const { selectedDay } = this.state;
    const { show } = this.props;
    const { person, serverError, saving } = this.state;

    const isNew = !this.props.person;

    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

    return (
      <Modal show={show} onHide={this.close}>
        <Modal.Header closeButton>
          <Modal.Title>
            {isNew ? 'Add' : 'Edit'} Person
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form>

            <div className="form-group">
              <label>Name:</label>
              <input
                className="form-control"
                placeholder="Input name"
                value={person.name || ''}
                onChange={this.onNameChange}
              />
            </div>

            <div className="form-group">
              <label>Address:</label>
              <input
                className="form-control"
                placeholder="Input address"
                value={person.address || ''}
                onChange={this.onAddressChange}
              />
            </div>
            <div className="form-group">
              <label>Hobby:</label>
              <input
                className="form-control"
                placeholder="Input game"
                value={person.game || ''}
                onChange={this.onGameChange}
              />
            </div>
            <div className="form-group">
              <label>Date:</label>
              <input type="date"
                className="form-control"
                placeholder="Input date"
                value={person.date1 || ''}
                onChange={this.onDateChange}
              />
            </div>


            
          <div>
         { selectedDay && <p>Day: {selectedDay.toLocaleDateString()}</p>}
        {!selectedDay && <p>Choose a day</p>}
        <DayPickerInput  selected={person.selectedDay || ''} onChange={this.onSelectedDay} />
      </div> 
     

   {/* <input className="fileInput" 
            type="file"   value={person.image || ''}
            /> */}


            {/* <div>
            <input className="fileInput" 
            type="file" 
            value={person.file || ''}
            onChange={(e)=>this._handleImageChange(e)} />
            </div> */}
          <div>
              <input className="fileInput" 
              type="file" 
             
             onChange={(e)=>this._handleImageChange(e)} />
            </div>
            
            <div className="imgPreview">
          {$imagePreview}
        </div>

            {serverError && (
              <Alert variant="danger">
                {serverError}
              </Alert>
            )}
          </form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={this.close}>
            Close
          </Button>
          <Button variant="primary" onClick={this.save} disabled={saving}>
            {saving ? 'Saving...' : 'Save'}
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default connect(null, { createPerson, updatePerson })(PersonEditor);
