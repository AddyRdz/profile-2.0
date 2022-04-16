import React from 'react'
import HTML from '../assets/html.png';
import JAVASCRIPT from '../assets/javascript.png';
import CSS from '../assets/css3.png';
import PYTHON from '../assets/python.png';
import REACT from '../assets/react.png';
import Node from '../assets/node-js.png';
import Bootstrap from '../assets/bootstrap.png';
import Tailwind from '../assets/tailwind.png';

const Skills = () => {
  return (
    <div name='skills'>
        {/* Container */}
        <div>
            <div>
                <p>Skills</p>
                <p>These are the technologies I've dabbled in:</p>
            </div>
            <div>
                <img src={HTML} alt="HTML icon"/>
                <p>HTML</p>
            </div>
        </div>
    </div>
  )
}

export default Skills