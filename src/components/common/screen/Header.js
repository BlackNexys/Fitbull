import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(() => ({
	root: {
		'line-height': '2.5',
		'white-space': 'none'
	}
}));

const Header = ({ className, children, component = 'h1', color, ...otherprops }) => {
	const classes = useStyles();
	const Component = component;
	return (
		<Component className={classnames(className, classes.root, classes[color])} {...otherprops}>
			{ children }
		</Component>
	);
};

Header.propTypes = {
	className: PropTypes.string,
	component: PropTypes.string,
	color: PropTypes.string,
	children: PropTypes.node
};

export default Header;
