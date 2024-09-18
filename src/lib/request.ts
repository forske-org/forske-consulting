'use server'

export default async function Submit (formData: FormData) {
    console.log(formData)
    return { success: true }
}
