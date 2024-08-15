import Image from 'next/image'

import Symbol from '@/ui/symbol'
import { Card as CardType } from '@/types/card'

import styles from './card.module.scss'

export function Card ({
    title,
    description,
    image,
}: CardType) {
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                {image ? <Symbol fill={1} size={30}>{image}</Symbol> : <span></span> }
            </div>
            <p className={`super ${styles.title}`}>{title}</p>
            <p className={styles.description}>{description}</p>
        </div>
    )
}

export default Card
