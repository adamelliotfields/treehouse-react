import React from 'react';
import PropTypes from 'prop-types';

function Featured (props) {
  const { match } = props;

  let name = match.params.name;
  let topic = match.params.topic;

  return (
    <div className='main-content'>
      <h2>{name}</h2>
      <p>Introducing <strong>{name}</strong>, a teacher who loves teaching courses about <strong>{topic}</strong>!</p>
    </div>
  );
}

Featured.propTypes = {
  match: PropTypes.object.isRequired
};

export default Featured;
