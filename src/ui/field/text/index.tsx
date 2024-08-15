'use client'

import styles from './text.module.scss'

export function Text ({
    id,
    label,
    value,
    readOnly = false,
}: {
    id: string
    label?: string
    value?: string
    readOnly?: boolean
}) {
    return (
        <div className={styles.container}>
            <label htmlFor={id}
                className={!label ? 'hidden': ''}>{label}</label>
            <input id={id}
                name={id}
                type='text'
                defaultValue={value}
                readOnly={readOnly}/>
        </div>
    )
}

export default Text
