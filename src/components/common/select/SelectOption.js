import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
	'root': {
		'display': 'flex',
		'align-items': 'center',
		'height': '36px',
		'list-style-type': 'none',
		'margin': '0px',
		'padding': '0px .5rem',
		'cursor': 'pointer',
		'&:hover, &.active': {
			'background': theme.palette.primary.light,
			'color': theme.palette.common.white
		},
		'&.active': {
			'background': theme.palette.primary.dark,
			'pointer-events': 'none'
		}
	}
}));

const SelectOption = ({ label, value, className, handler, ...otherprops }) => {
	const classes = useStyles();

	return (
		<li className={classnames(classes.root, className)} {...otherprops} onClick={() => {handler(label, value);}}>{ label }</li>
	);
};

SelectOption.propTypes = {
	value: PropTypes.string,
	label: PropTypes.string,
	className: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object
	]),
	handler: PropTypes.func
};

export default SelectOption;
