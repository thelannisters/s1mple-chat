import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import '../App.css'
import { Nav, NavItem } from 'reactstrap';
import {Home} from './Home';
// import GoogleButton from 'react-google-button' // optional

export const LoginPage = ({ firebase, auth }) => {
  return(
  <div>
        <Nav>
          <NavItem>
            {isEmpty(auth)? 
            <button  type="submit"  
            onClick={() => firebase.login({ provider: 'google', type: 'popup' })}
            >LOG IN WITH GOOGLE</button> :
              <button  type="submit"  
                onClick={() => firebase.logout()}
                >LOG OUT</button>
            }
          </NavItem>
        </Nav>
     <div>
      {
        !isLoaded(auth)
        ? <span>Loading...</span>
        : isEmpty(auth)
          ? <span>Not Authed</span>
          : 
          <div>
            <Home email ={auth.email} displayName ={auth.displayName}/>
            <div>
              </div>
          </div>
      }
      </div>
      </div>
      )
}
LoginPage.propTypes = {
  firebase: PropTypes.shape({
    login: PropTypes.func.isRequired
  }),
  auth: PropTypes.object
}

export default compose(
  firebaseConnect(), 
  connect(
    ({ firebase: { auth } } ) => ({ auth }))
)(LoginPage)
