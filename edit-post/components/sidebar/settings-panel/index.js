/**
 * External dependencies
 */
import { connect } from 'react-redux';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { PanelBody, PanelRow, CheckboxControl } from '@wordpress/components';

/**
 * Internal Dependencies
 */
import { isEditorSidebarPanelOpened } from '../../../store/selectors';
import { toggleGeneralSidebarEditorPanel } from '../../../store/actions';

/**
 * Module Constants
 */
const PANEL_NAME = 'settings-panel';

function SettingsPanel( { isOpened, onTogglePanel } ) {
	return (
		<PanelBody
			title={ __( 'Settings' ) }
			opened={ isOpened }
			onToggle={ onTogglePanel }
		>
			<PanelRow>
				<CheckboxControl
					heading={ __( 'Use theme CSS' ) }
					checked={ true }
					onChange={ event => console.log( event ) }
				/>
			</PanelRow>

			<PanelRow>
				<CheckboxControl
					heading={ __( 'Display header' ) }
					checked={ true }
					onChange={ event => console.log( event ) }
				/>
			</PanelRow>

			<PanelRow>
				<CheckboxControl
					heading={ __( 'Display footer' ) }
					checked={ true }
					onChange={ event => console.log( event ) }
				/>
			</PanelRow>
		</PanelBody>
	);
}

export default connect(
	( state ) => ( {
		isOpened: isEditorSidebarPanelOpened( state, PANEL_NAME ),
	} ),
	{
		onTogglePanel() {
			return toggleGeneralSidebarEditorPanel( PANEL_NAME );
		},
	},
	undefined,
	{ storeKey: 'edit-post' }
)( SettingsPanel );
