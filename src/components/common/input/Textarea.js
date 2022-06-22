import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(() => ({
	root: {

	}
}));

const Textarea = ({ name, type, className, ...otherprops }) => {
	const classes = useStyles();
	return (
		<textarea type={type} name={name} alt={name} className={classnames(classes.root, className)} {...otherprops} />
	);
};

Textarea.propTypes = {
	type: PropTypes.string,
	name: PropTypes.string,
	className: PropTypes.string
};

export default Textarea;
