import React from 'react';
import classnames from 'classnames';
import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';

const useStyles = createUseStyles(() => ({
	root: {
		'display': 'flex',
		'justify-content': (props) => props.justify,
		'align-items': (props) => props.align,
		'flex-direction': (props) => props.direction,
		'flex-wrap': (props) => props.wrap,
		'border': '2px solid darkblue'
	}
}));

const Flex = ({ className, justify = 'flex-start', align = 'flex-start', direction = 'row', wrap = 'nowrap', children }) => {
	const props = { justify: justify, align: align, direction: direction, wrap: wrap };
	const classes = useStyles(props);
	return (
		<div className={classnames(className, classes.root)}>
			{ children }
		</div>
	);
};

Flex.propTypes = {
	className: PropTypes.string,
	justify: PropTypes.string,
	align: PropTypes.string,
	direction: PropTypes.string,
	wrap: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.object,
		PropTypes.string
	])
};

export default Flex;
