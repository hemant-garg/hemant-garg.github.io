import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import './Projects.css';
import ProjectBox from './ProjectBox';

class Projects extends React.Component {
	render() {
		return (
			<main className='Projects-section'>
				<Helmet>
					<meta charSet='utf-8' />
					<title>Hemant Garg | Projects</title>
					<meta
						name='description'
						content='The List of Projects that I have done recently. Please have a look :) '
					/>
					<meta
						name='keywords'
						content='React Projects, eCell MSIT, ecell, esummit, social network for developers, face scanner reactjs, youtube mini reactjs, mailzy, stephen grider nodejs course, Brad Traversy MERN stack course, Hemant Garg MERN Stack Developer, Full Stack Web Developer, hemant-garg, hemantgarg6'
					/>
				</Helmet>

				<nav className='projects-nav'>
					<Link to='/'>&larr; Back</Link>
				</nav>
				<div className='projects'>
					{PROJECTS.map((project) => <ProjectBox project={project} key={project.name} />)}
				</div>
			</main>
		);
	}
}

const PROJECTS = [
	{
		name: 'Flat UI Colors',
		image: 'flatUiColors.png',
		desp1:
			"A Simple beautiful looking Clone of website like flatuicolors.com with some extra functionalities i.e. Users can create their own palettes of their favourite colors and They can easily delete some palettes that they don't like.",
		desp2: 'Want some beautiful colors for next project?? If yes, then you must check this website. Thanks ;)',
		repo: 'https://github.com/hemant-garg/FlatUIColors',
		website: 'https://flatuicolors.netlify.com/',
		tech: [
			'HTML5',
			'CSS3',
			'reactjs',
			'npm',
			'chroma-js',
			'material-ui',
			'react-router-transition',
			'react-sortable-hoc'
		]
	},
	{
		name: 'Social Network for Devs',
		image: 'socialNetwork.png',
		desp1:
			'Social Network website for developers. Create a developer profile/portfolio, share posts and get help from other developers',
		desp2: 'Its a pretty big website, So please check out the complete information on github repo. Thanks ;)',
		repo: 'https://github.com/hemant-garg/Social-Network',
		website: 'https://social-network-v1.herokuapp.com/',
		tech: [
			'HTML5',
			'CSS3',
			'reactjs',
			'redux',
			'moment',
			'npm',
			'nodejs',
			'mongoose',
			'mongoDB',
			'expressjs',
			'passport-jwt',
			'bcryptjs',
			'jsonwebtoken'
		]
	},
	{
		name: 'Portfolio',
		image: 'portfolio.png',
		desp1:
			'Okay So, I have created this simple website for showcasing my recent work. You can call it as my portfolio website.',
		desp2: "P.S. I know the profile photo is really bad, I'll change that soon. Thanks ;)",
		repo: 'https://github.com/hemant-garg/hemant-garg.github.io',
		website: 'http://hemantgarg.me',
		tech: [ 'HTML5', 'CSS3', 'reactjs', 'npm', 'react-router-transition', 'react-tilt' ]
	},
	{
		name: 'Mailzy',
		image: 'mailzy.png',
		desp1:
			'The app that can be used to send mass emails to a big list of users for the purpose of collecting feedback.',
		desp2:
			'If you are running a startup or any kind of business and you want to collect some feedback from your users to expand or improve your business then this website is for you.',
		repo: 'https://github.com/hemant-garg/mailzy',
		website: 'https://mailzy.herokuapp.com/',
		tech: [
			'HTML5',
			'CSS3',
			'reactjs',
			'redux',
			'react-router',
			'redux-form',
			'nodejs',
			'google-OAuth',
			'expressjs',
			'mongoDB',
			'sendgrid',
			'passport',
			'stripe',
			'mlab',
			'mongooose',
			'npm'
		]
	},
	{
		name: 'Entrepreneurship Cell of MSIT',
		image: 'ecellmsit.png',
		desp1: 'The official website of the Entrepreneurship Cell of MSIT. ',
		desp2:
			'I’ve used MERN stack ( mongoDB, expressjs, reactjs, nodejs ) for the development of the website. Students can register themselves and their data will be stored in the database (mlab). I have also applied some SVG animations for the first time.',
		repo: 'https://github.com/hemant-garg/ecellmsit2019',
		website: 'https://www.ecellmsit.in/',
		tech: [
			'Adobe Illustrator',
			'HTML5',
			'CSS3',
			'sass',
			'reactjs',
			'react-router',
			'disqus',
			'wordpress-api',
			'nodejs',
			'expressjs',
			'mongoDB',
			'mlab',
			'mongooose',
			'npm'
		]
	},
	{
		name: 'Youtube Mini',
		image: 'youtubeMini.png',
		desp1: 'A simple React Website which shows five videos based upon the users search',
		desp2: ' I have used Youtube API for the data.',
		repo: 'https://github.com/hemant-garg/youtube-mini',
		website: 'https://youtube-mini.netlify.com/',
		tech: [ 'HTML5', 'CSS3', 'reactjs', 'redux', 'npm', 'youtube-api' ]
	},
	{
		name: 'Face Scanner',
		image: 'faceScanner.png',
		desp1:
			'This App analyzes images and returns information on age, gender, and multicultural appearance for each detected face based on facial characteristics.',
		desp2: 'API used - Clarifai ( Demographic Model )',
		repo: 'https://github.com/hemant-garg/face-scanner',
		website: 'https://face-scanner.netlify.com/',
		tech: [ 'HTML5', 'CSS3', 'reactjs', 'redux', 'npm', 'Clarifai API' ]
	}
];

export default Projects;
