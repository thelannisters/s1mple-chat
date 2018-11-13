import React , { Component } from 'react'
import firebase from 'firebase';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firebaseConnect, isEmpty } from 'react-redux-firebase'
import GoogleButton from 'react-google-button';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap-theme.min.css' 

//=({firebase,auth})=>
class LoginPage  extends Component{
  constructor (props) {
    super(props);
    this.state= {
      isSignIn: false,
      uid: '',  
    }
  }
 
  render(){
  return(
    <nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand">S1mple Chat App</a>
    </div>
    <ul className="nav navbar-nav navbar-right">
    {    isEmpty(this.props.auth)? 
            <li><GoogleButton onClick={() => firebase.login({ provider: 'google', type: 'popup' })}/></li> :
            <li>{this.props.auth.displayName}<button  type="submit"  
                onClick={() => firebase.logout()} 
                  ><span className="glyphicon glyphicon-log-in"></span>  Log out</button></li>
            }
    </ul>
  </div>
</nav>
       
      )
    }
    
}



export default compose(
  firebaseConnect(), 
  connect(
    ({ firebase: { auth } } ) => ({ auth }))
)(LoginPage)