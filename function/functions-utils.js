/**
 * 
 * @param {number} value 
 * @returns {number | bool}
 */
function normalizePort(value) {
    const port = parseInt(value, 10);

    if (isNaN(port)) {
        return value;
    }
    if (port >= 0) {
        return port;
    }
    return false;
}