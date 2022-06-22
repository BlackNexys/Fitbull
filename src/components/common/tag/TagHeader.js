import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
	'root': {
		'display': 'flex',
		'align-items': 'center',
		'justify-content': 'center',
		'font-weight': '600',
		'transition': 'all .225s cubic-bezier(0.1, 0.7, 1.0, 0.1)',
		'padding': '0rem .5rem',
		'height': '40px',
		'border-bottom': '2px solid ' + theme.palette.primary.dark
	},
	header: {
		'margin': '0px'
	}
}));

const TagHeader = ({ children, component = 'h3', className, ...otherProps }) => {
	const classes = useStyles();
	const Component = component;
	return (
		<div className={classnames(classes.root, className)} {...otherProps}>
			<Component className={classes.header}>{ children }</Component>
		</div>
	);
};

TagHeader.propTypes = {
	title: PropTypes.string,
	children: PropTypes.node,
	color: PropTypes.string,
	component: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.func
	])
};

export default TagHeader;
