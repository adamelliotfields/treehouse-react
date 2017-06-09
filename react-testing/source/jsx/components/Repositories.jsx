import React from 'react';
import PropTypes from 'prop-types';

import Repository from './Repository.jsx';

const sortByStars = (a, b) => (b.stargazers_count - a.stargazers_count);

function Repositories (props) {
  const repos = props.repos.sort(sortByStars)
  .slice(0, props.results)
  .map((repo) => (
    <Repository
      key={repo.id}
      url={repo.html_url}
      name={repo.name}
      language={repo.language || 'JavaScript'}
      stars={repo.stargazers_count}
    />
  ));
  return (
    <div>
      <div className='container'>
        <div className='heading'>
          Top Repositories
        </div>
      </div>
      <div className='item'>{repos}</div>
    </div>
  );
}

Repositories.propTypes = {
  repos: PropTypes.array,
  results: PropTypes.number.isRequired
};

export default Repositories;
