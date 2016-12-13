exports.getGetOptions = function pathingHelper(path, port) {
    const options = {
        host: 'localhost',
        port,
        path,
        method: 'GET',
        headers: {
            // Use in case API requires an auth session.
            Cookie: null
        }
    };
    return options;
};
