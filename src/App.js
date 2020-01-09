import React, {Component} from 'react';
import {Router, navigate} from '@reach/router';
import firebase from './Firebase'

import './App.css';

import Home from './Home'
import Welcome from './Welcome';
import Navigation from './Navigation';
import Login from './Login';
import Register from './Register';
import Meetings from './meeting/Meetings';
import Checkin from './Checkin';
import Attendees from './Attendees';



class App extends Component {

  constructor() {
    super();
    this.state = {
      user: null,
      displayName: null,
      userId:  null
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(FBUser => {
      if(FBUser) {
        this.setState({
          user: FBUser,
          displayName: FBUser.displayName,
          userId: FBUser.uid
        });

        const meetingsRef = firebase.database().ref(`meetings/${FBUser.uid}`);
        meetingsRef.on('value', snapshot => {
          let meetings = snapshot.val();
          let meetingsList = [];

          for(let item in meetings) {
            meetingsList.push({
              meetingId: item,
              meetingName: meetings[item].meetingName,
            })
          }

          this.setState({
            meetings: meetingsList,
            howManyMeetings: meetingsList.length
          });
          
        })

      } else {
        this.setState({user: null})
    }
    });    
  }

  registerUser = userName => {
    firebase.auth().onAuthStateChanged(FBUser => {
      FBUser.updateProfile({
        displayName: userName
      }).then(() => {
        this.setState({
          user: FBUser,
          displayName: FBUser.displayName,
          userId: FBUser.uid
        });
        navigate('/meetings');
      });
    });
  }
  
  logoutUser = e => {
    e.preventDefault();
    this.setState({
      displayName: null,
      user: null,
      uid: null,
    });
    firebase.auth().signOut().then(() => {
      navigate('/login');
    });
  }


  addMeeting = meetingName => {
    firebase.database()
    .ref(`meetings/${this.state.user.uid}`)
    .ref.push({meetingName})
  }


  render() {
    return (

      <div>
        
        <Navigation user={this.state.user} logOutUser={this.logoutUser}/>

        {this.state.user && (
          <Welcome userName={this.state.displayName} logOutUser={this.logoutUser}  />
        )},
        
        <Router>
          <Home path="/" user={this.state.user} />
          <Login path="/login" />
          <Register path="/register" registerUser={this.registerUser}/>
          <Meetings path="/meetings" 
            addMeeting={this.addMeeting} 
            meetings={this.state.meetings}
            userId={this.state.userId}/>

          <Attendees path="/attendees/:userId/:meetingId"
            adminUserId={this.setState.userId}/>

          <Checkin path="/checkin/:userId/:meetingId"/> 
        </Router>
      </div>
      
    );
  }
  
}

export default App;
