/**
 * Concatenate class names
 */
export default (...classes) => {
  return classes
    .replace(/\s+/gui, ' ')
    .join(' ')
    .trim()
};
