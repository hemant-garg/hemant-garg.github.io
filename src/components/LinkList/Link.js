import React from "react";
import './Link.css';
const Link = ({link, icon, name, backColor}) => {
	return(
        <a href={link} className="social-link" ><li title={name} style={{backgroundColor: backColor}} className="social-link-item">
            <i className={icon}></i>
        </li></a>
	)
};

export default Link;
