"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMongoURI = void 0;
const constant_1 = require("./constant");
const getMongoURI = () => {
    return process.env.MONGO_URI_PROD || constant_1.CONSTANTS.MONGO_URI_DEV;
};
exports.getMongoURI = getMongoURI;
//# sourceMappingURL=util.js.map