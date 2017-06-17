import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Route, NavLink, Redirect } from 'react-router-dom';

import Course from './Course.jsx';
import { HTMLCourses, CSSCourses, JSCourses } from '../../data/courses.js';

class Courses extends PureComponent {
  componentDidMount () {
    window.document.title = 'React Router Basics | Courses';
  }
  render () {
    const { match } = this.props;

    return (
      <div className='main-content courses'>
        <div className='course-header group'>
          <h2>Courses</h2>
          <ul className='course-nav'>
            <li>
              <NavLink to={`${match.url}/html`}>HTML</NavLink>
            </li>
            <li>
              <NavLink to={`${match.url}/css`}>CSS</NavLink>
            </li>
            <li>
              <NavLink to={`${match.url}/javascript`}>JavaScript</NavLink>
            </li>
          </ul>
        </div>
        <Route
          exact
          path={match.path}
          render={() => <Redirect to={`${match.path}/html`} />}
        />
        <Route
          path={`${match.path}/html`}
          render={() => <Course data={HTMLCourses} />}
        />
        <Route
          path={`${match.path}/css`}
          render={() => <Course data={CSSCourses} />}
        />
        <Route
          path={`${match.path}/javascript`}
          render={() => <Course data={JSCourses} />}
        />
      </div>
    );
  }
}

Courses.propTypes = {
  match: PropTypes.object.isRequired
};

export default Courses;
