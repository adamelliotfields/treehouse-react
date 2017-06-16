import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchForm extends Component {
  constructor () {
    super();
    this.onSearchChange = this.onSearchChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { searchText: '' };
  }
  onSearchChange (e) {
    this.setState({ searchText: e.target.value });
  }
  handleSubmit (e) {
    e.preventDefault();
    this.props.onSearch(this.query.value);
    e.currentTarget.reset();
  }
  componentDidUpdate () {
    this.query = this.refs.input;
  }
  render () {
    const { handleSubmit, onSearchChange } = this;

    return (
      <form className='search-form' onSubmit={handleSubmit}>
        <label className='is-hidden' htmlFor='search'>Search</label>
        <input type='search'
          onChange={onSearchChange}
          name='search'
          ref='input'
          placeholder='Search...' />
        <button type='submit' id='submit' className='search-button'>
          <i className='material-icons icn-search'>search</i>
        </button>
      </form>
    );
  }
}

SearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired
};

export default SearchForm;
