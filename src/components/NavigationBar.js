import React from 'react';
import PropTypes from 'prop-types';

import './NavigationBar.css';

const propTypes = {
    setPageIndex:PropTypes.func
};

const defaultProps = {
    setPageIndex:(num) => {console.log("setPageIndex func not defined!");}
};

export default class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
        this.onGoToHome = this.onGoToHome.bind(this);
        this.onGoToAbout = this.onGoToAbout.bind(this);
        this.onGoToLogin = this.onGoToLogin.bind(this);
    }

    onGoToHome() {
        this.props.setPageIndex(0);
    }

    onGoToAbout() {
        this.props.setPageIndex(1);
    }

    onGoToLogin() {
        this.props.setPageIndex(2);
    }

    render() {
        return(
            <div className="header">
                <button onClick={this.onGoToHome} className="item">Go to home</button>
                <button onClick={this.onGoToAbout} className="item">Go to about</button>
                <button onClick={this.onGoToLogin} className="item">Go to login</button>
            </div>
        );
    }
}

NavigationBar.propTypes = propTypes;
NavigationBar.defaultProps = defaultProps;
