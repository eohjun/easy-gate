export const fetchTitle = async (url: string): Promise<string> => {
    const response = await fetch(url)
    const text = await response.text()
    const doc = new DOMParser().parseFromString(text, 'text/html')
    return doc.title
}
