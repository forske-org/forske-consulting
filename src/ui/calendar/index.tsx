'use client'

import { Fragment, useState } from 'react'

import * as Calendar from '@/types/calendar'

export function FetchCalendarEvents () {
    const [ events, setEvents ] = useState<Calendar.Event[] | null>()

    const fetchCalendarEvents = async () => {
        const response = await fetch('api/calendar/events')
        const data: { events: Calendar.Event[] } = await response.json()
        console.log('Events ', data)
        setEvents(data.events)
    }

    return (
        <Fragment>
            <button onClick={fetchCalendarEvents}>Fetch Events</button>
            {events ? <ul>
                {events.map((event, index) => <li key={index}>
                    <h2>{event.summary}</h2>
                    <p>{event.description}</p>
                </li>)}
            </ul> : null}
        </Fragment>
    )
}

export default FetchCalendarEvents
