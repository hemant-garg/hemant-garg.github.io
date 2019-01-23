import React from "react";
import './Link.css';
const Link = ({link, icon, name, backColor}) => {
	return(
        <li title={name} style={{backgroundColor: backColor}} className="social-link-item">
        <a href={link} className="social-link" >
        
            <i className={icon}></i>
        </a></li>
	)
};

export default Link;
