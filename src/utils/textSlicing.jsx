
// This function returns the number of letters
export function TextSlice(text, numberOfLetters) {
    const result = text.slice(0,numberOfLetters)
    return result + ' ...'
}