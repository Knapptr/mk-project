export const validate = {
  string: {
    isNotEmpty(sanitizedString: string, errorMessage: string): string {
      if (sanitizedString.length === 0) {
        throw new Error(errorMessage);
      }
      return sanitizedString;
    }
  }
};
