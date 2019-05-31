import React, { Component } from 'react';
import Button from '../Button/Button';
import './Projects.css';
class ProjectBox extends Component {
	state = {
		isModalOpen: false
	};

	showModal = () => {
		this.setState({
			isModalOpen: true
		});
	};

	closeModal = () => {
		this.setState({
			isModalOpen: false
		});
	};

	handleOutsideModalClick = (e) => {
		e.stopPropagation();
		let modal = document.getElementById('myModal');
		if (modal === e.target) this.closeModal();
	};

	render() {
		const { project } = this.props;
		let modalContent = (
			<div onClick={this.handleOutsideModalClick} key={project.name} id='myModal' className='modal'>
				<div className='modal-content'>
					<span onClick={this.closeModal} className='close'>
						&times;
					</span>
					<h1 className='modal-content-title'>{project.name}</h1>
					<p className='modal-content-description'>{project.desp1}</p>
					<br />
					<p className='modal-content-description'>{project.desp2}</p>
					<p className='modal-content-tech'>
						Skills that I've used: <br />
						{project.tech.map((t) => {
							return <span key={t}>{t}</span>;
						})}
					</p>
					<Button
						delay='0.3'
						onclick={() => window.open(project.repo)}
						border={'.5rem'}
						color='#006266'
						text='REPO'
						iconClass='fas fa-file-code'
					/>
					<Button
						delay='0.6'
						onclick={() => window.open(project.website)}
						border={'.5rem'}
						color='#2980b9'
						text='LIVE'
						iconClass='fas fa-desktop'
					/>
				</div>
			</div>
		);
		return (
			<div onClick={this.showModal} className='projectBox'>
				<h1 className='projectBox-name'>{project.name}</h1>
				<i className='far fa-eye eyeIcon' onClick={() => window.open(project.website)} />
				<div className='projectBox-overlay' />
				<button className='projectBox-moreBtn'>MORE</button>
				<img src={require(`./${project.image}`)} />
				{this.state.isModalOpen && modalContent}
			</div>
		);
	}
}

export default ProjectBox;
