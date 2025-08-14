//* GENERAL STRING MANIPULATION */
// 'to title case' => 'To Title Case'
export const toTitleCase = (text: string | undefined) => {
    if (text !== undefined) {
        return text.replace(/\b\w/g, (char) => char.toUpperCase())
    } else {
        return '';
    }
}
// 'user-module' => 'user module'
export const stripSpecialChars = (text: string, exceptions?: string[]) => {
    let chars: string[] = '-.,;:/*+%$#@^&\\\\'.split('');
    if (exceptions) chars = chars.filter(char => !exceptions.includes(char));
    const charString: string = chars.join('');
    const reg = new RegExp('[' + charString + ']', 'g')
    return text.replace(reg, ' ');
}