import React from 'react';
import PropTypes from 'prop-types';

function UserStats (props) {
  return (
    <div className='container'>
      <div className='item'>
        <span className='count'>{props.followers}</span>
        Followers
      </div>
      <div className='item'>
        <span className='count'>{props.following}</span>
        Following
      </div>
      <div className='item'>
        <span className='count'>{props.repositories}</span>
        Repositories
      </div>
    </div>
  );
}

UserStats.propTypes = {
  followers: PropTypes.number,
  following: PropTypes.number,
  repositories: PropTypes.number
};

export default UserStats;
