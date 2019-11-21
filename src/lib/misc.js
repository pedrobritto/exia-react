/**
 * Allows only numbers to be typed.
 *
 * @param {Number|String} value Value to be formatted
 * @returns {Number}
 */
export function parseCurrencyInputValue(value) {
  return parseInt(String(value).replace(/\D/gu, ''), 10);
}

/**
 * Simple email validity check.
 *
 * @param {string} string Email string to validate
 * @returns {Boolean}
 */
export function isEmailValid(string) {
  const regex = /^\S+@\S+\.\S{2,}$/iu;

  return regex.test(string);
}
