'use client'

import { useState } from 'react'

import Symbol from '@/ui/symbol'
import * as Field from '@/ui/field'
import { FormAction } from './action'

import styles from './form.module.scss'

export function Form () {
    const [ attendeeCount, setAttendeeCount ] = useState<number>(1)
    const [ itemCount, setItemCount ] = useState<number>(1)
    const [ actionCount, setActionCount ] = useState<number>(0)

    function handleSubmit (formData: FormData) {
        console.log('submitted')

        FormAction(formData)
    }

    return (
        <form className={styles.container} action={handleSubmit}>
            <div className={styles.whenGroup}>
                <Field.DatePicker />
                <Field.TimePicker />
            </div>
            <div className={styles.attendees} id='attendees'>
                <div className={styles.header}>
                    <span className={styles.title}>Attendees</span>
                    <span className={styles.add}
                        onClickCapture={() => setAttendeeCount(prev => prev + 1)}>
                        <Symbol>add_circle</Symbol>
                    </span>
                </div>
                {new Array(attendeeCount).fill(0).map((_: number, index: number) =>
                    <div key={index} className={styles.attendee}>
                        <Field.Text id={`attendee-name-${index}`}/>
                        <Field.Text id={`attendee-role-${index}`}/>
                    </div>
                )}
            </div>
            <div className={styles.items}>
                <div className={styles.header}>
                    <span className={styles.title}>Items</span>
                    <span className={styles.add}
                        onClickCapture={() => setItemCount(prev => prev + 1)}>
                        <Symbol>add_circle</Symbol>
                    </span>
                </div>
                {new Array(itemCount).fill(0).map((_: number, index: number) =>
                    <div key={index} className={styles.item}>
                        <Field.Text id={`item-id-${index + 1}`} value={`${index + 1}`} readOnly/>
                        <Field.Text id={`item-label-${index + 1}`}/>
                        <Field.TextArea id={`item-note-${index + 1}`}/>
                    </div>
                )}
            </div>
            <div className={styles.buttons}>
                <button type='submit'>Save</button>
            </div>
        </form>
    )
}

// The names/titles of all people present & mentioned
// Any important statistics, benchmarks, or objectives discussed
// The key conclusions or implications of important parts of the discussion
// Any key decisions reached during the meeting
// Any further action items required at the end of the meeting

export default Form
