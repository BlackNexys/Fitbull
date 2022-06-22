import React from 'react';
import classnames from 'classnames';
import { createUseStyles } from 'react-jss';
import Griditem from '../layout/Griditem';
import PropTypes from 'prop-types';

const useStyles = createUseStyles(() => ({
	root: {
		'display': 'grid',
		'grid-template-columns': 'repeat(12, 1fr);',
		'grid-gap': (props) => props.gap
	}
}));

const Grid = ({ component, className, children, gap }) => {
	const props = { gap };
	const classes = useStyles(props);
	const Component = component ? component : 'div';
	const Children = Array.isArray(children) ? children : [children];

	return (
		<Component className={classnames(className, classes.root)}>
			{ Children.map((child, key) => {
				return (
					<Griditem key={key} component={child.type} {...child.props} />
				);
			}) }
		</Component>
	);
};

Grid.propTypes = {
	className: PropTypes.string,
	gap: PropTypes.string,
	component: PropTypes.oneOfType([
		PropTypes.func,
		PropTypes.string
	]),
	children: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.object
	])
};

export default Grid;
