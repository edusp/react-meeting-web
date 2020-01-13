// @flow
import React, {Component} from 'react';
import firebase from '../configuration/Firebase'


class Attendees extends Component {

constructor(props) {
    super(props);

    this.state = {
        displayAttendees: [],
        meetingName: null
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

    const refMeeting = firebase.database().ref(`meetings/${this.props.userId}/${this.props.meetingId}`);
    
    refMeeting.on('value', snapshot => {
        const meetingName = snapshot.val();
        
        this.setState({
            meetingNameRef: meetingName.meetingName.meetingName
        });

    } );



}



render() {
    
    const atendees = this.state.displayAttendees.map(user => {
        return (
        <li className="list-group-item" key={user.attendeeId}>{user.attendeeEmail}</li>
        );
    })

        return (
            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div
                        className="col-8 col-sm-6 col-md-4 col-lg-3 mb-2 p-0 px-1">

                        <div className="card">
                            <div className="card-header">
                                <b>Meeting:</b> {this.state.meetingNameRef}
                            </div>
                            <ul className="list-group list-group-flush">
                                {atendees}
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

        )   
    }      


}
export default Attendees;