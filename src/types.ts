import * as React from 'react'

import { BEMModifiers } from 'bem-helpers'

export abstract class AbstractBEMBlock<P = {}, S = {}>
extends React.Component<P, S> {
	static displayName?: string
	static propTypes?: {}
}

export abstract class AbstractBEMElement<P = {}, S = {}>
extends React.Component<P, S> {
	static displayName?: string
	static propTypes?: {}
}

export type BEMBlockClass = typeof AbstractBEMBlock

/**
 * BEM block properties
 */
export interface BEMBlockProps {
	/**
	 * BEM block name
	 */
	block?: string
	/**
	 * BEM block modifiers
	 */
	modifiers?: BEMModifiers
}

export type BEMElementClass = typeof AbstractBEMElement

/**
 * BEM element properties
 */
export interface BEMElementProps {
	/**
	 * BEM block name
	 */
	block?: string
	/**
	 * BEM element name
	 */
	element?: string
	/**
	 * BEM element modifiers
	 */
	modifiers?: BEMModifiers
}

export interface ReactBEMElementProps<P = {}>
extends BEMElementProps, ReactElementProps<P> {}

export interface ReactElementProps<P = {}>
extends React.Props<P> {
	className?: string,
}
