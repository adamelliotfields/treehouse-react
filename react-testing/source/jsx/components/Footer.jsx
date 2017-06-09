import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

function Footer (props) {
  return (
    <div className='container'>
      <div className='follow'>
        <button>
          <a className='link' target='_blank' href={props.url}>
            Follow
          </a>
        </button>
      </div>
      <div className='active-time'>
        <span>
          {`Last active: ${moment(props.lastActive).fromNow()}`}
        </span>
      </div>
    </div>
  );
}

Footer.propTypes = {
  url: PropTypes.string,
  lastActive: PropTypes.object
};

export default Footer;
