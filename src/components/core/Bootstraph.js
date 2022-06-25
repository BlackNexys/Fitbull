import React, { Suspense } from 'react';
import { ThemeProvider } from 'react-jss';
import theme from './theme';
import PropTypes from 'prop-types';

const Bootstraph = ({ children }) => {
	return (
		<ThemeProvider theme={theme}>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
			<link href="https://fonts.googleapis.com/css2?family=Jockey+One&display=swap" rel="stylesheet" />
			<Suspense fallback='loading'>
				{children}
			</Suspense>
		</ThemeProvider>
	);
};

Bootstraph.propTypes = {
	children: PropTypes.node.isRequired
};

export default Bootstraph;
