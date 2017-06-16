import React from 'react';
import teachers from '../../data/teachers.js';

const Teachers = () => (
  <div className='main-content'>
    <h2>Teachers</h2>
    <ul className='group'>
      {teachers.map((teacher) => (
        <li className='teacher' key={teacher.id} >
          <img className='teacher-img' src={teacher.img_src} alt='teacher' />
          <h3>{teacher.name}</h3>
          <p>{teacher.bio}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default Teachers;
