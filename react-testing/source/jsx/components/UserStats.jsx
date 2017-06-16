import React from 'react';
import PropTypes from 'prop-types';

function UserStats (props) {
  const { followers, following, public_repos } = props.user;

  return (
    <div className='container'>
      <div className='item'>
        <span className='count'>{followers}</span>
        Followers
      </div>
      <div className='item'>
        <span className='count'>{following}</span>
        Following
      </div>
      <div className='item'>
        <span className='count'>{public_repos}</span>
        Repositories
      </div>
    </div>
  );
}

UserStats.propTypes = {
  user: PropTypes.object
};

export default UserStats;
