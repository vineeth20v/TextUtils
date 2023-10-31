import React from 'react';
import './App.css';


function Alert(props) {
  const captail = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }

  return (
    <div className={`alert alert-${captail(props.alert.type ,)} alert-dismissible fade show`} role="alert" style={{backgroundColor:'#90EE90'}}>
      <strong>{captail(props.alert.type)}: </strong>{captail(props.alert.message)}
      
    </div>
  );
}

export default Alert;




