import React from 'react';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const useStyles = createUseStyles((theme) => ({
	root: {
		'display': 'grid',
		'align-items': 'center',
		'color': theme.palette.common.white,
		'height': '46px',
		'padding': '0px 2rem 0px 1rem',
		'grid-template-columns': '46px 1fr',
		'background': theme.palette.primary.dark,
		'transition': 'all 0.255s ease',
		'&:hover': {
			'background': theme.palette.primary.dark,
			'& $icon': {
				'color': theme.palette.secondary.main
			}
		}
	},
	icon: {
		'justify-self': 'center',
		'font-size': '24px'
	},
	text: {
		'overflow': 'hidden',
		'white-space': 'nowrap',
		'font-size': '2rem',
		'transition': 'all 0.255s ease'
	}
}));

const SidemenuItem = ({ className, icon, title, ...otherProps }) => {
	const classes = useStyles();
	const Icon = icon;
	return (
		<Link className={classnames(classes.root, className)} {...otherProps}>
			{ Icon ? <Icon className={classes.icon} /> : <span /> }
			<div className={classes.text}>{ title }</div>
		</Link>
	);
};

SidemenuItem.propTypes = {
	className: PropTypes.string,
	icon: PropTypes.func,
	title: PropTypes.string
};

export default SidemenuItem;
