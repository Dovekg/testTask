import React, { Component } from 'react';
import ReactDOM from 'react-dom';


export default class Nav extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse navbar-fixed-top">
                  <div className="container-fluid">
                    <div className="navbar-header">
                      <button className="navbar-toggle collapsed" aria-expanded="false" aria-controls="navbar" type="button" data-toggle="collapse" data-target="#navbar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                      </button>
                      <a className="navbar-brand" href="#">SciStats</a>
                    </div>
                    <div className="navbar-collapse collapse" id="navbar">
                      <ul className="nav navbar-nav navbar-right">
                        <li><a href="#">Dashboard</a></li>
                        <li><a href="#">Settings</a></li>
                        <li><a href="#">Profile</a></li>
                        <li><a href="#">Help</a></li>
                      </ul>
                      <form className="navbar-form navbar-right">
                        <input className="form-control" type="text" placeholder="Search..." />
                      </form>
                    </div>
                  </div>
                </nav>
            </div>
        );
    }
}
