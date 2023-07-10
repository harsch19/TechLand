const { UserService } = require("../service/userService");
const { ErrorResponse } = require("../utility/response");

const service = new UserService()

exports.Signup = async (event) => {
    return service.CreateUser(event);
};

exports.Login = async (event) => {
    return service.UserLogin(event);
};

exports.Portfolio = async (event) => {
    const httpMethod = event.requestContext.http.method.toLowerCase();
    if (httpMethod === "post") {
        return service.CreatePortfolio(event);
    } else if (httpMethod === "get") {
        return service.GetPortfolio(event);
    } else if (httpMethod === "put") {
        return service.UpdatePortfolio(event);
    } else {
        return ErrorResponse(404, "requested method is not supported!");
    }
};
