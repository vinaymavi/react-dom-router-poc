import React from 'react';
const About = ({match})=>(<h1>About-{match.params.name} from {match.params.whr}</h1>)
export default About
