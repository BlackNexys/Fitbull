import React from 'react';
import { Routes as RouterSwitch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import WasNotFound from './WasNotFound';

const Switch = ({ children, fallback }) => {
	return (
		<RouterSwitch>
			{ children }
			<Route component={fallback ? fallback : WasNotFound} />
		</RouterSwitch>
	);
};

Switch.propTypes = {
	children: PropTypes.node,
	fallback: PropTypes.elementType
};

export default Switch;
