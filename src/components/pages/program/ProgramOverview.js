import React from 'react';
import classnames from 'classnames';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
    root: {}
}));

const ProgramOverview = ({ className }) => {
	const classes = useStyles();
	return (
		<div className={classnames(classes.root, className)}>
			Overview
		</div>
	);
};

export default ProgramOverview;
