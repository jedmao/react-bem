
import * as PT from 'prop-types'
import * as React from 'react'

import { getDisplayName } from './helpers'
import { BEMBlockProviderContext } from './createBEMBlock'
import resolveRenderedElement from './resolveRenderedElement'
import { BEMElementProps } from './types'

/**
 * Wraps a class with BEM element functionality, receiving the BEM block name
 * via context and converting element and modifiers attributes into className
 * attributes.
 * @param ComponentClass The class to wrap with BEM element functionality.
 */
export default function createBEMElement(
	ComponentClass: React.ComponentClass<{} & BEMElementProps>,
) {
	return class Wrapped extends ComponentClass {

		static displayName =
			// tslint:disable-next-line:no-any
			`BEMElement(${getDisplayName(ComponentClass as any)})`

		static contextTypes = {
			...(ComponentClass.contextTypes || {}),
			bemBlock: PT.string.isRequired,
		}

		static propTypes = {
			// tslint:disable-next-line:no-any
			...(ComponentClass.propTypes as any || {}),
			bemElement: PT.string,
			bemModifiers: PT.any,
		}

		context: BEMBlockProviderContext

		render() {
			return resolveRenderedElement(
				super.render.call(this),
				this.props,
				this.context,
			)
		}
	}
}
