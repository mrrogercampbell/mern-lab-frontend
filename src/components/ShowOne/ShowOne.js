import React, { Component } from 'react';

class SingleView extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Hello from Single View</h1>
            </div>
        );
    }
}

export default SingleView;