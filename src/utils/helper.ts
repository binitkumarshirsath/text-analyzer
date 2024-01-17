export const calculateWordsAndCharacters = (text: string) => {
  if (text.trim() === "") {
    return { characters: 0, words: 0 };
  }
  const characters = text.length;
  const words = text.trim().split(/\s+/).length;
  return { characters, words };
};

export const analyzeText = (text: string) => {
  const { characters, words } = calculateWordsAndCharacters(text);
  // sentences are ended with .
  const sentences = text.split(/[.?!]/g).filter(Boolean).length;
  const spaces = text.split(" ").length - 1;
  const punctuations = countPunctuations(text);
  const paragraphs = countParagraphs(text);
  return { sentences, characters, words, spaces, punctuations, paragraphs };
};

export function countPunctuations(text: string) {
  // Define a regular expression to match punctuations
  const punctuationRegex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

  // Use the match method to find all occurrences of punctuations in the text
  const matches = text.match(punctuationRegex);

  // Check if matches exist, return the count, or 0 if there are no matches
  return matches ? matches.length : 0;
}

export function countParagraphs(text: string) {
  // Split the text into paragraphs based on newline characters
  const paragraphs = text.split("\n");

  // Filter out empty paragraphs (resulting from consecutive newline characters)
  const nonEmptyParagraphs = paragraphs.filter(
    (paragraph) => paragraph.trim() !== ""
  );

  // Return the count of non-empty paragraphs
  return nonEmptyParagraphs.length;
}
