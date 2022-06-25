import React from 'react';
import classnames from 'classnames';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
    root: {}
}));

const Profile = ({ className }) => {
	const classes = useStyles();
	return (
		<div className={classnames(classes.root, className)}>
			Profile Bitch
		</div>
	);
};

export default Profile;
