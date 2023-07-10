//handle business logic

const { SuccessResponse, ErrorResponse } = require("../utility/response");

class UserService {
    constructor() {}

    // User creation and logic
    async CreateUser(event) {
        return SuccessResponse({ message: "response from Create User" });
    }

    async UserLogin(event) {
        return SuccessResponse({ message: "response from User login" });
    }

    // User portfolio
    async CreatePortfolio(event) {
        return SuccessResponse({ message: "response from create portfolio" });
    }

    async GetPortfolio(event) {
        return SuccessResponse({ message: "response from get portfolio" });
    }

    async UpdatePortfolio(event) {
        return SuccessResponse({ message: "response from update portfolio" });
    }
}

module.exports = { UserService };
