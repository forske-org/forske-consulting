export async function ParseFormData (formData: FormData) {
    return Array.from(formData.entries()).reduce((memo, [key, value]) => ({
        ...memo,
        [key]: value,
    }), {})
}
