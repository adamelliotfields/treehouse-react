import React from 'react';
import PropTypes from 'prop-types';

function Repository (props) {
  return (
    <div className='container'>
      <div className='name'>
        <div>
          <a className='link' href={props.url} target='_blank'>{props.name}</a>
        </div>
      </div>
      <div className='language'>
        <div>
          {props.language}
        </div>
      </div>
      <div className='stars'>
        <div>
          <i className='fa fa-star-o' />&nbsp;
          {props.stars}
        </div>
      </div>
    </div>
  );
}

Repository.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
  language: PropTypes.string,
  stars: PropTypes.number
};

export default Repository;
