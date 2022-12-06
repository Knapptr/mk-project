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

export function generateID() {
  const options: object = {
    // numbers
    "0": {
      min: 48,
      max: 57,
      length: 10
    },
    // uppercase
    "1": {
      min: 65,
      max: 90,
      length: 26
    },
    // lowercase
    "2": {
      min: 97,
      max: 122,
      length: 26
    }
  };

  let id: string = "";

  for (let i = 0; i < 16; i++) {
    const category: string = String(Math.floor(Math.random() * 3));

    const random_number: number = Math.floor(
      Math.random() * options[category as keyof object]["length"]
    );

    const char_code: number =
      random_number + options[category as keyof object]["min"];

    const char: string = String.fromCharCode(char_code);

    id += char;
  }

  return id;
}
