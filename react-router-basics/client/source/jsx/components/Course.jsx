import React from 'react';
import PropTypes from 'prop-types';

function Course (props) {
  const { data } = props;

  return (
    <div>
      <ul>
        {data.map((course) => (
          <li className='course media group' key={course.id}>
            <img className='course-img' src={course.img_src} alt='course' />
            <div>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

Course.propTypes = {
  data: PropTypes.array.isRequired
};

export default Course;
