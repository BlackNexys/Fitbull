import React, {useState} from 'react';
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
		'padding': '4rem 0',
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
			'width': '100vw',
			'overflow': 'hidden',
			'transition': 'all 0.145s cubic-bezier(0.17, 0.67, 1, 1.23)',
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
		'z-index': '101'
	}
}));

const Sidemenu = ({ className }) => {
	const classes = useStyles();
	const [open, setOpen] = useState(false);
	return (
		<div className={classnames(classes.wrapper, className)}>
			<div className={classnames(classes.root, {'open': open})}>
				<div className={classes.menuRail}>
					{ SidemenuContent.map((item, key) => {
						return (<SidemenuItem className={classes.item} key={key} onClick={() => setOpen(false)}{...item} />);
					}) }
				</div>
			</div>
			
			<Button className={classes.toggleBtn} variant="contained" color="primary" onClick={() => setOpen(!open)} value={<Icon><IconMenu /></Icon>} />
		</div>
	);
};

Sidemenu.propTypes = {
	className: PropTypes.string
};

export default Sidemenu;
