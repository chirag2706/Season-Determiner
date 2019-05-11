import React from 'react';
import ReactDOM from 'react-dom';
import Seasondisplay from './seasonDisplay.js';
import Spinner from './spinner.js';
// import seasonDisplay from './seasonDisplay.js'
class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {lat:null,errMessage:''};
    }

    componentDidMount(){
        // Loading of data occurs
        window.navigator.geolocation.getCurrentPosition(
            (position)=>{
                console.log(position);
                this.setState({
                    lat:position.coords.latitude
                });
            },
            (err)=>{
                this.setState({errMessage:err.message});
            }
        );
    }
    componentDidUpdate(){
        // Waits so that info gets updated
        console.log("my component is in componentDidUpdate");
    }

    render(){
        // return (
            if (!this.state.errMessage && this.state.lat){
                return <Seasondisplay lat = {this.state.lat} />
            }else if (!this.state.lat && this.state.errMessage){
                return <div>Error: {this.state.errMessage}</div>
            }else{
                return <Spinner message = "Please accept the location request"/>
            }
    }
}



ReactDOM.render(<App />,document.querySelector("#root"));