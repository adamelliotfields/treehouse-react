import React, { Component } from 'react';
import axios from 'axios';

import SearchForm from '../components/SearchForm.jsx';
import GifList from '../components/GifList.jsx';

class App extends Component {
  constructor () {
    super();
    this.setStateAsync = this.setStateAsync.bind(this);
    this.performSearch = this.performSearch.bind(this);
    this.state = {
      gifs: [],
      loading: true
    };
  }
  setStateAsync (state) {
    return new Promise((resolve) => {
      this.setState(state, resolve);
    });
  }
  componentDidMount () {
    this.performSearch();
  }
  async performSearch (query = 'cats') {
    const url = 'http://api.giphy.com/v1/gifs/search?q=';
    const params = '&limit=24';
    const key = '&api_key=dc6zaTOxFJmzC';

    try {
      const response = await axios.get(`${url}${query}${params}${key}`);

      await this.setStateAsync({ gifs: response.data.data, loading: false });
    } catch (error) {
      console.log('Error:', error);
    }
  }
  render () {
    const { performSearch } = this;
    const { gifs, loading } = this.state;

    return (
      <div>
        <div className='main-header'>
          <div className='inner'>
            <h1 className='main-title'>GifSearch</h1>
            <SearchForm onSearch={performSearch} />
          </div>
        </div>
        <div className='main-content'>
          {(loading)
             ? <p>Loading...</p>
             : <GifList data={gifs} />}
        </div>
      </div>
    );
  }
}

export default App;
