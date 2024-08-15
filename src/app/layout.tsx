import type { Metadata } from 'next'
import { Public_Sans } from 'next/font/google'

import Header from '@/ui/header'
import Footer from '@/ui/footer'

import '@/styles/globals.scss'

const fontSans = Public_Sans({
    variable: '--font-sans',
    style: [ 'normal', 'italic' ],
    weight: [ '100', '200', '300', '400', '500', '600', '700' ],
    subsets: ['latin'],
    display: 'swap',
})

export const metadata: Metadata = {
    title: {
        template: 'Forske | %s',
        default: 'Forske',
    },
    icons: [
        { rel: 'icon', url: '/favicon.ico', },
    ],
    description: 'Forske consulting services',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={`${fontSans.className}`}>
                <Header />
                <main>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    )
}
