var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var Movie = React.createClass({
    render: function() {
        var movie_link = "http://imdb.com/title/" + this.props.movie.imdbID;
        return (
            <div className="well">
                <div className="row">
                    <div className="col-md-4">
                        <img src={this.props.movie.Poster} alt={this.props.movie.Title} className="img-responsive thumbnail"/>
                    </div>
                    <div className="col-md-8">
                        <h4>{this.props.movie.Title}</h4>
                        <dl>
                            <dt>Title</dt>
                            <dd>{this.props.movie.Title}</dd>
                            <dt>Year Released</dt>
                            <dd>{this.props.movie.Year}</dd>
                            <dt>Type</dt>
                            <dd>{this.props.movie.Type}</dd>
                            <dt>IMDB Link</dt>
                            <dd><a href={movie_link} className="btn btn-success">View on IMDB</a></dd>
                        </dl>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = Movie;
