import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css';


const Logo = () => {
	return(
		<div className='ma4 mt0 fl'>
			<Tilt gyroscope={true} tiltMaxAngleX={80} tiltMaxAngleY={80}>
	      		<div className='pa3'>
	        		<img style={{paddingTop: '5px'}} alt='logo' src={brain}/>
	      		</div>
	    	</Tilt>	
		</div>
	);
}

export default Logo;