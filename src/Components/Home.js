import React from 'react'
import '../App.css'
// import GoogleButton from 'react-google-button' // optional

export const Home = (props) => (
          <div>
            Login information:
            <div>{props.email}</div>
            <div>{props.displayName}</div>
          </div>
)

