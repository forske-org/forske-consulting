import { Fragment } from 'react'
import Link from 'next/link'

import Card from '@/ui/card'
import { Card as CardType } from '@/types/card'
import { SERVICES } from '@/constants/services'

import styles from './page.module.scss'

export default function Home() {
    return (
        <Fragment>
            <section className={styles.services}>
                <h4>Our Service Offering</h4>
                <div className={styles.tiles}>
                    {SERVICES.map((card: CardType, index: number) =>
                        <Card {...card} key={index}/>
                    )}
                </div>
            </section>
            <Link className={styles.contact}
                href={'mailto:manielsen@forske.org?subject=Forske: consult requested'}>Request Initial Consult</Link>
        </Fragment>
    )
}
