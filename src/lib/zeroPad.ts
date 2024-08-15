export function ZeroPad (
    number: number,
    places: number,
): string {
    return String(number).padStart(places, '0')
}

export default ZeroPad
