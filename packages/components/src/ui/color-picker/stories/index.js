/**
 * External dependencies
 */
import { boolean, select } from '@storybook/addon-knobs';
import colorize from 'tinycolor2';

/**
 * WordPress dependencies
 */
import { useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { ColorPicker } from '..';
import { Flex } from '../../../flex';
import { Spacer } from '../../../spacer';
import { space } from '../../utils/space';

export default {
	component: ColorPicker,
	title: 'Components (Experimental)/ColorPicker',
};

const PROP_UNSET = 'unset';

const Example = () => {
	const [ color, setColor ] = useState( undefined );
	const props = {
		enableAlpha: boolean( 'enableAlpha', false ),
		copyFormat: select(
			'copyFormat',
			[ PROP_UNSET, 'rgb', 'hsl', 'hex' ],
			PROP_UNSET
		),
	};

	if ( props.copyFormat === PROP_UNSET ) {
		delete props.copyFormat;
	}

	return (
		<Flex
			as={ Spacer }
			gap={ space( 2 ) }
			justify="space-around"
			align="flex-start"
			marginTop={ space( 10 ) }
		>
			<ColorPicker { ...props } color={ color } onChange={ setColor } />
			<div>{ colorize( color ).toHslString() }</div>
			<ColorPicker { ...props } color={ color } onChange={ setColor } />
		</Flex>
	);
};

export const _default = () => {
	return <Example />;
};
