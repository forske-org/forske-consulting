import { google } from 'googleapis'

import { Authorise } from '@/lib/google/authorise'

import type * as Calendar from '@/types/calendar'

export async function getEventsFromCalendar (
    id: string = 'primary',
    date: Date = new Date(),  
) {
    const minDate = new Date(date.getFullYear(), date.getMonth(), 1)
    const maxDate = new Date(date.getFullYear(), date.getMonth() + 1, 1)

    return new Promise(async (resolve, reject) => {
        const client = await Authorise()

        const calendar = google.calendar({
            version: 'v3',
            auth: client,
        })

        calendar.events.list({
            calendarId: id,
            timeMin: minDate.toISOString(),
            timeMax: maxDate.toISOString(),
            maxResults: 100,
            singleEvents: true,
            orderBy: 'startTime',
        })
            .then(data => resolve(data))
            .catch(error => reject(error))
    })
}

export async function getCalendarEvents (
    date: Date = new Date(),
) {
    return new Promise(async (resolve, reject) => {
        const client = await Authorise()

        const calendar = google.calendar({
            version: 'v3',
            auth: client,
        })

        const calendars = await calendar.calendarList.list()
    
        const promises = calendars.data.items?.map(calendar =>
            getEventsFromCalendar(calendar.id!, date) 
        )

        if (promises) {
            const events = await Promise.all(promises) as { data: { items: Calendar.Event[] }}[]
            let responseData: Calendar.Event[] = []
            for (const eventGroup of events) {
                responseData.push(...eventGroup.data.items)
            }
            resolve(responseData)
        } else reject('No events found')
    })
}
