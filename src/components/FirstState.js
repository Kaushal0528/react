import React from 'react';

class ClsState extends React.Component {
    constructor(){
        super()
        this.state = {
            message: "Welcome User"
        }
        this.changeMessage = this.changeMessage.bind(this);
    }

    changeMessage () {
        this.setState({
            message: "Thanqu For subscribe"
        })
    }
    render() {
        return (
            <div>
                <h1>State</h1>
                <h2>{this.state.message}</h2>
                <button onClick={this.changeMessage}>Subscribe</button>
                <p></p>
            </div>
        )
    }
}
export default ClsState