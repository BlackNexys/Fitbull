import React from 'react';
import {
	Routes,
	Route
  } from "react-router-dom";
import PropTypes from 'prop-types';
import WasNotFound from './WasNotFound';

const CustomSwitch = ({ children, fallback }) => {
	return (
		<Routes>
			{ children }
			<Route element={fallback ? fallback : <WasNotFound />} />
		</Routes>
	);
};

CustomSwitch.propTypes = {
	children: PropTypes.node,
	fallback: PropTypes.elementType
};

export default CustomSwitch;
