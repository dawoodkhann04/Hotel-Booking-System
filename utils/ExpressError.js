class ExpressError extends Error {
    constructor(statusCode , message ) {
        super(); // Pass message to Error constructor
        this.statusCode = statusCode;
        this.message = message;
    }
}

module.exports = ExpressError;