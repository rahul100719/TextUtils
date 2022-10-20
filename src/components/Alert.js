import React from "react";

function Alert(props) {
  return (
    props.alert && (
      <div className="container">
        <div
          className={`alert alert-${props.alert.typ}  alert-dismissible fade show`}
          role="alert"
        >
          {props.alert.typ} : {props.alert.msg}
        </div>
      </div>
    )
  );
}

export default Alert;
