import { google } from 'googleapis'

function Authorise () {
    return google.calendar({
        version: 'v3',
        auth: process.env.GOOGLE_API_KEY!,
    })
}

export async function GetCalendars () {
    const google = Authorise()
    const calendars = google.calendarList.list()
    return calendars
}
