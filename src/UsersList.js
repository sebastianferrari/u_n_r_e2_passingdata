import React, { Component } from 'react';

class UsersList extends Component {
  render() {
    const profilesOfMovie = this.props.profiles.filter(profile => 
      this.props.movieID === parseInt(profile.favoriteMovieID, 10));
    const usersToReturn = profilesOfMovie.map(item => {
      return this.props.users[item.userID];
    })

    if (usersToReturn.length > 0) {
      return (
        <div>
          <p>Liked by:</p>
          <ul>
            {usersToReturn.map(user => (
              <li key={this.props.movieID + '_' + user.id}>
                {user.name}
              </li>
            ))}
          </ul>
    	</div>
      )
    }

    return (
      <p>None of the current users liked this movie</p>
    )
  }
}

export default UsersList;