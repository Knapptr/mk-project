export const validate = {
  string: {
    isNotEmpty(sanitizedString: string, errorMessage: string): void {
      if (sanitizedString.length === 0) {
        throw new Error(errorMessage);
      }
    }
  }
};
