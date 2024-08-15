'use client'

import React, { Fragment } from 'react'

import Symbol from '@/ui/symbol'
import * as DateFormatter from '@/lib/date'

import styles from './datepicker.module.scss'

export function DatePicker ({
    id = 'DatePicker'
}: {
    id?: string
}) {
    function setDisplayValue () {
        const source = document?.getElementById(id) as HTMLInputElement
        const target = document.getElementById(`display-${id}`) as HTMLElement
        target.innerHTML = DateFormatter.Readable(new Date(source.value))
    }

    return (
        <Fragment>
            <div className={styles.container}>
                <input id={id}
                    onChange={() => setDisplayValue()}
                    type='date'
                    className={styles.input}
                    defaultValue={new Date().toJSON().split('T').at(0)} />
                <span className={styles.selector}>
                    <Symbol>calendar_month</Symbol>
                </span>
                <span className={styles.display} id={`display-${id}`}>
                    {DateFormatter.Readable(new Date())}
                </span>
            </div>
        </Fragment>
    )
}

export default DatePicker
