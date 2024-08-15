async function fetcher<T> (
    input: RequestInfo,
    init?: RequestInit
): Promise<T> {
    const response = await fetch(input, init)
    return response.json()
}

export default fetcher
