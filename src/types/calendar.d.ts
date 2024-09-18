import type { calendar_v3 } from 'googleapis'

declare type DateString = `${number}-${number}-${number}`
declare type TimeString = `${number}:${number}:${number}${''|`.${number}`}${''|'Z'}`
declare type DateTimeString = `${DateString}${'T'|' '}${TimeString}`

export declare type GoogleDate = {
    date?: DateString
    dateTime?: DateTimeString
    timeZone?: string
}

export declare type GooglePerson = {
    email: string
    displayName: string
    self: boolean
}

export declare type Event = calendar_v3.Schema$Event
