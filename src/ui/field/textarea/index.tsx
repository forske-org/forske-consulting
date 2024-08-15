'use client'

import styles from './textarea.module.scss'

export function TextArea ({
    id,
    label,
}: {
    id: string
    label?: string
}) {
    function handleChange () {
        const element = document.getElementById(id)!
        element.style.height = `${element.scrollHeight}px`
    }

    return (
        <div className={styles.container}>
            <label htmlFor={id} className={!label ? 'hidden' : ''}>{label}</label>
            <textarea style={{ height: `2em` }}
                id={id}
                name={id}
                onChange={handleChange}/>
        </div>
    )
}

export default TextArea
