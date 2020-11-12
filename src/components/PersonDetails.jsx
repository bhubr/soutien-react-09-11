import React from 'react';
import './PersonDetails.css'

function PersonDetails (props) {
  return (
    <div className="person">
      <img src={props.avatar} className="avatar" alt="Avatar de quelqu'un" />
      <div>
      <div className="firstName">{props.firstName}</div>
      <div className="lastName">{props.lastName}</div>
      <div className="email">{props.email}</div>
      <div className="age">{props.age}</div>
      </div>
    </div>
  )
}


export default PersonDetails;