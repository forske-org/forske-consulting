import React from 'react'

import SymbolComponent from '@/ui/symbol'

import styles from './symbol.module.scss'
import { clickHandler } from '@/types/actions'

export function Symbol ({
    children,
    handleClick,
}: {
    children: React.ReactNode
    handleClick: clickHandler
}) {
    return (
        <button className={styles.button} onClickCapture={handleClick}>
            <SymbolComponent>
                {children}
            </SymbolComponent>
        </button>
    )
}

export default Symbol
