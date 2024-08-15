import { google } from 'googleapis'

import { Authorise } from '@/lib/google/authorise'

export async function GET (request: Request) {
    const client = await Authorise()

    const calendar = google.calendar({
        version: 'v3',
        auth: client,
    })

    const calendarResponse = await calendar.events.list({
        calendarId: process.env.GOOGLE_CALENDAR,
        timeMin: new Date().toISOString(),
        maxResults: 10,
        singleEvents: true,
        orderBy: 'startTime',
    })

    const events = calendarResponse.data.items

    return new Response(JSON.stringify({
        test: 'success',
        events,
    }))
}