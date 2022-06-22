import React from 'react';
import { Link } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Button from '../common/button/Button';

const useStyles = createUseStyles((theme) => ({
	root: {
		'height': '46px',
		'display': 'flex',
		'align-items': 'center',
		'padding': '0 .5rem',
		'background': theme.palette.primary.dark,
		'color': theme.palette.common.white,
		'max-width': '100%',
		'border-bottom': '1px solid ' + theme.palette.primary.dark,
		'box-shadow': '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
	},
	logo: {
		'max-width': '100%',
		'display': 'flex',
		'align-items': 'center',
		'color': theme.palette.common.white
	},
	account: {
		'margin-left': 'auto'
	},
	[theme.breakpoints.below('sm')]: {
		account: {
			'display': 'none'
		},
		logo: {
			'max-width': '225px'
		}
	}
}));

const Header = ({ className }) => {
	const classes = useStyles();

	return (
		<div className={classnames(classes.root, className)}>
			<Link className={classes.logo} to='/'>
			</Link>
			<div className={classes.account}>
				<Button component={Link} to='/account' value='Login' variant='outlined' color='secondary' />
			</div>
		</div>
	);
};

Header.propTypes = {
	className: PropTypes.string
};

export default Header;
