import { Fragment } from 'react'

import Card from '@/ui/card'
import { Card as CardType } from '@/types/card'

import styles from './page.module.scss'

const SERVICES: CardType[] = [
    {
        title: 'Cloud Migration',
        description: `Prepare and deliver a cloud migration strategy and roadmap meeting your organisation's unique needs`,
        image: 'cloud_upload',
    },
    {
        title: 'Technology Readiness',
        description: 'Assess your current technology to ensure future directions are achievable',
        image: 'check',
    },
    {
        title: 'Software Development',
        description: 'Develop custom solutions to your operating requirements or adapt a solution from our existing suite',
        image: 'code',
    },
    {
        title: 'Data Architecture',
        description: 'Review and architect custom data structures and databases',
        image: 'database',
    },
    {
        title: 'Data Analytics',
        description: 'Perform complex analysis and implement custom models into your existing environment',
        image: 'monitoring',
    },
    {
        title: 'Cost Assessment',
        description: 'Perform a cost analysis to ensure optimum efficiency of current or future technology states',
        image: 'attach_money',
    },
]

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
        </Fragment>
    )
}
