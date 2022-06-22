import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import Header from 'common/screen/Header';

const useStyles = createUseStyles(() => ({
	root: {
		'width': '100%',
		'max-width': (props) => props.size
	}
}));

const Screen = ({ className, size, children, title, component = 'article', ...otherProps }) => {
	const props = {};

	switch (size) {
		case 'xs':
			props.size = '468px';
			break;
		case 'sm':
			props.size = '600px';
			break;
		case 'md':
			props.size = '960px';
			break;
		case 'lg':
			props.size = '1280px';
			break;
		case 'xl':
			props.size = '1600px';
			break;
		default:
			props.size = '1600px';
	}

	const classes = useStyles(props);
	const Component = component;
	return (
		<Component className={classnames(className, classes.root)} {...otherProps}>
			{ title && <Header>{ title }</Header> }
			{ children }
		</Component>
	);
};

Screen.propTypes = {
	className: PropTypes.string,
	size: PropTypes.string,
	title: PropTypes.string,
	children: PropTypes.node,
	component: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.func
	])
};

export default Screen;
