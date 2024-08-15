import styles from './colorSwatch.module.scss'

export function ColorSwatch ({
    rgb,
    name,
    radius = 25,
}: {
    rgb: `rgb(${number},${number},${number})`
    name: string
    radius?: number
}) {
    return (
        <div className={styles.container}>
            <svg viewBox={`0 0 ${radius} ${radius}`}
                width={radius * 2}
                height={radius * 2}
                fill={rgb}
                xmlns='http://www.w3.org/2000/svg'>
                <circle cx={radius/2} cy={radius/2} r={radius/2}>
                </circle>
            </svg>
            <span className={styles.name}>{name}</span>
            <span className={styles.rgb}>{rgb}</span>
        </div>
    )
}

export default ColorSwatch
