import Bootstraph from './src/components/core/Bootstraph';
import Layout from './src/components/core/Layout';
import { createUseStyles } from 'react-jss';

export default function App() {
  const classes = useStyles();
  return (
    <Bootstraph className={classes.container}>
      <Layout />
    </Bootstraph>
  );
}

const useStyles = createUseStyles({
  '@global': {
		'p, h1, h2, h3, h4, h5': {
			'margin': '0px'
		},
		'h1, h2, h3, h4, h5': {
			'font-family': 'Merriweather'
		},
		a: {
			'text-decoration': 'none'
		},
		'body': {
			'background': '#1f1f1f',
			'color': '#FFFFFF',
			'min-height': '100vh',
			'margin': '0px',
			'font-family': "'Jockey One', sans-serif"
		}
	}
});
