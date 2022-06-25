import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Sidemenu from '../sidemenu/Sidemenu';
import AppRoutes from './AppRoutes';
import Switch from '../common/routing/Switch';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
	root: {
		'display': 'grid',
		'grid-template-columns': 'auto 1fr',
		'grid-template-rows': 'auto 1fr',
		'grid-template-areas': '"header header""sidebar main"',
		'min-height': '100vh'
	},
	[theme.breakpoints.below('sm')]: {
		'root': {
			'grid-template-areas': '"header header""sidebar main"'
		}
	},
	header: {
		'grid-area': 'header'
	},
	sidebar: {
		'grid-area': 'sidebar'
	},
	main: {
		'grid-area': 'main',
		'padding': '1rem .5rem 3rem',
		'display': 'flex',
		'justify-content': 'center'
	}
}));

const Layout = () => {
	const classes = useStyles();
	return (
		<Router>
			<div className={classes.root}>
				<Sidemenu className={classes.sidebar} />
				<main className={classes.main}>
					<Switch>
						{ AppRoutes.map((props, key) =>
							<Route key={key} {...props} />
						) }
					</Switch>
				</main>
			</div>
		</Router>
	);
};

export default Layout;
