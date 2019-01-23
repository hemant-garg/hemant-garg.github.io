import React from "react";
import './Button.css';
const Button = ({text, color, iconClass, onclick, delay, border}) => {
    const buttonStyle={
        borderRadius: border,
        backgroundColor: color,
        animationDelay: delay + 's'
    }
	return(
		<button onClick={onclick} className="button" style={buttonStyle}>
            {text}
            <i className={iconClass}></i>
        </button>
	)
};

export default Button;
