export function Readable (date: Date): string {
    const TimeString = date.toLocaleDateString('en-AU', {
        timeZone: 'Australia/Sydney',
        hourCycle: 'h24',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    }).replaceAll(',', '').split(' ').at(1) ?? ''
    return TimeString
}
