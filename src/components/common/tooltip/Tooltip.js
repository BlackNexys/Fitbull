import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
	root: {
		'position': 'relative',
		'display': 'flex',
		'justify-content': 'center',
		'align-items': 'center',
		'cursor': 'pointer',
		'&:hover $tooltip': {
			'bottom': '32px',
			'opacity': '1'
		}
	},
	tooltip: {
		'display': 'flex',
		'align-items': 'center',
		'min-height': '36px',
		'position': 'absolute',
		'padding': '4px 8px',
		'font-size': '12px',
		'border-radius': theme.getBorderRadius,
		'transition': 'all .225s cubic-bezier(.25,.8,.25,1)',
		'background': theme.palette.common.dark.main,
		'color': theme.palette.common.white,
		'bottom': '16px',
		'opacity': '0'
	}
}));

const Tooltip = ({ text, children, className }) => {
	const classes = useStyles();
	return (
		<div className={classnames(classes.root, className)}>
			<div className={classes.tooltip}>{ text }</div>
			{ children }
		</div>
	);
};

Tooltip.propTypes = {
	text: PropTypes.string,
	className: PropTypes.string,
	children: PropTypes.node
};

export default Tooltip;
