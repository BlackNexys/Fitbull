import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { createUseStyles } from 'react-jss';
import ChevronDown from '../svgs/ChevronDown.svg';
import SelectOption from './SelectOption';

const useStyles = createUseStyles((theme) => ({
	label: {
		'line-height': '1.5'
	},
	required: {
		'color': theme.palette.error.main
	},
	helper: {
		'font-size': '12px',
		'padding': '.255rem 0rem',
		'&::before': {
			'content': '"-"',
			'padding': '0rem .5rem'
		}
	},
	inputrail: {
		'position': 'relative'
	},
	input: {
		'background': theme.palette.common.white,
		'padding': '0px  36px 0px .5rem',
		'border': '2px solid ' + theme.palette.common.dark.main,
		'border-radius': theme.getBorderRadius,
		'font-size': '14px',
		'height': '36px',
		'min-width': '100px',
		'outline': 'transparent',
		'cursor': 'pointer',
		'transition': 'all .225s cubic-bezier(.25,.8,.25,1)',
		'display': 'flex',
		'flex-direction': 'column',
		'justify-content': 'center',
		'position': 'relative',
		'&.active': {
			'border-radius': '3px 3px 0px 0px'
		},
		'&:hover, &.active': {
			'border': '2px solid ' + theme.palette.primary.main,
			'& $icon': {
				'color': theme.palette.primary.light
			}
		},
		'& *': {
			'pointer-events': 'none'
		}
	},
	icon: {
		'position': 'absolute',
		'display': 'flex',
		'justify-content': 'center',
		'align-items': 'center',
		'right': '0',
		'width': '36px',
		'height': '36px',
		'font-size': '24px'
	},
	optionsWrapper: {
		'position': 'absolute',
		'margin': '0px',
		'padding': '0px',
		'top': '40px',
		'left': '0',
		'right': '0',
		'z-index': '10',
		'font-size': '14px',
		'transition': 'all .225s cubic-bezier(.25,.8,.25,1)',
		'border': '2px solid ' + theme.palette.primary.main,
		'border-top': '0px',
		'border-radius': '0px 0px 3px 3px',
		'background': theme.palette.common.white,
		'&.closed': {
			'max-height': '0px',
			'opacity': '0',
			'pointer-events': 'none'
		}
	}
}));

const Select = ({ name, label, helper, required, handler, value = '', options = [], title, className, inputClassName, ...otherprops }) => {
	const classes = useStyles();
	let [state, setState] = useState(value);
	const [Labelstate, setLabelState] = useState(options.filter((item) => {return item.value === value;})[0].label);
	const [open, setOpen] = useState(false);
	const valueRef = useRef();
	const optionsRef = useRef();
	let height = '0px';

	if (handler) {
		[state, setState] = [value, handler];
	}

	const handleChange = (inputlabel, inputValue) => {
		setState(inputValue);
		setLabelState(inputlabel);
	};

	if (optionsRef.current) {
		height = optionsRef.current.scrollHeight + 'px';
	}

	if (open) {
		window.addEventListener('mouseup', (event) => {
			if (event.target !== valueRef.current) {
				setOpen(false);
			}
		});
	}

	return (
		<div className={className}>
			{ label && <label className={classes.label} htmlFor={name}>
				{ label }
				{ required && <span className={classes.required}>*</span> }
			</label> }
			<input type='hidden' value={state} name={name} {...otherprops} />
			<div className={classes.inputrail}>
				<div ref={valueRef} onClick={() => setOpen(true)} className={classnames(classes.input, inputClassName, { 'active': open })}>
					<span className={classes.value}>{ title ? title : Labelstate }</span>
					<div className={classes.icon}><ChevronDown /></div>
				</div>
				<ul ref={optionsRef} className={classnames(classes.optionsWrapper, { 'closed': !open })} styles={{ 'max-height': height }}>
					{ options.map((option, key) => {
						const active = state === option.value;
						return (<SelectOption key={key} handler={handleChange} className={{ 'active': active }} {...option} />);
					}) }
				</ul>
			</div>
			{ helper && <div className={classes.helper}>{ helper }</div> }
		</div>
	);
};

Select.propTypes = {
	name: PropTypes.string,
	label: PropTypes.string,
	title: PropTypes.string,
	helper: PropTypes.string,
	startValue: PropTypes.string,
	handler: PropTypes.func,
	error: PropTypes.string,
	options: PropTypes.array,
	required: PropTypes.bool,
	inputClassName: PropTypes.string,
	className: PropTypes.string
};

export default Select;
