import React from 'react';
import PropTypes from 'prop-types';

import UserInformation from './UserInformation.jsx';
import UserImage from './UserImage.jsx';

function UserDetails (props) {
  const { avatar_url, login, name, bio, location } = props.user;

  return (
    <div className='container'>
      <UserImage image={avatar_url} altText={`${login} avatar`} />
      <UserInformation name={name} bio={bio} location={location} />
    </div>
  );
}

UserDetails.propTypes = {
  user: PropTypes.object
};

export default UserDetails;
