import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Search from './github/Search.jsx';
import Profile from './github/Profile.jsx';

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

    // get user data from github api
    getUserData() {
        $.ajax({
            url: 'https://api.github.com/users/' + this.state.username + '?client_id=' + this.props.clientId + '&client_secret=' + this.props.client_secret,
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({
                    userData: data
                });
                console.log(data);
            }.bind(this),
            error: function(xhr, status, error) {
                this.setState({
                    username: null
                });
                console.log(error);
            }.bind(this)
        });
    }

    // get user repos from github api
    getUserRepos() {
        $.ajax({
            url: 'https://api.github.com/users/' + this.state.username + '/repos?per_page=' + this.state.perPage + '&client_id=' + this.props.clientId + '&client_secret=' + this.props.client_secret + '&sort=created',
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({
                    userRepos: data
                });
                console.log(data);
            }.bind(this),
            error: function(xhr, status, error) {
                this.setState({
                    username: null
                });
                console.log(error);
            }.bind(this)
        });
    }

    handleFormSubmit(username) {
        this.setState({
            username: username
        }, function() {
            this.getUserData();
            this.getUserRepos();
        });
    }

    // function called after react component is mounted
    componentDidMount() {
        this.getUserData();
        this.getUserRepos();
    }

    render() {
        return (
            <div>
                <Search onFormSubmit={this.handleFormSubmit.bind(this)} />
                <Profile {...this.state} />
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
