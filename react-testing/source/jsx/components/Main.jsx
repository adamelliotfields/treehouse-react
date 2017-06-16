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
  const { user, repositories, results } = props;

  return (
    <div className='main'>
      <UserDetails user={user} />
      <UserStats user={user} />
      <hr />
      <Repositories repositories={repositories} results={results} />
      <Footer user={user} lastActive={getLastPushDate(repositories)} />
    </div>
  );
}

Main.propTypes = {
  user: PropTypes.object,
  repositories: PropTypes.array,
  results: PropTypes.number
};

export default Main;
