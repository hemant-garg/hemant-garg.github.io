import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Home from './Home/Home';
import Projects from './Projects/Projects';
import Page from './Page';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Route
					render={({ location }) => (
						<TransitionGroup>
							<CSSTransition
								key={location.pathname}
								classNames='page'
								timeout={{
									enter: 1000,
									exit: 1000
								}}
							>
								<Route
									location={location}
									render={() => (
										<Switch>
											<Route
												exact
												path='/'
												render={() => (
													<Page>
														<Home />
													</Page>
												)}
											/>

											<Route
												exact
												path='/projects'
												render={() => (
													<Page>
														<Projects />
													</Page>
												)}
											/>
										</Switch>
									)}
								/>
							</CSSTransition>
						</TransitionGroup>
					)}
				/>
			</BrowserRouter>
		);
	}
}

export default App;

// <Link className="header-link" to="/"><span>&lt;</span> H<span>G</span> <i className="fas fa-guitar"></i>&gt;</Link>
