import Color from 'color';

/*
	Colors are generated via this method:
	A pure hue is chosen in HSL ("hue", 100%, 50%)
	Primary: 255,
	Secondary: 200,
	Error: 345

	The pure color is used for light.
	For main it is ("hue", 100%, 35%)
	For dark it is ("hue", 45%, 20%)
*/
const mediabp = {
	xs: {
		from: '0px',
		to: '600px'
	},
	sm: {
		from: '600px',
		to: '960px'
	},
	md: {
		from: '960px',
		to: '1280px'
	},
	lg: {
		from: '1280px',
		to: '1920px'
	},
	xl: {
		from: '1920px',
		to: '90000px'
	}
};

const theme = {
	palette: {
		primary: {
			main: '#FFD700',
			dark: '#807226',
			light: '#FFE44D'
		},
		secondary: {
			main: '#D3D3D3',
			dark: '#545454',
			light: '#E0E0E0'
		},
		error: {
			main: '#cc0033',
			dark: '#4a1c28',
			light: '#ff0040'
		},
		common: {
			dark: {
				main: '#08191a',
				dark: Color('#08191a').darken('0.25').hex(),
				light: Color('#08191a').lighten('0.25').hex()
			},
			light: {
				main: '#a5b7b8',
				dark: Color('#a5b7b8').darken('0.25').hex(),
				light: Color('#a5b7b8').lighten('0.25').hex()
			},
			white: '#f1f1f1',
			black: '#1f1f1f'
		},
		contrastColor: (color) => {
			return Color(color).isDark() ? '#f1f1f1' : '#1f1f1f';
		}
	},
	typography: {
		fontSize: 14,
		fontFamily: "'Ubuntu', sans-serif"
	},
	getBorderRadius: '3px',
	opacity: (color, amount) => {
		return Color(color).alpha(amount).hsl().string();
	},
	breakpoints: {
		'below': (bp) => {
			return '@media (max-width: ' + mediabp[bp].to + ')';
		},
		'above': (bp) => {
			return '@media (min-width: ' + mediabp[bp].from + ')';
		},
		'range': (bp) => {
			return '@media (min-width: ' + mediabp[bp].from + ') and (max-width: ' + mediabp[bp].to + ')';
		}
	}
};

export default theme;
