import React , {Component} from "react";
import './Sidebar.css';
import firebase from 'firebase';
import _ from 'lodash';
import ListUsers from '../Users/ListUsers';
class Sidebar extends Component {
  constructor(props) {
      super(props);
      this.state = {
          users: []
      }
  }
  componentDidUpdate() {
      let listuser = [];
      var query = firebase.database().ref("users").orderByChild('emailAddress');
      query.once("value")
          .then(snapshot => {
              snapshot.forEach(childSnapshot => {
                 listuser.push(childSnapshot.val());
              });
              if (!(this.state.users.length === listuser.length))
                  this.setState({ users: listuser });

          });
        }

  render(){
    return (
      <aside className="Sidebar">
      {
         this.state.users.map((item, index )=>{
             console.log(item.avatarUrl);
            return <ListUsers key={index} profile_pic={item.avatarUrl} name={item.displayName} status={'online'}/>
          })
      }
        
      </aside>
    );
  }
  }

 export default Sidebar;

