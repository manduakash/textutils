import React from 'react'

const Alert = (props) => {
  return (
    props.alert &&
    <div className={`alert alert-${props.alert.type} alert-dismissible fade show font-monospace text-center`} role="alert">
      <strong>{props.alert.type==="success"?"Successfull: ":"Error: "}</strong> {props.alert.msg}
    </div>
  );
}

export default Alert
