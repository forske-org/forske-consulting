import { Fragment } from 'react'

import { auth } from '@/auth'
import { GetCalendars } from '@/lib/google/calendar'

import Form from './form'

export default async function Page () {
    const profile = await auth()

    return (
        <Fragment>
            <Form />
        </Fragment>
    )
}
