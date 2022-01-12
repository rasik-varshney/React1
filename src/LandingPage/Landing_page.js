import React from 'react';

import {Link} from 'react-router-dom';
import omen from '../images/batman.jpg';
import './Landingpage.css';

function Landing_page() {
return (
<>

<h2>Landing Page</h2>

<div className='landPage-container'>
<img className='image' src={omen} alt="omen_image"/>

<Link className='button' to="/postViewPage">Enter </Link>
</div>

</>
);

}

export default Landing_page