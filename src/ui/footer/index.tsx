import Image from 'next/image'

import styles from './footer.module.scss'

export function Footer () {
    return (
        <footer className={styles.container}>
            <p className={styles.acknowledgement}>We acknowledge the traditional custodians of the land and pay respects to elders past, present, and emerging</p>
            <div className={styles.links}>

            </div>
            <div className={styles.social}>
                <a target='_blank'
                    href={'https://www.linkedin.com/company/forske-org'}>
                    <Image src={'https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg'}
                        alt='linkedin'
                        width={40}
                        height={40}/>
                </a>
            </div>
        </footer>
    )
}

export default Footer
