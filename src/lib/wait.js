/**
 * Returns a resolved promisse after timeout
 *
 * @param {Number} timeout
 * @returns {Promise}
 */
export default (timeout = 500) => new Promise((res) => setTimeout(() => res(), timeout));
