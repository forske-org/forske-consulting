import NextAuth, { Session } from 'next-auth'
import Google from 'next-auth/providers/google'

export declare type EnrichedSession = Session & {
    accessToken: string
    refreshToken: string
    accessTokenIssuedAt: number
    accessTokenExpiresAt: number
}

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Google({
            authorization: {
                params: {
                    access_type: 'offline',
                    prompt: 'consent',
                    scope: [
                        'openid',
                        'https://www.googleapis.com/auth/userinfo.email',
                        'https://www.googleapis.com/auth/userinfo.profile',
                        'https://www.googleapis.com/auth/calendar',
                    ].join(' '),
                    response: 'code',
                },
            }
        }),
    ],
    basePath: '/api/auth',
    callbacks: {
        authorized({ request, auth }) {
            const { pathname } = request.nextUrl
            if ([
                '/meeting',
                '/calendar',
                '/contracts',
                '/brand-guide',
            ].includes(pathname)) return !!auth
            return true
        },
        async signIn({ profile }) {
            if (profile) {
                const admin = process.env.AUTH_ADMIN?.split(',').includes(`${profile.email}`)
                return admin ? true : false
            }
            return false
        },
        async jwt({ token, user, account, }) {
            if (account && user) {
                return {
                    ...token,
                    access_token: account.access_token,
                    refresh_token: account.refresh_token,
                    issued_at: Date.now(),
                    expires_at: Date.now() + Number(account.expires_in) * 1000,
                }
            } else if (Date.now() < Number(token.expires_at)) {
                return token
            } else {
                if (!token.refresh_token) throw new Error('Missing refresh token')
                try {
                    const response = await fetch('https://oauth2.googleapis.com/token', {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                        },
                        body: new URLSearchParams({
                            client_id: process.env.AUTH_GOOGLE_ID!,
                            client_secret: process.env.AUTH_GOOGLE_SECRET!,
                            grant_type: 'refresh_token',
                            refresh_token: `${token.refresh_token!}`,
                        }),
                        method: 'POST',
                    })

                    const responseTokens = await response.json()
                    if (!response.ok) throw responseTokens

                    return {
                        ...token,
                        access_token: responseTokens.access_token,
                        expires_at: responseTokens.expires_at,
                        refresh_token: responseTokens.refresh_token ?? token.refresh_token,
                    }
                } catch (error) {
                    console.error('Error refreshing access token ', error)
                    return { ...token, error: 'RefreshAccessTokenError' as const }
                }
            }
        },
        async session({ session, token }) {
            return {
                ...session,
                accessToken: String(token.access_token),
                refreshToken: String(token.refresh_token),
                accessTokenIssuedAt: Number(token.issued_at),
                accessTokenExpiresAt: Number(token.expires_at),
            } satisfies EnrichedSession
        },
    },
})
