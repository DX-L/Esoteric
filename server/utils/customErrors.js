// utils/CustomErrors.js

// 注释掉的部分用return可以节省一定性能-
class CustomError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        Error.captureStackTrace(this, this.constructor);
    }
}
/**
 * 错误请求类
 * 当客户端发送的请求参数缺失或格式不正确、请求体解析错误、无效的查询参数等情况时抛出此错误。
 * HTTP 状态码: 400
 */
class BadRequestError extends CustomError {
    constructor(message = 'Bad Request') {
        super(message, 400);
    }
}

/**
 * 未授权错误类
 * 当用户尝试执行需要验证身份的操作，但未提供有效的身份验证凭据时抛出此错误。
 * HTTP 状态码: 401
 */
class UnauthorizedError extends CustomError {
    constructor(message = 'Unauthorized') {
        super(message, 401);
    }
}

/**
 * 禁止错误类
 * 当用户的身份已验证，但尝试执行其没有权限的操作时抛出此错误。
 * HTTP 状态码: 403
 */
class ForbiddenError extends CustomError {
    constructor(message = 'Forbidden') {
        super(message, 403);
    }
}

/**
 * 未找到错误类
 * 当请求的资源不存在时抛出此错误。
 * HTTP 状态码: 404
 */
class NotFoundError extends CustomError {
    constructor(message = 'Not Found') {
        super(message, 404);
    }
}

/**
 * 冲突错误类
 * 当请求的操作与服务器的当前状态冲突时抛出此错误。
 * 常见于创建已存在的唯一资源（如重复的用户名或邮箱）。
 * HTTP 状态码: 409
 */
class ConflictError extends CustomError {
    constructor(message = 'Conflict') {
        super(message, 409);
    }
}

/**
 * 内部服务器错误类
 * 当服务器遇到意外情况，无法完成请求时抛出此错误。
 * 通常表明服务器端出现问题，如代码错误或资源耗尽。
 * HTTP 状态码: 500
 */
class InternalServerError extends CustomError {
    constructor(message = 'Internal Server Error') {
        super(message, 500);
    }
}

/**
 * 验证错误类
 * 当请求的数据不符合验证规则时抛出此错误。
 * 例如，表单数据格式不正确（如邮箱格式错误，密码太短等）。
 * HTTP 状态码: 422
 */
class ValidationError extends CustomError {
    constructor(message = 'Validation Error') {
        super(message, 422);
    }
}

/**
 * 数据库查询错误类
 * 当执行数据库查询时出现错误且无法成功执行查询操作时抛出此错误。
 * 例如，SQL查询语法错误或查询超时。
 * HTTP 状态码: 500
 */
class DatabaseQueryError extends CustomError {
    constructor(message = 'Database Query Failed') {
        super(message, 500);
    }
}

/**
 * 数据生成失败错误类
 * 当服务器在生成或处理数据时失败，无法成功生成所需数据时抛出此错误。
 * 例如，数据处理过程中发生错误或数据生成逻辑失败。
 * HTTP 状态码: 500
 */
class DataGenerationError extends CustomError {
    constructor(message = 'Data Generation Failed') {
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
    DataGenerationError,
};
