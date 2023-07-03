import { APIGatewayProxyEventV2 } from "aws-lambda";
import { UserService } from "../service/userService";
import { ErrorResponse } from "../utility/response";

const service = new UserService();

export const Signup = async (event: APIGatewayProxyEventV2) => {
    return service.CreateUser(event);
};

export const Login = async (event: APIGatewayProxyEventV2) => {
    return service.UserLogin(event);
};

export const Portfolio = async (event: APIGatewayProxyEventV2) => {
    const httpMethod = event.requestContext.http.method.toLowerCase();
    if (httpMethod === "post") {
        return service.CreatePortfolio(event);
    }
    else if (httpMethod === "get") {
        return service.GetPortfolio(event);
    }
    else if (httpMethod === "put") {
        return service.UpdatePortfolio(event);
    }
    else {
        return ErrorResponse(404, "requested method is not supported!");
    }
};