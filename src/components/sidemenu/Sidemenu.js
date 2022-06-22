import React from 'react';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import SidemenuContent from './SidemenuContent';
import SidemenuItem from './SidemenuItem';
import Button from '../common/button/Button';
import Icon from '../common/icons/Icon';
import IconMenu from '../common/icons/IconMenu';

const useStyles = createUseStyles((theme) => ({
	root: {
		'display': 'flex',
		'flex-direction': 'column',
		'background': theme.palette.primary.dark,
		'color': theme.palette.common.white,
		'max-width': '100vw',
		'box-shadow': '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
		'border-right': '1px solid ' + theme.palette.primary.dark,
		'height': '100%'
	},
	[theme.breakpoints.below('sm')]: {
		root: {
			'position': 'absolute',
			'top': '0px',
			'bottom': '0px',
			'z-index': '100',
			'&:not(.open)': {
				'max-width': '0px',
				'opacity': '0'
			}
		}
	},
	wrapper: {
		height: '100%',
	},
	menuRail: {
		'position': 'sticky',
		'top': 0
	},
	toggleBtn: {
		'position': 'absolute',
		'bottom': '2rem',
		'right': '2rem',
		'font-size': '2rem',
		'height': '3rem',
		'width': '3rem',
	}
}));

const Sidemenu = ({ className }) => {
	const classes = useStyles();
	return (
		<div className={classnames(classes.wrapper, className)}>
			<div className={classnames(classes.root)}>
				<div className={classes.menuRail}>
					{ SidemenuContent.map((item, key) => {
						return (<SidemenuItem className={classes.item} key={key} {...item} />);
					}) }
				</div>
			</div>
			
			<Button className={classes.toggleBtn} variant="contained" color="common" value={<Icon><IconMenu /></Icon>} />
		</div>
	);
};

Sidemenu.propTypes = {
	className: PropTypes.string
};

export default Sidemenu;
