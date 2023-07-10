var formatResponse = function (statusCode, message, data) {
    if (data) {
        return {
            statusCode: statusCode,
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                message: message,
                data: data,
            }),
        };
    }
    else {
        return {
            statusCode: statusCode,
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                message: message,
            }),
        };
    }
};
exports.SuccessResponse = function (data) {
    return formatResponse(200, "success", data);
};
exports.ErrorResponse = function (code, error) {
    if (code === void 0) { code = 1000; }
    if (Array.isArray(error)) {
        var errorObject = error[0].constraints;
        var errorMessage = errorObject[Object.keys(errorObject)[0]] || "Error Occurred";
        return formatResponse(code, errorMessage, errorMessage);
    }
    return formatResponse(code, "".concat(error), error);
};
//# sourceMappingURL=response.js.map