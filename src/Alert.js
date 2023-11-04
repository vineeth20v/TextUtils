import React from 'react';
import './App.css';

function Alert(props) {
  const capitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  return (
    <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert" style={{ backgroundColor: '#90EE90' }}>
      <strong>{capitalize(props.alert.type)}: </strong>{capitalize(props.alert.message)}
    </div>
  );
}

export default Alert;





