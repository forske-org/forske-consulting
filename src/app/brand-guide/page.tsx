import { Fragment } from 'react'
import Image from 'next/image'

import ColorSwatch from '@/ui/color-swatch'

import styles from './page.module.scss'

export default async function Page () {
    return (
        <Fragment>
            <div className={styles.content}>
                <h1>Brand Guide</h1>
                <section className={styles.images}>
                    <h3>Images</h3>
                    <div className={styles.primary}>
                        <Image src={`${process.env.AUTH_URL}/logo.svg`}
                            alt={'logo'}
                            width={100}
                            height={100}/>
                    </div>
                    <div className={styles.secondary}>
                        <Image src={`${process.env.AUTH_URL}/logo.white.svg`}
                            alt={'logo.white'}
                            width={100}
                            height={100}/>
                    </div>
                </section>
                <section className={styles.colours}>
                    <h3>Colours</h3>
                    <div>
                        <h4>White / Black</h4>
                        <ColorSwatch rgb={`rgb(255,255,255)`} name={'White'}/>
                        <ColorSwatch rgb={`rgb(13,19,33)`} name={'Rich Black'}/>
                    </div>
                    <div>
                        <h4>Primary</h4>
                        <ColorSwatch rgb={`rgb(29,45,68)`} name={'Prussian Blue'}/>
                        <ColorSwatch rgb={`rgb(231,223,198)`} name={'Pearl'}/>
                        <ColorSwatch rgb={`rgb(243,247,240)`} name={'Mint Cream'}/>
                    </div>
                    <div>
                        <h4>Secondary</h4>
                        <ColorSwatch rgb={`rgb(112,238,156)`} name={'Light Green'}/>

                        <ColorSwatch rgb={`rgb(255,210,63)`} name={'Sunglow'}/>

                        <ColorSwatch rgb={`rgb(214,40,57)`} name={'Crimson'}/>
                    </div>
                </section>
                <section className={styles.typography}>
                    <h3>Typography</h3>
                    <div>
                        <h4>Sans Serif</h4>
                        <span className={styles.bold}>Public Sans</span>
                        <div>
                            <span>Light | 200</span>
                            <span className={styles.light}>ABCDEFGHIJKLMNOPQRSTUVWXYZ</span>
                            <span className={styles.light}>abcdefghijklmnopqrstuvwxyz</span>
                        </div>
                        <div>
                            <span>Medium | 400</span>
                            <span className={styles.medium}>ABCDEFGHIJKLMNOPQRSTUVWXYZ</span>
                            <span className={styles.medium}>abcdefghijklmnopqrstuvwxyz</span>
                        </div>
                        <div>
                            <span>Bold | 600</span>
                            <span className={styles.bold}>ABCDEFGHIJKLMNOPQRSTUVWXYZ</span>
                            <span className={styles.bold}>abcdefghijklmnopqrstuvwxyz</span>
                        </div>
                    </div>
                    <div>
                        <h4>Icons</h4>
                        <span className={styles.bold}>Material Symbols</span>
                    </div>
                </section>
                <section className={styles.voice}>
                    <h3>Voice</h3>
                    <div>
                        <h4>Sans Serif</h4>
                        <span className={styles.bold}>Public Sans</span>
                        <div>
                            <span>Light | 200</span>
                            <span className={styles.light}>ABCDEFGHIJKLMNOPQRSTUVWXYZ</span>
                            <span className={styles.light}>abcdefghijklmnopqrstuvwxyz</span>
                        </div>
                        <div>
                            <span>Medium | 400</span>
                            <span className={styles.medium}>ABCDEFGHIJKLMNOPQRSTUVWXYZ</span>
                            <span className={styles.medium}>abcdefghijklmnopqrstuvwxyz</span>
                        </div>
                        <div>
                            <span>Bold | 600</span>
                            <span className={styles.bold}>ABCDEFGHIJKLMNOPQRSTUVWXYZ</span>
                            <span className={styles.bold}>abcdefghijklmnopqrstuvwxyz</span>
                        </div>
                    </div>
                    <div>
                        <h4>Icons</h4>
                        <span className={styles.bold}>Material Symbols</span>
                    </div>
                </section>
            </div>
        </Fragment>
    )
}

// // White
// --rgb-white: 255,255,255;
// --hsl-white: 0,0,100;
// --hex-white: ffffff;
// // Black
// --rgb-black: 0,0,0;
// --hsl-black: 0,0,0;
// --hex-black: 000000;
// // Rich Black
// --rgb-rich-black: 13,19,33;
// --hsl-rich-black: 222,43,9;
// --hex-rich-black: 0d1321;
// // Prussian Blue
// --rgb-prussian-blue: 29,45,68;
// --hsl-prussian-blue: 215,40,19;
// --hex-prussian-blue: 1d2d44;
// // Pearl
// --rgb-pearl: 231,223,198;
// --hsl-pearl: 45,41,84;
// --hex-pearl: e7dfc6;
// // Mint Cream
// --rgb-mint-cream: 243,247,240;
// --hsl-mint-cream: 94,30,95;
// --hex-mint-cream: f3f7f0;
// // Indicators
// // Good / success
// --rgb-light-green: 112,238,156;
// --hsl-light-green: 141,79,69;
// --hex-light-green: 70ee9c;
// // Warning
// --rgb-sunglow: 255,210,63;
// --hsl-sunglow: 46,100,62;
// --hex-sunglow: ffd23f;
// // Error / failure
// --rgb-crimson: 214,40,57;
// --hsl-crimson: 354,69,50;
// --hex-crimson: d62839;