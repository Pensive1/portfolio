/**
 * Transforms text to a lowercase hyphenated word
 * @param txt - Incoming text
 */
export function lowerHyphenClass(txt: string) {
    return txt
        .toLowerCase()
        .replaceAll(" ", "-");
}