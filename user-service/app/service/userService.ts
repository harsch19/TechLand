//handle business logic

import { APIGatewayProxyEventV2 } from "aws-lambda";
import { SuccessResponse, ErrorResponse } from "../utility/response";

export class UserService {
    constructor() {}

    //user creation and logic
    async CreateUser(event: APIGatewayProxyEventV2) {
        return SuccessResponse({message: "response from Create User"});
    }

    async UserLogin(event: APIGatewayProxyEventV2) {
        return SuccessResponse({message: "response from User login"});
    }

    //user portfolio
    async CreatePortfolio (event: APIGatewayProxyEventV2) {
        return SuccessResponse({message: "response from create portfolio"});
    }
    async GetPortfolio (event: APIGatewayProxyEventV2) {
        return SuccessResponse({message: "response from get portfolio"});
    }
    async UpdatePortfolio (event: APIGatewayProxyEventV2) {
        return SuccessResponse({message: "response from update portfolio"});
    }
};