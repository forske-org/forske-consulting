import { OAuth2Client } from 'google-auth-library'

import { EnrichedSession, auth } from '@/auth'

export async function Authorise () {
    const session = await auth() as EnrichedSession

    const clientId = process.env.AUTH_GOOGLE_ID
    const clientSecret = process.env.AUTH_GOOGLE_SECRET
    const accessToken = session?.accessToken
    const refreshToken = session?.refreshToken

    const oauth2Client = new OAuth2Client({
        clientId,
        clientSecret,
    })

    oauth2Client.setCredentials({
        access_token: accessToken,
        refresh_token: refreshToken,
    })

    return oauth2Client
}
