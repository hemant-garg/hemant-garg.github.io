import React from "react";
import Tilt from 'react-tilt';
import './MyPhoto.css';

const MyPhoto = ({logo, width, delay, height, onclick, text, gradient, anim}) => {
	const tiltstyle = {
		width: width,
		height: height,
		animationName: anim,
		animationDelay: delay + 's'
	}
	const gradientStyle= {
		background: gradient
	}
	return(
		<div className="MyPhoto" onClick={onclick}>
		<Tilt className="Tilt MyPhoto-tilt" style={tiltstyle}  options={{ max : 55 }} >
			<div className="Tilt-inner">
				<img src={logo} className="MyPhoto-tilt__img" alt="hemant garg"/> 
				<div style={gradientStyle} className="MyPhoto-tilt-gradient"></div>
				<div className="MyPhoto-tilt-text">{text}</div>
			</div>
		</Tilt>
		</div>
	)
};

export default MyPhoto;
