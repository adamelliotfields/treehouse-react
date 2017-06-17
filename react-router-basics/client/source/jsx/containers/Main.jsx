import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../components/Header.jsx';
import Home from '../components/Home.jsx';
import About from '../components/About.jsx';
import Teachers from '../components/Teachers.jsx';
import Featured from '../components/Featured.jsx';
import Courses from '../components/Courses.jsx';
import NotFound from '../components/NotFound.jsx';

const Main = () => (
  <div className='main'>
    <Header />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/about' render={() => <About title='About' />} />
      <Route path='/teachers' component={Teachers} />
      <Route path='/teachers/:topic/:name' component={Featured} />
      <Route path='/courses' component={Courses} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default Main;
