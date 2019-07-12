import React from "react";
import Link from './Link';
import './LinkList.css';

class LinkList extends React.Component{


    renderLinks = () => {
        return LINKS.map(li => {
            return (
                <Link key={li.name} backColor={li.color} name={li.name} icon={li.icon} link={li.link} />
            )
        })
    }    

    render(){
        return(
            <ul className="social-link-list">
                {this.renderLinks()}
            </ul>
        )
    }
	
};



const LINKS = [
    {
        icon: 'fab fa-github',
        link: 'https://github.com/hemant-garg',
        name: 'Github',
        color: '#222f3e'
    },
    {
        icon: 'fab fa-facebook-f',
        link: 'https://www.facebook.com/hemantgarg6',
        name: 'Facebook',
        color: '#273c75'
    },
    {
        icon: 'fab fa-linkedin-in',
        link: 'https://www.linkedin.com/in/hemantgarg6/',
        name: 'Linkedin',
        color: '#2980b9'
    },
    {
        icon: 'fas fa-envelope',
        link: 'mailto:hemant.gr6@gmail.com',
        name: 'Mail',
        color: '#cf6a87'
    }
]

export default LinkList;
