export function isValidEmail(email: string) {
  return /\S+@\S+\.\S+/.test(email);
}

export function isTextValid(text: string) {
  return text.trim().length > 5;
}
