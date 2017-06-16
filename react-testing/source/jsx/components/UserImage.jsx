import React from 'react';
import PropTypes from 'prop-types';

function UserImage (props) {
  const { image, altText } = props;

  return (
    <div className='photo'>
      <img src={image} alt={altText} />
    </div>
  );
}

UserImage.propTypes = {
  image: PropTypes.string,
  altText: PropTypes.string
};

export default UserImage;
