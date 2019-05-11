import React from 'react';
import './seasonDisplay.css';
function getSeason(lat,month){
    if (month>2 && month<9){
        if (lat>0){
            return "Summer";
        }else{
            return "Winter";
        }
    }else{
        if (lat>0){
            return "Winter";
        }else{
            return "Summer";
        }
    }
};
var seasonDisplay = (props)=>{
    var season = getSeason(props.lat,new Date().getMonth());
    if (season === "Winter"){
        return (
  
            <div className = "winter">
            <i className="icon-left fas fa-snowflake" style = {{color:"blue"}}></i>
            <h1 style = {{color:"blue",fontSize:"80px"}}>Burr, it's chilly!</h1>
            <i className="icon-right fas fa-snowflake" style = {{color:"blue"}}></i>
            </div>
  
        );
    }else{
        return(
            <div className = "summer">
            <div><i className="icon-left fas fa-sun" style = {{color:"orange"}}></i></div>
            <h1 style = {{color:"red",fontSize:"80px"}}>Lets hit the beach!</h1>
            <div><i className="icon-right fas fa-sun" style = {{color:"orange"}}></i></div>
            </div>
        );
    }
}
export default seasonDisplay;