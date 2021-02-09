// Library
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import Navigation from "./Navigator";
// Store
import store from "./Store";

class App extends Component {
    render() {
        return (
            <>
                <Provider store={store}>
                    <Navigation/>
                </Provider>
            </>
        )
    }
}

export default App