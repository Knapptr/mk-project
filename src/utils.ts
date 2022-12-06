export const validate = {
    string: {
        isNotEmpty(sanitizedString: string): boolean {
            return sanitizedString.length > 0;
        }
    }
}
