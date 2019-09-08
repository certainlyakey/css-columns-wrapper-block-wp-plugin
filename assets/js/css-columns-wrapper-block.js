/**
 * BLOCK: css-columns-wrapper-block-wp-plugin/css-columns
 */

import classNames from 'classnames'; // Used to to join classes together

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const {
	Fragment, // Used to wrap our edit component and only have one root element
} = wp.element;
const {
	InnerBlocks, // Allows it to place child blocks inside our block
	InspectorControls, // We place our select control inside the inspector controls which show up on the right of the editor
} = wp.editor;
const {
	PanelBody, // A panel where we place our select control in (creates a collapsable element)
	RangeControl, 
} = wp.components;

registerBlockType( 'css-columns-wrapper-block-wp-plugin/wrapper-block', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Auto columns', 'css-columns-wrapper-block' ), // Block title.
	icon: 'editor-table', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'layout', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Columns', 'css-columns-wrapper-block' ),
		__( 'Wrapper Block', 'css-columns-wrapper-block' ),
	],

	attributes: {
		// Register colNumber attribute to save the chosen number
		colNumber: {
			type: 'number',
		},
	},

	edit( { attributes, setAttributes, className } ) {
		const {
			colNumber = 1,
		} = attributes;

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody
						title={ __( 'Number of Columns', 'css-columns-wrapper-block' ) }
						initialOpen={ true }
					>
						<RangeControl
								label={ __( 'Number of Columns', 'css-columns-wrapper-block' ) }
								value={ colNumber }
								help={ __( 'Content will flow into multiple columns automatically.', 'css-columns-wrapper-block' ) }
								onChange={ ( val ) => setAttributes( { colNumber: val } ) }
								min={ 1 }
								initialPosition={ 1 }
								max={ 3 }
						/>
					</PanelBody>
				</InspectorControls>
				<div
					className={ className }
				>
					<InnerBlocks />
				</div>
			</Fragment>
		);
	},

	save( { attributes, className } ) {
		const {
			colNumber = '',
		} = attributes;

		let classes = className;

		// Only set attributes when number is chosen
		if ( '' !== colNumber ) {
			// Use classnames library to join all classes together
			classes = classNames( colNumber > 1 ? `has-${ colNumber }-auto-columns` : '', classes );
		}

		return (
			<div
				className={ classes }
			>
				<InnerBlocks.Content />
			</div>
		);
	},
} );
