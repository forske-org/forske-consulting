'use client'

import React, { Fragment } from 'react'

import Symbol from '@/ui/symbol'
import * as TimeFormatter from '@/lib/time'

import styles from './timepicker.module.scss'

export function TimePicker ({
    id = 'TimePicker'
}: {
    id?: string
}) {
    function setDisplayValue () {
        const source = document?.getElementById(id) as HTMLInputElement
        const target = document.getElementById(`display-${id}`) as HTMLElement
        target.innerHTML = TimeFormatter.Readable(new Date(
            1970, 1, 1,
            parseInt(source.value.split(':').at(0) ?? '0'),
            parseInt(source.value.split(':').at(1) ?? '0'),
            parseInt(source.value.split(':').at(2) ?? '0'),
        ))
    }

    return (
        <Fragment>
            <div className={styles.container}>
                <input id={id}
                    onChange={() => setDisplayValue()}
                    type='time'
                    step={1}
                    className={styles.input}
                    defaultValue={TimeFormatter.Readable(new Date())} />
                <span className={styles.selector}>
                    <Symbol>schedule</Symbol>
                </span>
                <span className={styles.display} id={`display-${id}`}
                    suppressHydrationWarning>
                    {TimeFormatter.Readable(new Date())}
                </span>
            </div>
        </Fragment>
    )
}

export default TimePicker
