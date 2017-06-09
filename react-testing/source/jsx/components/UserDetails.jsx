import React from 'react';
import PropTypes from 'prop-types';

import UserInformation from './UserInformation.jsx';
import UserImage from './UserImage.jsx';

function UserDetails (props) {
  const Props = {
    userImage: {
      image: props.image,
      altText: `${props.username} avatar`
    },
    userInformation: {
      name: props.name,
      bio: props.bio,
      location: props.location
    }
  };

  return (
    <div className='container'>
      <UserImage {...Props.userImage} />
      <UserInformation {...Props.userInformation} />
    </div>
  );
}

UserDetails.propTypes = {
  image: PropTypes.string.isRequired,
  username: PropTypes.string,
  name: PropTypes.string.isRequired,
  bio: PropTypes.string,
  location: PropTypes.string
};

export default UserDetails;
