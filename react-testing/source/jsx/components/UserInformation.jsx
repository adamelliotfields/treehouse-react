import React from 'react';
import PropTypes from 'prop-types';

function UserInformation (props) {
  let locationElement;
  if (props.location === '' || props.location === null) {
    locationElement = null;
  } else {
    locationElement = (
      <span className='location'>
        <i className='fa fa-map-pin' />&nbsp;
        {props.location}
      </span>
    );
  }
  return (
    <div className='details'>
      <span className='full-name'>{props.name}</span>
      <span className='bio'>{props.bio}</span>
      {locationElement}
    </div>
  );
}

UserInformation.propTypes = {
  name: PropTypes.string.isRequired,
  bio: PropTypes.string,
  location: PropTypes.string
};

export default UserInformation;
