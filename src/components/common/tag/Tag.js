import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
	'root': {
		'display': 'flex',
		'align-items': 'center',
		'justify-content': (props) => props.align,
		'font-weight': '600',
		'border-radius': '3px',
		'transition': 'all .225s cubic-bezier(0.1, 0.7, 1.0, 0.1)',
		'padding': '0rem .5rem',
		'box-shadow': '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
		'height': '40px'
	},
	'primarycontained': {
		'background': theme.palette.primary.main,
		'color': theme.palette.common.white
	},
	'secondarycontained': {
		'background': theme.palette.secondary.main,
		'color': theme.palette.secondary.contrasttext
	},
	'commoncontained': {
		'background': theme.palette.common.dark.main,
		'color': theme.palette.common.dark.contrasttext
	},
	'primaryoutlined': {
		'color': theme.palette.primary.main,
		'border': `1px solid ${theme.palette.primary.main}`
	},
	'secondaryoutlined': {
		'color': theme.palette.secondary.main,
		'border': `1px solid ${theme.palette.secondary.main}`
	},
	'commonoutlined': {
		'color': theme.palette.common.dark.main,
		'border': `1px solid ${theme.palette.common.dark.main}`
	}
}));

const Tag = ({ title, children, className, onClick, color = 'primary', variant = 'contained', align = 'center', ...props }) => {
	const classes = useStyles({ align });
	const Component = onClick ? 'button' : 'div';
	return (
		<Component onClick={onClick} className={classnames(classes.root, classes[(color + variant)], className)} {...props}>
			{ title ? title : children }
		</Component>
	);
};

Tag.propTypes = {
	title: PropTypes.string,
	children: PropTypes.node,
	className: PropTypes.string,
	color: PropTypes.string,
	variant: PropTypes.string,
	onClick: PropTypes.func
};

export default Tag;
