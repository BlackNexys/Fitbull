import React from 'react';
import { createUseStyles } from 'react-jss';
import Button from 'common/button/Button';

const useStyles = createUseStyles(() => ({
	root: {
		'position': 'absolute',
		'left': '0',
		'right': '0',
		'bottom': '0',
		'top': '0',
		'transition': 'all 0.255s ease',
		'opacity': '0',
		'display': 'flex',
		'flex-direction': 'column',
		'justify-content': 'flex-end',
		'padding': '1rem',
		'&:hover': {
			'opacity': '1'
		}
	},
	input: {
		'display': 'none'
	},
	form: {
		'display': 'grid',
		'grid-gap': '1rem'
	},
	icon: {
		'margin-right': '.5rem'
	}
}));

const ImageUpload = () => {
	const classes = useStyles();
	const handleSubmit = (e) => {
		console.log('sent');
	};
	return (
		<div className={classes.root}>
			<form className={classes.form} action='/api/sheet/image' onSubmit={(e) => handleSubmit(e)}>
				<input className={classes.input} id='image' type='file' name='file' />
				<Button component='label' htmlFor='image' value={'Choose image to upload'} />
				<Button color='primary' variant='outlined' type='submit' value={'Upload'} />
			</form>
		</div>
	);
};

export default ImageUpload;
