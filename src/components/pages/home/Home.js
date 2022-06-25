import React from 'react';
import classnames from 'classnames';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
    root: {}
}));

const Home = ({ className }) => {
	const classes = useStyles();
	return (
		<div className={classnames(classes.root, className)}>
			Hello Bitches
		</div>
	);
};

export default Home;
