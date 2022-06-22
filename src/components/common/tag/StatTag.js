import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
	root: {
		'display': 'flex',
		'flex-direction': 'column',
		'align-items': 'center',
		'font-size': '16px',
		'font-weight': '500',
		'justify-content': 'center',
		'position': 'relative',
		'height': '190px'
	},
	content: {
		'font-weight': '600',
		'font-size': '24px',
		'font-family': 'Merriweather'
	},
	diamond: {
		'mask': 'url("data:image/svg+xml,%3C%3Fxml version=\'1.0\' encoding=\'UTF-8\'%3F%3E%3Csvg width=\'180\' height=\'180\' version=\'1.1\' viewBox=\'0 0 8.4667 8.4667\' xmlns=\'http://www.w3.org/2000/svg\' xmlns:cc=\'http://creativecommons.org/ns%23\' xmlns:dc=\'http://purl.org/dc/elements/1.1/\' xmlns:rdf=\'http://www.w3.org/1999/02/22-rdf-syntax-ns%23\'%3E%3Cpath d=\'m4.2393 0.31651-3.3591 3.9142 3.3591 3.9508 3.3326-3.9264z\' fill=\'none\' stroke=\'%23000\' stroke-width=\'.28445px\'/%3E%3C/svg%3E%0A")',
		'background': 'linear-gradient(0deg, #3300cc, #0088cc)',
		'background-size': '400% 400%',
		'animation': '$AnimationName 5s ease infinite',
		'width': '180px',
		'height': '180px',
		'bottom': '0px',
		'position': 'absolute'
	},
	'@keyframes AnimationName': {
		'0%': {
			'background-position': '50% 0%'
		},
		'50%': {
			'background-position': '50% 100%'
		},
		'100%': {
			'background-position': '50% 0%'
		}
	}
}));

const StatTag = ({ name, icon, content, className }) => {
	const classes = useStyles();
	const Icon = icon;
	return (
		<div className={classnames(className, classes.root)}>
			{ name && <div>{ name }</div> }
			{ icon || content && <div className={classes.content}>
				{ icon ? <Icon height='1em' width='1em' /> : content }
			</div> }
			<div className={classes.diamond} />
		</div>
	);
};

StatTag.propTypes = {
	className: PropTypes.string,
	icon: PropTypes.func,
	content: PropTypes.string,
	name: PropTypes.string
};

export default StatTag;
