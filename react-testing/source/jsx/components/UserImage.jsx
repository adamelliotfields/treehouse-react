import React from 'react';
import PropTypes from 'prop-types';

function UserImage (props) {
  return (
    <div className='photo'>
      <img src={props.image} alt={props.altText} />
    </div>
  );
}

UserImage.propTypes = {
  image: PropTypes.string.isRequired,
  altText: PropTypes.string
};

export default UserImage;
