import React from 'react';

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
            <button onClick={() => this.setState({name: 'Dylando'})}>Click me!</button>
        </div>
        );
    }
}
export default Profile; 