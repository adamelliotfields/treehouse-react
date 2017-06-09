import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import UserDetails from './UserDetails.jsx';
import UserStats from './UserStats.jsx';
import Repositories from './Repositories.jsx';
import Footer from './Footer.jsx';

const getLastPushDate = (repositories) => {
  if (repositories.length === 0) return moment();
  const pushDates = repositories.map((repo) => moment(repo.pushed_at));

  return moment.max(pushDates);
};

function Main (props) {
  const Props = {
    userDetails: {
      image: props.user.avatar_url,
      username: props.user.login,
      name: props.user.name,
      bio: props.user.bio,
      location: props.user.location
    },
    userStats: {
      following: props.user.following,
      followers: props.user.followers,
      repositories: props.user.public_repos
    },
    repositories: {
      repos: props.repos,
      results: props.results
    },
    footer: {
      url: props.user.html_url,
      lastActive: getLastPushDate(props.repos)
    }
  };

  return (
    <div className='main'>
      <UserDetails {...Props.userDetails} />
      <UserStats {...Props.userStats} />
      <hr />
      <Repositories {...Props.repositories} />
      <Footer {...Props.footer} />
    </div>
  );
}

Main.propTypes = {
  user: PropTypes.object.isRequired,
  repos: PropTypes.array,
  results: PropTypes.number.isRequired
};

export default Main;
