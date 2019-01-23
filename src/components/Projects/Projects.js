import React from "react";
import MyPhoto from '../MyPhoto/MyPhoto';
import Button from '../Button/Button';
import Logo from './hemant garg.png';
import './Projects.css';

class Projects extends React.Component {
	showModal(i){
		var modal = document.querySelectorAll("#myModal")[i];
		var span = document.getElementsByClassName("close")[i];
		console.log(modal)
		modal.style.display = "block";
	
		span.onclick = function() {
			modal.style.display = "none";
		}
		window.onclick = function(event) {
			if (event.target === modal) {
				modal.style.display = "none";
			}
		}
	}

	renderModalData = () => {
		return PROJECTS.map(project => {
			return(
				<div key={project.name} id="myModal" className="modal">
					<div className="modal-content">
					<span className="close">&times;</span>
					<h1 className="modal-content-title">{project.name}</h1>
					<p className="modal-content-description">	
						{project.desp1}
						<br />
						{project.desp2}
						<br />
					</p>
					<p className="modal-content-tech">
						 Skills that I've used: <br/>
						 {
							 project.tech.map(t => {
								return <span key={t}>{t}</span>
							 })
						 } 
					</p>
					<Button onclick={() => window.open(project.repo)} border={'.5rem'} color="#006266" text="REPO" iconClass = "fas fa-file-code" />
					<Button onclick={() => window.open(project.website)} border={'.5rem'} color="#2980b9" text="LIVE" iconClass = "fas fa-desktop" />
					</div>
				</div>
			)
		})
	}

	render(){
		
		return(
			<main className="Projects" style={{paddingTop: 12+'rem'}}>
				{this.renderModalData()}
				<h1 className="my-name">Recent Projects</h1>
				<h3 className="my-tagline">( <i className="fas fa-hand-point-down"></i> click for more info  <i className="far fa-smile-wink"></i> )</h3>
				<div className="project-list">
					<MyPhoto text="MAILZY" gradient="rgba(0, 98, 102, .6)" onclick={() => this.showModal(0)} logo={Logo}/>
					<MyPhoto text="eCell MSIT" gradient="rgba(237, 76, 103, .6)" onclick={() => this.showModal(1)} logo={Logo}/>
					<MyPhoto text="Youtube Mini" gradient="rgba(27, 20, 100, .6)" onclick={() => this.showModal(2)} logo={Logo}/>
					<MyPhoto text="Face Scanner" gradient="rgba(234, 32, 39, .6)" onclick={() => this.showModal(3)} logo={Logo}/>
				</div>
			</main>
		)
	}
};

const PROJECTS = [
	{
		name: 'Mailzy',
		desp1: 'The app that can be used to send mass emails to a big list of users for the purpose of collecting feedback.',
		desp2: 'If you are running a startup or any kind of business and you want to collect some feedback from your users to expand or improve your business then you can use this web app.',
		repo: 'https://github.com/hemant-garg/mailzy',
		website: 'https://mailzy.herokuapp.com/',
		tech: ['HTML5', 'CSS3', 'reactjs', 'redux', 'react-router', 'redux-form', 'nodejs', 'google-OAuth', 'expressjs', 'mongoDB', 'sendgrid', 'passport', 'stripe', 'mlab', 'mongooose', 'npm']
	},
	{
		name: 'Entrepreneurship Cell of MSIT',
		desp1: 'I have created an amazing website completely from scratch for eCell MSIT. ',
		desp2: 'Solely responsible for further website management.',
		repo: 'https://github.com/hemant-garg/ecellmsit2019',
		website: 'https://hemant-garg.github.io/ecellmsit2019/',
		tech: ['Adobe Illustrator', 'HTML5', 'CSS3', 'sass', 'reactjs', 'react-router', 'disqus', 'wordpress-api', 'nodejs', 'expressjs', 'mongoDB', 'mlab', 'mongooose', 'npm']
	},
	{
		name: 'Youtube Mini',
		desp1: 'A simple Website which shows five videos based upon users search',
		desp2: '',
		repo: 'https://github.com/hemant-garg/youtube-mini',
		website: 'https://hemant-garg.github.io/youtube-mini/',
		tech: ['HTML5', 'CSS3', 'reactjs', 'redux', 'npm', 'youtube-api']
	},
	{
		name: 'Face Scanner',
		desp1: 'This App analyzes images and returns information on age, gender, and multicultural appearance for each detected face based on facial characteristics.',
		desp2: 'API used - Clarifai ( Demographic Model )',
		repo: 'https://github.com/hemant-garg/face-scanner',
		website: 'https://hemant-garg.github.io/face-scanner/',
		tech: ['HTML5', 'CSS3', 'reactjs', 'redux', 'npm', 'Clarifai API']
	},
];


export default Projects;
