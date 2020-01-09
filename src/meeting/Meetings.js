import React, {Component} from 'react';
import MeetingsList from './MeetingsList';

import FormError  from '../FormError';


class Meetings extends Component {

  constructor(props) {
    super(props);
    this.state = {
      meetingName: '',
      errorMessage: null
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const itemName = e.target.name;
    const itemValue = e.target.value;
    this.setState({[itemName]: itemValue});
  }

  handleSubmit(e) {
    e.preventDefault();

    if(this.state.meetingName === '') {
      this.setState({errorMessage: 'Meeting name can\'t be empt'});
      return;
    } else {
      this.setState({errorMessage: null});
      this.props.addMeeting({meetingName: this.state.meetingName});
      this.setState({meetingName: ''});
    }
  }

  render() {
    return (
      <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
        {this.state.errorMessage != null && (
                    <FormError message={this.state.errorMessage}/>                      
                  )}
          <h1 className="font-weight-light">Add a Meeting</h1>
          <div className="card bg-light">
            <div className="card-body text-center">
              <form onSubmit={this.handleSubmit}
                className="formgroup">
                <div className="input-group input-group-lg">
                  <input
                    type="text"
                    className="form-control"
                    name="meetingName"
                    placeholder="Meeting name"
                    aria-describedby="buttonAdd"
                    value={this.state.meetingName}
                    onChange={this.handleChange}
                  />
                  <div className="input-group-append">
                    <button
                      type="submit"
                      className="btn btn-sm btn-info"
                      id="buttonAdd"
                    >
                      +
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        
        {this.props.meetings && this.props.meetings.length ? (
        <div className="card">
          <div className="card-header">
            My Meetings
          </div>
            <MeetingsList 
              meetings={this.props.meetings}
              userId={this.props.userId}/>
          </div>
          ):null}
        </div>
      </div>
    </div>
    );
  }
  
}

export default Meetings;
