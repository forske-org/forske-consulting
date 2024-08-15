import React from 'react'

import { clickHandler } from '@/types/actions'

import styles from './button.module.scss'

export function Symbol ({
    children,
    handleClick,
}: {
    children: React.ReactNode
    handleClick: clickHandler
}) {
    return (
        <button className={styles.button} onClickCapture={handleClick}>
            {children}
        </button>
    )
}

export default Symbol
