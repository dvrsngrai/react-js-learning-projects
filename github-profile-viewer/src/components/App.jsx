import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'facebook',
            userData: [],
            userRepos: [],
            perPage: 5
        }

    }

    render() {
        return (
            <div>
                <p>{this.props.clientId}</p>
            </div>
        )
    }
}

App.propTypes = {
    clientId: React.PropTypes.string,
    clientSecret: React.PropTypes.string
}

App.defaultProps = {
    clientId: '593ccdc9d07bb719e8ec',
    clientSecret: 'fb58a5af5db9b54d8f97da7954e54e3013906ce0'
}

export default App;
