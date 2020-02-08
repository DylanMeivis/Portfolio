import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
        };
    }
    render() {
        return (
        <div>
            <h1>This is the portfolio of {this.state.name}</h1>
            <h3>Where you can find everything about me</h3>
            <i>Such italic</i>
            <button onClick={() => this.setState({name: 'Dylando'})}>Click me!</button>
        <Router>
            <h3>
                <Link></Link>
            </h3>
        </Router>
        </div>
        );
    }
}
export default Profile; 