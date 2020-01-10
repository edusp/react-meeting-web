import React, {Component} from 'react';
import firebase from '../configuration/Firebase';
import {GoTrashcan} from 'react-icons/go';
import { navigate } from '@reach/router';
import { FaLink } from 'react-icons/fa';


class MeetingsList extends Component {


    constructor(props) {
        super(props);

        this.deleteMeeting = this.deleteMeeting.bind(this);
    }

    deleteMeeting = (e, meetingId) => {
        e.preventDefault();

        const ref = firebase.database().ref(`meetings/${this.props.userId}/${meetingId}`);
        ref.remove();
        
    }

  render() {
    const {meetings} = this.props;

    const myMeetings = meetings.map(item => {
        return (    
            <li className="list-group-item" key={item.meetingId}>
                <section className="btn-group align-self-center" role="group" arial-label="Meeting Option">
                    <button className="btn btn-sm btn-outline-secondary"
                        title="Delete Meeting"
                        onClick={e => this.deleteMeeting(e, item.meetingId)}>

                        <GoTrashcan />

                    </button>

                    <button className="btn btn-sm btn-outline-secondary"
                        title="Check In"
                        onClick={() => 
                            navigate(`checkin/${this.props.userId}/${item.meetingId}`)
                        }
                        >
                        <FaLink />

                    </button>
                </section>
                {item.meetingName.meetingName}
            </li>
            )
        });

    return(
        <ul className="list-group list-group-flush">{myMeetings}</ul>
        )
    }

}

export default MeetingsList