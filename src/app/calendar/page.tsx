import { Fragment } from 'react'

import Calendar from '@/ui/calendar'
import * as CalendarType from '@/types/calendar'
import { getCalendarEvents } from '@/data/google'

export default async function Page ({
    searchParams: {
        month,
    }
}: {
    searchParams: {
        month: string
    }
}) {
    const [ yearParam, monthParam ] = month.split('-') ?? [ new Date().getFullYear(), new Date().getMonth() ]

    const date = new Date(parseInt(yearParam), parseInt(monthParam) - 1, 15)
    const eventResponse = await getCalendarEvents(date) as CalendarType.Event[]

    return (
        <Fragment>
            <Calendar date={date} events={eventResponse}/>
        </Fragment>
    )
}
