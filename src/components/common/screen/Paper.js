import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
	root: {
		'background': 'url("/assets/parchment-texture-black.jpg")',
		'position': 'relative',
		'overflow': 'hidden',
		'padding': '.5rem',
		'color': theme.palette.common.white,
		'border-radius': theme.getBorderRadius
	}
}));

const Paper = ({ className, children, ...otherProps }) => {
	const classes = useStyles();
	return (
		<div className={classnames(classes.root, className)} {...otherProps}>
			{ children }
		</div>
	);
};

Paper.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node
};

export default Paper;
