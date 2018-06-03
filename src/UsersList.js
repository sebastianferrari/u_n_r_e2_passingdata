import React, { Component } from 'react';

class UsersList extends Component {
  render() {
    const profilesOfMovie = this.props.profiles.filter(profile => 
      this.props.movieID === parseInt(profile.favoriteMovieID, 10));
    const usersToReturn = profilesOfMovie.map(item => {
      return this.props.users[item.userID];
    })

    console.log("Profiles of this movie", profilesOfMovie);
    console.log("Users of this movie", usersToReturn);

    if (usersToReturn.length > 0) {
      return (
        <ul>
          {usersToReturn.map(user => (
            <li key={this.props.movieID + '_' + user.id}>
              {user.name}
            </li>
          ))}
        </ul>
      )
    }

    return (
      <p>None of the current users liked this movie</p>
    )
  }
}

export default UsersList;