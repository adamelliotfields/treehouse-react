import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

function Footer (props) {
  const { lastActive } = props;
  const { html_url } = props.user;

  return (
    <div className='container'>
      <div className='follow'>
        <button>
          <a className='link' target='_blank' href={html_url}>
            Follow
          </a>
        </button>
      </div>
      <div className='active-time'>
        <span>
          {`Last active: ${moment(lastActive).fromNow()}`}
        </span>
      </div>
    </div>
  );
}

Footer.propTypes = {
  user: PropTypes.object,
  lastActive: PropTypes.object
};

export default Footer;
