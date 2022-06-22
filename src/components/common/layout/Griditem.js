import React from 'react';
import classnames from 'classnames';
import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';

const useStyles = createUseStyles((theme) => ({
	root: {
		'grid-row': (props) => props.row,
		'grid-column': (props) => props.column,
		'grid-area': (props) => props.area
	},
	[theme.breakpoints.below('md')]: {
		root: {
			'grid-row': (props) => props.mobileRow,
			'grid-column': (props) => props.mobileColumn
		}
	}
}));

const Griditem = ({ component, row, column, mobileRow, mobileColumn, area, className, children }) => {
	const props = { row, column, mobileRow, mobileColumn, area };
	const classes = useStyles(props);
	const Component = component ? component : 'div';

	return (
		<Component className={classnames(className, classes.root)}>
			{ children }
		</Component>
	);
};

Griditem.propTypes = {
	className: PropTypes.string,
	row: PropTypes.string,
	column: PropTypes.string,
	mobileRow: PropTypes.string,
	mobileColumn: PropTypes.string,
	area: PropTypes.string,
	component: PropTypes.oneOfType([
		PropTypes.func,
		PropTypes.string
	]),
	children: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.object,
		PropTypes.string
	])
};

export default Griditem;
