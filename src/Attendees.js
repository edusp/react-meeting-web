import React, {Component} from 'react';
import {Router, navigate} from '@reach/router';
import firebase from './Firebase'


class Attendees extends Component {

constructor(props) {
    super(props);

    this.state = {
        displayAttendees: []
    }
}

componentDidMount() {
    const ref = firebase.database().ref(`meetings/${this.props.userId}/${this.props.meetingId}/attendees`);
    ref.on('value', snapshot => {
        let attendees = snapshot.val();
        let attendeesList = [];

        for(let item in attendees) {
            attendeesList.push({
                attendeeId: item,
                attendeeName: attendees[item].attendeeName,
                attendeeEmail: attendees[item].attendeeEmail
            });
        }

        this.setState({
            displayAttendees: attendeesList
        });
    });
}

render() {
    return(

        <div className="container mt-4">
            <div className="row justify-content-center">
            <div
                className="col-8 col-sm-6 col-md-4 col-lg-3 mb-2 p-0 px-1">
                <div className="card">
                <div className="card-body px-3 py-2 d-flex align-items-center justify-content-center">
                    <div>displayName</div>
                </div>
                </div>
            </div>
            </div>
        </div>

    )
}


}
export default Attendees;