import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { createUseStyles } from 'react-jss';
import Error from '../svgs/error.svg';
import Tooltip from '../tooltip/Tooltip';

const useStyles = createUseStyles((theme) => ({
	root: {
		'display': 'flex',
		'flex-direction': 'column'
	},
	input: {
		'background': theme.palette.common.white,
		'padding': '0px .5rem',
		'border': '2px solid ' + theme.palette.common.dark.main,
		'border-radius': theme.getBorderRadius,
		'font-size': '14px',
		'height': '36px',
		'outline': 'transparent',
		'transition': 'all .225s cubic-bezier(.25,.8,.25,1)',
		'&:focus': {
			'border': '2px solid ' + theme.palette.primary.main
		},
		'&:hover': {
			'border': '2px solid ' + theme.palette.primary.light
		}
	},
	inputrail: {
		'display': 'flex',
		'flex-direction': 'column',
		'justify-content': 'center',
		'position': 'relative'
	},
	label: {
		'line-height': '1.5'
	},
	helper: {
		'font-size': '12px',
		'padding': '.255rem 0rem',
		'&::before': {
			'content': '"-"',
			'padding': '0rem .5rem'
		}
	},
	error: {
		'position': 'absolute',
		'right': '0',
		'width': '36px',
		'height': '36px',
		'font-size': '24px',
		'color': theme.palette.error.main
	},
	required: {
		'color': theme.palette.error.main
	}
}));

const Input = ({ name, label, helper, error, required, className, ...otherprops }) => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			{ label && <label className={classes.label} htmlFor={name}>
				{ label }
				{ required && <span className={classes.required}>*</span> }
			</label> }
			<div className={classes.inputrail}>
				<input name={name} alt={label} className={classnames(classes.input, className)} required={required} {...otherprops} />
				{ error && <Tooltip className={classes.error} text={error}>
					<Error />
				</Tooltip> }
			</div>
			{ helper && <span className={classes.helper}>{ helper }</span> }
		</div>
	);
};

Input.propTypes = {
	name: PropTypes.string,
	label: PropTypes.string,
	helper: PropTypes.string,
	error: PropTypes.string,
	required: PropTypes.bool,
	className: PropTypes.string
};

export default Input;
