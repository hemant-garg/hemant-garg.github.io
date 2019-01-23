import React from "react";
import './Button.css';
const Button = ({text, color, iconClass, onclick, animation, border}) => {
    const buttonStyle={
        animation: animation,
        borderRadius: border,
        backgroundColor: color
    }
	return(
		<button onClick={onclick} className="button" style={buttonStyle}>
            {text}
            <i className={iconClass}></i>
        </button>
	)
};

export default Button;
