var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var SearchForm = require('./SearchForm.js');
var MovieResults = require('./MovieResults.js');

function getAppState() {
    return {
        movies: AppStore.getMovieResults()
    }
}

var App = React.createClass({
    getInitialState: function() {
        return getAppState();
    },
    componentDidMount: function() {
        AppStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function() {
        AppStore.removeChangeListener(this._onChange);
    },
    render: function() {
        var movie_results = (this.state.movies == '') ? '' : <MovieResults movies={this.state.movies} />;
        return(
            <div>
                <SearchForm />
                {movie_results}
            </div>
        )
    },
    _onChange: function() {
        this.setState(getAppState());
    }
});

module.exports = App;
