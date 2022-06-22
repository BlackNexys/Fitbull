import React from 'react';
import PropTypes from 'prop-types';
import { ResponsiveContainer, PieChart, Pie } from 'recharts';

const ChartsPie = ({ data, ...otherProps }) => {
	// const [setColor: first.color] = data;
	// console.log(data);
	return (
		<ResponsiveContainer {...otherProps}>
			<PieChart>
	          <Pie data={data} dataKey='value' fill='currentColor' />
	        </PieChart>
		</ResponsiveContainer>
	);
};

ChartsPie.propTypes = {
	data: PropTypes.array
};

export default ChartsPie;
