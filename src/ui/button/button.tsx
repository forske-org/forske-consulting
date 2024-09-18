import React from 'react'

import { clickHandler } from '@/types/actions'

import styles from './button.module.scss'

export function Button ({
    children,
    handleClick = () => null,
    type = 'button',
}: {
    children: React.ReactNode
    handleClick?: clickHandler
    type?: 'button' | 'reset'
}) {
    return (
        <button type={type}
            className={`${styles.button} ${styles[type]}`}
            onClickCapture={handleClick}>
            {children}
        </button>
    )
}

export default Button
