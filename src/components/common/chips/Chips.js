import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { createUseStyles } from 'react-jss';
import Close from 'common/svgs/Close.svg';

const useStyles = createUseStyles((theme) => ({
	'root': {
		'padding': '0px  36px 0px .5rem',
		'border': '2px solid ' + theme.palette.secondary.main,
		'color': theme.palette.secondary.main,
		'border-radius': theme.getBorderRadius,
		'font-size': '14px',
		'height': '36px',
		'outline': 'transparent',
		'cursor': 'pointer',
		'transition': 'all .225s cubic-bezier(.25,.8,.25,1)',
		'display': 'flex',
		'flex-direction': 'column',
		'justify-content': 'center',
		'position': 'relative',
		'&:hover': {
			'border': '2px solid ' + theme.palette.secondary.main,
			'& $icon': {
				'color': theme.palette.secondary.light
			}
		},
		'& *': {
			'pointer-events': 'none'
		}
	},
	icon: {
		'position': 'absolute',
		'display': 'flex',
		'justify-content': 'center',
		'align-items': 'center',
		'right': '0',
		'width': '36px',
		'height': '36px',
		'font-size': '24px'
	}
}));

const Chips = ({ startValue, value, handler, options, className, ...otherprops }) => {
	// eslint-disable-next-line prefer-destructuring
	const { label } = options.filter((item) => {return item.value === value;})[0];
	const classes = useStyles();

	if (startValue === value) {
		return null;
	}

	return (
		<div className={classnames(classes.root, className)} onClick={() => {handler(startValue);}} {...otherprops}>
			{ label }
			<div className={classes.icon}><Close /></div>
		</div>
	);
};

Chips.propTypes = {
	value: PropTypes.string,
	startValue: PropTypes.string,
	className: PropTypes.string,
	options: PropTypes.array,
	handler: PropTypes.func
};

export default Chips;
