import React from 'react';
import Header from './header';
import { BrowserRouter as Router} from 'react-router-dom'
import Routes from './Route';

class App extends React.Component{
    render(){
        return(
            <div className="fluid-container">
             <Router>
                    <Routes />
                </Router>
            </div>
        )
    }
}
export default App;