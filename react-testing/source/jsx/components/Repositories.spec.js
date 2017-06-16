import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Repositories from './Repositories.jsx';
import Repository from './Repository.jsx';

const repositories = [
  {
    id: 1,
    stargazers_count: 1,
    html_url: 'www.github.com',
    name: 'first-repo',
    language: 'javascript'
  },
  {
    id: 2,
    stargazers_count: 2,
    html_url: 'www.github.com',
    name: 'second-repo',
    language: 'javascript'
  }
];

const props = {
  repositories: repositories,
  results: 2
};

describe('<Repositories />', () => {
  it('should render number of repositories specified by results', () => {
    const wrapper = shallow(<Repositories {...props} />);
    expect(wrapper.find(Repository)).to.have.length(2);
  });
  it('should display repos ordered by stargazers', () => {
    const sortByStars = (a, b) => (b.stargazers_count - a.stargazers_count);
    const sortedRepos = repositories.sort(sortByStars);
    const wrapper = shallow(<Repositories {...props} />);
    const results = wrapper.find(Repository);

    results.forEach((repo, index) => {
      expect(repo.prop('url')).to.equal(sortedRepos[index].html_url);
      expect(repo.prop('name')).to.equal(sortedRepos[index].name);
      expect(repo.prop('language')).to.equal(sortedRepos[index].language);
      expect(repo.prop('stars')).to.equal(sortedRepos[index].stargazers_count);
    });
  });
});
