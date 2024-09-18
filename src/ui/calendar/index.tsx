'use client'

import { Fragment } from 'react'
import Link from 'next/link'

import * as Calendar from '@/types/calendar'

import styles from './calendar.module.scss'

const MONTHS = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ]
const DAYS = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ]

export function FetchCalendarEvents ({
    date,
    events
}: {
    date: Date
    events: Calendar.Event[]
}) {
    const startOfMonth = new Date(date.getFullYear(), date.getMonth(), 1)
    const endOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0)

    const allDayEvents = events.filter(event => 'date' in event.start!)
    const timedEvents = events.filter(event => 'dateTime' in event.start!)

    return (
        <Fragment>
            <div className={styles.wrapper}>
                <Link className={styles.previousYear}
                    prefetch={true}
                    href={`?month=${date.getFullYear() - 1}-${date.getMonth() + 1}`}>
                        {'<<'}
                </Link>
                <Link className={styles.previousMonth}
                    prefetch={true}
                    href={`?month=${date.getFullYear()}-${date.getMonth()}`}>
                        {'<'}
                </Link>
                <span className={styles.currentMonth}>
                    {MONTHS[date.getUTCMonth()]} {date.getFullYear()}
                </span>
                <Link className={styles.nextMonth}
                    prefetch={true}
                    href={`?month=${date.getFullYear()}-${date.getMonth() + 2}`}>
                        {'>'}
                </Link>
                <Link className={styles.nextYear}
                    prefetch={true}
                    href={`?month=${date.getFullYear() + 1}-${date.getMonth() + 1}`}>
                        {'>>'}
                </Link>
                {DAYS.map((day, index) =>
                    <span key={index} className={styles.dayKey}>{day}</span>
                )}
                {Array.from({ length: startOfMonth.getDay() }).map((_, index) =>
                    <div key={index} className={`${styles.day} ${styles.empty}`}></div>
                )} {Array.from({ length: endOfMonth.getDate() }).map((_, index) => {
                    const dayNumber = index + 1
                    const day = new Date(date.getFullYear(), date.getMonth(), dayNumber + 1)
                    return (
                        <div key={index} className={styles.day}>
                            <span>{dayNumber}</span>
                            <div>{events?.filter(event => {
                                const eventStartDate = new Date(event.start?.date ?? event.start?.dateTime?.split('T')[0] ?? '')
                                const eventEndDate = new Date(event.end?.date ?? event.end?.dateTime?.split('T')[0] ?? '')
                                
                                return eventStartDate <= day && day <= eventEndDate
                            }).map(event => <span key={event.id}>{event.summary}</span>)}</div>
                        </div>
                    )
                })}
            </div>

            <div>
                {/* {events?.map(event => 
                    <p>{JSON.stringify(event)}</p>
                )} */}
            </div>
        </Fragment>
    )
}

export default FetchCalendarEvents
