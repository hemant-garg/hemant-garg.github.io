import React from "react";
import MyPhoto from '../MyPhoto/MyPhoto';
import Button from '../Button/Button';
import LinkList from '../LinkList/LinkList';
import Logo from './hemant garg.jpg';



import './Home.css';
class Home extends React.Component {

	goToProjects(){
		window.location = window.location.origin + '/projects';
	}
	goToResume(){
		window.location='https://drive.google.com/file/d/1XCwA5PbnZKjVrhR7zJquiLpUmrkRcwdO/view';
	}

	render(){
		return(
			<main className="Home">
				
				<MyPhoto logo={Logo}/>
				<h1 className="my-name">Hemant Garg</h1>
				<h3 className="my-tagline">A Full Stack Web Developer who plays Guitar </h3>
				<div style={{display:'flex', justifyContent: 'center'}}>
					<Button onclick={this.goToProjects} color="#6D214F" text="PROJECTS" iconClass = "fas fa-briefcase" />
					<Button onclick={this.goToResume} color="#b71540" text="RESUME" iconClass = "fas fa-location-arrow" />
				</div>	
				<div className="social-link-container">
					<LinkList />
				</div>
				
			</main>
		)
	}
};

export default Home;
