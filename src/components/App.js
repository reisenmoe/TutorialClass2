import React from 'react';

import NavigationBar from './NavigationBar';
import Home from './Home';
import About from './About';
import Login from './Login';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageIndex: 0
        };
        this.onSetPageIndex = this.onSetPageIndex.bind(this);
    }

    onSetPageIndex(inx)
    {
        this.setState({
            pageIndex: inx
        });
    }

    render() {
        let currentView = null;
        switch(this.state.pageIndex)
        {
            case 0: {
                currentView = <Home/>;
                break;
            }
            case 1: {
                currentView = <About/>;
                break;
            }
            case 2: {
                currentView = <Login/>;
                break;
            }
        }

        return(
            <div>
                <NavigationBar setPageIndex={this.onSetPageIndex}/>
                {currentView}
            </div>
        );
    }
}
