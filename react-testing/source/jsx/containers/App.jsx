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
      repos: []
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
      const repos = await axios({ url: user.data.repos_url, headers: headers });

      await this.setStateAsync({ user: user.data, repos: repos.data });
    } catch (error) {
      if (error) console.log(error.message);
    }
  }
  render () {
    const Props = {
      user: this.state.user,
      repos: this.state.repos,
      results: this.props.results
    };

    return (
      <Main {...Props} />
    );
  }
}

App.propTypes = {
  username: PropTypes.string.isRequired,
  results: PropTypes.number.isRequired
};

export default App;
