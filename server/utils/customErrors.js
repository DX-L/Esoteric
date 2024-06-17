// utils/CustomErrors.js

// 注释掉的部分用return可以节省一定性能-
class CustomError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        Error.captureStackTrace(this, this.constructor);
    }
}

class BadRequestError extends CustomError {
    constructor(message = 'Bad Request') {
        super(message, 400);
    }
}

class UnauthorizedError extends CustomError {
    constructor(message = 'Unauthorized') {
        super(message, 401);
    }
}

class ForbiddenError extends CustomError {
    constructor(message = 'Forbidden') {
        super(message, 403);
    }
}

class NotFoundError extends CustomError {
    constructor(message = 'Not Found') {
        super(message, 404);
    }
}

class ConflictError extends CustomError {
    constructor(message = 'Conflict') {
        super(message, 409);
    }
}

class InternalServerError extends CustomError {
    constructor(message = 'Internal Server Error') {
        super(message, 500);
    }
}

class ValidationError extends CustomError {
    constructor(message = 'Validation Error') {
        super(message, 422);
    }
}

class DatabaseQueryError extends CustomError {
    constructor(message = 'Database Query Failed') {
        super(message, 500);
    }
}

module.exports = {
    CustomError,
    // BadRequestError,
    UnauthorizedError,
    ForbiddenError,
    NotFoundError,
    // ConflictError,
    InternalServerError,
    // ValidationError,
    DatabaseQueryError,
};
