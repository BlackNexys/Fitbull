import React, { Suspense } from 'react';
import { ThemeProvider } from 'react-jss';
import theme from './theme';
import PropTypes from 'prop-types';

const Bootstraph = ({ children }) => {
	return (
		<ThemeProvider theme={theme}>
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
