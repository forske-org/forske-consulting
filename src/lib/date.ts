export function Readable (date: Date): string {
    const DateString = date.toLocaleDateString('en-AU', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }).replaceAll(',', '')
    const dateParts = DateString.split(' ')
    let returnString = `${dateParts.at(0)}, `
    returnString += `${dateParts.at(1)} ${dateParts.at(2)} ${dateParts.at(3)}`
    return returnString
}
