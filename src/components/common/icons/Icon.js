const Icon = ({ height = '1em', width = '1em', color = 'currentColor', viewBox = "0 0 24 24", children}) => {
	return (
        <svg height={height} width={width} viewBox={viewBox} fill={color}>
            {children}
        </svg>
	);
};

export default Icon;