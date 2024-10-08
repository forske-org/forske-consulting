import { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { auth } from '@/auth'
import Signin from '@/ui/button/signin'
import Signout from '@/ui/button/signout'

import styles from './header.module.scss'

export async function Header () {
    const profile = await auth()

    return (
        <header className={styles.container}>
            <Link className={styles.brand} href='/'>
                <Image className={styles.logo}
                    src={`/logo.white.svg`}
                    alt='logo'
                    width={200}
                    height={200}/>
                <div className={styles.title}>
                    <h1 className={styles.name}>FORSKE</h1>
                    <h4 className={styles.translation}><i>(research)</i></h4>
                    <h4 className={styles.meaning}>: to continue with examined care</h4>
                </div>
            </Link>
            <nav className={styles.navigator}>
                <Link href='/services'>Services</Link>
                <Link href='/solutions'>Solutions</Link>
                <a href='https://docs.forske.org'>Documentation</a>
                {profile ? <Link href='/brand-guide'>Brand Guide</Link> : null}
                {profile ? <Link href='/calendar'>Calendar</Link> : null}
                {profile ? <Link href='/meeting'>Meeting</Link> : null}
            </nav>
            {profile ? <Signout /> : <Signin />}
            {profile ? <Fragment>
                <Image className={styles.profilePicture}
                    src={profile.user?.image ?? ''}
                    alt='profile'
                    width={200}
                    height={200}/>
            </Fragment> : null}
        </header>
    )
}

export default Header
