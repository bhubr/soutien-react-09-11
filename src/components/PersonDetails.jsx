import React from 'react';
import './PersonDetails.css'

function PersonDetails () {
  return (
    <div className="person">
      <img src="https://randomuser.me/api/portraits/men/53.jpg" className="avatar" alt="Avatar de quelqu'un" />
      <div className="firstName">Mark</div>
      <div className="lastName">Henry</div>
      <div className="email">mark.henry@example.com</div>
      <div className="age">45</div>
    </div>
  )
}


export default PersonDetails;