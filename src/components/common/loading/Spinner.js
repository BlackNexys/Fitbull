import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
	root: {
		'fill': 'none',
		'stroke': theme.palette.secondary.main,
		'stroke-dasharray': '25',
		'stroke-dashoffset': '100',
		'stroke-linecap': 'round',
		'stroke-width': '2',
		'animation': '$dash .5s linear forwards',
		'animation-iteration-count': 'infinite',
		'margin': '0 auto',
		'padding': '1rem .5rem',
		'display': 'block'
	},
	'@keyframes dash': {
		to: {
			'stroke-dashoffset': 50
		}
	},
	size: {
		'height': '4rem'
	}
}));

const Spinner = ({ className, size, ...otherProps }) => {
	const classes = useStyles(size);
	return (
		<svg className={classNames(className, classes.size, classes.root)} viewBox='10 10 20 20' {...otherProps}>
			<circle cx='20' cy='20' r='8' />
		</svg>
	);
};

Spinner.propTypes = {
	className: PropTypes.string,
	size: PropTypes.number
};

export default Spinner;
