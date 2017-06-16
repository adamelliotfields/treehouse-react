import React from 'react';
import PropTypes from 'prop-types';

import Repository from './Repository.jsx';

const sortByStars = (a, b) => (b.stargazers_count - a.stargazers_count);

function Repositories (props) {
  const { repositories, results } = props;

  const repos = repositories.sort(sortByStars)
  .slice(0, results)
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
  repositories: PropTypes.array,
  results: PropTypes.number
};

export default Repositories;
