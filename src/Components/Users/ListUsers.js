import React, {Component} from "react";
import "./ListUsers.css";
class User extends Component {
 constructor(props){
   super(props);
   console.log(this.props.name)
 }
render(){
  return (
    <div className="User">
      <img src={this.props.profile_pic} alt={this.props.name} className="User__pic" />
      <div className="User__details">
        <p className="User__details-name">{this.props.name}</p>
        <p className="User__details-status">{this.props.status}</p>
      </div>
    </div>
  );}
}

export default User;