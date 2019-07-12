import React from 'react';
import classNames from 'classnames';
import { withRouter } from 'react-router-dom';

function Page({ children, color, background, location: { state } }) {
	const cx = classNames({
		page: true,
		'page--prev': state && state.prev
	});
	return (
		<section
			className={cx}
			style={{
				color,
				background
			}}
		>
			{children}
		</section>
	);
}

export default withRouter(Page);
