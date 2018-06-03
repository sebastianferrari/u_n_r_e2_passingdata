import React, { Component } from 'react';
import UsersList from './UsersList';

class PopularMovieList extends Component {
  render() {
    return (
      <div>
        {Object.keys(this.props.movies).map(key => {
          const movie = this.props.movies[key];
          console.log(movie.name);
          return (
            <div key={key}>
              <h2>{movie.name}</h2>
              <p>Liked by:</p>
              <UsersList 
                movieID={movie.id} 
                users={this.props.users}
                profiles={this.props.profiles} />
            </div>
          )
        })}
      </div>
    );
  }
}

export default PopularMovieList;