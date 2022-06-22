import { createUseStyles } from 'react-jss';
import classnames from 'classnames';

const useStyles = createUseStyles((theme) => ({
	'root': {
		'display': 'flex',
		'align-items': 'center',
		'height': '38px',
		'padding': '0px 8px',
		'border': '1px solid transparent',
		'border-radius': theme.getBorderRadius,
		'outline': 'transparent',
		'cursor': 'pointer',
		'background': 'transparent',
  		'transition': 'all .225s cubic-bezier(.25,.8,.25,1)',
		'overflow': 'hidden',
		'font-size': '14px'
	},
	'value': {
		'display': 'flex',
		'align-items': 'center',
	},
	'icon': {
		'font-size': '18px'
	},
	'iconcontainedprimary': {
		'color': theme.palette.primary.dark
	},
	'iconcontainedsecondary': {
		'color': theme.palette.secondary.dark
	},
	'iconcontainedcommon': {
		'color': theme.palette.common.dark.main
	},
	'valuedisplacement': {
		'margin-left': '4px'
	},
	'primarycontained': {
		'background': theme.palette.primary.main,
		'color': theme.palette.common.white,
		'&:hover': {
			'background': theme.palette.primary.light
		}
	},
	'secondarycontained': {
		'background': theme.palette.secondary.main,
		'color': theme.palette.common.white,
		'&:hover': {
			'background': theme.palette.secondary.light
		}
	},
	'commoncontained': {
		'background': theme.palette.common.dark.main,
		'color': theme.palette.common.white,
		'&:hover': {
			'background': theme.palette.common.dark.light
		}
	},
	'primaryoutlined': {
		'color': theme.palette.primary.main,
		'border': `1px solid ${theme.palette.primary.main}`,
		'&:hover': {
			'color': theme.palette.primary.light,
			'border': `1px solid ${theme.palette.primary.light}`
		}
	},
	'secondaryoutlined': {
		'color': theme.palette.secondary.main,
		'border': `1px solid ${theme.palette.secondary.main}`,
		'&:hover': {
			'color': theme.palette.secondary.dark,
			'border': `1px solid ${theme.palette.secondary.dark}`
		}
	},
	'commonoutlined': {
		'color': theme.palette.common.dark.main,
		'border': `1px solid ${theme.palette.common.dark.main}`,
		'&:hover': {
			'color': theme.palette.common.dark.light,
			'border': `1px solid ${theme.palette.common.dark.light}`
		}
	}
}));

const Button = ({ className, variant = 'contained', color = 'primary', value, icon, component = 'button', ...props }) => {
	const classes = useStyles();
	const type = (color + variant).toLowerCase();
	const Icon = icon;
	const displacement = Icon ? classes.valuedisplacement : null;
	const Component = component;

	return (
		<Component className={classnames(classes.root, classes[variant], classes[type], className)} {...props}>
			{ Icon && <Icon className={classes.icon} /> }
			<span className={classnames(displacement, classes.value)}>{ value }</span>
		</Component>
	);
};

export default Button;
