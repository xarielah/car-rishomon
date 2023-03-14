function parseCarNumber(number: string): string {
  switch (number.length) {
    case 7:
      return [...number]
        .map((letter, i) => (i === 2 || i === 5 ? "-" + letter : letter))
        .join("");
    case 8:
      return [...number]
        .map((letter, i) => (i === 3 || i === 5 ? "-" + letter : letter))
        .join("");
    default:
      return number;
  }
}

export { parseCarNumber };
