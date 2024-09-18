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

export declare type Event = {
    kind: string
    etag: string
    id: string
    status: string
    htmlLink: string
    created: DateTimeString
    updated: DateTimeString
    summary: string
    description: string
    creator: GooglePerson
    organizer: GooglePerson
    start: GoogleDate
    end: GoogleDate
    transparency: string
    visibility: string
    iCalUID: string
    sequence: number
    eventType: string
}
