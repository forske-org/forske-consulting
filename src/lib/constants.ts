import path from 'path'
import type { StringObject } from '@/types/general'

export const MONTHS: StringObject = {
    '01': 'January',
    '02': 'February',
    '03': 'March',
    '04': 'April',
    '05': 'May',
    '06': 'June',
    '07': 'July',
    '08': 'August',
    '09': 'September',
    '10': 'October',
    '11': 'November',
    '12': 'December',
}

export const TOKEN_PATH = path.join(process.cwd(), 'token.json')
export const CREDENTIALS_PATH = path.join(process.cwd(), 'credentials.json')
export const SCOPES = [
    'https://www.googleapis.com/auth/calendar.readonly'
]
