import React from 'react';
import { Jumbotron, Grid } from 'react-bootstrap';

import SearchForm from '../components/SearchForm';
import SearchResults from '../components/SearchResults';

const App = () => (
  <div>
    <Jumbotron>
      <Grid>
        <h1>Search App</h1>
        <p>This is a simple search app.</p>
        <SearchForm />
      </Grid>
    </Jumbotron>
    <SearchResults />
  </div>
);

export default App;
