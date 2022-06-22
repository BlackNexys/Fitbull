import React, { useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { EditorState, convertToRaw, ContentState, convertFromHTML } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
	root: {
		'color': theme.palette.secondary.light,
		'position': 'relative',
		'display': 'flex',
		'flex-direction': 'column'
	},
	toolbar: {
		'display': 'flex',
		'padding': '.5rem .225rem',
		'border-radius': '3px',
		'background': theme.palette.common.black,
		'margin-bottom': '.5rem',
		'flex-wrap': 'wrap',
		'font-weight': '600',
		'&> div': {
			'display': 'flex',
			'align-items': 'center',
			'margin': '.225rem .5rem',
			'&> div': {
				'display': 'flex',
				'margin': '0 .225rem',
				'&:first-child': {
					'margin-left': '0px'
				},
				'&:last-child': {
					'margin-right': '0px'
				}
			}
		}
	},
	wrapper: {
		'flex': 1,
		'display': 'flex',
		'flex-direction': 'column',
		'& .rdw-option-wrapper': {
			'padding': '.5rem',
			'border': `2px solid ${theme.palette.common.black}`,
			'border-radius': '3px',
			'background': theme.palette.common.white,
			'cursor': 'pointer',
			'& img': {
				'height': '1rem',
				'width': '1rem'
			}
		},
		'& .rdw-option-active': {
			'border': `2px solid ${theme.palette.primary.main}`
		},
		'& .rdw-dropdown-wrapper, & .rdw-colorpicker-wrapper': {
			'position': 'relative'
		}
	},
	editor: {
		'height': 'auto',
		'max-height': '100%',
		'padding': '.5rem 1rem',
		'background': theme.palette.common.black,
		'border-radius': '3px',
		'color': theme.palette.common.black
	},
	dropdown: {
		'position': 'absolute',
		'top': '1rem',
		'padding': '1rem 0',
		'list-style-type': 'none',
		'background': theme.palette.common.black,
		'border': `1px solid ${theme.palette.primary.main}`,
		'border-radius': '3px',
		'z-index': 2,
		'max-height': '248px',
		'overflow-x': 'auto',
		'& .rdw-dropdownoption-default': {
			'padding': '.225rem .5rem',
			'cursor': 'pointer',
			'background': theme.palette.common.black,
			'&:hover': {
				'background': theme.palette.common.black
			}
		}
	},
	popup: {
		'position': 'absolute',
		'top': '3rem',
		'padding': '1rem',
		'border-radius': '3px',
		'z-index': 2,
		'border': `1px solid ${theme.palette.primary.main}`,
		'background': theme.palette.common.black,
		'display': 'flex',
		'flex-direction': 'column',
		'& .rdw-colorpicker-modal-options': {
			'display': 'grid',
			'grid-template-columns': '1fr 1fr 1fr 1fr',
			'grid-gap': '.5rem'
		},
		'& .rdw-colorpicker-option': {
			'padding': '0px',
			'display': 'flex',
			'justify-content': 'center'
		},
		'& .rdw-colorpicker-cube': {
			'display': 'block',
			'height': '1.5rem',
			'width': '1.5rem'
		},
		'& .rdw-colorpicker-modal-header': {
			'display': 'flex',
			'& .rdw-colorpicker-modal-style-label': {
				'flex': '1',
				'text-align': 'center',
				'margin': '.225rem',
				'&-active': {
					'border-bottom': `2px solid ${theme.palette.primary.main}`
				}
			}
		}
	}
}));

const RichEditor = ({ value, setValue, className, editorClassName }) => {
	const classes = useStyles();
	const blocksFromHTML = convertFromHTML(value);
	const stateExt = ContentState.createFromBlockArray(
		blocksFromHTML.contentBlocks,
		blocksFromHTML.entityMap,
	);
	const [state, setState] = useState(EditorState.createWithContent(stateExt));

	const onEditorStateChange = (editorState) => {
    	setState(editorState);
		setValue(draftToHtml(convertToRaw(editorState.getCurrentContent())));
	};

	return (
  		<div className={classnames(className, classes.root)}>
  			<Editor
				toolbar={{
					options: [
						'inline',
						'blockType',
						'fontSize',
						'list',
						'textAlign',
						'colorPicker',
						'link',
						'remove',
						'history'
					],
					inline: {
				    	options: ['bold', 'italic', 'underline', 'strikethrough']
				  	},
  					blockType: {
						dropdownClassName: classes.dropdown
					},
  					fontSize: {
						dropdownClassName: classes.dropdown
					},
  					colorPicker: {
						popupClassName: classes.popup
					},
  					link: {
						popupClassName: classes.popup,
    					dropdownClassName: classes.dropdown
					}
				}}
  				editorState={state}
  				wrapperClassName={classes.wrapper}
  				editorClassName={classnames(editorClassName, classes.editor)}
				toolbarClassName={classes.toolbar}
  				onEditorStateChange={onEditorStateChange}
  			/>
  		</div>
  	);
};

RichEditor.propTypes = {
	value: PropTypes.string.isRequired,
	setValue: PropTypes.func.isRequired,
	className: PropTypes.string
};

export default RichEditor;
