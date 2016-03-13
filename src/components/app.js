import React, { Component } from 'react';

export default class App extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-4"> Siderbar </div>
                <div className="col-md-8"> Content </div>
            </div>
        );
    }
}