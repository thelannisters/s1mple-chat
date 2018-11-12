import React , {Component} from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import firebase from 'firebase';
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import GoogleButton from 'react-google-button';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap-theme.min.css' 
import loginState from '../../actions/loginState';


const LoginPage =({firebase,auth})=> {
  return(
    <nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="#">S1mple Chat App</a>
    </div>
    <ul className="nav navbar-nav navbar-right">
    {       isEmpty(auth)? 
            <li><GoogleButton onClick={() => firebase.login({ provider: 'google', type: 'popup' })}/></li> :
            <li>{auth.displayName}<button  type="submit"  
                onClick={() => firebase.logout()}
                  ><span className="glyphicon glyphicon-log-in"></span>  Log out</button></li>
            }
    </ul>
  </div>
</nav>
       
      )
    
}
LoginPage.propTypes = {
  firebase: PropTypes.shape({
    login: PropTypes.func.isRequired
  }),
  auth:PropTypes.object
}



export default compose(
  firebaseConnect(), 
  connect(
    ({ firebase: { auth } } ) => ({ auth }))
)(LoginPage)