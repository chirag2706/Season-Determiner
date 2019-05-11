import React from 'react';
var Spinner = (props)=>{
    return (
        <div className = "ui active dimmer">
            <div className = "ui bid text loader">
            {props.message}
            </div>
        </div>
    );
}
export default Spinner;