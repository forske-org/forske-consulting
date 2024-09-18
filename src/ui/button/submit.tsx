import React from 'react'

import styles from './button.module.scss'

export function Submit ({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <button type='submit'
            className={`${styles.button} ${styles.submit}`}>
            {children}
        </button>
    )
}

export default Submit
