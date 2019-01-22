import React from "react";
import Tilt from 'react-tilt';
import './MyPhoto.css';

const MyPhoto = ({logo}) => {
	return(
		<div className="MyPhoto">
		<Tilt className="Tilt MyPhoto-tilt" options={{ max : 55 }} >
			<div className="Tilt-inner">
				<img src={logo} className="MyPhoto-tilt__img" alt="hemant garg"/> 
			</div>
		</Tilt>
		</div>
	)
};

export default MyPhoto;
