import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Main from '../components/Main.jsx';

class App extends Component {
  constructor (props) {
    super(props);
    this.setStateAsync = this.setStateAsync.bind(this);
    this.state = {
      user: {
        name: 'Loading',
        bio: 'One moment...',
        avatar_url: 'public/images/github-logo.png',
        location: 'Unknown',
        following: 0,
        followers: 0,
        public_repos: 0
      },
      repositories: []
    };
  }
  setStateAsync (state) {
    return new Promise((resolve) => {
      this.setState(state, resolve);
    });
  }
  async componentDidMount () {
    const url = 'https://api.github.com/users/';
    const headers = this.props.token ? { 'Authorization': `token ${this.props.token}` } : {};

    try {
      const user = await axios({ url: `${url}${this.props.username}`, headers: headers });
      const repositories = await axios({ url: user.data.repos_url, headers: headers });

      await this.setStateAsync({ user: user.data, repositories: repositories.data });
    } catch (error) {
      if (error) console.log(error.message);
    }
  }
  render () {
    const { user, repositories } = this.state;
    const { results } = this.props;

    const props = {
      user: user,
      repositories: repositories,
      results: results
    };

    return (
      <Main {...props} />
    );
  }
}

App.propTypes = {
  username: PropTypes.string,
  results: PropTypes.number
};

export default App;
