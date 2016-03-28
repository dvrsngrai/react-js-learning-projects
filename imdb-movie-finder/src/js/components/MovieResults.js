var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var Movie = require('./Movie.js');

var MovieResults = React.createClass({
    render: function() {
        return (
            <div>
                <h3 className="text-center">Results</h3>
                <hr/>
                {
                    this.props.movies.map(function(movie, index){
                        return (
                            <Movie movie={movie} key={index} />
                        )
                    })
                }
            </div>
        )
    }
});

module.exports = MovieResults;
