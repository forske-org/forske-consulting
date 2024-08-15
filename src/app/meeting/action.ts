'use server'

import { ParseFormData } from '@/lib/form'

export async function FormAction (formData: FormData) {
    console.log(await ParseFormData(formData))
}

export default FormAction
